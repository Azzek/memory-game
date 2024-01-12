
const statsElement = document.querySelector('.stats');
const showWinElement = document.querySelector('.ShowWin');
const showLoseElement = document.querySelector('.ShowLose');
const resetWinsButton = document.querySelector('.Reset-Wins-Button');
const resetButton = document.querySelector('.resetButton');
const changeModeButton = document.querySelector('.changeModeButton');
const difficultChangePopup = document.querySelector('.difficult-change-popup');
const modeButtons = document.querySelectorAll('.mode-button');
const hamburger = document.querySelector('.hamburger');

if(hardmode) {
    document.querySelector('.stats').innerHTML = `<span class="showWinsCount">Wins=${wins ? wins : '0'}</span>
    <button class="Reset-Wins-Button">Reset Wins</button> <div class="time">Max-time:2min</div>`
} else {
    document.querySelector('.stats').innerHTML = `<span class="showWinsCount">Wins=${wins ? wins : '0'}</span>
    <button class="Reset-Wins-Button">Reset Wins</button>`
}

document.querySelector('.resetButton').addEventListener('click', () => {
    game()
    document.querySelector('.ShowWin').classList.remove('displayBlock')   
})
document.querySelector('.changeModeButton').addEventListener('click', ()=>{
    document.querySelector('.difficult-change-popup').classList.toggle('displayBlock')
})
document.querySelector('.easy-mode').addEventListener('click', ()=>  {
    modeOption = 1;
    saveToLocalStorage(modeOption)
    location.reload()
})
document.querySelector('.medium-mode').addEventListener('click', ()=>  {
    modeOption = 2;
    saveToLocalStorage(modeOption)
    location.reload()
})
document.querySelector('.hard-mode').addEventListener('click', ()=>  {
    modeOption = 3;
    saveToLocalStorage(modeOption)
    location.reload()
})
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active')
    document.querySelector('.header-right-section').classList.toggle('active')
})
document.querySelector('.Reset-Wins-Button').addEventListener('click',() => {
    wins = 0;
    saveToLocalStorage(wins)
    checkWin()
})

function stopInterval() {
    clearInterval(intervalId)
} 

function saveToLocalStorage () {
localStorage.setItem('wins', JSON.stringify(wins));
localStorage.setItem('modeOption', JSON.stringify(modeOption));
}

