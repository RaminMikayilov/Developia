/*

Bu addımları et:

1. 1000 elementli massiv yaratmaq.

2. Massivin daxilini təsadüfi ədədlərlə doldurmaq.
(Təsadüfi ədədlərin seçim aralığı 1-dən 100-ə kimi olmalıdır).

3. Massivin daxilini təsadüfi ədədlərlə doldurduqdan sonra,
massivin daxilində hər ədəddən neçə ədəd olduğunu tapmaq.
Yəni, 1 ədədindən neçə dənə, 2 ədədindən neçə dənə, ... , 100 ədədindən
neçə dənə olmasını tapmaq.

*/

let array = [];

for (let i = 0; i < 1000; i++) {
  let randomNumber = Math.floor(Math.random() * 101);
  array[i] = randomNumber;
}

function Count(array, value) {
  return array.filter((val) => val == value).length;
}

for (let j = 0; j <= 100; j++) {
  console.log(j + " - " + Count(array, j) + " dene");
}
