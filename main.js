// j'ai tout raté j'en suis consciente mais je travaillerais dessus a la maison, je vais m'y mettre a fond (je vais essayer) car je suis très déçue de ce que j'ai fait...

// ## Exercice 1.

// Écrivez une fonction qui prend un parametre qui vérifie si ce parametre est un nombre qui retourne vrai si c'est un nombre et faux dans le cas contraire. Vous devez utiliser [isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN) au sein de cette fonction.

// function verifIsNumber(a) {
//   if (isNaN(a)) {
//     return false;
//   } else {
//     return true
//   }
// }

// console.log(verifIsNumber("5"));

// ## Exercice 2.

// Écrivez une fonction qui prend un parametre qui vérifie si ce parametre est un booleen qui retourne vrai si c'est un booleen et faux dans le cas contraire. Vous devez utiliser `typeof` au sein de cette fonction

// function verifBoolean(a) {
//  if ( typeof(a) == Boolean ) {
//     return true
//  } else {
//     return false
//  }

// }

// console.log(verifBoolean (4));

// ## Exercice 3.

// Corriger la fonction suivante pour qu'elle retourne false.

// ```JavaScript
// function checkEqual(a,b){
//     return a == b;
// }

// checkEqual(5,"5");
// ```

// function checkEqual(a,b) {
//     return a != b
// }

// console.log(checkEqual(5,"5"));

// ## Exercice 4.

// Corriger la fonction suivante pour qu'elle retourne true

// ```JavaScript
// function checkAge(12){
//     return a > 10;
// }

// checkEqual(12);
// ```

// function checkAge(a) {
//     return a > 10;
// }
// console.log(checkAge(12));

// ## Exercice 5

// Completez la fonction suivante pour qu'elle retourne false. Vous devez utilisez un opérateur de négation

// ```JavaScript
// function isNotAdmin(a){

// }
// isNotAdmin(true);
// ```

// function isNotAdmin(a){
//     if(a ){
//         return false

// }
// }
// console.log(isNotAdmin);

// ## Exercice 6

// Écrivez une fonction JavaScript appelée `sommeChiffres` qui prend un tablau de nombres entier en entrée et retourne la somme de ses chiffres. Par exemple, si l'entrée est `[1, 2, 3]`, la fonction devrait retourner 6 (car 1 + 2 + 3 = 6).

// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

// ```JavaScript
// function sommeTableau(chiffres) {

// }

// sommeTableau([1, 2, 3]) // Retourne 6
// ``` J'AI SEULEMENT REUSSI POUR UN TABLEAU DE 3 CHIFFRES :'(

// function sommeChiffres(chiffres) {
// let tmp = [];
// for(let i = 0 ; i < chiffres.length ; i++) {
//     tmp = chiffres[0] + chiffres[i] + chiffres[i -1]
// }
// return tmp
// }

// console.log(sommeChiffres([2 ,4, 7]));

// ## Exercice 7

// Écrivez une fonction JavaScript appelée `plusGrand` qui prend un tableau de nombres en entrée et retourne le plus grand nombre du tableau.

// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

// ```JavaScript
// function plusGrand(tableau) {

// }

// plusGrand([3, 2, 6, 1, 4]) // Retourne 6

// function plusGrand(T) {
//     let tmp = [];
//  for(let i = 0; i < T.length -1; i++ ) {
//     tmp = T[i]
//  }
//  return tmp
// }

// console.log(plusGrand([2,5,4]));

// ## Exercice 8

// Écrivez une fonction JavaScript appelée `trouverPlusLongMot` qui prend une chaîne de caractères (une phrase) en entrée et retourne le mot le plus long dans la phrase. Un mot est défini comme une série de caractères séparés par des espaces.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function trouverPlusLongMot(phrase) {

// }

// compterMots("Ceci est une super phrase de test") // Retourne phrase (PAS REUSSI)

