import deleteBookByIdHandler from "../lib/handlers/delete.js";

const deletes = [
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: deleteBookByIdHandler,
    },
];

export default deletes;
