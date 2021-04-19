// const add = (a, b) => {
//   //   console.log(arguments);
//   return a + b;
// };

// console.log(add(23, 2));

// const user = {
//   name: 'Paweł',
//   cities: ['NY', 'Opole', 'BSK'],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//   },
// };

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
