import{ Router } from "express";
import { asynFunction } from "../utils/asynHandler.js";


const router = Router();

router.route("/myUser").post(asynFunction);

export default router;