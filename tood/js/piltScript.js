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
function selectValik(){
    let vastus=document.getElementById('vastus')
    let valik=document.getElementById('valik')
    let randomPilt=document.getElementById('randomPilt')
    if(randomPilt.getAttribute('src')==valik.value){
        vastus.innerHTML="ÖIGE";
        vastus.style.color="green";
    }
    else{
        vastus.innerHTML="VALE";
        vastus.style.color="red"
    }
}
function radioValik() {
    let piltValik=document.getElementsByName("piltValik") //Mittu elemendi ühe nimega
    let valitudPilt=document.getElementById("valitudPilt")
    for(let i=0;i<piltValik.length;i++){
        if(piltValik[i].checked){
            valitudPilt.src = piltValik[i].value;
        }
    }
    //vastus
    vastus2.innerHTML = "Valik: " + valik;
    vastus2.style.backgroundColor = "lightyellow";
    return valik;
}