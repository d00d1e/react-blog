import express from "express";

import {
  getPost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/:id", getPost);
postRouter.get("/", getAllPosts);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
