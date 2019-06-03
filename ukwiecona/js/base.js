function GalleryElement(occassion, type, flowers, path) {
    this.occassion = occassion;
    this.type = type;
    this.flowers = flowers;
    this.path = path;
}

var el = new GalleryElement('Wiazanka', ['lilie', 'da'], 'jakas', 'slub');

var occasions = {
    0: "Wszystkie",
    1: "ślub",
    2: "święta",
    3: "urodziny",
    4: "komunia",
    5: "pogrzeb"
};

var select = document.getElementsByClassName('gallery-filter')[0];

for (var i = 0; i<occasions.length-1; i++) {
    var option = document.createElement('option');
    option.value = i;
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

