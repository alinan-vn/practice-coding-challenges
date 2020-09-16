function countingValleys(steps, path) {
    let numValleys = 0
    let directions = path.split('')

    let counter = 0
    let direction = false

    directions.forEach(step => {
        if ((counter === 0) && (direction === true)) {
        numValleys += 1
        direction = false

            if (step === 'D'){
                counter -= 1
                direction = true
            } else {
                counter += 1
            }
        } else if ((counter === 0) && (step === 'D')){
        direction = true
        counter -= 1
        } else if (step === 'D'){
        counter -= 1
        } else if (step === 'U') {
        counter += 1
        }
    })

    if (direction === true){
        numValleys += 1
    }

    return numValleys
}

let path = 'UDDDUDUU'
let steps = 8

console.log(countingValleys(steps, path))