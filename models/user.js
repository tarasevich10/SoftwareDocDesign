import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    start_date : { type : DataTypes.DATE },
    email: { type: DataTypes.STRING },
});

export default User;

