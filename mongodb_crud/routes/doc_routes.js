const express = require('express');
const router = express.Router();
const Doc = require('../models/docs');
const multer = require('multer');
const fs = require('fs')
const moment = require('moment')

// image upload
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads');
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },        
})
var upload = multer({
    storage: storage,
}).single('Thumbnail');

router.get("/", (req,res)=>{
    Doc.find({}).then((docs) => {
        res.render("doc_list", {
            title: "ZioDocs",
            moment: moment,
            docs:docs,
        })        
    }).catch((err) => {
        res.json({message:err.message});
    });
});

router.get("/add", (req,res)=>{
    res.render("doc_add",{title:"Add Docs"});
});
router.get('/view/:id', (req,res)=>{
    let id = req.params.id;
    Doc.findById(id).then((doc) => {
        if(doc==null){
            res.redirect('/');
        }else{
            res.render('doc_view',{
                title:'View Doc',
                doc:doc,
            })
        }
    }).catch((err) => {
        res.redirect('/');
    });
});
router.get('/edit/:id', (req,res)=>{
    let id = req.params.id;
    Doc.findById(id).then((doc) => {
        if(doc==null){
            res.redirect('/');
        }else{
            res.render('doc_edit',{
                title:'Edit Doc',
                doc:doc,
            })
        }
    }).catch((err) => {
        res.redirect('/');
    });
});

router.post('/add', upload, (req,res)=>{
    const doc = new Doc({
        Subject: req.body.Subject,
        LastStatus: req.body.LastStatus,
        WriteUserName: req.body.WriteUserName,
        BodyDesc: req.body.BodyDesc,
        Thumbnail: req.file.filename,
    });
    doc.save().then(()=>{
        req.session.message = {
            type: 'success',
            message: '새로운 문서가 등록되었습니다.'
        };
        res.redirect('/');
    }).catch((err)=>{
        res.json({type:'danger', message: err.message})
    })
})
router.post('/update/:id', upload, (req,res)=>{
    let id = req.params.id;
    let new_thumbnail = '';
    if(req.file){
        new_thumbnail = req.file.filename;
        try{
            fs.unlinkSync('./uploads/'+req.body.old_thumbnail)
        }catch(err){
            console.log(err);
        }
    }else{
        new_thumbnail = req.body.old_thumbnail;
    }
    Doc.findByIdAndUpdate(id,{
        Subject: req.body.Subject,
        LastStatus: req.body.LastStatus,
        WriteUserName: req.body.WriteUserName,
        BodyDesc: req.body.BodyDesc,
        Thumbnail: new_thumbnail,
    }).then(()=>{
        req.session.message = {
            type: 'success',
            message: '성공적으로 문서가 수정되었습니다.'
        };
        res.redirect('/');
    }).catch((err)=>{
        res.json({type:'danger', message: err.message})
    })
});
router.get('/delete/:id', (req,res)=>{
    let id = req.params.id;
    Doc.findByIdAndRemove(id).then((result) => {
        if(result.photo != ''){
            try{
                fs.unlinkSync('./uploads/'+result.photo);
            } catch(err){
                console.log(err);
            }
        }
        req.session.message = {
            type: 'success',
            message: '성공적으로 문서가 삭제되었습니다.'
        };
        res.redirect('/');
    }).catch((err) => {
        res.json({message:err.message});
    });
})

module.exports = router;