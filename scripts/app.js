const diceBtn = document.querySelector('.roll-dice--container');
const adviceParagraph = document.querySelector('.main--container__advice');
const BtnCopyClipboard = document.querySelector('.copy-clipboard__image');

const rollDice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => {
      console.log(res);
      if (!res.ok) return;
      return res.json();
    })
    .then((data) => {
      adviceParagraph.textContent = data.slip.advice;
    });
};

diceBtn.addEventListener('click', rollDice);
BtnCopyClipboard.addEventListener('click', function () {
  const adviceText = adviceParagraph.textContent;
  navigator.clipboard.writeText(adviceText);
});
