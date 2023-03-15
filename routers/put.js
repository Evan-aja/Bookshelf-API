import editBookByIdHandler from "../lib/handlers/edit.js";

const put = [
    {
        path: "/books/{bookId}",
        method: "PUT",
        handler: editBookByIdHandler,
    },
];

export default put;
