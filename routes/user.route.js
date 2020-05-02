import express from "express";
import typedi from "typedi";
import UserService from "../services/user.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
    try {
        const userService = Container.get(UserService);

        const users  = await userService.getAll();

        return res.json(users);
    } catch (e) {
        next(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const userService = Container.get(UserService);

        const user = req.body;

        await userService.create(user);

        return res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const userService = Container.get(UserService);

        const id = req.params.id;

        const updateValues = req.body;

        await userService.update(id, updateValues);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const userService = Container.get(UserService);

        const userId = req.params.id;

        await userService.delete(userId);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

export default router;