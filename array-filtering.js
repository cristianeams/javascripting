var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//checks which numbers are even and filter the array

var filtered = numbers.filter(function(number) {
  return number % 2 === 0 ;
});

console.log(filtered);

