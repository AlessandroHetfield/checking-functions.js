
/* En las funciones es un poquito distinto porque no es necesario declarar los valores hasta el mero incio
La realidad de esto es que en la linea 163 se declaran tal cual y las operaciones se llevan a cabo en dichas funciones. */

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael' , 'Steven', 'Peter'];
console.log (friends);

const years = new Array (1991, 1984, 2000, 2020);
console.log (friends[0]);
console.log (friends[2]);

console.log (friends.length);
console.log (friends[friends.length - 1]);

friends[2] = 'Alejandro'; // We can mutate all dates
console.log (friends);

const firstName = 'jonas';
const jonas = (firstName, 'Schmetdmann', 2037 - 1991, 'teacher', friends);
console.log (jonas);
console.log(jonas.length);

//Exercise
const calAge = function (birthYear) {
    return 2037 - birthYear;
}
