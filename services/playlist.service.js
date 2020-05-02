import PlaylistModel from "../models/playlist.js";
import { generateRandId } from "../utils.js";

export default class PlaylistService {
    async getAll() {
        const foundPlaylists = await PlaylistModel.findAll({
            order: [["id", "DESC"]],
        });

        return foundPlaylists;
    }

    async create(playlist) {
        const newPlaylist = {
            id: generateRandId(),
            ...playlist,
        };

        const playlistRecord = await PlaylistModel.create(newPlaylist);

        return playlistRecord;
    }

    async update(playlistId, newValues) {
        const updatedPlaylist = await PlaylistModel.update(newValues, {
            where: { id: playlistId },
        });

        return updatedPlaylist;
    }

    async delete(playlistId) {
        await PlaylistModel.destroy({
            where: { id: playlistId },
        });
    }
}