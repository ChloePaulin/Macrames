// Fonction executée lors de l'utilisation du clic droit.
const allImages = document.querySelectorAll("img");
for (image of allImages){
image.addEventListener("contextmenu",function(e)
{
e.preventDefault()
alert("Click détecté")
return false
});
}