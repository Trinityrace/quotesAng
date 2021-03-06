import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  //selector: 'app-root'
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      "Theres never any blood in Star Wars movies because all the lasers and lightsabers would cauterize the wounds instantly.",
      "By MoonWlker",
      new Date(),
      "author"
    ),
    new Quote(
      2,
      "There are many men named Hunter, but oddly no women named gatherer.",
      "By Trinity",
      new Date(2020, 1, 12),
      "author"
    ),
    new Quote(
      3,
      "Turbulence is the pot hole of the sky. ",
      "By Trinity",
      new Date(2020, 1, 1),
      "author"
    ),
    new Quote(
      4,
      "Some innocent pets have given unconditional love to Serial killers.",
      "By Chun Li",
      new Date(2019, 12, 25),
      "author"
    ),
    new Quote(
      5,
      "Blinds are what keep you from being blinded in the morning.",
      "By Myself",
      new Date(2013, 2, 2),
      "author"
    ),
    new Quote(
      6,
      "Rappers who rap fast would have a huge advantage in the Harry Potter universe when casting spells.",
      "By MeGenius",
      new Date(2020, 1, 13),
      "author"
    ),
    new Quote(
      7,
      "You hold shift to run because running is upprcase walking.",
      "By VidGamer",
      new Date(2002, 12, 29),
      "author"
    ),
    new Quote(
      8,
      "Some vampires might get addicted to alcoholics.",
      "By Trevor Ngugi",
      new Date(2020, 12, 15),
      "author"
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  // goalComplete(boolean){
  //   this.isComplete.emit(complete);
  // }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
