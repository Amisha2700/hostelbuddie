import jwt from "jsonwebtoken";
export const verify = async (req, resp, next) => {
    try {
        const bearerHeader = req.header("Authorization");
        if (!bearerHeader) {
            return resp.status(403).json({ message: "Access Denied" });
        }
        else {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
            const ifVerified=jwt.verify(token,process.env.JWT_SECRET);
            req.user=ifVerified;
            next();
        }
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
};