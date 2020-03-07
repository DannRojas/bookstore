import { BooksInterface } from './../../models/booksInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public books:BooksInterface;

  public booksList:BooksInterface[];

  constructor() { }

  ngOnInit(): void {
    this.books = {
      titulo: "Clean code",
      descripcion: "un libro que impulsa las buenas prácticas y el código limpio",
      portada: "https://images-na.ssl-images-amazon.com/images/I/51%2BNUIgEc9L._SX383_BO1,204,203,200_.jpg",
      precio: "44",
      link_amazon: "http://tratandodeentenderlo.blogspot.com/2011/01/clean-code.html",
      oferta: false
    }
    this.getListBooks();   
  }

  getListBooks(){
    this.booksList = [this.books,this.books,this.books];
    console.log(this.booksList);
  }

}
