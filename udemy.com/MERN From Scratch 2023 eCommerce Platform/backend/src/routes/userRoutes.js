import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
} from "../controllers/userController.js";

import { 
    protect, 
    admin 
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/api/users/")
    .post(registerUser)
    .get(protect, admin, getUsers);
router.post("/api/users/logout", logoutUser);
router.post("/api/users/auth", authUser);
router.route("/api/users/profile")
    .all(protect) // apply middleware for all paths
    .get(getUserProfile)
    .put(updateUserProfile);
router.route("/api/users/:id")
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

export default router;