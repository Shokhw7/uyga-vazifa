const son = +prompt("Son kiriting");

// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun 
// sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi 
// programma tuzilsin. (a va b xam chiqarilsin).

// let a = 5
// let b = 9 

// for (let i = a; i <= b; i++){
//     console.log(i)
// }


// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha 
// butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar 
// sonini chiqaruvchi progma tuzilsin.

// let a = 5
// let b = 9 

// for (let i = b; i >= a; i--){
//     console.log(i)
// }

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini 
// chiqaruvchi programma tuzilsin.

// let narx = 55400
// for (let i = 1; i <= 10; i++){
//     console.log(`${i / 10}gr = ${(i / 10) * narx} so'm`);
// }



// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni 
// narxini chiqaruvchi programma tuzilsin.

// let narx = 24999
// for (let i = 12; i <= 20; i++){
//     console.log(`${i / 10}kg = ${(i / 10) * narx} so'm`);
// }


// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun 
// sonlar yig'indisini chiqaruvchi programma tuzilsin.

// let a = 10
// let b = 70
// let yigindi = 0
// for(let i = a; i<=b; i++){{
//         yigindi +=i;
//     }
// }
// console.log("butun sonlar yigindisi:", yigindi);


// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun 
// sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// let a = 4
// let b = 11
// let yigindi = 3
// for(let i = a; i<=b; i++){{
//         yigindi *=i;
//     }
// }
// console.log("butun sonlar kopaytmasi:", yigindi);


// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun 
// sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.

// let a = 1
// let b = 4
// let yigindi = 2
// for(let i = a; i<=b; i++){{
//         yigindi **=i;
//     }
// }
// console.log("butun sonlar kvadrati:", yigindi);


// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi
//programma tuzilsin. S=1+1/2+1/3+...+1/n

// let s = 0
// for (let i = 1; i <= son; i++) {
//     s += 1 / i;
// }

// console.log("Natija:" +s);

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi
//  programma tuzilsin. S=1.1*1.2* 1.3*... *n

// let s = 1
// for (let i = 1; i <= son; i++) {
//     s *= 1 + 0.1 * i;
// }
// console.log("Natija: " +s)


// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini 
// quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)

// let s = 0
// for (let i = 1; i <= son; i++) {
//     s += 2 * i -1;
//     console.log(`i = ${i}, qo'shiluvchi: ${2*i - 1}, hozirgi yig'indi: ${s}`);
// }
// console.log("Natija: " +s)


// For11. n butun soni va a haqiqiy soni berilgan (n > 0). 
// a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// let n = 5
// let a = 2
// let natija = 1
// for (let i = 1; i<=n; i++){
//    console.log(natija*=a) 
// }


// For12. n butun soni va a haqiqiy soni berilgan (n > 0). 
// Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan 
// barcha darajalarini chiqaruvchi programma tuzilsin.

// let n = 17
// let a = 2
// let natija = 1
// for (let i = 1; i<=n; i++){
//     natija *=a;
//     console.log(`${a} ning ${i}-darajasi: ${natija}`)
// }

// For13. n butun soni va a haqiqiy soni berilgan (n > 0). 
// Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan 
// barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin. 
// S = 1+a^1+a^2 + a^3 + ... a^n

// let n = 18
// let a = 2
// let natija = 1
// yigindi = 0
// for (let i = 1; i<=n; i++){
//     yigindi += i;
//     natija *=a;
//     console.log(`${a} ning ${i}-darajasi: ${natija} ${yigindi}-yigindisi:`)
// }


// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda 
// quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// let n = 18
// let yigindi = 0
// let faktorial = 1
// for (let i = 1; i<=n; i++){
//     for (let j = 1; j <= i; j++) {
//     faktorial *= j;
//   }
//   yigindi += faktorial;
//   console.log(`${i}! = ${faktorial}, Yig‘indi hozircha: ${yigindi}`);
// }


// For15. N va K butun sonlari berilgan. Quyidagi yig'indini 
// chiqaruvchi programma tuzilsin. 
// S = 1^K + 2^K + ... + N^K

// let n = 7
// let k = 11
// let yigindi = 0
// for (let i = 1; i<=n; i++){
// yigindi += i**k;
// console.log(yigindi)
// }


// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi 
// programma tuzilsin. 
// S = 1^1 + 2^2 + … + N^N

// let n = 7
// let yigindi = 0
//  for (let i = 1; i<=n; i++){
// yigindi += i**i;
// console.log(yigindi)
// }


// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi 
// programma tuzilsin. Bunda A soni 1 marta, 
// (A + 1) soni 2 marta chiqariladi va xokazo.

// let a = 4
// let b = 56
// let natija = 0
//  for (let i = a; i<=b; i++){
//     let count = i - a + 1;
//     for (let j = 0; j <= count; j++) {
//     console.log(i);
//   }
// }


// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

// let counter = 0;
// let yigindi = 0;
// let boluvchilar = [];
// for(let i = 1; i<=son; i++){
//     if (son % i == 0){
//         yigindi +=i;
//         counter++;
//         boluvchilar.push(i)
//     }        
// }
// console.log("boluvchilar soni:", counter);
// console.log("boluvchilar soni yigindisi:", yigindi);
// console.log("boluvchilar:", boluvchilar);


// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.    

// for (let i = 1; i<= son; i++){
//     if(son % i == 0){
//         console.log(i);
//     }
// }


// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 9;

for (let i = 1; i <= n; i++) {
    let qator = "";
    for (let j = 1; j <= i; j++) {
        qator += j + " ";
    }
    console.log(qator);
}