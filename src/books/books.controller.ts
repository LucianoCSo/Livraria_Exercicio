import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { BOOKS } from '../mocks/books.mock';
import { IBooks } from './books.IBook';

@Controller('books')
export class BooksController {
    constructor(private readonly  booksService: BooksService){}

    @Get()
    async indexAll(): Promise<IBooks[]>{
        return this.booksService.getBooks();
    }

    @Get(':id')
    async index(@Param('id')bookId){
        const book = await this.booksService.getBook(bookId);
        return book;
    }

    @Post()
    Salvar(@Body() books : BooksService): Promise<IBooks>{
        return this.booksService.addBook(books);
    }

    @Delete()
    async delete(@Query() query){
        const book = await this.booksService.delete(query.bookId)
        return BOOKS;
    }

}
