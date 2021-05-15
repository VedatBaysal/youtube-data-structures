//Time Complexity O(n^2)

let items = [3, 2, 6, 21, 9, 8]
let step = 0
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isOrdered = true
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        isOrdered = false
      }
    }
    if (isOrdered === true) break
  }
  return arr
}
let sortedItems = sort(items)
console.log(sortedItems)

//result : [ 21, 9, 8, 6, 3, 2 ]

//youtube: https://www.youtube.com/watch?v=tc4Pm9qopsg
