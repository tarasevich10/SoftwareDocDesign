import SongModel from "../models/song.js";
import { generateRandId } from "../utils.js";

export default class SongService {
    async getAll() {
        const foundSongs = await SongModel.findAll({
            order: [["id", "DESC"]],
        });

        return foundSongs;
    }

    async create(song) {
        const newSong = {
            id: generateRandId(),
            ...song,
        };

        const songRecord = await SongModel.create(newSong);

        return songRecord;
    }

    async update(songId, newValues) {
        const updatedSong = await SongModel.update(newValues, {
            where: { id: songId },
        });

        return updatedSong;
    }

    async delete(songId) {
        await SongModel.destroy({
            where: { id: songId },
        });
    }
}