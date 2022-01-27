
miniMaxSum = () =>{
    let arr = [13,5,11,9,7];
    if(arr.length!=5){  //if not equal five positive integers
        return;
    }
    //sort increase
    let arrsort = arr.sort(function(a,b) { return a - b; });
    let minimum = maximum=0; //result minimum sum and the maximum sum
    let sumcount = arrsort.length-1;  // count maximum 4 elements
    let countmax = arrsort.length-sumcount;   // count 4 elements for maximum sum
    let countmin = 0; // count 4 elements for minimum sum
    //Calculate Sum elements
    for(let i= 0;i<arrsort.length;i++){
        if(arrsort[i]<0){ //not positive integers
            return;
        }
        //Calculate minimum sum 
        if(countmin!=sumcount){ //compare maximum 4 elements
            minimum += arrsort[i];  // sum minimum sum
            countmin++;   // increase count elements for minimum sum
        }
          //Calculate maximum sum 
        if(i==countmax){  // compare maximum 4 elements
            maximum += arrsort[i];  // sum maximum sum
            countmax++;   // increase count elements for maximum sum
        }
    }
    console.log(minimum , maximum);
} 

bonus = () =>{
    let arr = [1,3,5,7,9];
    let totalarray = 0;
    let  max = min = arr[0];
    let evenarr =[];
    let oddeven =[];
    for(let i= 0;i<arr.length;i++){ 
        totalarray +=arr[i];    // sum total array
        if(arr[i]<min){         //check min
            min = arr[i];
        }
        if(arr[i]>max){         //check max
            max = arr[i];
        }
        arr[i]%2==0?evenarr.push(arr[i]):oddeven.push(arr[i]);  //check even or odd ==> push into array
    }
    console.log("Total of array: " + totalarray);
    console.log("Min in array: " + min);
    console.log("Max in array: " + max);
    console.log("Even elements in array: " + evenarr);
    console.log("Odd elements: " + oddeven);
}
miniMaxSum();
bonus();












