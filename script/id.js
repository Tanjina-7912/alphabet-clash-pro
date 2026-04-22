function hideElementbyId(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')

    
}
function showId(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}


function getTextElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value =parseInt(elementValueText);
    return value;

}
function setTextElementValueById(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText=value;
}

function getElementTextById(elementId){
    const element =document.getElementById(elementId);
    const text =element.innerText;
    return text;
}







function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    const randomNumber=Math.random()* 25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index];
    return alphabet;
}


function handleKeyboardKeyUp(event){
    const playerPressed=event.key;
    console.log('player pressed',playerPressed);
// stop the game
if(playerPressed === 'Escape'){
    gameOver()
}



const currentAlpahbetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlpahbetElement.innerText;
const expectAlphabet=currentAlphabet.toLowerCase();
console.log(playerPressed,expectAlphabet)

// check matched or not
if(playerPressed === expectAlphabet){
    console.log('you get a point');

const currentScore=getTextElementValueById('current-score');

const updateedScore=currentScore + 1;
setTextElementValueById('current-score' ,updateedScore)







    // ----------------------------------------
//     const currentScoreElement=document.getElementById('current-score');
//     const currentScoreText=currentScoreElement.innerText;
//     const currentScore=parseInt(currentScoreText)
//     console.log(currentScore);


//  const newScore =currentScore + 1;
//  currentScoreElement.innerText=newScore;
   
    removeBackgroundById(expectAlphabet);
    continueGame()
}
else{
    console.log('you missed . you lost a life');

const currentLife =getTextElementValueById('current-life');
const updatedLife=currentLife - 1;
setTextElementValueById('current-life', updatedLife)
if(updatedLife === 0){
gameOver();
}


    // -----------------
// const currentLifeElement=document.getElementById('current-life'
// );
// const currentLifeText=currentLifeElement.innerText;
// const currentLife=parseInt(currentLifeText);
// const nemLife=currentLife -1;
// currentLifeElement.innerText =nemLife;



}
}
document.addEventListener('keyup',handleKeyboardKeyUp)









// add keyup
function handleKeyButtonPress(){
    // console.log('button pressed')
}
document.addEventListener('keyup',handleKeyButtonPress)








function continueGame(){
    const alphabet=getARandomAlphabet();
// console.log('your random alphabet',alphabet);
// set randomly alphabet
const currentAlpahbetElement=document.getElementById('current-alphabet');
currentAlpahbetElement.innerText=alphabet;
setBackgroundById(alphabet);
}


function play(){
    hideElementbyId('home-screen');
    hideElementbyId('final-score');
    showId('play-ground');
    // ?resate
setTextElementValueById('current-life',5)
setTextElementValueById('current-score',0)
    continueGame()
}
function gameOver(){
    hideElementbyId('play-ground');
    showId('final-score');

    // update score
const lastScore =getTextElementValueById('current-score')
setTextElementValueById('last-score', lastScore)
// clear last selected highlight

const  currentAlphabet=getElementTextById('current-alphabet');
removeBackgroundById(currentAlphabet);
}


