import editBookByIdHandler from "../lib/handlers/edit.js";

const put = [
    {
        path: "/books/{bookId}",
        method: "PUT",
        handler: editBookByIdHandler,
        options: {
            cors: {
                origin: ["*"],
            },
        },
    },
];

export default put;
