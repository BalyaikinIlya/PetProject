export class Users {
  constructor() {
    this.Users = [];
  }

  add(user) {
    this.Users.push(user);
  }
  log() {
    console.log(this.Users);
  }
  get(id) {
    return this.Users.find((user) => user.userId === id);
  }

  remove(id) {
    const user = this.get(id);

    if (user) {
      this.Users = this.Users.filter((user) => user.id !== id);
    }

    return user;
  }

  getByRoom(room) {
    return this.Users.filter((user) => user.room === room);
  }
}
