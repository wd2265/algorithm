// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    // This code has been purposefully obfuscated,
    //  as you'll write it yourself in next challenge.
    var a=[],b=[],c=p,d,e;
    for(d=0;c<=q;d++,c++){a[d]=array[c];}
    for(e=0;c<=r;e++,c++){b[e]=array[c];}
    c=p;
    for(e=d=0;d<a.length&&e<b.length;){
        if(a[d]<b[e]){
            array[c]=a[d];d++;
        } 
        else {array[c]=b[e]; e++;}
        c++; 
        
    }
    for(;d<a.length;){
        array[c]=a[d];d++;c++;
        
    }for(;e<b.length;){
        array[c]=b[e];e++;c++;}
};
/*
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while(i<(q-p+1) && j<(r-q)){
     if(lowHalf[i]<highHalf[j]){
        array[k] = lowHalf[i];
        i++;
     }
     else{
         array[k] = highHalf[j];
         j++;
     }
    k++;
    }
    while(i<(q-p+1)){
        array[k] = lowHalf[i];
        i++;
        k++;
    }
    while(j<(r-q)){
        array[k] = highHalf[j];
        j++;
        k++;
    }
    
    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    
};
*/

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    if(p<r){
        var mid = Math.floor((p+r)/2);
        mergeSort(array,p,mid);
        mergeSort(array,mid+1,r);
        merge(array,p,mid,r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 0, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [0, 2, 3, 6, 7, 9, 11, 12, 14]);
