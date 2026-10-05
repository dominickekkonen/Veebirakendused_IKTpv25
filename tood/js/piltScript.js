// juhuslik pilt mida võietakse massiivist
function juhuslikPilt() {
    pildid=[
        '../images/smile.png',
        '../images/neutral.png',
        '../images/kurb.png',
        '../images/lill.png'
    ]
    const randomPilt=document.getElementById('randomPilt');
    const pilt=pildid[Math.floor(Math.random()*pildid.length)]
    //Math.floor = ümardab täisarvuni
    //Math.random = juhuslik arv
    randomPilt.src=pilt;
}