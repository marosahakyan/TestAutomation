

/*В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'*/
let a = 3;
try
{
    if(a === 1/0){
    
        console.log("do not devide to 0");

    }
    else
    console.log(a);
 
}
catch(err)
{
    console.log(err);
}
    







