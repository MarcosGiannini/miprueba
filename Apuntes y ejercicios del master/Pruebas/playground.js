class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Declare method
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am studying ${this.course}.`)
  }
}

const myPerson = new Student("Marcos", 39, "Front-End Development");
myPerson.introduce();