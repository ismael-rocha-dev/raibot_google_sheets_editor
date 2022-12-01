import Member from "./Member.js";

export default class Reunion {
  constructor(members = [new Member()], totalMinutes = 0, description = "") {
    this.members = members;
    this.totalMinutes = totalMinutes;
    this.description = description;
  }
}
