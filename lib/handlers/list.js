import books from "../books.js";

const getAllBooksHandler = (request, h) => {
    const { reading, finished, name } = request.query;

    let booksList = books;

    if (reading !== undefined && finished !== undefined && name !== undefined) {
        booksList = books.filter(
            (n) =>
                n.reading === (reading == 1) &&
                n.finished === (finished == 1) &&
                n.name.toLowerCase().includes(name.toLowerCase())
        );
    } else if (reading !== undefined) {
        booksList = books.filter((n) => n.reading === (reading == 1));
    } else if (finished !== undefined) {
        booksList = books.filter((n) => n.finished === (finished == 1));
    } else if (name !== undefined) {
        booksList = books.filter((n) =>
            n.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    const response = h.response({
        status: "success",
        data: {
            books: booksList.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });

    response.code(200);
    return response;
};

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
