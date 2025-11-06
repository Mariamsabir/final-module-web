














// contact database end


var h1Element = document.getElementById("h1");
                   
var pELement = document.getElementById("p1");


// diff b/w innerHTML & innerText

var divContainer = document.getElementById("main");


function completePara() {
  var paraELement =
  document.getElementById("p1");

  var anchorELement =
  document.getElementById("link");

  if (anchorELement.innerText === "Read more") {
    paraELement.innerText =
      "Sweet Moments, Slice of Joy.Indulge in sweet moments, savor joy with every bite – Cake, where happiness takes a slice! If you're looking for a slice of heaven, you're come to the right place. cake and cookies is the bakery that delivers delicious and comforting home-made baked goods ";

    anchorELement.innerText = "Read less";
  } else {
    paraELement.innerText =
      "Sweet Moments, Slice of Joy.Indulge in sweet moments, savor joy with every bite – Cake, where happiness takes a slice!";

    anchorELement.innerText = "Read more";
  }
}