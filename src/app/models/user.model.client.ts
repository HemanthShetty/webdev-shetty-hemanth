export class User {
  public _id: string;
  public username: string;
  public password: string;
  public email: string;
  public firstName: string;
  public lastName: string;

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
