
window.addEventListener("load", function (e){
  e.preventDefault();
  createDiv(6, document.getElementById("body"));
  // <div class="red">
  //   <div class="purple">
  //     <div class="yellow"></div>
  //   </div>
  // </div>
  // <div class="blue">
  //   <div class="green"></div>
  //   <div class="black"></div>
  // </div>
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
}
