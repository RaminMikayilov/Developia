/*

Verilmiş istənilən cümlənin daxilində
ən çox istifadə olunan simvolu tapan proqram yazmaq.

Qeyd:
Yazdığın proqram istənilən cümlənin daxilində
olan ən çox istifadə olunan simvolun sayınıda
həmçinin tapmalıdır və bu məlumatları konsolda göstərməlidir.

*/

const symbolCounter = (str) => {
  const strObj = {};
  let maxCount = 0;
  let maxSymbol = "";

  // daha əvvəl təkrarlanan simvol ilə qarşılaşsaq üsdünə 1 gəlirik 
  // ilk dəfə qarşılaşsaq 1-ə = edirik
  for (let symbol of str) {
    strObj[symbol] = strObj[symbol] + 1 || 1;
  }

  for (let key in strObj) {
    if (strObj[key] > maxCount) {
      maxCount = strObj[key];
      maxSymbol = key;
    }
  }

  // en cox istifade olunan bosluq da ola biler
  console.log(`ən çox istifadə olunan simvol: ${maxSymbol} sayi: ${maxCount}`);
};

let sentence = 'adfshiu o vhuticndjyoirjoier jrociewuiqhvruewi';

symbolCounter(sentence);
