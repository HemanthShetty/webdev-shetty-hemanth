export class Page {
  public _id: string;
  public name: string;
  public description: string;
  public websiteId: string;
  constructor(_id: string, name: string, description: string,
              websiteId: string) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.websiteId = websiteId;
  }
}
