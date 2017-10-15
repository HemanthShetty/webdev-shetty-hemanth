export class Website {
  public _id: string;
  public name: string;
  public description: string;
  public developerId: string;

  constructor(_id: string, name: string, description: string,
              developerId: string) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.developerId = developerId;
  }
}
