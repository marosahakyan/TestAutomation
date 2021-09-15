let strreg = 'ahb acb aeb aeeb adcb axeb'   
let result = strreg.match(/a.b/g);
console.log(result);


              
let strreg2 = '2+3 223 2223'  
let result2 = strreg2.match(/2\+3/g);
console.log(result2);

let now = new Date();
console.log(now);


console.log(now.getMonth()+1)
console.log(now.getFullYear())
console.log(now.getDate())

/*1.Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение,
    которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
  2.Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
  3.Получить день, месяц и год текущей даты и по отдельности вывести в консоль*/