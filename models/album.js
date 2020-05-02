import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Album = sequelize.define("albums", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: { type: DataTypes.TEXT },
    artist: { type: DataTypes.TEXT },
    duration: { type: DataTypes.INTEGER },
    song_id: { type: DataTypes.INTEGER },
});

export default Album;