(function (gallery) {

    var container = document.body.getElementsByClassName("gallery-wrapper");
    var next = document.getElementById("arrow-next");
    var prev = document.getElementById("arrow-prev");
    console.log(next);
    console.log(prev);

    var viewportWidth = window.innerWidth;
    var percent;

    function controlElem() {
        var controlElem = document.createElement('div');
        controlElem.classList.add("control-elem");
        container[0].appendChild(controlElem);
        var controlWidth = document.getElementsByClassName("control-elem")[0].offsetWidth;
        percent = controlWidth / viewportWidth * 100;

        return percent;
    }

    controlElem();

    function createCard(gallery) {

        var card = document.createElement('div');
        card.classList.add("card");
        var domString = '<div class="gallery-img-wrapper"><img class="gallery-img" src="' + gallery.path + '"></div><div class="gallery-description"><h3 class="occasion">Okazja: ' + gallery.occassion + '</h3><h3 class="type">Typ bukietu: ' + gallery.type + '</h3><h3 class="flowers">Użyte kwiaty: ' + gallery.flowers + '</h3></div>';
        card.innerHTML = domString;

        return card;
    }

    //Init tworzy listę z elementami html wypełnionymi danymi
    var elements = new Array(gallery.length);

    function init(gallery) {
        for (var i = 0; i < gallery.length; i++) {
            elements[i] = createCard(gallery[i]);
        }
    }


    init(gallery);

    var megaI = 0;

    function appendCards(i) {
        if (i === undefined) {
            i = megaI;
        }

        console.log(elements);

        if (percent >= 50) {
            for (var j = i; j < (i + 5); j++) {
                container[0].appendChild(elements[j]);
            }
        } else {
            for (var k = i; k < (i + 6); k++) {
                container[0].appendChild(elements[k]);
            }
        }
        positioning();

    }

    appendCards();


    function positioning() {
        //Muszę pobrać elementy, które utworzyłam
        var cards = Array.from(document.body.getElementsByClassName("card"));
        //Istnieją 2 opcje - albo będą widoczne 2 pełne karty i 2 kawałki 
        //(dla kart o szerokości poniżej 50%) lub 1 karta pełna i 2 części 
        //(dla kart o szerokości 50% i więcej)
        var width = cards[0].offsetWidth;
        var widthVw = width / viewportWidth * 100;
        var first, distance;

        if (widthVw >= 50) {
            //Obliczenia dla różnicy między pozycją kolejnych elementów przy
            //rozmieszczeniu dla 3 kart w widoku (ostatnia karta to ta pierwsza
            //z minusową wartością).
        } else {
            //Obliczenia dla różnicy między pozycją kolejnych elementów przy
            //rozmieszczeniu dla 4 kart w widoku (ostatnia karta to ta pierwsza
            //z minusową wartością) oraz pozycji pierwszej karty od lewej strony.

            //Szerokość odstępów między kartami
            var space = viewportWidth * 0.05;

            //Obliczamy ile karta najbardziej po lewej i prawej będzie pokazana
            // (100% ekranu - ((2*szerokość kart)+(3*szerokość odstępów między kartami)))/2
            var partialView = (viewportWidth - ((2 * width) + (3 * space))) / 2;
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

        next.addEventListener('click', (e) => {
            console.log(cards);
            var promises = new Array(cards.length);
            for (var i = 0; i < cards.length; i++) {
                var currentCard = cards[i];
                // console.log(currentCard);
                promises[i] = animation(currentCard);
                // .then(() => {
                //         //  currentCard.remove();
                //         //console.log("kupA");

                // });
            }
            Promise.all(promises).then(() => {
                appendCards(++megaI);
            });
        });

        function onAnimationComplete(currentCard, resolve) {
            // currentCard.removeEventListener('transitionend', function(){});
            currentCard.style.transform = "";
            currentCard.remove();
            resolve();
        }

        function animation(currentCard) {
            return new Promise((resolve) => {
                currentCard.addEventListener('transitionend',
                    (e) => onAnimationComplete(currentCard, resolve),
                    false);
                currentCard.style.transform = "translateX(" + -distance + "px)";
            });
        }






        //appendCards(elements, megaI++);

    }




    //https://stackoverflow.com/questions/15876754/infinity-loop-slider-concepts
    //https://codepen.io/iblamefish/pen/pPbXGJ

})(gallery);