import { nanoid } from "nanoid";
import books from "../books.js";

const addBooksHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;
    try {
        if (
            typeof name !== "string" ||
            name.length === 0 ||
            name === undefined
        ) {
            throw new Error("Gagal menambahkan buku. Mohon isi nama buku");
        }
        if (
            typeof year !== "number" ||
            year.length === 0 ||
            year === undefined
        ) {
            throw new Error("Gagal menambahkan buku. Tahun harus berupa angka");
        }
        if (
            typeof author !== "string" ||
            author.length === 0 ||
            author === undefined
        ) {
            throw new Error("Gagal menambahkan buku. Mohon isi nama penulis");
        }
        if (
            typeof summary !== "string" ||
            summary.length === 0 ||
            summary === undefined
        ) {
            throw new Error("Gagal menambahkan buku. Mohon isi ringkasan buku");
        }
        if (
            typeof publisher !== "string" ||
            publisher.length === 0 ||
            publisher === undefined
        ) {
            throw new Error("Gagal menambahkan buku. Mohon isi nama penerbit");
        }
        if (
            typeof pageCount !== "number" ||
            pageCount.length === 0 ||
            pageCount === undefined
        ) {
            throw new Error(
                "Gagal menambahkan buku. Jumlah halaman harus berupa angka"
            );
        }
        if (
            typeof readPage !== "number" ||
            readPage.length === 0 ||
            readPage === undefined
        ) {
            throw new Error(
                "Gagal menambahkan buku. Jumlah halaman yang sudah dibaca harus berupa angka"
            );
        }
        if (typeof reading !== "boolean" || reading === undefined) {
            throw new Error(
                "Gagal menambahkan buku. Mohon isi status baca buku"
            );
        }
        if (readPage > pageCount || readPage < 0 || pageCount === undefined) {
            throw new Error(
                "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
            );
        }
    } catch (error) {
        const response = h.response({
            status: "fail",
            message: error.message,
        });
        response.code(400);
        return response;
    }
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    let finished = false;
    if (readPage === pageCount) {
        finished = true;
    }
    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };

    books.push(newBook);
    const Success = books.filter((book) => book.id === id).length > 0;
    if (Success) {
        const response = h.response({
            status: "success",
            message: "Buku berhasil ditambahkan",
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "Buku gagal ditambahkan",
    });
    response.code(500);
    return response;
};

// {
//     "name": string,
//     "year": number,
//     "author": string,
//     "summary": string,
//     "publisher": string,
//     "pageCount": number,
//     "readPage": number,
//     "reading": boolean
// }

export default addBooksHandler;
