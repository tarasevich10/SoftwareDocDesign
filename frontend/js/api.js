const PATH = `/user`;

class Api {
    static async getAllUsers() {
        const response = await fetch(PATH);

        return await response.json();
    }

    static async addUser(user) {
        try {
            const response = await fetch(PATH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(user),
            });

            await response.text();
        } catch (err) {
            console.log(err);

            alert("Alas, something went wrong. Please, try again.");
        }
    }

    static async updateUser(id, user) {
        try {
            const response = await fetch(`${PATH}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(user),
            });

            await response.text();
        } catch (err) {
            console.log(err);

            alert("Please, check the input params");
        }
    }

    static async removeUser(id) {
        const response = await fetch(`${PATH}/${id}`, {
            method: "DELETE",
        });

        await response.text();
    }
}
