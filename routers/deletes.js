import deleteBookByIdHandler from "../lib/handlers/delete.js";

const deletes = [
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: deleteBookByIdHandler,
        options: {
            cors: {
                origin: ["*"],
            },
        },
    },
];

export default deletes;
