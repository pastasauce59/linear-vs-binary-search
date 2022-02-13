let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let result
let count = 0

let binarySearch = (list, target) => {
    let first = 0
    let last = list.length - 1

    while (first <= last){
        let midpoint = Math.floor((first + last)/2)
        count++

        if (list[midpoint] === target){
            return midpoint
        }
        else if (list[midpoint] < target){
            first = midpoint + 1
        }
        else ( last = midpoint - 1)
    }
}

let verify = (index) => {
    if (index !== undefined){
        console.log(`Match found at index ${index} and binarySearch function took ${count} tries to find target.`)
    } else {
        console.log('No match found!')
    }
}

result = binarySearch(list, 18)
verify(result)

result = binarySearch(list, 21)
verify(result)