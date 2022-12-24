import { createServer } from "http";
import { Server } from "socket.io";
import { uuidv4 } from "./utils.js";
import { Users } from "./users.js";
const m = (name, text, id) => ({ name, text, id });
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8081",
  },
});
const users = new Users();

io.on("connection", (socket) => {
  console.log(`${socket.id}  connected`);

  socket.on("userJoined", (data, cb) => {
    users.remove(socket.id); // выглядит как хак, что конкретно фиксит это строка?

    // всю работу с аватарками и data можно целиком перенести в Users, здесь им не место, слишком низкоуровневая логика для работы сервера
    let avatarPull = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let rand = Math.floor(Math.random() * avatarPull.length);
    users.add({
      id: data.id,
      userId: socket.id,
      name: data.name,
      room: data.room,
      avatar: avatarPull[rand],
    });

    socket.join(data.room);

    cb({ userId: socket.id });

    // не-не, эта инфа уже есть в сокете через https://socket.io/docs/v4/server-socket-instance/#socketrooms
    // т.е. не обязательно через io.to рассылать сообщения, можно через сокет слать сообщения всем в его комнате
    io.to(data.room).emit("updateUsers", users.getByRoom(data.room));

    socket.emit("newMessage", {
      id: uuidv4(),
      text: `Добро пожаловать ${data.name}`,
      time: new Date(),
      messageId: socket.id,
      system: true,
    });

    // почти полное дублирование месседжей newMessage по всему коду, заслуживает вынесения в отдельную функцию с конфигом по умолчанию
    socket.broadcast.to(data.room).emit("newMessage", {
      id: uuidv4(),
      text: `Пользователь ${data.name} присоединился`,
      time: new Date(),
      messageId: socket.id,
      system: true,
    });
  });

  socket.on("userLeft", (id, cb) => {
    const user = users.remove(id);

    io.to(user.room).emit("updateUsers", users.getByRoom(user.room)); // можно упростить, как и по ссылке выше

    // дублирование
    io.to(user.room).emit("newMessage", {
      id: uuidv4(),
      text: `Пользователь ${user.name} вышел`,
      time: new Date(),
      messageId: socket.id,
      system: true,
    });
    cb();
  });

  socket.on("disconnect", () => {
    try { // лишний try catch, здесь не будет исключения если не использовать получения user из удаления, эта инфа уже есть в socket текущем через socket.to или socket.broadcast
      const user = users.remove(socket.id);
      // console.log(user);
      io.to(user.room).emit("updateUsers", users.getByRoom(user.room));
      io.to(user.room).emit("newMessage", {
        id: uuidv4(),
        text: `Пользователь ${user.name} вышел`,
        time: new Date(),
        messageId: socket.id,
        system: true,
      });
    } catch (error) {
      console.log("Failed Disconnect");
    }
  });
  socket.on("newMessage", (msg) => {
    let isMsgText = true;
    const user = users.get(msg.messageId);
    if (msg.text === "" && msg.fileUrl === "") {
      console.log("empty Message ");
    } else {
      if (msg.fileUrl != "") { // корректнее !msg.fileUrl, не завязывайся на пустые строки, там может быть и null, undefined
        isMsgText = false;
      }
      io.to(user.room).emit("newMessage", {
        id: msg.id,
        messageId: user.userId,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`, // неверно, надо передавать дату
        system: msg.system,
        text: msg.text,
        messageAvatar: user.avatar,
        fileUrl: msg.fileUrl,
        isMsgText: isMsgText, // лишнее, на клиенте это можно рассчитать без сервера
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id}  disconnected`);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
