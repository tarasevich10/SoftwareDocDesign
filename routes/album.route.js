import express from "express";
import typedi from "typedi";
import AlbumService from "../services/album.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
    try {
        const albumService = Container.get(AlbumService);

        const albums = await albumService.getAll();

        return res.json(albums);
    } catch (e) {
        next(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const albumService = Container.get(AlbumService);

        const album = req.body;

        await albumService.create(album);

        return res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const albumService = Container.get(AlbumService);

        const id = req.params.id;

        const updateValues = req.body;

        await albumService.update(id, updateValues);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const albumService = Container.get(AlbumService);

        const albumId = req.params.id;

        await albumService.delete(albumId);

        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

export default router;