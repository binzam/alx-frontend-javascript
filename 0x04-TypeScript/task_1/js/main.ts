// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

class TeacherClass implements Teacher {
  public firstName: string;
  public lastName: string;
  public fullTimeEmployee: boolean;
  public yearsOfExperience?: number;
  public location: string;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }

  addAttribute(key: string, value: any) {
    (this as any)[key] = value;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

//Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

// Interfaces for Student and StudentClass
interface Student {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface extends Student {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation using the interface
class StudentClass implements StudentClassInterface {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to display the student's first name
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Binyam', 'Techan');

// Log the student's methods and attributes
console.log(student1.workOnHomework());
console.log(student1.displayName()); 
