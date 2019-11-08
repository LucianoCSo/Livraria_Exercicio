import { Controller, Get,
    Post,
    Put,
    Delete,
    Body,
    Param } from '@nestjs/common';
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
    index(@Param('id')id):Promise<IBooks>{
        return this.booksService.getBook(id);
    }

    @Post()
    Salvar(@Body() books : BooksService): Promise<IBooks>{
        return this.booksService.addBook(books);
    }

    @Delete(':id')
    delete(@Param('id')books: BooksService):Promise<IBooks>{
        return this.booksService.delete(books);
    }

}
