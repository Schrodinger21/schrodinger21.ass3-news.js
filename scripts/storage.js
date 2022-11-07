"use strict";
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// Save data
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Lấy data userArr từ Localstorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// convert class Instance
const userArr = users.map((user) => parseUser(user));

// Lấy data user active
let userActive = getFromStorage("usderActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// lấy data todoArr từ localstorage
const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];

// convert class instance
const todoArr = todo.map((todo) => parseTask(todos));

// Hàm chuyển đổi data
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );

  return user;
}
