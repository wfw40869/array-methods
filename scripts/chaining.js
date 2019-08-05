const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

const sum = integers.sort((a, b) => a - b).filter(integer => integer < 19).map(integer => integer * 1.5 - 1).reduce((total, integer) => total += integer, 0)
console.log('sum: ', sum)
