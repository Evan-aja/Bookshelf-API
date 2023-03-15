import list from "../lib/handlers/list.js";
const get = [
    {
        method: "GET",
        path: "/books",
        handler: list.getAllBooksHandler,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: list.getBookByIdHandler,
    },
];
export default get;
