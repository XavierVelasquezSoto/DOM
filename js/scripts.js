// todo los elementos que se guarden en html, sea un texto+Elements    const tittleElement

//const tittleElement = document.getElementById('title');
//const containerElement = document.getElementById('container');
/* 
tagName --> nombre de la etiqueta
id --> el id
classlist --> array con las clases que tenga el elemento
children --> hijos que tenga el elemento ( si tiene)
textContent -> El texto dentro de la etiqueta
// DOM TRAVERSING
parentElement -> te coloca en el padre del elemento
nextElementSibling -> te coloca en el hermano siguiente al elemento
previusElementssibling -> te coloca en el hermano anterior al elemento
children -> hijos que tenga el elemento (si tiene)
*/

//console.log(tittleElement);
//console.log(containerElement.classList[1]);
//console.log(tittleElement.previousElementSibling.previousElementSibling);

const h3Element = document.getElementById('start-point');

/* Soy un H3 con el id start-point y la clase start, mi hermano mediano es un H2 con el id main-subtitle y las clases subtitle y subtitle--big, tiene el texto "Soy un subtitulo".
Mi hermano mayor es un H1 con el id main-title y las clases titles y title--big, tiene el texto "Soy un título" 
Mi padre es un HEADER con el id header y la clase header */

console.log(`Soy ${h3Element.tagName} con el id ${h3Element.id} y la clase ${h3Element.classList[0]}`);
