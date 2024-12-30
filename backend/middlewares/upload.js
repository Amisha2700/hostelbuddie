import multer from "multer";
export const uploadFile=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploaded");
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+"-"+file.originalname);
        },
    }),
}).single("picture");