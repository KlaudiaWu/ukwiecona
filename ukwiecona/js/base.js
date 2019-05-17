function GalleryElement(occassion, type, flowers, path) {
    this.occassion = occassion;
    this.type = type;
    this.flowers = flowers;
    this.path = path;
}

var el = new GalleryElement('Wiazanka', ['lilie', 'da'], 'jakas', 'slub');



var gallery = new Array(
    new GalleryElement("ślub 1", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("pogrzeb 2", "wieniec", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 3", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("pogrzeb 4", "wieniec", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 5", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 6", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 7", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 8", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement("ślub 9", "wiązanka, dekoracja samochodu, butonierki", "lilie", "../img/gallery/1.jpg")
);

console.log(gallery.length);

