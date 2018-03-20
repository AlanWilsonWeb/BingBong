let n = 0;
let finalOut = [];
let listRes = document.getElementById("result");

while (n <= 100)
{
    bingBong(n);
    n++;
};

function bingBong(banana) {
  if(banana % 3 == 0 && banana % 5 == 0){
    banana = "Bing-Bong!"
  }
  else if(banana % 3 == 0){
    banana = "Bing!"
  }
  else if(banana % 5 == 0){
    banana = "Bong!"
  }
  finalOut.push(banana);
};

function createList(finalOut) {
for (var f = 0; f < finalOut.length; f++) {
  var itemZ = finalOut[f]
  var listItem = document.createElement("LI");
  listItem.textContent = itemZ;
  listRes.appendChild(listItem);
  }
};

createList(finalOut);
