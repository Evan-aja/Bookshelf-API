import deleteBookByIdHandler from "../lib/handlers/delete.js";

const deletes = [
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: deleteBookByIdHandler,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    },
];

export default deletes;
