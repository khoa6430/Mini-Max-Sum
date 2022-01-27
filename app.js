

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



miniMaxSum();













