let saturate = document.getElementById("saturation");
let contrast = document.getElementById("contrast");
let sepia = document.getElementById("sepia");
let blur = document.getElementById("blur");
let brightness = document.getElementById("brightness");
let grayscale = document.getElementById("grayscale");
let hueRotate = document.getElementById("hue-rotate");
let canvas = document.getElementById("ctx");
 
const ctx=canvas.getContext("2d");
let reset = document.getElementById("reset");
let download = document.getElementById("download");
let upload = document.getElementById("upload");

let img = document.getElementById("img");
let imgBox = document.getElementsByClassName("img-box");

function reseValues(){
    img.style.filter='none';
    saturate.value = "100"; 
    contrast.value = '100';
    sepia.value = '0';
    blur.value = '0';
    brightness.value = '100';
    grayscale.value = '0';
    hueRotate.value = '0';

}

window.onload = function () {
    reseValues();
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox[0].style.display = 'none';
}
upload.onchange = function () {
    reseValues();

    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox[0].style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(this.files[0]);
    file.onload = function () {
        img.src = file.result;
    }
    img.onload = function () {
    canvas.width=img.width; 
    canvas.height=img.height;
        ctx.drawImage(img,0, 0, canvas.width, canvas.height);
        img.style.display="none";
    }
}

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter =   ` 
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        sepia(${sepia.value}%)
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        grayscale(${grayscale.value})
        brightness(${brightness.value}%)
        `
        
        ctx.drawImage(img,0, 0, canvas.width, canvas.height);
    })
});
reset.onclick =function () {
    reseValues();
} 
download.onclick = function(){
    download.href=canvas.toDataURL();
}