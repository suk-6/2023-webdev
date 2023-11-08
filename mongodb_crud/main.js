// imports
const express = require('express');
const mongoose = require('mongoose');
const Doc = require('./models/docs');
const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection;
db.on('error', (error)=>console.log(error));
db.once('open', ()=>console.log('Connected to the database!'));

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(
    session({
        secret: "my secret key",
        saveUninitialized: true,
        resave: false,
    })
)
app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

// 정적파일 서비스. 해당get요청 파일이 이 폴더에 존재하는지 검색
app.use(express.static("uploads")); // 127.0.0.1:3000/cat.jpg -> /uploads 안적어도 이 폴더에서 검색
app.use(express.static("assets"));

// set template engine
app.set("view engine", "ejs"); // 화면 엔진을 ejs로 설정한다. (기본폴더는 /views 이다)

// route prefix
app.use("/doc", require("./routes/doc_routes"));
app.get("/", (req,res)=>{
    // res.send('hello');
    res.redirect('/doc');
});

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
