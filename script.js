let input = document.querySelector(".field__input");
let btn = document.querySelector(".field__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);


// btn.addEventListener('submit', (evt) => {
//    evt.preventDefault();
//    console.log('hu');
// })

btn.onclick = function (evt) {
   evt.preventDefault();
   userNum = input.value;


   if (userNum > randNum) {
      check.textContent = "Пока что не угадали ...";
      help.textContent = "Многовато будет ...";
      item++;
      count.textContent = item;
   } else if (userNum < randNum) {
      check.textContent = "Пока что не угадали ...";
      help.textContent = "Маловато будет ...";
      item++;
      count.textContent = item;
   } else {
      check.textContent = "Поздравляю, вы угадали !!!";
      help.textContent = "В самую точку !!!";
      item++;
      count.textContent = item;
   }
};