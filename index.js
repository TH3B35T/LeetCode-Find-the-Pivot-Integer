/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

    if(n == 1) return n;
    
    let low = 1;
    let high = n;

    let total_sum = Math.round(n * (n+1) /2);

    while(low <= high){
        let pivot = Math.round((low+high)/2);
        let first_sum = Math.round(pivot * (pivot+1) /2);

        let second_sum = total_sum - first_sum + pivot;

        if(first_sum === second_sum) return pivot;
        else if(first_sum < second_sum) low = pivot +1;
        else high = pivot - 1;
    }
    return -1;
    
};
