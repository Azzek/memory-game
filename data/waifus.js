modeOption = JSON.parse(localStorage.getItem('modeOption')) ||  1;
let winCondition = 0; 

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

switch (modeOption) {
    case 1:
        document.querySelector('.cells-container').style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
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