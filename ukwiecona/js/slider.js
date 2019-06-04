(function (gallery) {

    var app = {};
    app.started = false;
    app.limit = 0;

    var container = document.body.getElementsByClassName("gallery-wrapper");
    var next = document.getElementById("arrow-next");
    var prev = document.getElementById("arrow-prev");

    var viewportWidth = window.innerWidth;

    function controlElem() {
        var controlElem = document.createElement('div');
        controlElem.classList.add("control-elem");
        container[0].appendChild(controlElem);
        var controlWidth = document.getElementsByClassName("control-elem")[0].offsetWidth;
        var percent = controlWidth / viewportWidth * 100;

        if (percent >= 50) {
            limit = 5;
        } else {
            limit = 6;
        }

        return limit;
    }

    app.limit = controlElem();
    app.bufor = new Array(app.limit);

    function createCard(gallery) {

        var card = document.createElement('div');
        card.classList.add("card");
        var domString = '<div class="gallery-img-wrapper"><img class="gallery-img" src="' + gallery.path + '"></div><div class="gallery-description"><h3 class="occasion">Okazja: ' + gallery.occassion + '</h3><h3 class="type">Typ bukietu: ' + gallery.type + '</h3><h3 class="flowers">Użyte kwiaty: ' + gallery.flowers + '</h3></div>';
        card.innerHTML = domString;
        card.setAttribute('data-occasion', gallery.occassion);

        return card;
    }

    //Init tworzy listę z elementami html wypełnionymi danymi
    var elements = new Array(gallery.length);

    function init(gallery) {
        var prev = false;
        for (var i = 0; i < gallery.length; i++) {
            elements[i] = createCard(gallery[i]);
            elements[i].prev = prev;
            prev = elements[i];
            if (elements[i].prev) {
                elements[i].prev.next = elements[i];
            }

        }
        elements[0].prev = elements[elements.length - 1];
        elements[elements.length - 1].next = elements[0];

        select.addEventListener('change', (e) => {
            console.log(select.options[select.selectedIndex].value);

            console.log(app.bufor.length);

            app.bufor.forEach(element => {
                element.remove();
            });

            var allOccasions = occasions[0].toLowerCase();
            var selectedIndex = select.selectedIndex;
            var selectedValue = select.options[selectedIndex].value.toLowerCase();

            if (selectedValue === allOccasions) {
                for (var l = 0; l < app.limit; l++) {
                    if(elements[l].originalNext) {
                        elements[l].next = elements[l].originalNext;
                    } else if (elements[l].originalPrev) {
                        elements[l].prev = elements[l].originalPrev;
                    }
                    app.bufor[l] = elements[l];
                }
            } else {
                var filter = [];
                prev = false;
                for (i = 0; i < elements.length - 1; i++) {
                    // console.log(select.options[select.selectedIndex].value);
                    // console.log(elements[i].getAttribute('data-occasion'));
                    if (selectedValue === elements[i].getAttribute('data-occasion').toLowerCase()) {
                        elements[i].originalNext = elements[i].next;
                        elements[i].originalPrev = elements[i].prev;
                        if (prev) {
                            elements[i].prev = prev;
                            prev.next = elements[i];
                        }
                        filter.push(elements[i]);
                        prev = elements[i];
                    }
                }
                app.bufor = filter;
            }
    
            appendCards();

        });

        
    }

    function appendCards() {
        function appendToContainer(element, depth) {
            if (depth === 0) return;

            //console.log(element);
            container[0].appendChild(element);

            appendToContainer(element.next, --depth);
        }

        appendToContainer(
            app.bufor[0],
            app.bufor.length > app.limit ? app.limit : app.bufor.length
        );
        positioning();

    }

    init(gallery);
    appendCards();

    function positioning() {
        //Muszę pobrać elementy, które utworzyłam
        var cards = Array.from(document.body.getElementsByClassName("card"));
        //Istnieją 2 opcje - albo będą widoczne 2 pełne karty i 2 kawałki 
        //(dla kart o szerokości poniżej 50%) lub 1 karta pełna i 2 części 
        //(dla kart o szerokości 50% i więcej)
        var width = cards[0].offsetWidth;
        var widthVw = width / viewportWidth * 100;
        var first, distance, space, partialView;

        if (widthVw >= 50) {
            //Obliczenia dla różnicy między pozycją kolejnych elementów przy
            //rozmieszczeniu dla 3 kart w widoku (ostatnia karta to ta pierwsza
            //z minusową wartością).
            space = viewportWidth * 0.1;
            partialView = (viewportWidth - (width + (2 * space))) / 2;
            distance = width + space;
            first = -width + partialView - distance;
        } else {
            //Obliczenia dla różnicy między pozycją kolejnych elementów przy
            //rozmieszczeniu dla 4 kart w widoku (ostatnia karta to ta pierwsza
            //z minusową wartością) oraz pozycji pierwszej karty od lewej strony.

            //Szerokość odstępów między kartami
            space = viewportWidth * 0.05;

            //Obliczamy ile karta najbardziej po lewej i prawej będzie pokazana
            // (100% ekranu - ((2*szerokość kart)+(3*szerokość odstępów między kartami)))/2
            partialView = (viewportWidth - ((2 * width) + (3 * space))) / 2;
            //Odstęp pomiędzy pozycjami kart (szerokość karty) + (odstęp)
            distance = width + space;
            //Wartość left dla pierwszej karty (niewidoczna karta z lewej strony)
            first = -width + partialView - distance;
            //Każda kolejna kara będzie odddalona o distance
        }

        for (var i = 0; i < cards.length; i++) {
            cards[0].style.left = first + "px";
            var prevValue = parseInt(cards[i].style.left);
            var newValue = prevValue + distance + "px";
            cards[i + 1].style.left = newValue;
            prevValue = newValue;

            if ((i + 1) === (cards.length - 1)) {
                break;
            }

        }
        app.cards = cards;

        function onClick1(element, direction) {
            element.addEventListener('click', (e) => {
                var shift = (direction) * Math.abs(distance);
                var promises = new Array(app.cards.length);
                for (var i = 0; i < app.cards.length; i++) {
                    var currentCard = app.cards[i];
                    currentCard.index = i;
                    currentCard.increment = direction; // next = 1, prev = -1
                    promises[i] = animation(currentCard, shift);
                }
                Promise.all(promises).then(() => {
                    appendCards();
                });
            });
        }
        if (app.started === false) {
            app.started = true;
            onClick1(next, 1);
            onClick1(prev, -1);
        }

        function onAnimationComplete(currentCard, resolve) {
            // currentCard.removeEventListener('transitionend', function(){});
            currentCard.style.transform = "";
            currentCard.remove();
            resolve();
        }

        function animation(currentCard, shift) {
            return new Promise((resolve) => {
                if (currentCard.increment > 0) {
                    app.bufor[currentCard.index] = currentCard.next;
                }
                if (currentCard.increment < 0) {
                    app.bufor[currentCard.index] = currentCard.prev;
                }
                currentCard.addEventListener('transitionend',
                    (e) => onAnimationComplete(currentCard, resolve),
                    true);
                currentCard.style.transform = "translateX(" + -shift + "px)";
                console.log(currentCard.style.transform = "translateX(" + -shift + "px)");
            });
        }






        //appendCards(elements, megaI++);

    }




    //https://stackoverflow.com/questions/15876754/infinity-loop-slider-concepts
    //https://codepen.io/iblamefish/pen/pPbXGJ

})(gallery);