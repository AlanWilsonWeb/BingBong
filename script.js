let n = 0;
let finalOut = [];

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
  finalOut.push(`<li> ${banana} </li>`);
  document.getElementById("result").innerHTML =`<ul> ${finalOut} </ul>`;
};
