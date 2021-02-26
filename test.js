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

/* 
console.log(N1+N2);	//Складывает значения по обе стороны от оператора
console.log(N1-N2);	//Вычитает правый операнд из левого операнда
console.log(N1*N2);	//Умножает значения по обе стороны от оператора
console.log(N2/N1);	//Оператор деления делит левый операнд на правый операнд
console.log(N1%N2);	//Делит левый операнд на правый операнд и возвращает остаток
console.log(N2**5);	//Возведение А в степень В, А умножить само на себя В раз
console.log(++N2);	//Инкремент - увеличивает значение операнда на 1
console.log(--N1);	//Декремент - уменьшает значение операнда на 1


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
const num = 10;
let numStr; 
  for(let i = 2; i < num; i++)
  {
    if(num % i === 0) {numStr = "Не простое"; break;}
    else {numStr= "Простое"; }
  }

console.log(numStr)


//поиск простого числа
const num = 125;
let numStr, de = 2; 
  for(let i = 2; i < num; i++)
  {
    if(num % i === 0) {numStr = "Не простое";}
    else {numStr= "Простое"; de++}
  }

let out = numStr; 

console.log(numStr, "Делитель")

//Определить месяц
let month = 30;
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



//поиск простого числа
function isSimple(num) {
  let numStr, de; 
  for(let i = 2; i < num; i++)
  {
    if(num % i === 0) {numStr = "Не простое"; de = i; break;}
    else {numStr= "Простое"}
  }
  return "Число "+ num+" " + numStr +". Делитель = "+ de;
}

console.log(isSimple(4));

///Числа Фибоначчи(Рекурсия) 
function func(n) {
  return n <= 1 ? n : func(n - 1) + func(n - 2);
}
console.log(func(0)); // номер в последовательности


//Function Declaration
function sayHi(msg) {
  return "Hi, " + msg;
}

//Function Expression
let sayHello = function(msg) {
  return "Hello, " + msg;
};

let myFunc = sayHello;
let myFunc2 = sayHi;

console.log(sayHello("World"));
console.log(sayHi("World"));
console.log(myFunc("World"));
console.log(myFunc2("World"));

//Анонимные функции
let func1 = arg1 => {return "Hello, " + arg1};

console.log(func1("World!!!"));

let func2 = arg2 => arg2*5;

console.log(func2(10));

//---Жизнь кота---------
let time = 10
function sleep() {
  switch (time) {
    case 1: 
    case 3:  console.log("Спит на спине");
             break;
    case 5: 
    case 7:  console.log("Спит на животе");
             break;
    case 11:         
    case 9:  console.log("Спит на боку");
             break;
    default: console.log("Нет такого часа");
             break;  
   }
}
function eat() {
  switch (time) {
  case 2: 
  case 4:  console.log("Ест сухой корм");
           break;
  case 6: 
  case 8:  console.log("Ест влажный корм");
           break;
  case 10:         
  case 12:  console.log("Пьет воду");
           break;
  default: console.log("Нет такого часа");
           break;  
   }
}
let catLife = function(time, sleep,eat) {

  if( time%2==0){
    return eat()
  }
  else{
    return sleep()
  }

};

catLife(time, sleep,eat)*/


//Объект кот
let MyCat = {
  name: "Meera",
  breed: "Main-kun",
  age: 1,
  weight: 4,
  isAngry: false
};
/*//--
console.log("-----Свойства кота-----");
console.log(MyCat);
console.log(MyCat.name);
//--
console.log(MyCat.isAngry);
MyCat.isAngry = true;
console.log(MyCat.isAngry);
delete MyCat.isAngry;
console.log(MyCat.isAngry);
//--
console.log(MyCat["breed"]);
//--
let propName = "weight";
console.log(MyCat[propName]);
//--
console.log("name" in MyCat ); // true
console.log("race" in MyCat ); // false
//--
console.log("-----Все свойства кота-----");
for (let prop in MyCat) {
  console.log(prop+":  "+MyCat[prop]);
  //console.log(MyCat[prop]);
}



let MyCount = {
  10: "Первое",
  30: "Второе",
  20: "Третье",
  50: "Четвертое",
  40: "Пятое"
};


//--
console.log("-----Все свойства счета-----");
for (let prop in MyCount) {
  console.log(prop+":  "+MyCount[prop]);
  //console.log(MyCount[prop]);
}

//--
let YourCount = MyCount;
YourCount[30]= "Шестое";

delete YourCount[40];

console.log(MyCount);
console.log(YourCount);

//--
const MyCount2 = {
  10: "Первое",
  30: "Второе",
  20: "Третье",
  50: "Четвертое",
  40: "Пятое"
};
//--
console.log("-----Все свойства счета №2-----");

//--
let YourCount2 = MyCount2;
YourCount2[30]= "Шестое";
delete YourCount2[40];

console.log(MyCount2);
console.log(YourCount2);
*/
function Cat(name, breed, color, hungerThreshold) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.hungerThreshold = hungerThreshold;
  this.eat = function(n) {
    let hungerMes;
    if (n<this.hungerThreshold)
    {hungerMes = "голоден, не доволен, бегает за тобой и просит еще" }
    else {hungerMes = "доволен, сыт и идет спать"} ;
  console.log(this.color+ "  "+this.breed+ "  "+this.name+", съев "+
              n+" кг. корма "+hungerMes+" МЯЯЯУ!" );
  };
};

