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
    new GalleryElement(occasions[1], "kompozycja na maskę samochodu", "Lilia, Eustoma, Łapa kangura, Gipsówka, Barwinek, Salal", "../img/gallery/11.jpg"),
    new GalleryElement(occasions[2], "kompozycja wielkanocna", "jajo ozdobne z piór, Hiacynt, Szafirek, Narcyz, Mech, elementy dekoracyjne", "../img/gallery/21.jpg"),
    new GalleryElement(occasions[5], "wiązanka pogrzebowa", "Anturium, Dendrobium, Róża, liście cykasa, Waszyngtonia, Aspidistra", "../img/gallery/51.jpg"),
    new GalleryElement(occasions[2], "wianek adwentowy", "szyszki, bombki, gwiazdki, świece", "../img/gallery/22.jpg"),
    new GalleryElement(occasions[1], "kompozycja na stół weselny", "Storczyk tajlandzki, Owoce dziurawca, Trawa niedźwiedzia, Liście filodendrona", "../img/gallery/12.jpg"),
    new GalleryElement(occasions[3], "bukiet okolicznościowy", "Goździk, wachlarz, Sosna sejmutka", "../img/gallery/31.jpg"),
    new GalleryElement(occasions[5], "wiązanka pogrzebowa", "Róża, Goździk, Jodła, Salal, Asparagus", "../img/gallery/52.jpg"),
    new GalleryElement(occasions[1], "kompozycja na stół weselny", "Hortensja, Róża, Weronika, Eustoma, Rozchodnik, Salal, Bluszcz", "../img/gallery/13.jpg"),
    new GalleryElement(occasions[5], "kompozycja na konstrukcji", "Róża, Gerbera, Goździk, Santini, Owoce, Eukaliptus", "../img/gallery/53.jpg"),
    new GalleryElement(occasions[2], "wianek świąteczny", "szyszki, bombki, laski cynamonu, orzech włoski, gwiazdki", "../img/gallery/23.jpg"),
    new GalleryElement(occasions[3], "bukiet okolicznościowy wachlarz", "Róża, Gerbera, Falenopsis, Limonium, Salal, Kordylina", "../img/gallery/32.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "Falenopsis, Santini, drut aluminiowy, rafia", "../img/gallery/14.jpg"),
    new GalleryElement(occasions[2], "wianek świąteczny ", "szyszki, bombki, gałązki z kryształkami, lampki led", "../img/gallery/24.jpg"),
    new GalleryElement(occasions[4], "bukiet okolicznościowy", "Gerbera, Alstroemeria, Falenopsis, Mikołajek, Fatsja, Asparagus, Paprotka, Aspidistra", "../img/gallery/42.jpg"),
    new GalleryElement(occasions[3], "kompozycja kwiatowa w koszu", "Eustoma, Goździk, Ligustr, Proso, Ruskus", "../img/gallery/33.jpg"),
    new GalleryElement(occasions[1], "wiązanki ślubne", "Storczyk tajlandzki, Rypsalis, Rafis, elementy ozdobne", "../img/gallery/15.jpg"),
    new GalleryElement(occasions[5], "wianek pogrzebowy", "Anturium, Róża, Eustoma, Rozchodnik, Dzwonek irlandzki", "../img/gallery/54.jpg"),
    new GalleryElement(occasions[5], "wianek pogrzebowy", "Gerbera, Peonia, Margeretka, Goździk chiński", "../img/gallery/55.jpg"),
    new GalleryElement(occasions[2], "wianek wielkanocny", "wydmuszki, pisanki, pióra", "../img/gallery/25.jpg"),
    new GalleryElement(occasions[5], "wieniec pogrzebowy", "Róża, Salal, Jodła", "../img/gallery/56.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "Storczyk tajlandzki, konstrukcja dekoracyjna", "../img/gallery/16.jpg"),
    new GalleryElement(occasions[3], "kompozycja kwiatowa w koszu", "Róża, Rozchodnik, Salal", "../img/gallery/34.jpg"),
    new GalleryElement(occasions[4], "kompozycja w naczyniu", "Czosnek olbrzymi, Lilia, owoce, Liście agawy, Fatsja, Mech", "../img/gallery/43.jpg"),
    new GalleryElement(occasions[5], "wieniec pogrzebowy", "Róża, Goździk gałązkowy, Tulipan, Santini, Aspargus", "../img/gallery/57.jpg"),
    new GalleryElement(occasions[2], "wianek wiosenny", "konstrukcja z patyczków ozdobnych, Żonkil w doniczce, pisanki, bazie, pióra", "../img/gallery/26.jpg"),
    new GalleryElement(occasions[1], "wiązanka ślubna", "Falenopsis, Santini, Rafia, konstrukcja dekoracyjna", "../img/gallery/17.jpg"),
    new GalleryElement(occasions[4], "kompozycja w naczyniu", "Mieczyk, Limonium, Salal, muszle, pędy winorośli", "../img/gallery/49.jpg"),
    new GalleryElement(occasions[2], "wianek ozdobny", "muszle, sznurek bawełniany", "../img/gallery/27.jpg"),
    new GalleryElement(occasions[3], "bukiet okolicznościowy na konstrukcji", "Pędy winorośli, Róża, Gerbera, Santini, Goździk gałązkowy, Limonium, Salal", "../img/gallery/35.jpg"),
    new GalleryElement(occasions[4], "kompozycja w naczyniu", "Amarylis, Goździk, Tulipan, Dracena Sandera, liście anturium, Aspidistra", "../img/gallery/44.jpg"),
    new GalleryElement(occasions[5], "wieniec pogrzebowy", "Anturium, Storczyk tajlandzki, Róża, Pustynnik, Salal", "../img/gallery/58.jpg"),
    new GalleryElement(occasions[1], "wiązanka ślubna", "Cymbidium, Eustoma, Pieprz, Trawa niedźwiedzia, Barwinek, Brunia", "../img/gallery/18.jpg"),
    new GalleryElement(occasions[2], "wianek zimowy na stół", "plastry kory brzozowej, bombki, gałązki z kryształkami, gwiazdki, szyszki, mech", "../img/gallery/28.jpg"),
    new GalleryElement(occasions[3], "bukiet okolicznościowy na konstrukcji", "Róża, Goździk chiński, Eustoma, Tulipan", "../img/gallery/36.jpg"),
    new GalleryElement(occasions[4], "bukiet okolicznościowy", "Hortensja, Alstroemeria, Lewkonia, Czosnek, Fatsja, Hosta, Barwinek", "../img/gallery/45.jpg"),
    new GalleryElement(occasions[5], "wiązanka pogrzebowa", "Róża, Santini, Goździk, Limonium, Salal, Jodła", "../img/gallery/59.jpg"),
    new GalleryElement(occasions[1], "wiązanka ślubna", "Róża, Eustoma, Gipsówka, Ruskus", "../img/gallery/19.jpg"),
    new GalleryElement(occasions[2], "stroik świąteczny", "świece, bombki, figurki, gałązki ozdobne", "../img/gallery/29.jpg"),
    new GalleryElement(occasions[3], "bukiet okolicznościowy", "Róża, Goździk, Margaretka, Santini, Limonium, Salal", "../img/gallery/37.jpg"),
    new GalleryElement(occasions[4], "kompozycja s naczyniu", "Mieczyk, Róża, Goździk gałązkowy, Dalia, Nawłoć, Fatsja, Ruskus", "../img/gallery/46.jpg"),
    new GalleryElement(occasions[4], "kompozycja w naczyniu", "Cymbidium, Goździk gałązkowy, Owoce dziurawca, Trawy ozdobne, Dracena sandera", "../img/gallery/47.jpg"),
    new GalleryElement(occasions[1], "dekoracja samochodu", "Eustoma, Gipsówka, Goździk gałązkowy, Ruskus", "../img/gallery/110.jpg"),
    new GalleryElement(occasions[2], "choineczka stożkowa", "sznurek filcowy, kokardki filcowe, bombki, gwiazdki", "../img/gallery/210.jpg"),
    new GalleryElement(occasions[3], "kompozycja kwiatowa w koszu", "Róża, Alstroemeria, Santini, Zatrwian, Salal, Paprotka", "../img/gallery/38.jpg"),
    new GalleryElement(occasions[1], "wiązanka ślubna", "Goździk, Falenopsis", "../img/gallery/111.jpg"),
    new GalleryElement(occasions[2], "wianek świąteczny na drzwi", "szalik, figurki, sznurek bawełniany, bombki, gwiazdki, taśma ozdobna", "../img/gallery/211.jpg"),
    new GalleryElement(occasions[4], "kompozycja w naczyniu", "Róża, Gerbera, Alstroemeria, Limonium, Fatsja, Aspidistra", "../img/gallery/48.jpg"),
    new GalleryElement(occasions[2], "kompozycja wiosenna w naczyniu", "naczynie ozdobne, Bazie, Gerberki, figurka, pisanki", "../img/gallery/212.jpg"),
    new GalleryElement(occasions[3], "flower box", "Róża, Santini, Goździk, Margaretka, Limonium", "../img/gallery/39.jpg")
);

console.log(gallery.length);

