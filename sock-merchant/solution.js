function sockMerchant(n, ar) {
    let pairs = 0;
    let mess = {}

    ar.forEach(color => {
      if (!mess[color]){
        mess[color] = 1
      } else {
        mess[color] += 1
      }
    })

    const keys = Object.keys(mess)

    keys.forEach(key => {
      let ans = mess[key]/2
      console.log(ans)
      if (ans === 1){
        pairs += 1
      } else if (mess[key]%2 !== 0){
        pairs += (ans - 0.5)
      } else {
        pairs += ans
      }
    })
    return pairs
}

let n = 9
let array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(n, array))