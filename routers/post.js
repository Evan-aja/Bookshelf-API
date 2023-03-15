import addBooksHandler from "../lib/handlers/add.js";

const post = [
    {
        path: "/books",
        method: "POST",
        handler: addBooksHandler,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    },
];

export default post;
