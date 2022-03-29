let myCar = {
    make: `Ford`,
    model: `Mustang`,
    year: `2022`,
    options: [`heated seats`, `HUD` , `keyless` ]
};

console.log(myCar)
console.log(`The make of  my car is: ${myCar.make}`);
console.log(`The make of  my car is: ${myCar[`make`]}`);
console.log(myCar.options);

let user = {
    firstName: "John",
    lastName: "Jones",
    age: 25,
    hobbies: ["gym","movies"],
    friend: {
        FirstName: "Wang",
        lastName: "chichung",
        age: 18,
        hobbies: ["tai-chi","Kung-fu"]
    },
    friends: [
        {
            FirstName: "Wang",
            lastName: "chichung",
            age: 18,
            hobbies: ["tai-chi","Kung-fu"] 
        },
        {
            FirstName: "Wu",
            lastName: "Chichi",
            age: 19,
            hobbies: ["Karate","piano"] 
        }
    ],

    firstName: "Chingchung",
    lastName: "Lee",
    age: 25,
    hobbies: ["gym","movies"],
    
    greeting(){
        console.log(`hello , my name is ${this.firstName} ${this.lastName}`);
    }

};

user.greeting();

/* console.log(`${user.firstName}  ${user.lastName}` );
console.log(user.hobbies);

console.log(user.friend.age)

console.log(user.friends[0].hobbies[1])

user.friends.forEach((friend)=> {
    console.log(friend);
});

console.log(user.job);

if(user){
    if(user.job){
        console.log(user.job.length)
    }
}


 */

let book = {
    title: "Learn Git in a Month of Lunches",
    description: "A book about a book",
    isbn: "1524647384934",
    pageCount: 34,
    authors: ['Rick Umali'],
    genres: ['Hosting', 'Git'],
    publishedDate: "11-01-20",
    price: 38.99,
    rating: 5,
    reviews: ['Very good', 'Awesome'],
    getDetails(){
        return `${this.title} was written by ${this.authors}   decription:${this.description}        it was published on ${this.publishedDate}.        ISBN: ${this.isbn}        Genres: ${this.genres}        price: ${this.price}        Rating: ${this.rating}        Reviews: ${this.reviews}`;
    }
};
console.log(book);
console.log(book.getDetails());

let noodles = {
    title: "La Pa Bachoy",
    description: "Instant Ramen based in the Philippines",
    isbn: "4568781993019",
    price: 6.00,
    ingredients: ['water', 'ramen', 'seasoning','soy sauce'],
    bestBefore: "11-01-20",
    rating: 5,
    reviews: ['Delicious', 'Asian Appproved'],
    getDetails(){
        return `${this.title} are instant ramen  decription:${this.description}      The best before date  ${this.bestBefore}.      The Ingredients of  ${this.title} are ${this.ingredients[0]} and ${this.ingredients[1]} and ${this.ingredients[2]} and ${this.ingredients[3]}        price: ${this.price}        Rating: ${this.rating}        Reviews: ${this.reviews}`;
    }
};
console.log(noodles);
console.log(noodles.getDetails());

let game = {
    title: " Sleeping Simulator",
    description: "This game isn a simulation about sleeping",
    genre: ['family friendly', 'Simulator'],
    price: 1.69,
    ageRating: 'Rated G',
    releaseDate: "10-05-21",
    rating: 10/10,
    reviews: ['BEST Game', 'Beautiful'],
    getDetails(){
        return `${this.title} the game   decription:${this.description}      genres ${this.genre}.      cost £${this.price}  Age rating ${this.ageRating}       ReleaseDate: ${this.releaseDate}        Rating: ${this.rating}        Reviews: ${this.reviews}`;
    }
};
console.log(game);
console.log(game.getDetails());

let products = [book ,noodles ,game]

console.log(products);

products.forEach((products) => {
    console.log(products.getDetails());
});







    
