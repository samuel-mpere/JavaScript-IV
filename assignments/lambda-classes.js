// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age; 
        this.location = location
    }

    speak(){
        return `Hello my namee is ${this.name}, I am from ${this.location}`
    }
}

let Brady = new Person('Tom Brady', 30, Boston);
class Instructor extends Person {
    constructor(name, age, location, speciality, favLanguage, catchPhrase){
        super(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(name, age, location, previousBackground, className){
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = [];
    }

    listsSubjects (){
        return JSON.stringify(this.favSubjects);
    }

    PRAssignment (subject){
        return `${this.student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(name, age, location, gradClassName, favInstrutor){
        super(name, age, location);
        this.gradClassName = gradClassName;
        this.favInstrutor = favInstrutor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }

    debugsCode(subject, student){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}