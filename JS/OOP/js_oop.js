/***
 * illsutrates a basic class and constructor definition in
 * javascript
 * properties
 * ---name
 * ---age
 * methods
 * ----greet()
 */
function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        return "hello "+this.name;
    }

}
person = new Person('Alex', 30);

console.log(person.name)
console.log(person.age)
console.log(person.greet());

/**
 * illustrating inheritance by using the protoype objects
 * 
 */

Person.prototype.salute = function (){
    return this.name+ " is "+this.age+" years old";
}

person1 = new Person('John', 25);
console.log(person1.salute());
