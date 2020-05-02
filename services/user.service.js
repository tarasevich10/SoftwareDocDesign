import UserModel from "../models/user.js";
import {generateRandId} from "../utils.js";

export default class UserService {
    static fromCSVtoEntity(csvAgent) {
        const values = csvAgent.split(",");

        return {
            first_name: values[0],
            last_name: values[1],
            country: values[2],
            start_date: values[3],
            email: values[4],
        };
    }
    static loadFileAndUploadToDB(firstIndex, lastIndex) {
        FileService.getAgents(firstIndex, lastIndex).then((agents) => {
            const agentService = typedi.Container.get(UserService);

            agents.forEach((a) => {
                const agent = UserService.fromCSVtoEntity(a);
                agentService.create(agent);
            });
        });
    }
    async getAll() {
        return UserModel.findAll({
            order: [["id", "DESC"]],
        });
    }

    async create(user) {
        const newUser = {
            id: generateRandId(),
            ...user,
        };

        return UserModel.create(newUser);
    }

    async update(userId, newValues) {
        return UserModel.update(newValues, {
            where: {id: userId},
        });
    }

    async delete(userId) {
        await UserModel.destroy({
            where: { id: userId },
        });
    }
}
