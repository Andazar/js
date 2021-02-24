/* 
Это мой первый JavaScript. 
*/
const T1 = "Hello, JavaScript!!!";
const T2 = "It is my test prog.";
let T3;
let T4;
let N1 = 10;
let N2 = 20;
let N3 = 0;

T3 = T2;
T4 = T1;

[N1,N2] =[N2,N1];

console.log(T1, T2);//смотреть по F12
console.log(T3, T4);//смотреть по F12
console.log(`${N1} ${N2}`); //смотреть по F12

[T3,T4] =[T4,T3];
console.log(`${T3} ${T4}`); //смотреть по F12

let S1 = String(N2);
let S2 = String(N1);
console.log(S1/S2); //2

Boolean(T1);
Boolean(N3);
console.log(T1);
console.log(N3);