function Dog(name, breed, color, hungerThreshold) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.hungerThreshold = hungerThreshold;
 /**/ this.eat = function(n2) {
    let hungerMes2;
    if (n2<this.hungerThreshold)
    {hungerMes2 = "голоден, не доволен, бегает за тобой и просит еще" }
    else {hungerMes2 = "доволен, сыт, виляет хвостом и идет спать"} ;
  console.log(this.color+ "  "+this.breed+ "  "+this.name+", съев "+
              n2+" кг. корма "+hungerMes2+" ГАВ ГАВ!" );
  };
};
let Cat1 = new Cat("Мурзик", "манул", "Серый", 2);
let Cat2 = new Cat("Мира", "майн-кун", "Рыжая черепаха", 3);
let Dog1 = new Dog("Шарик", "шпиц", "черный", 4);
let Dog2 = new Dog("Борбос", "бульдог", "белый", 7);
//--Новые коты
Cat.prototype.sayMeow = function(m) {
  console.log(this.name+" говорит Мяу !");};

Dog.prototype.sayGav = function(g) {
  console.log(this.name+" говорит Гав Гав!");};

console.log(Cat1 instanceof Cat);
console.log(Cat2 instanceof Cat);
console.log("---Кормим котов!---");
Cat1.eat(1)
Cat1.eat(3)
Cat2.eat(2)
Cat2.eat(3)

console.log("---Кормим псов!---");
Dog1.eat(1)
Dog1.eat(4)
Dog2.eat(6)
Dog2.eat(8)

Cat1.sayMeow(1);
Dog1.sayGav(1);
Cat2.sayMeow(1);
Dog2.sayGav(1);

///Классовый кот
console.log("---Классовый кот---");
class ClasCat {
  constructor(name, breed, color, hungerThreshold) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.hungerThreshold = hungerThreshold;
  }

    eat(n) {
    let hungerMes;
    if (n<this.hungerThreshold)
    {hungerMes = "голоден, не доволен, бегает за тобой и просит еще" }
    else {hungerMes = "доволен, сыт и идет спать"} ;
  console.log(this.color+ "  "+this.breed+ "  "+this.name+", съев "+
              n+" кг. корма "+hungerMes+" МЯЯЯУ!" );
  }
}

let Cat3 = new ClasCat("Мурзик", "манул", "Серый", 3);
let Cat4 = new ClasCat("Рамзес", "сфинкс", "Лысый", 1);
let Cat5 = new ClasCat("Эдуард", "мейн-кун", "Рыжий", 5);

Cat3.eat(9);
Cat5.eat(2);

//--Животные
console.log("---Как говорят Животные---");
class Animal {
  constructor(name) {
    this.name = name;
    this.hasTail = true;
  }
  say() {
    console.log("Животное " + this.name + " говорит: Привет человече! У тебя глюки, я животное.");
  }
}

class Cat7 extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  say() {    console.log("Кот " + this.name + " говорит: Мяу!");  }
}

class Dog3 extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  say() {    console.log("Пес " + this.name + " говорит: Гав гав!");  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }
}

let cat = new Cat7("Мурзик");
let dog = new Dog3("Пафнутий");
let horse = new Horse("Бурушка");

cat.say();
dog.say();
horse.say();

//Массив
let numbers = [ 1, 2, 3, 4, 5, 6];
 
function square(value) {
     
    return result = value * value+1;
};
 
let squareArray = numbers.map(square);
console.log(squareArray);

///Счастливые билеты
(function(){
  var digits = {},
       i, tmp;
  for (i = 0; i <= 999; i += 1) {
       tmp = i % 10 + ((i % 100) - (i % 10)) / 10 + (i / 100) ^ 0; 
       if (digits[tmp] === undefined) {
           digits[tmp] = 1;
       } else {
           digits[tmp] += 1;
       }
  }
  tmp = 0;
  for (i in digits) {
      tmp += digits[i] * digits[i];
  }
  console.log( tmp );
 }());

 //-------------
 /*
 for (let i=100000; i<1000000; i++)
 {
  let arr=[];
  i.toString().split("").forEach(element => arr.push(+element));
  let arr1 =arr.slice(0, 3);
  let arr2 = arr.slice(3);
  
  function summ(a, b) 
    {
    return a + b;
    }
  let total1 = arr1.reduce(summ);
  let total2 = arr2.reduce(summ);
  if(total1===total2){

    //console.log(`билет ${i} счастливый!`)
  }
  }
*/


function lucky(n){
  let str = String(n).padStart(6,"0");
  let sum1 = Number(str[0]) + Number(str[1])+ Number(str[2]);
  let sum2 = Number(str[3]) + Number(str[4])+ Number(str[5]);
  return sum1 == sum2;
}

let count = 0
for (let i=0; i<1000000; i++) {
  if (lucky(i)){
    count++
  };
}
console.log( count );
/*
//---------
try {

  console.log('Начало блока try');  // (1) <--
    lalala; // ошибка, переменная не определена!
    console.log('Конец блока try (никогда не выполнится)');  // (2)
  
  } catch(err) {
      //alert(err.message); // (3) <--
    console.log(err);
  }
  
  //---------
try {

  console.log('Начало блока try');  // (1) <--
    lalala; // ошибка, переменная не определена!
  console.log('Конец блока try (никогда не выполнится)');  // (2)
  
  } catch(err) {
    //alert(err.message); // (3) <--
    console.log(err);   
  }

  throw new Error("Моя ошибка")

*/


let catMood = new Promise(
  function (resolve, reject) {
    let isHappy = Math.random()>=0.5;
    if (isHappy) {
      var meow = {
          text: "Мяу ! ",
          length: Math.trunc((Math.random()+0.1)*10)
       };
      resolve(meow); // Успех
    } else {
      var reason = new Error('Cat is angry');
      reject(reason); // Отказ
      }
  
  }
  );
  
  catMood
      .then(function (result) {
        //resolve
        console.log(result)
        let s="";
        for (let i = 0; i < result.length; i++) {
          s=s+result.text;
         }
      console.log(s);
  
    })
  .catch(function (error) {
  // reject
  console.log(error.message);
  });