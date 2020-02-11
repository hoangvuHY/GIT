var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat;
var mouse = new Mouse('Mikey');

cat.eat(mouse);

console.log(cat);

var dog = new Dog();


try {
    cat.eat(dog);
} catch{
    console.log('Error while cat eating a dog')
}

dog.sayHi();



