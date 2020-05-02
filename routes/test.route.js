import express from "express";

import FileService from "../services/files.service.js";
import UserService from "../services/user.service.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const fileContent = await FileService.getAgents(0, 20);

        const users = fileContent.map(line => UserService.fromCSVtoEntity(line));

        const userService = new UserService();

        users.forEach(user => {
            userService.create(user);
        });

        return res.json(fileContent);
    } catch (e) {
        next(e);
    }
});

export default router;