// function trouverPlusLongMot(phrase) {
//   let mot;
//   for (let i = 1; i <= phrase.length; i++) {
//     if (i - 1 == " ") {
//       mot = phrase[i];
//     }
//     return mot;
//   }
// }

// console.log(trouverPlusLongMot("Je suis Chloe"));

// ## Exercice 9

// Écrivez une fonction JavaScript appelée triCroissant qui prend un tableau de nombres en entrée et retourne le tableau trié par ordre croissant.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function triCroissant(tableau) {

// }

// triCroissant(["3, 2, 5, 6, 1"]) // retourne [1, 2, 3, 5, 6]
// ```
// PAS REUSSI

// function triCroissant(T){
// for(let i = 0; i < T.length - 1 ; i++) {
// let x = T[i];
//     for(let j = 0; j < x - 1; j++){
//         if (j > i) {
//             x = i - 1
//         }

//     }
// return x
// }
// }
// console.log(triCroissant([12, 1,2,5]));

// ## Exercice 10

// Écrivez une fonction JavaScript appelée `inverserTableau` qui prend un tableau en entrée et retourne un nouveau tableau contenant les éléments du tableau d'origine dans l'ordre inverse. Par exemple, si le tableau d'entrée est [1, 2, 3], la fonction devrait retourner [3, 2, 1].

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function inverserTableau(tableau) {

// }

// inverserTableau([1, 2, 3]) // retourne [3, 2, 1]
// ```
// PAS REUSSI

// function inverserTableau(T) {
// let tmp = T;
//   for(let i = 0 ; i < T.length ; i++) {
//      T[0] = T[i];
//      T[i] = T[0]
//   }
//   return tmp
//   }

//   console.log(inverserTableau([1,2 ,3]));

// ## Exercice 11

// Écrivez une fonction JavaScript appelée `aDesDoublons` qui prend un tableau de mots en entrée et retourne `true` si le tableau contient des éléments en double (doublons), sinon retourne `false`.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function aDesDoublons(tableau) {}

// aDesDoublons(["mot", "stylo", "phrase", "mot", "jogging"]) // retourne true

// aDesDoublons(["mot", "stylo", "phrase", "jogging"]) // retourne false
// ```

// function aDesDoublons(T) {
//     for(let i = 0; i < T.length; i++) {
//         i
//     }
// }

// ## Exercice 12

// Écrivez une fonction JavaScript appelée `produitTableau` qui prend un tableau de nombres en entrée et retourne le produit de tous les éléments du tableau.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function produitTableau(tableau) {

// }

// produitTableau([2, 3, 6]) // retourne 36
// PAS REUSSI
// function produitTableau(T) {
//     let nmb = [];
//     let nmb2 = T[i]
//     for(let i = 0; i < T.length ; i++) {
//          nmb = T[0] * T[i - 1]

//      nmb2 = nmb * T[i -1]
// }

//     return nmb2
// }

// console.log(produitTableau([2,4,5]));

// ## Exercice 13

// Écrivez une fonction JavaScript appelée `rechercherElement` qui prend un tableau et un élément en entrée, puis retourne true si l'élément est présent dans le tableau, sinon retourne false.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function rechercherElement() {

// }

// rechercherElement(["chaise", "table", "vase"], "table") // retourne true
// rechercherElement(["chaise", "table", "vase"], "plateau") // retourne false
// ```
//PAS REUSSI
// function rechercherElement(T,a) {

// }

// ## Exercice 14

// Écrivez une fonction JavaScript appelée `fusionnerTableaux` qui prend deux tableaux en entrée et retourne un nouveau tableau qui est la fusion des deux tableaux d'origine.

// Vous devez utiliser des boucles `for`.

// ```JavaScript
// function fusionnerTableaux(tableau1, tableau2) {

// }

// fusionnerTableaux([2, 3, 4], [1, 2, 5]) // retourne [2, 3, 4, 1, 2, 5]
// ```

// function fusionnerTableaux(T, T) {

//     for(let i = 0; i < T.length ; i++) {

// }
// }
