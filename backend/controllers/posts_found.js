import posts from "../models/posts_found.js";
import users from "../models/users.js";
import express from "express"
const app=express();
app.use(express.json())
//CREATE POST
export const makeFoundPost=async(req,resp)=>{
    try{
        const {emailid,itemName,itemDescription,contactInformation,picturepath}=req.body;
        const pictureUrl = picturepath; //the cloudinary url of the image uploaded
        const user=await users.findOne({emailid:emailid});
        //console.log(req.body.itemName);
        if(!user){
            return resp.status(404).json({message:"User not found!"});
        }
        
        const newpost=new posts({
            emailid,
           picturepath:pictureUrl, //cloudinary url saved to post
            itemName,
            itemDescription,
            contactInformation,
            comments:[]
        });
        newpost.postid=newpost._id.toString();
        //post saved to mongodb
        await newpost.save();
        return resp.status(201).json(newpost);
    }
    catch(error){
        return resp.status(500).json({error:error.message});
    }
};

//READ POSTS
//feed
export const readFoundFeed=async(req,resp)=>{
    try{
        const post=await posts.find();
        resp.status(200).json(post);
        //console.log(post);
    }
    catch(error){
        resp.status(404).json(error.message);
    }
};

//specific user
export const readFoundSpecific=async(req,resp)=>{
    try{
        const id=req.params.postid;
        const post=await posts.find({_id:id});
        resp.status(200).json(post);
    }
    catch(error){
        resp.status(404).json(error.message);
    }
};

//UPDATE POSTS
export const updateFound=async(req,resp)=>{
    try{
        const id=req.params.postid;
        const {username,comment}=req.body;
        const newcomment={ username, comment};
        const post=await posts.findById(id);
        //posts.comments.push(newcomment);
        const updated=await posts.findOneAndUpdate(
            {_id:id},
            { $push: { comments: newcomment } },
            {new:true}
        );
        resp.status(200).json(updated);
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
};

//DELETION ONCE MARKED FOUND
export const deleteFoundPost=async(req,resp)=>{
    try{
        const postid=req.params.postid;
        const email_local=req.body.emailid;
        const result=await posts.findOne({_id:postid});
        if(!result){
            return resp.status(404).send("This post doesn't exist");
        }
        else{
            console.log(result);
            const email_actual=result.emailid;
            console.log(email_actual);
            console.log(email_local);
            if(email_actual!==email_local)
                return resp.status(403).send("You didn't create this post! Can't delete");
            const deleted=await posts.deleteOne({_id:postid});
            if(deleted.deletedCount===1)
                return resp.status(200).send("Post has been deleted successfully!");
        }
    }
    catch(error){
        resp.status(500).send({"error":error.message});
    }
}


