import books from "../books.js";

const getAllBooksHandler = () => ({
    status: "success",
    data: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    })),
});

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const book = books.filter((n) => n.id === bookId)[0];
    if (book !== undefined) {
        return {
            status: "success",
            data: {
                book,
            },
        };
    }
    const response = h.response({
        status: "fail",
        message: "Buku tidak ditemukan",
    });
    response.code(404);
    return response;
};

export default { getAllBooksHandler, getBookByIdHandler };
