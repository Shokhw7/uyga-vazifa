// Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

// function timeToHMS(h, m, s){
//     if (m ==59 && s == 59){
//         return `${h + 1}:00:00`
//     }else if(s==59){
//         return `${h}:${m+1}:00`;
//     }else(s==59)
//     {
//         return `${h}:${m}:${s + 1}`;
//     }
    
// }
// console.log(timeToHMS(0,6,39));

// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243
// let n = 10
// Func1
// function power(a, n) {
//     let res = a ** n;
//     console.log(res);
//     return res;
// }
// power(3, 5);


// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// function mean(a, b) {
//     let arif = (a + b) / 2;
//     let geom = Math.sqrt(a * b);
//     console.log(`${arif}, ${geom}`);
//     return `${arif}, ${geom}`;
// }
// mean(12, 48);

// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// function sign(n) {
//     let res = n > 0 ? 1 : (n < 0 ? -1 : 0);
//     console.log(res);
//     return res;
// }
// sign(10);

// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1

// function numberOfRoots(A, B, C) {
//     let D = B ** 2 - 4 * A * C;
//     let res = D > 0 ? 2 : (D === 0 ? 1 : 0);
//     console.log(res);
//     return res;
// }
// numberOfRoots(1, -6, 9); 

// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// function areaCircle(R) {
//     let res = Math.PI * R ** 2;
//     console.log(res);
//     return res;
// }

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(A, B) {
//     if (A > B) {
//         console.log(0);
//         return 0;
//     }
//     let sum = 0;
//     for (let i = A; i <= B; i++) sum += i;
//     console.log(sum);
//     return sum;
// }
// sumRange(8, 10); 

// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(A, B, S) {
//     let res = 0;
//     if (S === '+') res = A + B;
//     else if (S === '-') res = A - B;
//     else if (S === '*') res = A * B;
//     else if (S === '/') res = B !== 0 ? A / B : 0;
//     else res = 0;
//     console.log(res);
//     return res;
// }
// calc(10, 15, '*'); 
// calc(7, 8, '+');   

// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true

// function isEven(K) {
//     let res = K % 2 === 0;
//     console.log(res);
//     return res;
// }
// isEven(10);

// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//     let arr = [a, b, c].sort((x, y) => x - y);
//     let res = `${arr[0]}, ${arr[1]}, ${arr[2]}`;
//     console.log(res);
//     return res;
// }
// sortABC(10, 5, 8); // 5, 8, 10

// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY

// function isPowerN(K, N) {
//     if (K < 1) {
//         console.log(false);
//         return false;
//     }
//     while (K % N === 0) K /= N;
//     let res = K === 1;
//     console.log(res);
//     return res;
// }
// isPowerN(27, 3);
// isPowerN(20, 2); 

// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// function isPrime(N) {
//     if (N <= 1) {
//         console.log(false);
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             console.log(false);
//             return false;
//         }
//     }
//     console.log(true);
//     return true;
// }
// isPrime(7);
// isPrime(10);

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4

// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) count++;
//     }
//     console.log(count);
//     return count;
// }
// numberOfPrime(10);

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

// function isLeapYear(Y) {
//     let res = (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
//     console.log(res);
//     return res;
// }
// isLeapYear(2020); // true
// isLeapYear(1900); // false

// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

// function monthDays(M, Y) {
//     let res = 31;
//     if (M === 2) res = isLeapYear(Y) ? 29 : 28;
//     else if ([4, 6, 9, 11].includes(M)) res = 30;
//     console.log(res);
//     return res;
// }
// monthDays(2, 2020); 
// monthDays(3, 2021); 

// Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

// function prevDate(D, M, Y) {
//     D--;
//     if (D === 0) {
//         M--;
//         if (M === 0) {
//             M = 12;
//             Y--;
//         }
//         D = monthDays(M, Y);
//     }
//     let res = `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
//     console.log(res);
//     return res;
// }
// prevDate(10, 3, 2022); 

// Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 28

// function getDividersNumberAndSum(N) {
//     let count = 0, sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             count++;
//             sum += i;
//         }
//     }
//     let res = `${count}, ${sum}`;
//     console.log(res);
//     return res;
// }
// getDividersNumberAndSum(12);