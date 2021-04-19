// const squere = function (x) {
//   return x * x;
// };

// // const squereArrow = (x) => {
// //   return x * x;
// // };

// const squereArrow = (x) => x * x;

// console.log(squereArrow(9));

const userName = 'Gaweł Bald';

const getFirstName = (name) => {
  return name.split(' ')[0];
};

const getFirstNameShort = (name) => name.split(' ')[0];

console.log(getFirstName(userName));
console.log(getFirstNameShort(userName));
