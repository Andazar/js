/* Это мой первый JavaScript. */
const T1 = "Hello, JavaScript!!!";
const T2 = "It is my test prog.";
let T3;
let T4;
let N1 = 10;
let N2 = 20;
let N3 = 0;

T3 = T2;
T4 = T1;

//[N1,N2] =[N2,N1];

console.log(T1, T2);//смотреть по F12
console.log(T3, T4);//смотреть по F12
//console.log(`${N1} ${N2}`); //смотреть по F12

[T3,T4] =[T4,T3];
console.log(`${T3} ${T4}`); //смотреть по F12

//let S1 = String(N2);
//let S2 = String(N1);
console.log(String(N2)/String(N1)); //2

console.log(Boolean(T1));
console.log(Boolean(N3));

console.log(typeof T1);

 
console.log(N1+N2);	//Складывает значения по обе стороны от оператора
console.log(N1-N2);	//Вычитает правый операнд из левого операнда
console.log(N1*N2);	//Умножает значения по обе стороны от оператора
console.log(N2/N1);	//Оператор деления делит левый операнд на правый операнд
console.log(N1%N2);	//Делит левый операнд на правый операнд и возвращает остаток
console.log(N2**5);	//Возведение А в степень В, А умножить само на себя В раз
console.log(++N2);	//Инкремент - увеличивает значение операнда на 1
console.log(--N1);	//Декремент - уменьшает значение операнда на 1
/*

//Послед Фибонначи
let a = 0, b = 1;
for(let i = 0; i < 26; i++){
console.log(b);
      let temp = b;
      b = a + b;
      a = temp;
    }
 
*/
// Вывести в консоль таблицу умножения от 10 до 20.
/*
let a = 10, b = 10;
for( a = 10; a < 21; a++)
{
  for(b = 10; b < 21; b++)
      {
        console.log(String(a),"*",String(b),"=", a*b);
        
      }
  
}

let str="    ";
for( a = 10; a <= 20; a++)
{
   str += a + "   "
}
console.log(str);

for( a = 10; a < 21; a++)
{
  str=a+"  "
  for(b = 10; b < 21; b++)
      {
         str += a*b + "  "
      }
  console.log(str);
}

//поиск простого числа
const num = 125;
let numStr, de = 2; 
  for(let i = 2; i < num; i++)
  {
    if(num % i === 0) {numStr = "Не простое";}
    else {numStr= "Простое"; de++}
  }

let out = numStr; 

console.log(numStr, "Делитель")*/



let month = 2;
let monthString;
let seezString;
switch (month) {
    case 1:  monthString = "Январь";
             seezString = "Зимний";
             break;
    case 2:  monthString = "Февраль";
             seezString = "Зимний";
             break;
    case 3:  monthString = "Март";
             seezString = "Весенний";
             break;
    case 4:  monthString = "Апрель";
             seezString = "Весенний";
             break;
    case 5:  monthString = "Май";
             seezString = "Весенний";
             break;
    case 6:  monthString = "Июнь";
             seezString = "Летний";
             break;
    case 7:  monthString = "Июль";
             seezString = "Летний";
             break;
    case 8:  monthString = "Август";
             seezString = "Летний";
             break;
    case 9:  monthString = "Сентябрь";
             seezString = "Осенний";
             break;
    case 10: monthString = "Октябрь";
             seezString = "Осенний";
             break;
    case 11: monthString = "Ноябрь";
             seezString = "Осенний";
             break;
    case 12: monthString = "Декабрь";
             seezString = "Зимний";
             break;
    default: monthString = "Неизвестен";
             seezString = "неизвестный";
              break;
         
}
console.log(monthString+" - Это "+seezString+"  месяц");
