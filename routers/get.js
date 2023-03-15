import list from "../lib/handlers/list.js";
const get = [
    {
        method: "GET",
        path: "/books",
        handler: list.getAllBooksHandler,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: list.getBookByIdHandler,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    },
];
export default get;
