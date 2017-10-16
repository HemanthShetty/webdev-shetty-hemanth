
export class Widget {
  public _id: String;
  public widgetType: String;
  public pageId: String;

  constructor(id: String, widgetType: String, pageId: String) {
    this._id = id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
