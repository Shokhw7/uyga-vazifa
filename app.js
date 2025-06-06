// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// const arr = [4, 5, 7, 8, 6, 9];
// const newArr = [];

// for (let i =0; i < arr.length; i++){
//   if (arr[i] % 2 == 0){
//     newArr.unshift (arr[i]);
//   }
// }
// console.log(newArr);

// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

// let arr = [4, 5, 7, 8, 6, 9];
// let result = ''

// for(let i = 0;  i< arr.length; i++){
//   result += `${arr[i]}, ${arr[arr.length -1]},`;
// }

// console.log(result);

// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

// const arr = [1, 6, 9, 5, 8, 10, 15];

// function rangeSum(arr,K, L){
//   let result = 0;

//   for (let i = K; i<= L; i++){
//     result += arr[i];
//   }
//   return result;
// }
// console.log(rangeSum(arr,2,5));

// Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

// let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// function getSingleArr(arr){
//   let seen = []
// for(i = 0; i< arr.length; i++){
//   if(!seen.includes(arr[i])) {
//             seen.push(arr[i]);
//         }
//     }
//     return seen;
// }
// console.log(getSingleArr(arr))

// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

// let arr = [7, 4, 9, 2, 3, 1, 5];

// function calc(){
//   let max = arr[0];
//   let min = arr[1];

//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max) max = arr[i];
//     if(arr[i] < min) min = arr[i];
//   }
  
//   arr[arr.indexOf(min)] = max
//   arr[arr.indexOf(max)] = min

//   return arr;
// }

//   console.log(calc());


// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 8, 16, 32]

// function getLevel2(n){
//   let result = []
//   for (let i = 1; i <= n; i++){
//   result.push(2 ** i)
// }
//   return result
// }

// console.log(getLevel2(5))

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// let n = 5, A = 2, B = 3
// let a = [A, B];
// for (let i = 2; i < n; i++){
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//         sum += a[j];
//     }
//     a.push(sum);
// }
// console.log(a)

// let n = 6;
// let A = 1;
// let B = 1;
// let a = [A, B];
// for (let i = 2; i< n; i++){
    
//     let sum = 0;
        
//     for (let j = 0; j < i; j++){
//         sum += a[j];
//     }
//     a.push(sum)
// }
// console.log(a)

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// const mevalar = ['olma', 'banan', 'gilos']
// console.log(mevalar.reverse())

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let a = [4, 5, 7, 8, 6, 9]
// let count = 0;
// let output = "";

// for (let i = 0; i< a.length; i++){
//     if (a[i] % 2 !== 0){
//         output += a[i] + " ";
//         count++; 
//     }
    
// }
// console.log(output)
// console.log(count)

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// let a = [4, 5, 7, 8, 6, 9];
// let output = "";
// let output2 = "";

// // Juft sonlarni o'sish tartibida chiqarish
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         output += a[i] + " ";
//     }
// }

// // Toq sonlarni kamayish tartibida chiqarish
// for (let i = a.length - 1; i >= 0; i--) {
//     if (a[i] % 2 !== 0) {
//         output2 += a[i] + " ";
//     }
// }

// console.log(output.trim() + " " + output2.trim());

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// let a = [10, 20, 30, 40, 50, 60];

// for (let i = 0; i < a.length; i += 2) {
//     console.log(a[i]);
// }

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// let a = [10, 20, 30, 40, 50, 60];

// for (let i = a.length - 1; i >=0; i -= 2) {
//     console.log(a[i]);
// }

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// let a = [10, 20, 30, 40, 50, 60];

// for (let i = 0; i < a.length; i += 2) {
//     console.log(a[i]);
// }

// for (let i = 1; i < a.length; i += 2) {
//     console.log(a[i]);
// }


// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let i = 1; i < a.length; i += 2) {
//     console.log(a[i]);
// }

// for (let i = a.length - 2; i >= 0; i -= 2) {
//     console.log(a[i]);
// }

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let n = a.length;
// let result = "";
// let left = 0;
// let right = n - 1;

// while (left < right) {
//     result += a[left++] + " ";
//     result += a[left++] + " ";
//     result += a[right--] + " ";
//     result += a[right--] + " ";
// }

// console.log(result.trim());

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

let arr = [1, 2, 3, 4, 5, 6, 7];
let K = 2;
let L = 5;

function rangeOutSum(arr, K, L) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < K || i > L) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(rangeOutSum(arr, K, L));
