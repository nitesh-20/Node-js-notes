// console.log(process);
// console.log(__dirname);
// console.log(module);


                // export method in node js 


function test(arr,x){

    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==x){
            a++
        }
    }
    return a;
    
}

function binarySearch() {
    // code
}


module.exports = {
    allOcc: test,
    binary: binarySearch
}

// module.exports = binarySearch
