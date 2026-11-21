import express from "express"; 
import { login, signup, updateProfile } from "../Controller/userController.js";
import { protectRoute,checkAuth} from "../middleware/Auth.js";
const userRouter =express.Router(); 
userRouter.post("/signup", signup); 
userRouter.post("/login", login); 
userRouter.put("/update-profile", protectRoute,updateProfile); 
userRouter.get("/check", protectRoute, checkAuth); 

export default userRouter;