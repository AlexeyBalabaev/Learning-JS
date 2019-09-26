"use strict";

{
  class User {
    static staticMethod() {
      alert(this === User);
    }
  }

  User.staticMethod();   // true
}

/* ----- */
{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }

  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];

  articles.sort(Article.compare);

  alert( articles[0].title );   // CSS
}

/* ----- */
{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createTodays() {
      return new this("Today's digest", new Date());
    }
  }

  let article = Article.createTodays();

  alert(article.title );   // Today's digest
}

/* ----- */
{
  class Article {
    static publisher = "Ilya Kantor";
  }

  alert( Article.publisher );   // Ilya Kantor
}

/* ----- */
{
  class Animal {

    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }

    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }

  }

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hide!`);
    }
  }

  let rabbits = [
    new Rabbit('White rabbit', 10),
    new Rabbit('Black rabbit', 5)
  ];

  rabbits.sort(Rabbit.compare);

  rabbits[0].run();   // Black rabbit run with speed 5.
}

/* ----- */
{
  class Animal {};
  class Rabbit extends Animal {};

  alert(Rabbit.__proto__ === Animal);   // true

  alert(Rabbit.prototype.__proto__ === Animal.prototype);  // true
}