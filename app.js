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