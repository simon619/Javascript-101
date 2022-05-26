arr1 = ['Simon', 1 , true, 3.5];
console.log(arr1);
console.log(arr1.sort())

var arr = [];
for(i = 0; i < 10; i++) {
    if (i > 4 && i < 8) {
        arr[i] = 'Simon';
    }
    else {
        arr[i] = i;
    }
}
document.write("The is the array " + arr);
document.write(' ');
document.write("The Lenght of the array " + arr.length);