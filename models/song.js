import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Song = sequelize.define("songs", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    artist: { type: DataTypes.TEXT },
    name: { type: DataTypes.TEXT },
    duration: { type: DataTypes.INTEGER },
});

export default Song;

