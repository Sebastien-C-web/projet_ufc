
async function upcomming() {
    let titre1 = document.getElementById("title1");
    let titre2 = document.getElementById('title2');
    let upcom1 = document.getElementById('upcoming1');
    let upcom2 = document.getElementById('upcoming2');
    let date = new Date;
    let today = date.toISOString();
    let tab = [];
    const REPONSE = await fetch("date_combat_ufc.json");
    const SOON = await REPONSE.json();
    for (k=0; k < SOON.length; k++) {
        if (SOON[k].DateTime > today ) {
        tab.push({title: SOON[k].Name, Date: SOON[k].DateTime})
    }        
    }
    console.log(tab)
    titre1.innerHTML = tab[0].title;
    upcom1.innerHTML = "Le prochain match vous attends le : "+ tab[0].Date.replace("T", " à ") + ".\nPrenez une place ! C'est pas si cher que ça !";
    titre2.innerHTML = tab[1].title;
    upcom2.innerHTML = "Le match d'encore après vous attends le : "+ tab[1].Date.replace("T", " à ") + ".\nCelui là, il va vous couter un bras !";    
}
upcomming();
