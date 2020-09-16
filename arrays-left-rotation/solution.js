function rotLeft(a, d){
    let change = a.slice(d)
    let last = a.slice(0, d)

    last.forEach(e => {
        change.push(e)
    })

    return change
}

let array = [1, 2, 3, 4, 5] // should be [ 3, 4, 5, 1, 2 ] 
let rots = 2 

console.log(rotLeft(array, rots))