/* Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move*/

let animal = {}
animal.move = {}
let cat = Object.create(animal.move);
console.log(cat);






