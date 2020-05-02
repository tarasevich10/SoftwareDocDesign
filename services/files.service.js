import { readLinesFromFile } from "../utils.js";

export default class FileService {
    static async getAgents(firstIndex, lastIndex) {
        return readLinesFromFile(firstIndex, lastIndex);
    }
}