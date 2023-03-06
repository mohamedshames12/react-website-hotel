import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// create
router.post("/:hotelid", verifyAdmin , createRoom);
// update
router.put("/:id", verifyAdmin, updateRoom);
// delete 
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
// get 
router.get("/:id", verifyAdmin , getRoom);
// get All
router.get("/", verifyAdmin , getRooms);
  

export default router