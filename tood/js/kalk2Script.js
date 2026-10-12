function jookideValik(){
    let vastus2=document.getElementById('vastus2')
    let joogiValik=document.getElementById('joogiValik')
    let kogus=document.getElementById('kogus')
    const kohv= 1.50;
    const cola= 2.20;
    const fanta= 2.20;

    if(joogiValik.selectedIndex==1){
        vastus2.innerHTML='Kohvi hind on '+kogus.value*kohv+'€'
        vastus2.style.color="brown"
    }
    if(joogiValik.selectedIndex==2){
        vastus2.innerHTML="Vesi on tasuta!"
        vastus2.style.color="blue"
    }
    if(joogiValik.selectedIndex==3){
        vastus2.innerHTML='Coca-Cola hind on '+kogus.value*cola+'€'
        vastus2.style.color="black"
    }
    if(joogiValik.selectedIndex==4){
        vastus2.innerHTML='Fanta hind on '+kogus.value*fanta+'€'
        vastus2.style.color="orange"
    }
}