// Sandeep@_17
const findSumAndProduct=(arr)=>{
    let sum=0;
    let product=1;
    for (var i=0; i<arr.length; i++ ){
        sum+=arr[i];
    }
    for(var i=0; i<arr.length; i++){
        product*=arr[i]
    }
    console.log(`Sum is ${sum}::::::Product is ${product}`);
}

findSumAndProduct([1,3,4,5]);

//For above code what will be the time complexity?
//here we intreate over n element of an array so it time complexity will be O(n); for this example it 0(3);
// There are 2 for loop it seems to be o(2n) which eventually o(n) .



const printPairs=(arr)=>{

    for (var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            console.log(`pair number ${arr[i]}:${arr[j]}`);
        }
    }
}
printPairs([1,2,3,4]);

// For above code what will be the time complexity? 
//Before going to answer this qsn we need to understand what this code does!. it prints the number with pairs.
// The inner loop has n iteration , so the time complexity will be 0(n^2)


//Simillar  to above code 

const $printPairs=(arr)=>{
    for(var i=0; i<arr.length; i++){
     for (var j=i+1; j<arr.length; j++){
        console.log(`pair number 33${arr[i]}:${arr[j]}`);
     }
    }
}
$printPairs([1,2,3])

//In above code what will be the time complexity?
//First time J runs n-1 steps , second time n-2, third time n-3 .... till 1
//(n-1)+(n-2)+...+3+2+1;
// 1+2+3+.....+n-1
//The sum of 1 through n-1 is = n(n-1)/2 === O(n^2)
//So the time complexity of above code is O(N^2)

//Q: Write a code for reversing an array and time complexity/.

const reverseArray=(arr)=>{
    console.log("original Array:::", arr)
    for(var i=0; i<arr.length/2; i++){
        let temp=arr[i];
        const other=arr.length-i-1;
        arr[i]=arr[other];
        arr[other]=temp;
    }
    console.log('arr-reverse', arr)

}

reverseArray([1,2,3,5,6])

//the run time for above code is  O(N), The fact that it iterate till half of N but it will not impact big(0) time so time complexity is O(N)