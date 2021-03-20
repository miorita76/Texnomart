// Get the modal
var modal = document.getElementById('google-map');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('my-img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <a> element that closes the modal
var a = document.getElementsByClassName("close-map")[0];

// When the user clicks on <span> (x), close the modal
a.onclick = function() { 
    modal.style.display = "none";
}
