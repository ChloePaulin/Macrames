// Fonction page index.html pour changer le prénom du visiteur
const changeNameButton = document.getElementById("personalization");

const anonymousName = document.getElementById("name_person");

changeNameButton.addEventListener("click",(changeName)=>{
        return anonymousName.textContent = prompt("Saisissez votre prénom :");
    }
);