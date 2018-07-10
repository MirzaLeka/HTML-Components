var img = document.getElementById("slider");
var num = 0;

var images = [
  "https://vignette.wikia.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220",
  "https://vignette.wikia.nocookie.net/deathbattlefanon/images/c/c3/Adult-gohan.png/revision/latest?cb=20180129182621",
  "https://pre00.deviantart.net/e0e6/th/pre/i/2017/014/b/b/goten__2__facudibuja_by_facudibuja-davey1c.png"
];

function next () {
num++;
  
  if (num == images.length) {
    num = 0;
  }
  
 img.src=images[num]; 
}

function prev() {
  num--;
  
    if (num < 0) {
    num = images.length-1;
  }
  
   img.src=images[num]; 
}