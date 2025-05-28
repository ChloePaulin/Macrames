const changeNameButton = document.getElementById("personalization");

const anonymousName = document.getElementById("name_person");
console.log(anonymousName);

changeNameButton.addEventListener ("click",(changeName)=>{
        anonymousName.textContent = prompt("Saisissez votre prénom :");
    }
);