let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"  You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it. "`,
    person: ` HARPER LEE`,
  },
  {
    quote: `" There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.  "`,
    person: ` ERNEST HEMINGWAY`,
  },
  {
    quote: `" I was never afraid of failure; for I would sooner fail than not be among the greatest.  "`,
    person: ` JOHN KEATS`,
  },
  {
    quote: `"  If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them. "`,
    person: ` HENRY DAVID THOREAU`,
  },
  {
    quote: `"  It is what you read when you don't have to that determines what you will be when you can't help it. "`,
    person: ` OSCAR WILDE`,
  },
  {
    quote: `" Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.  "`,
    person: `DALE CARNEGIE`,
  },
  {
    quote: `"  There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me. "`,
    person: ` JANE AUSTEN`,
  },
 
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})