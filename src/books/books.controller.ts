import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    @Get()

    index(): BooksService{
        return new BooksService;
    }
}
