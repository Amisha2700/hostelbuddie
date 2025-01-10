import posts from "../models/posts_lost_found.js";
import users from "../models/users.js";

//CREATE POST
export const makePost=async(req,resp)=>{
    try{
        const {username,sid,itemName,itemDescription,contactInformation, picturepath,caption}=req.body;
        const pictureUrl = picturepath; //the cloudinary url of the image uploaded
        const user=await users.findOne({sid:sid});
        if(!user){
            return resp.status(404).json({message:"User not found!"});
        }

        const newpost=new posts({
            sid:user.sid,
            username,
            picturepath:pictureUrl, //cloudinary url saved to post
            itemName,
            itemDescription,
            contactInformation,
            comments:[]
        });
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
export const readFeed=async(req,resp)=>{
    try{
        const post=await posts.find();
        resp.status(200).json(post);
    }
    catch(error){
        resp.status(404).json(error.message);
    }
};

//specific user
export const readSpecific=async(req,resp)=>{
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
export const update=async(req,resp)=>{
    try{
        const id=req.params.postid;
        const {sid,username,comment}=req.body;
        const newcomment={sid, username, comment};
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
export const deletePost=async(req,resp)=>{
    try{
        const postid=req.params.postid;
        const result=await posts.findOne({_id:postid});
        if(!result){
            return resp.status(404).send("This post doesn't exist");
        }
        else{
            const deleted=await posts.deleteOne({_id:postid});
            if(deleted.deletedCount===1)
                return resp.status(200).send("Post has been deleted successfully!");
        }
    }
    catch(error){
        resp.status(500).send({"error":error.message});
    }
}

