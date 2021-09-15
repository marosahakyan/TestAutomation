  
  // Создать объект car, добавить к нему свойство color со значением 'черный'
let car = {};
car.color = "black";


//  Изменить свойство color объекта car на 'зеленый'
car.color = "green";

// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = function (){console.log("low")};
console.log("car=  " + JSON.stringify(car));


// На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
let sum = function(apple, pear){console.log(apple + pear)};
sum(10,20);


// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function checkArgument(arg){
console.log(typeof arg);
}
checkArgument(4);



// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя,   если нет, то нет такого имени)

function checkName(arg){
    if (arg === "Lilit"){
        return 'hi ' + arg ;
    }
    else{
        return ' there is no ' + arg + ' such name ' ;
    }
}
    
    console.log(checkName( "Lilit" ));
