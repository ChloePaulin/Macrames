const changeNameButton = document.getElementById("personalization");

const anonymousName = document.getElementById("name_person");

changeNameButton.addEventListener ("click",(changeName)=>{
        anonymousName.textContent = prompt("Saisissez votre prénom :");
    }
);
