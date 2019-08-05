const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

//  sort subtracts a-b and if they're positibe then it sorts them in ascending order each time
// filter is returning all integers less than 19
// map is multiplying each number by 1.5 and subtracting 1 then returning them in a new array
// reduce is totaling them all up into one sum
const sum = integers.sort((a, b) => a - b).filter(integer => integer < 19).map(integer => integer * 1.5 - 1).reduce((total, integer) => total += integer, 0)
console.log('sum: ', sum)
