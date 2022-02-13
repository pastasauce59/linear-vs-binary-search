let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let linearSearch = (list, target) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target){
            return i
        }
    }
}

let verify = (index) => {
    if (index !== undefined){
        console.log(`Match found at index ${index}`)
    } else {
        console.log('No match found!')
    }

}

let result

result = linearSearch(list, 5)
verify(result)

result = linearSearch(list, 21)
verify(result)

