
const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
}
document.querySelector('.diceImage1').setAttribute('src',`img/dice${randomNumber()}.png`);
document.querySelector('.diceImage2').setAttribute('src',`img/dice${randomNumber()}.png`);
