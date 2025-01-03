import posts from "../models/posts_buy_sell.js";
import users from "../models/users.js";


//CREATE POST
export const createPost = async (req, res)=>{

//try block handles error
    try{
        const {userid, itemName, itemDescription, price, contactInformation, comments} = req.body
        const user=await users.findOne({sid:sid});

//if invalid user
        if(!user){
            return res.status(404).json({message:"User not found!"})
        }

//all fields are required
        if (!userid || !itemName || !itemDescription || price === undefined || !contactInformation) {
            return res.status(400).json({ message: "Please fill all fields" });
          }
        
        const newPost = new posts({
            userid:user._id,
            username,
            itemName,
            itemDescription,
            price,
            contactInformation,
            comments:[]
        })

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
        const post = await posts.findOne();
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
        const {userid , username , comment} = req.body;
        const newComm = {userid , username , comment};

        const post = await posts.findById(id)
        const updated = await posts.findOneandUpdate(
            {_id:id},
            //push the newcomment in the comments array
            { $push: { comments: newcomment } }, 
            {new:true}
        )

        return res.status(200).json(updated);
    }

    catch{error}{
       return res.status(404).json("Error updating the post: " , error);
    }
};


//DELETE POST
export const deletePost = async(req,res)=>{
    try{
        const id = posts.params.id;

        const post = await posts.findById(id);

        if(!post){
            return res.status(404).json("Post not found! ", error);
        }
        else{
            const to_delete = await posts.deleteOne({_id:postid});

            if(to_delete.deletedCount === 1){
                return res.status(200).send("Post deleted successfully!")
            }
        }
    }

    catch{error}{
        return res.status(404).json("Error deleting the post: " , error);
    }
};