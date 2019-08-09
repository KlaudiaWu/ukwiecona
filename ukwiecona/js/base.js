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
    "kompozycje",
    "pogrzeb"
];

var select = document.getElementsByClassName('gallery-filter')[0];

console.log(occasions);

for (var i = 0; i<occasions.length; i++) {
    var option = document.createElement('option');
    option.value = occasions[i];
    option.innerHTML = occasions[i];
    select.appendChild(option);
}


var gallery = new Array(
    new GalleryElement(occasions[1], "dekoracja samochodu", "lilie", "../img/gallery/11.jpg"),
    new GalleryElement(occasions[2], "waza z kompozycją", "lilie", "../img/gallery/21.jpg"),
    new GalleryElement(occasions[5], "wieniec na trumnę", "lilie", "../img/gallery/51.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/22.jpg"),
    new GalleryElement(occasions[1], "dekoracja stołu", "lilie", "../img/gallery/12.jpg"),
    new GalleryElement(occasions[3], "bukiet", "lilie", "../img/gallery/31.jpg"),
    new GalleryElement(occasions[5], "wieniec na trumnę", "lilie", "../img/gallery/52.jpg"),
    new GalleryElement(occasions[1], "dekoracja stołu", "lilie", "../img/gallery/13.jpg"),
    new GalleryElement(occasions[5], "kompozycja na grób", "lilie", "../img/gallery/53.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/23.jpg"),
    new GalleryElement(occasions[3], "bukiet", "lilie", "../img/gallery/32.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/41.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "lilie", "../img/gallery/14.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/24.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/42.jpg"),
    new GalleryElement(occasions[3], "kosz z kwiatami", "lilie", "../img/gallery/33.jpg"),
    new GalleryElement(occasions[1], "wiązanki ślubne", "lilie", "../img/gallery/15.jpg"),
    new GalleryElement(occasions[5], "wianek", "lilie", "../img/gallery/54.jpg"),
    new GalleryElement(occasions[5], "wianek", "lilie", "../img/gallery/55.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/25.jpg"),
    new GalleryElement(occasions[5], "wieniec", "lilie", "../img/gallery/56.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "lilie", "../img/gallery/16.jpg"),
    new GalleryElement(occasions[3], "kompozycja na stół", "lilie", "../img/gallery/34.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/43.jpg"),
    new GalleryElement(occasions[5], "wieniec", "lilie", "../img/gallery/57.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/26.jpg"),
    new GalleryElement(occasions[1], "wiązanka", "lilie", "../img/gallery/17.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/49.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/27.jpg"),
    new GalleryElement(occasions[3], "bukiet", "lilie", "../img/gallery/35.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/44.jpg"),
    new GalleryElement(occasions[5], "wieniec", "lilie", "../img/gallery/58.jpg"),
    new GalleryElement(occasions[1], "wiązanka", "lilie", "../img/gallery/18.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/28.jpg"),
    new GalleryElement(occasions[3], "bukiet", "lilie", "../img/gallery/36.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/45.jpg"),
    new GalleryElement(occasions[5], "kompozycja na grób", "lilie", "../img/gallery/59.jpg"),
    new GalleryElement(occasions[1], "wiązanka", "lilie", "../img/gallery/19.jpg"),
    new GalleryElement(occasions[2], "kompozycja na stół", "lilie", "../img/gallery/29.jpg"),
    new GalleryElement(occasions[3], "bukiet", "lilie", "../img/gallery/37.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/46.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/47.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "lilie", "../img/gallery/110.jpg"),
    new GalleryElement(occasions[2], "mini choinka", "lilie", "../img/gallery/210.jpg"),
    new GalleryElement(occasions[3], "kosz z kwiatami", "lilie", "../img/gallery/1.jpg"),
    new GalleryElement(occasions[1], "wiązanka", "lilie", "../img/gallery/111.jpg"),
    new GalleryElement(occasions[2], "wianek", "lilie", "../img/gallery/211.jpg"),
    new GalleryElement(occasions[4], "kompozycja", "lilie", "../img/gallery/48.jpg"),
    new GalleryElement(occasions[2], "kompozycja na stół", "lilie", "../img/gallery/212.jpg"),
    new GalleryElement(occasions[3], "kompozycja w doniczce", "lilie", "../img/gallery/39.jpg")
);

console.log(gallery.length);

