// function changeColorInYellow(){
//   document.getElementById('text').style.color = "yellow";
// }
// function changeColorInGreen(){
//   document.getElementById('text').style.color = "green";
// }
// function changeColorInBlue(){
//   document.getElementById('text').style.color = "#007BFF";
// }
/***************** Correction Agnès ***********************
création d'une fonction qui affiche un chamgemnt de couleur appliqué
à laquelle est passée deux paramètres (id et color)*/
function displayChangeColor(color){
  /*avec la méthode getElementById sont ciblés les éléments
  du document html associés à la fonction displayChangeColor
  sont passés en arguments l'ID des balises html et une couleur,
  color est ici bien une variable et non une propriété, la propriété de style
  est ici .style.color  qui s'appliquera la variable, ex "green" interprétable
  par la méthode et la propriété de style*/
  document.getElementById('paragraphes').style.color = color;
}
