function GalleryElement(occassion, type, flowers, path) {
    this.occassion = occassion;
    this.type = type;
    this.flowers = flowers;
    this.path = path;
}

var occasions = [
    "wszystkie",
    "ślub",
    "święta",
    "urodziny",
    "komunia",
    "pogrzeb"
];

var select = document.getElementsByClassName('gallery-filter')[0];

console.log(occasions);

for (var i = 0; i<occasions.length; i++) {
    console.log("Kupa");
    var option = document.createElement('option');
    option.value = occasions[i];
    option.innerHTML = occasions[i];
    select.appendChild(option);
}


var gallery = new Array(
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[5], "wieniec", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[5], "wieniec", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg")
);

console.log(gallery.length);

