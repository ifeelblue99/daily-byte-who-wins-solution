const data = [0, 2, 8]

function whoWins(arr, move = 1, playerATotal = 0, playerBTotal = 0) {
    if (arr.length === 0) {
        return playerATotal > playerBTotal
    }
    else if (move % 2 == 0) {
        playerBTotal += arr[0] > arr[arr.length - 1] ? arr.shift() : arr.pop()
        move++
    } else {
        playerATotal += arr[0] > arr[arr.length - 1] ? arr.shift() : arr.pop()
        move++
    }
    return whoWins(arr, move, playerATotal, playerBTotal)
}

console.log("Does player A wins?",whoWins(data))
