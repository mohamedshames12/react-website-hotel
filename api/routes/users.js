import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res , next) => {
//     res.send("hello user, your are logged in!");
// })

// router.get("/checkuser/:id", verifyUser, (req, res , next) => {
//     res.send("hello user, your are logged in and can delete your account!");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res , next) => {
//     res.send("hello admin, your are logged in and can delete all accounts!");
// })


// update
router.put("/:id", verifyUser, updateUser);
// delete 
router.delete("/:id",verifyUser, deleteUser);
// get 
router.get("/:id", verifyUser , getUser);
// get All
router.get("/", verifyAdmin , getUsers);
  

export default router