
// 1)Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

let films = ['Moana', 'Kruds', 'Soul', 'Ferdinand', 'Ballerina'];     
for (let i = 0; i < films.length; i++)
{
  console.log(films[i]);
}


// 2)Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arr = ['lamborghini', 'mercedes', 'audi', 'bmw', 'ferrari'];     
//console.log(arr.toString());
console.log(arr.join());

let str = arr.toString();                                            
let backToArr = str.split(',');
console.log('backToArr:',backToArr);


// 3)Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let array = ["Ani", "Anna", "Aram", "Aren"];                      
for(let i = 0; i < array.length; i++){
  array[i] = "hello " + array[i];
}
console.log(array);

/* the same with map 
 array.map((el)=>{"hello " + el})
 console.log(array);*/


// 4)Преобразовать числовой массив в Boolean

 let array2 = ["one", "two", "three"];                            
 let obj = Object.assign(...array2.map(k => ({ [k]: true })));
 console.log(obj);



// 5)Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
 
let array3 = [1,6,7,8,3,4,5,6];
array3.sort(); 
array3.reverse();
console.log(array3);

/*var a=[1,6,7,8,3,4,5,6];                                              
a.sort(function(a,b){return b-a;});
console.log(a.join())
reverse();  
*/


// 6)Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let arr2 = [1, 6, 7, 8, 3, 4, 5, 6];                       
let result = arr2.filter(el => el > 3);
console.log(result);


// 7)Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function a (arr, num)                         
{
    return arr[num];
}
console.log(a([2,3,8], 2));


// 8)Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

let aa = 100;                                                 
do
   {
     aa--;
     console.log(aa);
   } 
while (aa>10);


// 9)Реализовать цикл, который выводит в консоль простые числа

for (let x = 2; x < 10; x++)
{                                                             
    let isPrime = 0;
    for (let y = 1; y < x; y++)
     {
        if (x % y == 0)
            isPrime++;

         if (isPrime == 2)
          break;
     }
     if (isPrime != 2)
     console.log(x);

    isPrime = 0;
}
    console.log();

    
 // 10)Реализовать цикл, который выводит в консоль нечетные числа

for (let i = 0; i < 20; i++)                                            
{
    if (i % 2 == 0)
     continue;
  
    console.log(i); 
};
