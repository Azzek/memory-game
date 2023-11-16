
const cellsContainer = document.querySelector('.cells-container');

let options = [
    {
    optionName:'Speedwagon',
    Image:'',
    },{
    optionName:'Speedwagon',
    Image:'',
    },{
    optionName:'Capibara',
    Image:'',
    },{
    optionName:'Capibara',
    Image:'',
    },,{
    optionName:'Kaczka',
    Image:'',
    },{
    optionName:'Kaczka',
    Image:'',
    },{
    optionName:'Asuna',
    Image:'',
    },{
    optionName:'Asuna',
    Image:'',
    },{
    optionName:'Shoko',
    Image:'',
    },{
    optionName:'Shoko',
    Image:'',
    },{
    optionName:'Yumeko',
    Image:'',
    },{
    optionName:'Yumeko',
    Image:'',
    },{
    optionName:'Hayase',
    Image:'',
    },{
    optionName:'Hayase',
    Image:'',
    },{
    optionName:'Mai',
    Image:'',
    },{
    optionName:'Mai',
    Image:'',
    },
]
          
 let randomizeOptions  = shuffleArray(options);

 let cellHTML = ``;

randomizeOptions.forEach(option => {
    cellHTML +=`
    <div class="cell js-cell-${option.optionName}" data-name=${option.optionName}><h1>${option.optionName}</h1></div>
    `
});

document.querySelector('.cells-container').innerHTML = cellHTML;


const cells = document.querySelectorAll('.cell');
        
let showedCellsList = []

let hitOptions = [];

cells.forEach((cell, i) => {
    cell.classList.add('lol')
    cell.addEventListener('click', () =>{

        const name = cell.dataset.name
        
        showedCellsList.push(name)
        cell.classList.remove('lol')
        if(showedCellsList.length === 2) {
            if(showedCellsList[0] !== showedCellsList[1]) {
                showedCellsList.forEach((option) => {
                 document.querySelectorAll(`.js-cell-${option}`).forEach((item) => {
                 item.classList.add('lol')
                })
                })
                 showedCellsList = []
            } else if(showedCellsList[0] === showedCellsList[1]){
                console.log('lol')
                hitOptions.push(showedCellsList)
                hitOptions.forEach((hitOption) => {
                document.querySelectorAll(`.js-cell-${hitOption}`).forEach((item) => {
                    item.classList.remove('lol')

                })
                })
                showedCellsList = [];
            }
        }
    })
})



function checkHitDoube() {
    for(let i = 0;  i < showedCellsList.length; i++) {
        for(let j = i+1; j < showedCellsList.length; j++) {

            if(showedCellsList[i] === showedCellsList[j]){

                return true;
            }
        }
    }
    return false
}


    
        
function shuffleArray(array) {

    function compareRandom() {
      return Math.random() - 0.5;
    }

    return array.sort(compareRandom);
  }
    



//




