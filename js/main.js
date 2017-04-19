
window.addEventListener("load", function (e){
  e.preventDefault();
  createDiv(6, document.getElementById("body"));
});

function createDiv(cantidad, padre){
  var array = ["red", "purple","yellow","blue","green","black"];
  for (var i = 0; i < cantidad; i++) {
    var div = document.createElement("div");
    var dcf = document.createDocumentFragment() ;
    div.classList.add(array[i]);
    dcf.appendChild(div);
    padre.appendChild(dcf);
  }
  var red = padre.children[1];
  var purple = padre.children[2];
  var yellow = padre.children[3];
  var blue = padre.children[4];
  var green = padre.children[5];
  var black = padre.children[6];
  purple.appendChild(yellow);
  red.appendChild(purple);
  blue.appendChild(green);
  blue.appendChild(black);
}
