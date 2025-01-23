import posts from "../models/posts_sell.js";
import users from "../models/users.js";


//CREATE POST
export const createSellPost = async (req, res)=>{

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
export const readSellFeed = async(req,res)=>{
    try{
        const post = await posts.find();
        return res.status(200).json(post);
    }

    catch(error){
        return res.status(404).json({message:"Error encountered! ", error})
    }
};

//READ Specific user posts
export const readSellSpec = async(req,res)=>{
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
export const updateSell=async(req,res)=>{
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
export const deletePostSell = async(req,res)=>{
    try{
        const id = posts.params.id;

        const post = await posts.findById(id);

        if(!post){
            return res.status(404).json("Post not found! ", error);
        }
        else{
            const to_delete = await posts.deleteOne({_id:id});

            if(to_delete.deletedCount === 1){
                return res.status(200).send("Post deleted successfully!")
            }
        }
    }

    catch{error}{
        return res.status(404).json("Error deleting the post: " , error);
    }
};