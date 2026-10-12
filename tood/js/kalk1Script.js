function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik");//mittu elemendi ühe nimega
    let arv=document.getElementById("arv");
    const toll=39.37;
    const meeter=0.0254;
    //tsükel
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value=="meeter"){
                vastus.innerHTML=arv.value+' meetri = '+arv.value*toll+' tolli';
                vastus.style.color="green";
                vastusePilt.src="../images/toll.png"
            }
            else if (valik[i].value=="tolli"){
                vastus.innerHTML=arv.value+' tolli = '+arv.value*meeter+' meetri';
                vastus.style.color="red";
                vastusePilt.src="../images/meter.png"
            }
            else{
                vastus.innerHTML="Vali ühiku - kas meeter või toll"
            }
        }
    }
}