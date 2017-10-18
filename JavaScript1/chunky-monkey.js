/*
编写一个函数,把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
*/
function chunk(arr, size) {
    // Break it up.
    var arrNew = [];
    console.log(arr.length);
    for (let i = 0; i < arr.length; i += size) {
        console.log(arr.slice(i, size));
        /* if (i + size >= arr.length) {
             arrNew.push(arr.slice(i));
         } else {
             arrNew.push(arr.slice(i, size));
         }*/
    }
    return arrNew;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 2));