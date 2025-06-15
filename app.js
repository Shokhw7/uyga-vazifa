<<<<<<< HEAD
// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)


// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)


// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']

// function getNamesByGrade(students, grade) {
//   const gradedStudents = students.map(student => {
//     let studentGrade;
//     if (student.percent >= 85) {
//       studentGrade = 5;
//     } else if (student.percent >= 70) {
//       studentGrade = 4;
//     } else if (student.percent >= 60) {
//       studentGrade = 3;
//     }
//     return { ...student, grade: studentGrade };
//   });

//   const filtered = gradedStudents.filter(student => student.grade === grade);

//   const names = filtered.map(student => student.name);

//   return names;
// }

// console.log(getNamesByGrade(students, 5)); 
// console.log(getNamesByGrade(students, 4));
// console.log(getNamesByGrade(students, 3)); 

//  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// let num = [1, 2, 3, 4, 5]
// num = num.map(n => n * n);
// console.log(num)


// Satrdagi so’zlarning bosh harflarini oling. (split, map, join)


// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'

// let s = 'George Raymond Richard Martin';
// let words = s.split(' ');
// let i = words.map(word => word[0]);
// let result = i.join('');

// console.log(result);

//  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


// const people = [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

// const sortedPeople = people.sort((a,b) => a.age - b.age)
// console.log(sortedPeople [sortedPeople.length - 1].age -sortedPeople[0].age)


// N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let odds = numbers.filter(n => n % 2 == 0)
// let evens =numbers.filter(n => n % 2 != 0);
// console.log(odds,evens)

// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

// let byId = [...products].sort((a, b) => a.id - b.id);
// let byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
// let byPrice = [...products].sort((a, b) => a.price - b.price);
// let byRating = [...products].sort((a, b) => b.rating - a.rating);
// let byDiscount = [...products].sort((a, b) => b.discount - a.discount);

// console.log("ID bo‘yicha:", byId);
// console.log("Name bo‘yicha:", byName);
// console.log("Narx bo‘yicha:", byPrice);
// console.log("Reyting bo‘yicha:", byRating);
// console.log("Chegirma bo‘yicha:", byDiscount);



// 10. Rating bo'yicha eng kuchli product topilsin. (sort)
const topProduct = [...products]
  .sort((a, b) => b.rating - a.rating)[0];

console.log("Eng kuchli product:", topProduct);


// 11. Narxi eng past bo'lgan product topilsin. (sort)
const pasProduct = [...products]
  .sort((a, b) => a.rating - b.rating)[0];

console.log("Eng pas product:", pasProduct);



// Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// productsNames = products.map(product => product.name);
// console.log(productsNames);

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

const product = products.find(item => item.id === 5);

console.log("ID-si 5 bo‘lgan product nomi:", product.name);


// Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let newProducts = products.filter(product => product.id !== 4);
// console.log(newProducts)


// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)

// function getTruthyFalsy(arr) {
//   let truthy = arr.filter(item => Boolean(item));
//   let falsy = arr.filter(item => !item);

//   return {
//     truthy,
//     falsy
//   };
// }

// let input = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// let result = getTruthyFalsy(input);
// console.log(result);

// 18. Satr berilgan. 
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]

// let Input = "Men Abdulaziz Programmerman" 
// let words = Input.split(" ");
// let lengths = words.map(word => word.length);
// console.log(lengths);

// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
// Input: "Men Abdulaziz Programmerman"
// Output: true

// let i = "Men Abdulaziz Programmerman"
// let words = i.split(" ")
// let some = words.some()


// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

const gradedStudents = students.map(student => {
  let grade = 2; // default

  if (student.percent >= 90 && student.percent <= 100) {
    grade = 5;
  } else if (student.percent >= 80 && student.percent < 90) {
    grade = 4;
  } else if (student.percent >= 70 && student.percent < 80) {
    grade = 3;
  }

  return { ...student, grade }; 
});

console.log(gradedStudents);

// 24. isPassed propertyga protcent 70 dan o'tsa true, aks holda false qiymat o'zlashtirilsin. (map)



const updatedStudents = students.map(student => {
  return {
    ...student,
    isPassed: student.percent >= 70
  };
});

console.log(updatedStudents);
=======
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
>>>>>>> 1d7966cd3d726a645941a7dab0fc8f4f2e70c5a4
