// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    
        var dateNow = new Date();
        var hour = dateNow.getHours();
        var minute = dateNow.getMinutes();
        var second = dateNow.getSeconds();
    
        var SDeg = second * 6;
    
        AIGUILLESEC.style.transform = `rotate(${SDeg}deg)`; // 'rotate('+ seDeg + 'deg)';
        var MDeg = (minute * 6) + (0.1 * second);
        AIGUILLEMIN.style.transform = `rotate(${MDeg}deg)`;
        var HDeg = (hour * 30) + (0.5 * minute);
        AIGUILLEHR.style.transform = `rotate(${HDeg}deg)`;


}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

