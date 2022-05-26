var link_number = document.getElementsByTagName("a");

for(i = 0; i < link_number.length; i++) {
    link_number[i].className = "Link-" + (i + 1);
}
document.write('Class has been added');