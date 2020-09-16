// too slow

// function repeatedString (s, n){
//     let counter = n / s.length
//     counter = Math.floor(counter)
//     counter -= 1

//     let remainder = n % s.length
//     let string = s
//     let list = s.split('')

//     for (counter; counter !== 0;){
//         string += s
//         counter -= 1
//     }

//     let splitString = string.split('')

//     for (let i = 0; i !== remainder;){
//         splitString.push(list[i])

//         i += 1
//     }

//     let letterACounter = 0

//     splitString.forEach(e => {
//         if(e === 'a'){
//             letterACounter += 1
//         }
//     });

//     // console.log('split list', splitString)

//     return letterACounter
// }

// also too long

// function repeatedString(s, n){
//     let splitList = s.split('')
//     let length = s.length
//     let count = n
//     let countTheA = 0
//     count -= s.length

//     for(count; count > 0; ){
//         for(let i = 0; i !== length; i++){
//             if(splitList[i] === 'a'){
//                 countTheA += 1
//             }
//         }
//         count -= s.length
//     }

//     let remains = n % s.length
//     let secondCount = 0

//     for(remains; remains !== 0; remains--){
//         if(splitList[secondCount] === 'a'){
//             countTheA += 1
//         }

//         secondCount += 1
//     }

//     return countTheA
// }


function repeatedString(s, n){
    let countOfA = 0
    let splitS = s.split('')
    let remains = n % s.length

    let times = n / s.length
    times = Math.floor(times)

    splitS.forEach(e => {
        if(e === 'a'){
            countOfA += 1
        }
    });

    countOfA = countOfA * times

    for(let i = 0; i != remains; i++){
        if(splitS[i] === 'a'){
            countOfA += 1
        }
    }

    return countOfA
}

// let sample = 'aba'
// let iterations = 10

let sample = 'a'
let iterations = 1000000000000

console.log(repeatedString(sample, iterations))