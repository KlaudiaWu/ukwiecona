
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = Array.from(document.getElementsByClassName("gallery-img"));
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");


var elem;

imgs.forEach(function(img){
    img.addEventListener('click', checkIndex);
})

function checkIndex(e) {
    // console.log(e.target);
    // console.log(imgs.indexOf(e.target));
    // elem = imgs.indexOf(e.target);
    // parseInt(elem);
    modal.style.display = "block";
    modalImg.src = e.target.src;
    //captionText.innerHTML = this.alt;
}

// console.log(imgs[elem]);

// imgs[elem].onclick = function(){

//     modal.style.display = "block";
//     modalImg.src = imgs[elem].src;
//     //captionText.innerHTML = this.alt;
// }


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

