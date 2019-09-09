(function (){
// CODE here for your Lambda Classes


class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age; 
        this.location = location
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

let brady = new Person('Tom Brady', 30, 'Boston');

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
        return `${student} receives a perfect score on ${subject}`
    }

    finalGrade(){
        return this.grade += Math.floor(Math.random() * 100);
    }
}
let gabe = new Instructor('Gabriel Cabrejas', 30, 'Malaga', 'front-end','JavaScript', 'brutal!');

class Student extends Person {
    constructor(name, age, location, previousBackground, className){
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = [];
        this.grade = Math.floor(Math.random() * 100);
        this.isGraduated = false;
    }

    listsSubjects (){
        this.favSubjects.forEach(function (fav) {
            return(fav);
        });
    }

    PRAssignment (subject){
        return `${this.student} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.student.name} has begun sprint challenge on ${subject}`
    }

    graduate(){
        if(this. grade > 0.7){
            this.isGraduated = true;
        }
        else{
            finalGrade();
        }
    }

}


let motivatedStudent = new Student('Mpere Annor', 30,'Kumasi', 'Finance', 'WEBEU3');

class ProjectManager extends Instructor {
    constructor(name, age, location, speciality, favLanguage, catchphrase, gradClassName, favInstrutor){
        super(name, age, location, speciality, favLanguage, catchphrase);
        this.gradClassName = gradClassName;
        this.favInstrutor = favInstrutor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }

    debugsCode(subject, student){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

let pr = new ProjectManager('Emily', 30, 'San Francisco', 'WebDev','css', 'go team!', 'EU', 'Gabriel Cabrejas');

})()