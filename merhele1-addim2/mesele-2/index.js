/*

Verilmiş istənilən cümlənin daxilində olan sözlərin sayını tapan proqram yazmaq.
Cümlənin daxilində sözlərin arasında istifadə olunan ayırıcılar bunlar ola bilər.
-Boşluq
-Vergül
-Nöqtə

*/

function splitString(str) {
  // vergul ve noqteni bosluga cevirdim ilk once , sonra bosluq olan hisseleri parcaladim
  const arrayOfStrings = str.replace(/\,/g," ").replace(/\./g," ").split(" ");

  console.log("Cumledeki sozlerin sayi: ", arrayOfStrings.length);
}

splitString("Karabagh is Azerbaijan");
splitString("Karabagh is.Azerbaijan");
splitString("Baku,is,the capital.and largest city of Azerbaijan");
