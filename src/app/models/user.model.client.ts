export class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(_id: string, userName: string, password: string,
              firstName: string, lastName: string, email: string) {
    this._id = _id;
    this.username = userName;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
