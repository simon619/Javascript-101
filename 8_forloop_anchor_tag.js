var atag = document.getElementsByTagName("a");
var count = 0;
for (i = 0; i < atag.length; i++) {
    console.log('This is link #' + (i + 1));
    count++;
}

document.write("\n");
document.write('Total ' + count + ' a tags are looped');
var linktag = document.getElementsByTagName("link");
var count1 = 0 
for (i = 0; i < linktag.length; i++) {
    console.log('This is a #' + (i + 1));
    count1++;
}
document.write('Total ' + count1 + ' link tags are looped');