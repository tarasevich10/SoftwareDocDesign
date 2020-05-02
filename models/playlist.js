import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Playlist = sequelize.define("playlists", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: { type: DataTypes.TEXT },
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.INTEGER },
    song_id: { type: DataTypes.INTEGER },
    album_id: { type: DataTypes.INTEGER },
    user_id: {type : DataTypes.INTEGER },
});

export default Playlist;