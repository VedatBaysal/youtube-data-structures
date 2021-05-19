let arr = [1, 2, 4, 7, 8, 9, 45, 80, 90, 700, 800]

const search = (arr, x) => {
  let lowerLimit = 0
  let upperLimit = arr.length
  while (lowerLimit !== upperLimit) {
    let index = Math.floor((lowerLimit + upperLimit) / 2)

    if (x === arr[index]) return index

    if (x < arr[index]) upperLimit = index
    else lowerLimit = index + 1
  }
  return null
}

//console.log(search(arr, 45)) result: 6

//console.log(search(arr, 1)) result: 0

//console.log(search(arr, 800)) result: 10

console.log(search(arr, 9)) // result: 4

//youtube: https://www.youtube.com/watch?v=-wJ-K0w-2jg
