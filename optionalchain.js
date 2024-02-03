//option chaining  ?.
// to acc//undefined and null
const person = {
  name: 'John',
};
if (person.address && person.address.city) {
  console.log(person.address.city);
}
console.log(person?.address?.city);
const user = {};
console.log(user?.name);
