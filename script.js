let wins = 0

const cellsContainer = document.querySelector('.cells-container');

document.querySelector('.ShowWin').classList.add('displayNone')

let options = [
    {
    optionName:'Speedwagon',
    Image:'resources/speedwagon.jpg',
    },{
    optionName:'Speedwagon',
    Image:'resources/speedwagon.jpg',
    },{
    optionName:'Capibara',
    Image:'resources/capibara.jpg',
    },{
    optionName:'Capibara',
    Image:'resources/capibara.jpg',
    },{
    optionName:'Sylphie',
    Image:'resources/Syphiette.jpg',
    },{
    optionName:'Sylphie',
    Image:'resources/Syphiette.jpg',
    },{
    optionName:'Asuna',
    Image:'resources/asuna.jpg',
    },{
    optionName:'Asuna',
    Image:'resources/asuna.jpg',
    },{
    optionName:'Shoko',
    Image:'resources/Shoko.jpg',
    },{
    optionName:'Shoko',
    Image:'resources/Shoko.jpg',
    },{
    optionName:'Yumeko',
    Image:'resources/yumeko.jpg',
    },{
    optionName:'Yumeko',
    Image:'resources/yumeko.jpg',
    },{
    optionName:'Hayase',
    Image:'resources/hayase.jpg',
    },{
    optionName:'Hayase',
    Image:'resources/hayase.jpg',
    },{
    optionName:'Mai',
    Image:'resources/Mai.png',
    },{
    optionName:'Mai',
    Image:'resources/Mai.png',
    },
]
          
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
                },700)
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
                 showedCellsList = []
                },1500)
            } else if(showedCellsList[0] === showedCellsList[1]){
                console.log('active')
                hitOptions.push(showedCellsList)
                hitOptions.forEach((hitOption) => {
                document.querySelectorAll(`.js-cell-${hitOption}`).forEach((item) => {
                    item.classList.remove('active')
                    console.log('nice')
                })
                })
                showedCellsList = [];
                checkWin()
                console.log(hitOptions.length)
            }
        }
    })
})

document.querySelector('.startgameButton').addEventListener('click', ()=>{
    startGame()
})
document.querySelector('.resetButton').addEventListener('click', ()=> {
    location.reload()
    gameRunning = false;
    
})


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
        if(hitOptions.length === 8) {
            document.querySelector('.ShowWin').classList.remove('displayNone')
            wins++
             saveWinsToLocalStorage ()
        } 
    }
        
function shuffleArray(array) {

    function compareRandom() {
      return Math.random() - 0.5;
    }

    return array.sort(compareRandom);
  }
    

  function saveWinsToLocalStorage () {
    localStorage.setItem('Wins', wins)
  }




