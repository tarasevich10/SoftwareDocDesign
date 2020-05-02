import express from "express";
import typedi from "typedi";
import SongService from "../services/song.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
    try {
        const songService = Container.get(SongService);

        const songs = await songService.getAll();

        return res.json(songs);
    } catch (e) {
        next(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const songService = Container.get(SongService);

        const song = req.body;

        await songService.create(song);

        return res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const songService = Container.get(SongService);

        const id = req.params.id;

        const updateValues = req.body;

        await songService.update(id, updateValues);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const songService = Container.get(SongService);

        const songId = req.params.id;

        await songService.delete(songId);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

export default router;