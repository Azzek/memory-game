const cellsContainer = document.querySelector('.cells-container');
modeOption = JSON.parse(localStorage.getItem('modeOption')) ||  1;
let winCondition = 0; 
let options = []
let hardmode = false;
let gameTimeS = 0;
let gameTimeM = 0;
let intervalId;
let wins = JSON.parse(localStorage.getItem('wins')) || 0;


switch (modeOption) {
    case 1:
        document.querySelector('.cells-container').style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        document.querySelector('body').style.paddingTop = "100px"
        winCondition = 8;
     options = [
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
break;

case 2:
    document.querySelector('.cells-container').style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
    document.querySelector('body').style.paddingTop = "150px"
    winCondition = 15;
     options = [
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
    },{
    optionName:'Vladilena',
    Image:'resources/vladilena.jpg'
    },{
    optionName:'Vladilena',
    Image:'resources/vladilena.jpg'
    },{
    optionName:'cynthia',
    Image:'resources/syntiaPokemon.webp'
    },{
    optionName:'cynthia',
    Image:'resources/syntiaPokemon.webp'
    },{
    optionName:'nami',
    Image:'resources/nami.jpg'
    },{
    optionName:'nami',
    Image:'resources/nami.jpg'
    },{
    optionName:'delta',
    Image:'resources/delta.jpg'
    },{
    optionName:'delta',
    Image:'resources/delta.jpg'
    },{
    optionName:'erotwo',
    Image:'resources/erotwo.png'
    },{
    optionName:'erotwo',
    Image:'resources/erotwo.png'
    },{
    optionName:'rem',
    Image:'resources/rem.jpg'
    },{
    optionName:'rem',
    Image:'resources/rem.jpg'
    },{
    optionName:'mallow',
    Image:'resources/mallow.jpg'
    },{
    optionName:'mallow',
    Image:'resources/mallow.jpg'
    }
]
break;

case 3:



hardmode = true;
document.querySelector('.cells-container').style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
document.querySelector('body').style.paddingTop = "150px"
winCondition = 15;
options = [
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
    },{
    optionName:'Vladilena',
    Image:'resources/vladilena.jpg'
    },{
    optionName:'Vladilena',
    Image:'resources/vladilena.jpg'
    },{
    optionName:'cynthia',
    Image:'resources/syntiaPokemon.webp'
    },{
    optionName:'cynthia',
    Image:'resources/syntiaPokemon.webp'
    },{
    optionName:'nami',
    Image:'resources/nami.jpg'
    },{
    optionName:'nami',
    Image:'resources/nami.jpg'
    },{
    optionName:'delta',
    Image:'resources/delta.jpg'
    },{
    optionName:'delta',
    Image:'resources/delta.jpg'
    },{
    optionName:'erotwo',
    Image:'resources/erotwo.png'
    },{
    optionName:'erotwo',
    Image:'resources/erotwo.png'
    },{
    optionName:'rem',
    Image:'resources/rem.jpg'
    },{
    optionName:'rem',
    Image:'resources/rem.jpg'
    },{
    optionName:'mallow',
    Image:'resources/mallow.jpg'
    },{
    optionName:'mallow',
    Image:'resources/mallow.jpg'
    }
]
break;

default:
    options = options = [
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
}


let cellHTML = ``;
function generateGameboardHTML(){
let randomizeOptions  = shuffleArray(options);
cellHTML = ``;
randomizeOptions.forEach(option => {
    cellHTML +=`
    <div class="cell js-cell-${option.optionName}" data-name=${option.optionName}><img class="cell-img" src="${option.Image}"/></div>
    `
});
cellsContainer.innerHTML = cellHTML
}

function shuffleArray(array) {
    function compareRandom() {
      return Math.random() - 0.5;
    }
    return array.sort(compareRandom);
  }
 
  function game() {
    generateGameboardHTML()
    if (hardmode) {
        intervalId = setInterval(() => {
            gameTimeS++;
            document.querySelector('.stats').innerHTML = `<span class="showWinsCount">Wins=${wins ? wins : '0'}</span>
            <button class="Reset-Wins-Button">Reset Wins</button> <div class="time">Time: ${gameTimeM}:${gameTimeS<10 ? 0 : ''}${gameTimeS}</div>`
            if(gameTimeS === 60) {
                gameTimeM++;
                gameTimeS = 0;
            } if (gameTimeM == 2) {
                document.querySelectorAll('.cell').forEach(item => {
                    item.innerHTML = `<img src="resources/Winninggif.gif"></img>`
                    cells.forEach((cell) => {
                        cell.classList.add('non-pointer-events')
                    })
             })
             document.querySelector('.ShowLose').classList.remove('displayNone');
             clearInterval(intervalId)
            }
            
        },1000)
    }   
    const cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {
        cell.classList.add('item')
        cell.addEventListener('click', () => {
            cell.classList.add("cellOpen")
            console.log(options.length)
            if(document.querySelectorAll(".cellOpen").length > 1) {
                setTimeout(()=>{
                    if(document.querySelectorAll(".cellOpen")[0].innerHTML == document.querySelectorAll(".cellOpen")[1].innerHTML) {
                        document.querySelectorAll(".cellOpen")[1].classList.add("matchCells")
                        document.querySelectorAll(".cellOpen")[0].classList.add("matchCells")

                        document.querySelectorAll(".cellOpen")[1].classList.remove("cellOpen")
                        document.querySelectorAll(".cellOpen")[0].classList.remove("cellOpen")
                        console.log(document.querySelectorAll('.matchCells').length)
                    }   else {
                        document.querySelectorAll(".cellOpen")[1].classList.remove("cellOpen")
                        document.querySelectorAll(".cellOpen")[0].classList.remove("cellOpen")
                        }    
                        if(document.querySelectorAll('.matchCells').length == options.length) { 
                        document.querySelector('.ShowWin').classList.add('displayBlock')
                        wins += 1;
                        document.querySelectorAll('.cell').forEach(item => {
                        item.innerHTML = `<img src="resources/Winninggif.gif"></img>`
                         });
                         
                         stopInterval()
                         saveWinsToLocalStorage (wins)                
                        } 
                },500)
            }
        })
    })
    
}
  
generateGameboardHTML()
game()

