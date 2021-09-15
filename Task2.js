let car = {};
car.color = "black";

car.color = "green";

car.power = function (){console.log("low")};
console.log("car=  " + JSON.stringify(car));


let sum = function(apple, pear){console.log(apple + pear)};
sum(10,20);



function checkArgument(arg){
console.log(typeof arg);
}
checkArgument(4);


//function checkArgument(arg){
 //   if(arg%n)
//}

function checkName(arg){
    if (arg === "Lilit"){
        return ' hi ' + arg ;
    }
    else{
        return ' there is no ' + arg + ' such name ' ;
    }
}
    
    console.log(checkName( "Lilit" ));








/*        Создать объект car, добавить к нему свойство color со значением 'черный'

-        Изменить свойство color объекта car на 'зеленый'

-        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

-        На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

-        В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

-        Напишите функцию вычисления типа аргумента и вывод типа в консоль

-        Напишите функцию, которая определяет является ли число простым или нет*/