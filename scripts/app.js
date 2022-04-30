const diceBtn = document.querySelector('.roll-dice--container');
const adviceParagraph = document.querySelector('.main--container__advice');
const BtnCopyClipboard = document.querySelector('.copy-clipboard__image');

const rollDice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => {
      if (!res.ok) throw new Error('There is something wrong! Please try again!'); 
      return res.json();
    })
    .then((data) => {
      adviceParagraph.textContent = data.slip.advice;
    }).catch((error) => {
      adviceParagraph.textContent = error.message; 
})
};

diceBtn.addEventListener('click', rollDice);
BtnCopyClipboard.addEventListener('click', function () {
  const adviceText = adviceParagraph.textContent;
  navigator.clipboard.writeText(adviceText);
});
