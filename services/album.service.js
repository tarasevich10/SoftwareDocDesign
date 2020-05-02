import AlbumModel from "../models/album.js";
import { generateRandId } from "../utils.js";

export default class AlbumService {
    async getAll() {
        const foundAlbums = await AlbumModel.findAll({
            order: [["id", "DESC"]],
        });

        return foundAlbums;
    }

    async create(album) {
        const newAlbum = {
            id: generateRandId(),
            ...album,
        };

        const albumRecord = await AlbumModel.create(newAlbum);

        return albumRecord;
    }

    async update(albumId, newValues) {
        const updatedAlbum = await AlbumModel.update(newValues, {
            where: { id: albumId },
        });

        return updatedAlbum;
    }

    async delete(albumId) {
        await AlbumModel.destroy({
            where: { id: albumId },
        });
    }
}