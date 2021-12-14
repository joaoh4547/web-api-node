export class User {
  public id: string;
  public firstName: string;
  public lastName?: string;
  public email?: string;
  public login: string;
  public password: string;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName || ""}`;
  }
}
