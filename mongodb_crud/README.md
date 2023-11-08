Server Engine :-
----------------------------------------------------------------------------
1. Node JS (Backend)

Database :-
----------------------------------------------------------------------------
1.  MongoDB (Database)

Packages/Modules :-
----------------------------------------------------------------------------
1. Express JS (Framework Based on NodeJS)
2. Mongoose (Object Data Modeling (ODM) library)
3. EJS (Embedded JavaScript Templating Engine)
4. Multer (Image Uploading)
5. Express Session (Strong Session Messages)
6. Dotenv (Environment Variables)
7. Nodemon (Monitoring Server)

Frontend Library :-
----------------------------------------------------------------------------
1. Bootstrap 5 (Designing)
2. DataTable (Pagination, Sorting etc.)
3. Fontawesome (Icons)

Database Modeling :-
----------------------------------------------------------------------------
1. DB명: ZioDocs
2. Collections
    1) docs (Embedded document)
    2) files (Linked document)
3. docs collection
```
{
  "_id" : ObjectId("506ebba74c935cb364575e95"),
  "Subject" : "문서제목입니다.",
  "LastStatus" : "상신/승인/반려/보류",
  "WriteUserName" : "작성자명",
  "RegDate" : "작성일자",
  "CntFiles" : 0,
  "Thumbnail" : "썸네일이미지명", 
  "files" : [{ 
    "fId" : "606exdefa74c935cb364575e95", 
    "FileName" : "파일명", 
    "Thumbnail" : "썸네일",
    "FileSize" : "Byte단위"
  },{ 
    "fId" : "606exdefa74c935cb364575e96", 
    "FileName" : "파일명", 
    "Thumbnail" : "썸네일",
    "FileSize" : "Byte단위"
  }]
}
```
4. files collection
```
{
  "_id" : ObjectId("606exdefa74c935cb364575e95"),
  "FileName" : "파일명", 
  "Thumbnail" : "썸네일",
  "FileSize" : "Byte단위",
  "SvrNo" : "존재서버번호",
  "Path" : "경로",
}
```
