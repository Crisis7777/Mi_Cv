let  index = 0;
while (index <11){
    console.log(index);
    index++;
}

var arreglo =[];
var userInput;
while (!(userInput=="")) {
    userInput = prompt ("escribe cualquier caracter");
    arreglo.push(userInput);
}
console.log("introduciste estos valores:" + arreglo);


