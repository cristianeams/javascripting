var pets = ['cat', 'dog', 'rat'];
//create all array items in plural
for (var i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);