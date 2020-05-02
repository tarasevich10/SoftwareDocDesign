import express from "express";
import typedi from "typedi";
import PlaylistService from "../services/playlist.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
    try {
        const playlistService = Container.get(PlaylistService);

        const playlists = await playlistService.getAll();

        return res.json(playlists);
    } catch (e) {
        next(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const playlistService = Container.get(PlaylistService);

        const playlist = req.body;

        await playlistService.create(playlist);

        return res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const playlistService = Container.get(PlaylistService);

        const id = req.params.id;

        const updateValues = req.body;

        await playlistService.update(id, updateValues);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const playlistService = Container.get(PlaylistService);

        const playlistId = req.params.id;

        await playlistService.delete(playlistId);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

export default router;