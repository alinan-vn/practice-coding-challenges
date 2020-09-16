function jumpingOnClouds(c) {
    let jumps = 0

    for (let i = 0; i < c.length; ) {
    console.log(i)
    if((c[i] === 0) && (c[(i + 1)] === 0) && (c[(i + 2)] === 1)){
        jumps += 1
        i += 1
    } else if ((c[(i + 1)] === 1) && (c[(i + 2)] === 0) ){
        jumps += 1
        i += 1
    } else if ((c[i] === 0) && (c[i + 1] === 0) && (c[i] === 0)){
        jumps += 1
        i += 2
    } else {
        i += 1
    }
    }

    return jumps
}

// c = [0, 0, 0, 1, 0, 0] // 3
// c = [0, 0, 1, 0, 0, 1, 0] // 4
// c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0] // 6
c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0] // 28


console.log(jumpingOnClouds(c))
