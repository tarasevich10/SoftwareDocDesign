import express from "express";

import FileService from "../services/files.service.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const fileContent = await FileService.getAgents(0, 1000);

        return res.json(fileContent);
    } catch (e) {
        next(e);
    }
});

export default router;