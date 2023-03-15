import books from "../books.js";

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
    } = request.payload;
    const updatedAt = new Date().toISOString();
    try {
        if (
            typeof name !== "string" ||
            name.length === 0 ||
            name === undefined
        ) {
            throw new Error("Gagal memperbarui buku. Mohon isi nama buku");
        }
        if (
            typeof year !== "number" ||
            year.length === 0 ||
            year === undefined
        ) {
            throw new Error("Gagal memperbarui buku. Tahun harus berupa angka");
        }
        if (
            typeof author !== "string" ||
            author.length === 0 ||
            author === undefined
        ) {
            throw new Error("Gagal memperbarui buku. Mohon isi nama penulis");
        }
        if (
            typeof summary !== "string" ||
            summary.length === 0 ||
            summary === undefined
        ) {
            throw new Error("Gagal memperbarui buku. Mohon isi ringkasan buku");
        }
        if (
            typeof publisher !== "string" ||
            publisher.length === 0 ||
            publisher === undefined
        ) {
            throw new Error("Gagal memperbarui buku. Mohon isi nama penerbit");
        }
        if (
            typeof pageCount !== "number" ||
            pageCount.length === 0 ||
            pageCount === undefined
        ) {
            throw new Error(
                "Gagal memperbarui buku. Jumlah halaman harus berupa angka"
            );
        }
        if (
            typeof readPage !== "number" ||
            readPage.length === 0 ||
            readPage === undefined
        ) {
            throw new Error(
                "Gagal memperbarui buku. Jumlah halaman yang sudah dibaca harus berupa angka"
            );
        }
        if (typeof reading !== "boolean" || reading === undefined) {
            throw new Error(
                "Gagal memperbarui buku. Mohon isi status baca buku"
            );
        }
        if (typeof finished !== "boolean" || finished === undefined) {
            throw new Error(
                "Gagal memperbarui buku. Mohon isi status baca buku"
            );
        }
        if (readPage > pageCount || readPage < 0 || pageCount === undefined) {
            throw new Error(
                "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
            );
        }
    } catch (error) {
        const response = h.response({
            status: "fail",
            message: error.message,
        });
        response.code(500);
        return response;
    }
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            updatedAt,
        };
        const response = h.response({
            status: "success",
            message: "Buku berhasil diperbarui",
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;
};

export default editBookByIdHandler;
