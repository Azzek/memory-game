let wins = JSON.parse(localStorage.getItem('wins'))

document.querySelector('.stats').innerHTML = `<span class="showWinsCount">Wins=${wins ? wins : '0'}</span>
<button class="Reset-Wins-Button">Reset Wins</button>`
const cellsContainer = document.querySelector('.cells-container');

document.querySelector('.ShowWin').classList.add('displayNone')


          
 let randomizeOptions  = shuffleArray(options);

 let cellHTML = ``;

randomizeOptions.forEach(option => {
    cellHTML +=`
    <div class="cell js-cell-${option.optionName}" data-name=${option.optionName}><img src="${option.Image}"/></div>
    `
});

document.querySelector('.cells-container').innerHTML = cellHTML;

const cells = document.querySelectorAll('.cell');
        
let showedCellsList = []

let hitOptions = [];

let gameRunning;
cells.forEach((cell, i) => {

    cell.classList.add('active')
    cell.classList.add('non-pointer-events');

    cell.addEventListener('click', () =>{

        const name = cell.dataset.name
        cell.classList.add('non-pointer-events')
        showedCellsList.push(name)
        cell.classList.remove('active')
        
        if(showedCellsList.length === 2) {
            if(showedCellsList[0] !== showedCellsList[1]) {
                cells.forEach((cell) => {
                    cell.classList.add('non-pointer-events')
                })
                
                setTimeout(()=>{
                    showedCellsList.forEach((option) => {
                    document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                    item.classList.add('wrong')
                    })})
                },500)
                setTimeout(() => {
                    showedCellsList.forEach((option) => {
                    document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                    item.classList.remove('wrong')
                    item.classList.add('active')
                    })
                })
                cells.forEach((cell) => {
                    cell.classList.remove('non-pointer-events')
                })

                hitOptions.forEach((option)=>{
                    document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                        item.classList.add('non-pointer-events')
                    })
                })

                 showedCellsList = []
                 
                },1500)
                
            } else if(showedCellsList[0] === showedCellsList[1]){
                cells.forEach((cell) => {
                    cell.classList.add('non-pointer-events')
                })
                setTimeout(()=>{
                    showedCellsList.forEach((option) => {
                    document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                    item.classList.add('correct')
                    })})
                },200)
                setTimeout(() => {
                showedCellsList.forEach((option) => {
                document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                    item.classList.remove('correct')
                    showedCellsList = [];
                })
                })
                cells.forEach((cell) => {
                    cell.classList.remove('non-pointer-events')
                })
                hitOptions.forEach((option)=>{
                    document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                        item.classList.add('non-pointer-events')
                    })
                })
                },900)

                hitOptions.push(showedCellsList)
                hitOptions.forEach((hitOption) => {
                document.querySelectorAll(`.js-cell-${hitOption}`).forEach((item) => {
                    item.classList.remove('active')
                })
                
                })
               
                checkWin()
            }
        }
    })
})

// CORE CORE GAME CORE 


// BUTTONS EVENT LISTENERS BUTTONS EVENT LISTENERS
// BUTTONS EVENT LISTENERS BUTTONS EVENT LISTENERS

document.querySelector('.startgameButton').addEventListener('click', ()=>{
    startGame()
})
document.querySelector('.resetButton').addEventListener('click', ()=> {
    location.reload()
    gameRunning = false;
    
})
document.querySelector('.changeModeButton').addEventListener('click', ()=>{
    document.querySelector('.difficult-change-popup').classList.toggle('displayBlock')
})
document.querySelector('.easy-mode').addEventListener('click', ()=>  {
    modeOption = 1;
    saveWinsToLocalStorage(modeOption)
    location.reload()
})
document.querySelector('.medium-mode').addEventListener('click', ()=>  {
    modeOption = 2;
    saveWinsToLocalStorage(modeOption)
    location.reload()
})
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active')
    document.querySelector('.header-right-section').classList.toggle('active')
})
// BUTTONS EVENT LISTENERS BUTTONS EVENT LISTENERS
// BUTTONS EVENT LISTENERS BUTTONS EVENT LISTENERS


// FUNCTIONS FUNCTIONS  FUNCTIONS 
// FUNCTIONS FUNCTIONS  FUNCTIONS 
    function startGame() {
        if(!gameRunning){
            document.querySelectorAll('.cell').forEach((cell) => {
            cell.classList.add('non-pointer-events');
            cell.classList.remove('active')
            setTimeout(() => {
                cell.classList.add('active')
                cell.classList.remove('non-pointer-events');
            }, 2000);

        })
        gameRunning = true;
    }
    }

    function checkWin(){
        if(hitOptions.length === winCondition) {
            document.querySelector('.ShowWin').classList.remove('displayNone')
            wins += 1;
             saveWinsToLocalStorage (wins)
             document.querySelectorAll('.cell').forEach(item => {
                    item.innerHTML = `<img src="resources/Winninggif.gif"></img>`
             });
             
             
        } 
        
    }

    document.querySelector('.Reset-Wins-Button').addEventListener('click',() => {
        wins = 0;
        saveWinsToLocalStorage (wins)
        checkWin()
    })
        
function shuffleArray(array) {

    function compareRandom() {
      return Math.random() - 0.5;
    }

    return array.sort(compareRandom);
  }
    

  function saveWinsToLocalStorage () {
    localStorage.setItem('wins', JSON.stringify(wins));
    localStorage.setItem('modeOption', JSON.stringify(modeOption));
  }


// FUNCTIONS FUNCTIONS  FUNCTIONS 
// FUNCTIONS FUNCTIONS  FUNCTIONS 

