export class Student {
  firstName: string;
  email: string;
  phone: string;
  lastName: string;
  id: number;


  constructor(firstName: string, email: string, phone: string, lastName: string, id: number) {
    this.firstName = firstName;
    this.email = email;
    this.phone = phone;
    this.lastName = lastName;
    this.id = id;
  }
}

