import posts from "../models/posts_buy.js";
import users from "../models/users.js";


//CREATE POST
export const createPost = async (req, res)=>{

//try block handles error
    try{
        const {emailid, itemName, itemDescription, price, contactInformation,picturepath} = req.body
        const user=await users.findOne({emailid:emailid});
        const pictureUrl = picturepath;
        //console.log(req.body);
//if invalid user
        if(!user){
            return res.status(404).json({message:"User not found!"})
        }

//all fields are required
        if (!emailid || !itemName || !itemDescription || price === undefined || !contactInformation) {
            return res.status(400).json({ message: "Please fill all fields" });
          }
        
        const newPost = new posts({
            emailid,
            picturepath:pictureUrl,
            itemName,
            itemDescription,
            price,
            contactInformation,
            comments:[]
        })
        newPost.postid=newPost._id.toString();
        await newPost.save(); 

        return res.status(201).json(newPost);
    }
    //to catch any error during the post creation
    catch(error){
        return res.status(500).json({message:"Error encountered! Failed to create post ", error});
    }
};  


//READ/RETRIEVE POSTS
export const readFeed = async(req,res)=>{
    try{
        const post = await posts.find();
        return res.status(200).json(post);
    }

    catch(error){
        return res.status(404).json({message:"Error encountered! ", error})
    }
};

//READ Specific user posts
export const readSpec = async(req,res)=>{
    try{
        const id = req.params.postid;
        const post = await posts.find({id:_id});
        return res.status(200).json(post);
    }

    catch(error){
        return res.status(404).json({message:"Error encountered! ", error})
    }
};


//UPDATE POSTS
export const update=async(req,res)=>{
    try{
        const id = req.params.postid;
        const { username , comment} = req.body;
        const newComm = { username , comment};

        const post = await posts.findById(id)
        const updated = await posts.findOneAndUpdate(
            {_id:id},
            //push the newcomment in the comments array
            { $push: { comments: newComm } }, 
            {new:true}
        )

        return res.status(200).json(updated);
    }

    catch{error}{
       return res.status(404).json("Error updating the post: " , error);
    }
};


//DELETE POST
export const deletePost = async(req,resp)=>{
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
};