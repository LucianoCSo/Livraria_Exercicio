import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { IBooks } from './books.IBook'
import { resolve } from 'url';

@Injectable()
export class BooksService {
    books = BOOKS;

    getBooks(): Promise<any>{
        return new Promise(resolve => {
            resolve(this.books);
        });
    }

    delete(Id): Promise<any> {
        let id = Number(Id);
        return  new Promise(resolve => {
            const book = this.books.find(books => books.id === id);
            if(!book){
                throw new HttpException('O livro não existe.', 404);
            }
            resolve(book);
        });
    }

    getBook(bookId): Promise<any>{
        let id = Number(bookId);
        return new Promise(resolve =>{
            const book = this.books.find(book => book.id === id );
            if(!book){
                throw new HttpException('O livro não existe.', 404);
            }
            resolve (book);
        });
    }

    addBook(book): Promise <any>{
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }
}
