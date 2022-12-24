// можно добавить typescript, тебе стоит посмотреть мой чат пример, который скидывал, там всё это уже есть
// Логичнее увидеть здесь работу с редисом или обращение к апи, если по простому
export class Users {
  constructor() {
    this.Users = []; // свойства пишут с маленькой буквы, заглавные для классов
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
    const user = this.get(id); // это лишнее, фильтр ниже ничего не удалит если юзер будет отсутствовать, вернётся тот же массив

    if (user) {
      this.Users = this.Users.filter((user) => user.userId !== id);
    }

    return user; // это побочное действие при удалении, я бы не стал так смешивать, лучше получать юзера отдельно от удаления (отдельная задача на получение юзера) этого юзера, впрочем это вполне допустимо, не является ошибкой
  }

  getByRoom(room) {
    return this.Users.filter((user) => user.room === room);
  }
}
