// klassikaline funktsioon
function minuNimi() {
    console.log("Dominic Kekkonen klassilinefunk");
}
minuNimi();

// noolefunktsioon
const minuNimi2 = () => console.log("Dominic Kekkonen noolefunk");
minuNimi2();

const now = new Date();
const paev=now.getDate(); // tagastab päeva
const kuu= now.getMonth()+1; // tagastab kuu 0-11
const aasta=now.getFullYear(); // tagastab aasta
function kuupaevEesti (){
    console.log(paev+"."+kuu+"."+aasta);
}
kuupaevEesti();