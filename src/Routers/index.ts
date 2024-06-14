// routes/index.ts
const expresss = require("express");

import { Router } from "express";
const userRouter = require("./userRouter");
const articleRouter = require("./articleRouter");
const router = Router();

router.use(expresss.json());
router.use(userRouter);
router.use(articleRouter);
export default router;
