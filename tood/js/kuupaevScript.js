const now = new Date();
const paev=now.getDate(); // tagastab päeva
console.log("Tänane päev "+paev+"päev");
const kuu= now.getMonth()+1; // tagastab kuu 0-11
console.log("Praegune kuu number on "+kuu);
const aasta=now.getFullYear(); // tagastab aasta
console.log("Praegune aasta on "+aasta);
const nadalapaev=now.getDay(); //0-6, kus on 0-pühapäev
console.log("Nadalapäeva number on "+nadalapaev);
function tana (){
console.log("Täna on "+paev+"."+kuu+"."+aasta);
}
tana();
// lisa veel getHours() , getMinutes() ja veel func mis näitab aeg
const tund=now.getHours();
const minutes=now.getMinutes();
function aeg(){
    let vastus2=document.getElementById("vastus2");
    vastus2.innerHTML="Praegu on "+tund+":"+minutes;
}
// mittu päeva konsultatsiooni nädalani
const kons=new Date(2026,10,2);
const vahe=kons.getTime()-now.getTime();
const konspaev=vahe/(1000*60*60*24);//sekundid, minutid, tunnid, päevad
console.log("Konsultatsiooni nädalani "+konspaev.toFixed(0)+" päeva");

function konsultatsiooni(){
    let vastus3=document.getElementById("vastus3");
    vastus3.innerHTML="On jaanud "+konspaev.toFixed(0)+" päeva"
}