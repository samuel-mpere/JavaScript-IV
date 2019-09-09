(function(){
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

*/

//task 1

function Person (name, age){
this.name = name;
this.age = age;
this.canEatEdibles = true;
this.canPoop = true;
this.stomach = [];
}

Person.prototype.greet = function () {
return `Hello everyone my name is ${this.name} and I am ${this.age} years old`;
}
Person.prototype.feast = function (edible){
if(this.canEatEdibles){
    this.stomach.push(edible);
}
}

Person.prototype.digest = function (edible){
if(this.canPoop){
    this.stomach = [];
}
}

const loki = new Person('Babaloki', 30);

//task 2 

function Car(name, make){
this.name = name;
this.make = make;
this.distance = 0;
this.isAbleToMove = true;
this.odometer = 0;
this.crash = true;
}

Car.prototype.driveDistance = function(distance){ 
if (this.isAbleToMove){
    return this.odometer += distance;
} //else (!this.isAbleToMove)
    //return `I crashed my car at ${distance} miles`;
}

Car.prototype.crashed = function (distance){
    if(this.crash){
    return `I crashed my car at ${distance} miles`;
    }
}

Car.prototype.immobilized = function(){
this.isAbleToMove = false;
}

Car.prototype.redrive = function(){
this.isAbleToMove = true;
}


let sportsCar = new Car('lamborghini', 'aventandor');



//task 3

let Baby = function(name, age ){
Person.call(this, name, age);
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){

return 'I love to play with legos';
}


/*
TASK 4

Use your imagination and come up with constructors that allow to build objects
With amazing and original capabilities. Build 3 small ones, or a very
complicated one with lots of state. Surprise us!

*/

/*

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//task 1 refactor 

class Person {
constructor(name, age){
    this.name = name;
    this.age = age;
    this.canEatEdibles = true;
    this.canPoop = true;
    this.stomach = [];
}

greet(){
    return `Hello everyone my name is ${this.name} and I am ${this.age} years old`;
}

feast(edible){
    if(this.canEatEdibles){
        this.stomach.push(edible);
    }
}

digest(edible){
    if(this.canPoop){
        this.stomach = [];
    }
}

}


//task 2 refactor 

class Car {
constructor(name, make){
    this.name = name;
    this.make = make;
    this.isAbleToMove = true;
    this.odometer = 0;
    this.crash = true;
}

driveDistance(distance){
    if (this.isAbleToMove){
        return this.odometer += distance;
        } 
}

crashed(distance){
    if(this.crash){
        return `I crashed my car at ${distance} miles`;
        }
}

immobilized(){
    this.isAbleToMove = false;
}
    
redrive(){
    this.isAbleToMove = true;
}
    
}


//task 3 refactor 

class Baby extends Person {
constructor(name, age){
    super(name, age);
}

play(){
    return 'I love to play with legos'
}
}

})()