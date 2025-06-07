// Fonction pour ajouter la case "autre" dans le formulaire à la sélection du sujet "Autre..."

const selectElement = document.querySelector("#object-select");
const zoneAutre = document.querySelector("#autre");

selectElement.addEventListener("change", function () {
  if (this.value === "autre") {
    // Permet de faire afficher le input lorsque l'utilisateur sélectionne "Autre" en option
    zoneAutre.style.display = "block";
  } else {
    // Permet de retirer le champ si l'utilisateur sélectionne une autre option.
    zoneAutre.style.display = "none";
    // Permet de récupérer la valeur taper dans le input et de le supprimer si l'utilisateur sélectionne une autre option.
    document.getElementById("exampleFormControlInput1").value = "";
  }
});