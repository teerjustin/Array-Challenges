function highPass(arr, cutoff) {
    var filteredArr = [];
    //your code here
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] % 2 == 0) {
            totalEvens += arr[i];
        }
        if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
            totalOdds += arr[i];
        }
        console.log("TOTALEVENS",totalEvens);
        console.log("TOTALODDS", totalOdds)
    }
    if (totalEvens > totalOdds) {
        return "evens are larger";
    } else {
    if (totalEvens < totalOdds) {
        return "odds are larger";
    }
    else {
        return "they are equal";
    }
    }   
}

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++) {
        sum = sum+ arr[i];
        console.log('THISISSUM',sum)
    }
    var count = 0
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > sum/arr.length) {
        count++
        console.log(count)
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    //we do n-2 because the fibArr we're going to access already has 2 numbers and we want to have total 10 numbers.
    for (var i = 0; i < n - 2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1])
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]