// #### **1. Funksiyalar**

import { isString } from "antd/es/button";

// 1. **Masala: Maxsulotni hisoblash**
//    - **Tushuntirish**: Sizdan `calculateTotal` nomli funksiyani yozishingiz talab qilinadi. Bu funktsiya maxsulotlar ro‘yxatini (`Product` obyekti) qabul qiladi va ularning narxlarini hisoblab chiqadi. Har bir `Product` obyekti `name` (maxsulot nomi) va `price` (narx) xususiyatlariga ega bo‘ladi. Funksiya barcha maxsulotlarning narxlarini qo‘shib, umumiy summani qaytarishi kerak.

// interface Product {
//   name: string;
//   price: number;
// }

// const Products: Product[] = [
//   { name: "Olma", price: 5000 },
//   { name: "Behi", price: 56000 },
//   { name: "Nok", price: 10000 },
// ];

// function calculateTotal(products: Product[]): number {
//   let total = 0;

//   for (let i = 0; i < products.length; i++) {
//     total += products[i].price;
//   }
//   return total;
// }

// console.log(calculateTotal(Products));

// 2. **Masala: Funksiyalarda Default Parametrlar**
//    - **Tushuntirish**: Sizdan `greet` nomli funktsiyani yaratish talab qilinadi. Bu funktsiya foydalanuvchi ismini va salomlashish xabarini qabul qiladi. Agar salomlashish xabari berilmasa, `Hello` degan standart xabar ishlatiladi. Funksiya foydalanuvchiga salomlashish xabarini qaytarishi kerak.

// function greet(name: string, greeting: string = "Hello") {
//     return `name: ${name}, greeting: ${greeting}`
// }

// greet("Azim")
// greet("ikrom", "qalesanmi?")

// #### **2. Generics**

// 1. **Masala: Generics Bilan List Komponenti**
//    - **Tushuntirish**: `List` nomli generics bilan ishlaydigan React komponentini yaratishingiz kerak. Bu komponent biror turdagi (`T`) elementlarni qabul qiladi. Komponent `items` ro‘yxatini va har bir elementni qanday render qilishni aniqlovchi `renderItem` funksiyasini qabul qiladi. Komponent ro‘yxatdagi barcha elementlarni render qiladi.

// type ListProps<T> = {
//   items: T[];
//   renderItem: (item: T) => React.ReactNode;
// };

// function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{renderItem(item)}</li>
//       ))}
//     </ul>
//   );
// }

// const stringItems = ["Olma", "Banan", "Nok"];
// const numberItems = [1, 2, 3];

// const App = () => {
//   return (
//     <div>
//       <h2>Meva Royxati</h2>
//       <List
//         items={stringItems}
//         renderItem={(item) => <strong>{item}</strong>}
//       ></List>

//       <h2>Raqamlar ro'yxati:</h2>
//       <List items={numberItems} renderItem={(item) => <em>{item}</em>} />
//     </div>
//   );
// };

// export default App;
// 2. **Masala: Generics Bilan Funksiya**
//    - **Tushuntirish**: Sizdan `findMax` nomli generics bilan ishlaydigan funksiya yozishingiz talab qilinadi. Bu funksiya berilgan ro‘yxatda eng katta elementni topishi kerak. Funksiya elementlarni solishtirish uchun `compare` funksiyasini qabul qiladi. `compare` funksiyasi ikki elementni solishtirib, ularning kattaligini aniqlashga yordam beradi.

// function findMax<T>(items: T[], compare: (a: T, b: T) => number): T | null {
//   if (items.length === 0) {
//     return null;
//   }

//   let maxItem = items[0];

//   for (let i = 0; i < items.length; i++) {
//     if (compare(items[i], maxItem) > 0) {
//       maxItem = items[0];
//     }
// }
// return maxItem;
// }

// const compareNumbers = (a: number, b: number): number => a - b;

// const numbers = [10, 35, 85, 95];

// const maxNumber = findMax(numbers, compareNumbers);

