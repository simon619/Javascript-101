st = 'My name\'s Simon';
console.log('Lenght of the string is ' + st.length);
console.log('All upper case ' + st.toUpperCase());
console.log('All lower case ' + st.toLowerCase());
console.log('Index of ' + st.indexOf('Simon'));

if (st.indexOf('Simon') == -1) {
    document.write("Simon was not at the string");
}

else {
    document.write("Simon was at the string at the index of " + st.indexOf('Simon'));
}
