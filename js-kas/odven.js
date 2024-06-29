myArry = [1,2,3,4,5,6,7,8,9,10]

function oddNum(myArry){
    for (const num of myArry) {
        if (num % 2 != 0) console.log(num)
    }
}; oddNum(myArry)
console.log("x------------x")
function evenNum(myArry){
    for (const num of myArry) {
        if (num % 2 === 0) console.log(num)
    }
}; evenNum(myArry)