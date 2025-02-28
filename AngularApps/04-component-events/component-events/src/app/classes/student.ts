export class Student {
  firstName: string;
  email: string;
  phone: string;
  lastName: string;
  studentNr: number;

  constructor(firstName: string, lastName: string, phone: string, email: string, studentNr: number) {
    this.firstName = firstName;
    this.email = email;
    this.phone = phone;
    this.lastName = lastName;
    this.studentNr = studentNr;
  }
}