// console.log(maxNumber);

// #### **3. Promise**

// 1. **Masala: Promise Bilan Ma'lumot Olish**
//    - **Tushuntirish**: Sizdan `fetchData` nomli funksiya yaratish talab qilinadi. Bu funksiya berilgan URL manzilidan ma'lumot olish uchun promise qaytarishi kerak. Funksiya URL manzilini qabul qiladi va `fetch` yordamida ma'lumotlarni olishni amalga oshiradi.

// async function fetchData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`xatolik ${response.status}`);
//     }

//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error("Ma'lumot olishda xato:", error);
//     throw error;
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log("data is", data);
//   })
//   .catch((data) => console.log("error is", data));

// 2. **Masala: Promise Bilan Error Handling**
//    - **Tushuntirish**: `fetchData` funksiyasini `catch` blokidan foydalanib qayta yozing. Agar ma'lumot olish jarayonida xatolik yuzaga kelsa, bu xatolikni `console.error` yordamida foydalanuvchiga xabar berish kerak.

// async function fetchData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`xatolik ${response.status}`);
//     }

//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error("Ma'lumot olishda xato:", error);
//     throw error;
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log("data is", data);
//   })
//   .catch((data) => console.error("error is", data));

// #### **4. Async/Await**

// 1. **Masala: Async/Await Bilan Ma'lumot Olish**
//    - **Tushuntirish**: `fetchData` funksiyasini async/await yordamida qayta yozing. Bu funktsiya berilgan URL manzilidan ma'lumot olish uchun async/await sintaksisini ishlatishi kerak. Async funksiyalar promise qaytaradi va await yordamida promise'ni kutish mumkin.

// async function fetchData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`xatolik ${response.status}`);
//     }

//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error("Ma'lumot olishda xato:", error);
//     throw error;
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log("data is", data);
//   })
//   .catch((data) => console.error("error is", data));

// 2. **Masala: Async/Await Bilan Xatolikni Qo‘lga Kiritish**
//    - **Tushuntirish**: `fetchData` funksiyasida xatolikni boshqarish uchun try/catch blokidan foydalaning. Agar `fetch` jarayonida xatolik yuzaga kelsa, xatolikni tutish va `console.error` yordamida foydalanuvchiga xabar berish kerak.

// async function fetchData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`xatolik ${response.status}`);
//     }

//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error("Ma'lumot olishda xato:", error);
//     throw error;
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log("data is", data);
//   })
//   .catch((data) => console.error("error is", data));
// #### **5. Turlarni Tekshirish**

// 1. **Masala: Turlarni Tekshirish**
//    - **Tushuntirish**: `isString` va `isNumber` nomli ikkita funktsiyani yozing. `isString` funktsiyasi berilgan qiymatning string turiga ega ekanligini tekshiradi va true/false qaytaradi. `isNumber` funktsiyasi esa qiymatning number turiga ega ekanligini tekshiradi va true/false qaytaradi.

// function IsString(text : string): boolean {
//      return typeof text === "string"
// }

// function IsNUmber(number: number): boolean {
//   return typeof number === "number";
// }

// isString("sjsjsj")
// IsNUmber(565)

// 2. **Masala: Turlarni Tekshirish va Qabul Qilish**
//    - **Tushuntirish**: `processValue` nomli funktsiyani yarating. Bu funksiya berilgan qiymatning turini tekshiradi (string yoki number) va mos ravishda foydalanuvchiga xabar qaytaradi. Agar qiymat string bo‘lsa, string qiymatni, number bo‘lsa, number qiymatni qaytarishi kerak. Agar qiymat boshqa turda bo‘lsa, "Unknown value type" deb qaytarishi kerak.

// function processValue(value: string | number): string {
//   if (typeof value === "string") {
//     return `this is string ${value}`;
//   } else if (typeof value === "number") {
//     return `this is  number ${value}`;
//   } else {
//     return `unknow type`;
//   }
// }

// processValue(56);
