import list from "../lib/handlers/list.js";
const get = [
    {
        method: "GET",
        path: "/books",
        handler: list.getAllBooksHandler,
        options: {
            cors: {
                origin: ["*"],
            },
        },
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: list.getBookByIdHandler,
        options: {
            cors: {
                origin: ["*"],
            },
        },
    },
];
export default get;
