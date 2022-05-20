function findMin(arr){
    if(arr.length == 0)
    return -1;

    let min = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8]
let min1 = findMin(arr1);
let index;
document.write(`arr1: ${arr1}<br>`);
document.write(`${min1} la so be nhat trong mang arr1<br>`);

let arr2 = [7, 12, 6, 9, 20, 56, 89]
let min2 = findMin(arr2);
document.write(`arr2: ${arr2}<br>`);
document.write(`${min2} la so be nhat trong mang arr2<br>`);

let arr3 = [];
let min3 = findMin(arr3);
document.write(`arr3: ${arr3}<br>`);
document.write(`${min3} la so be nhat trong mang arr3`);