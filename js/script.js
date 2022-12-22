
// function that adds "._active" to element, after click from another element
function activateElem(clEl, acEl) {
    const clickElem = document.querySelector(clEl);
    if (clickElem) {
        const activeElem = document.querySelector(acEl);
        clickElem.addEventListener("click", function(){
            if (clEl == ".header__btn--menu") {
                document.body.classList.toggle("_lock");
            }
            clickElem.classList.toggle('_active');
            activeElem.classList.toggle('_active');
        });
    }
}

// if there are many elements "activates" them all
function activateAllElem(clEl, acEl) {
    const clickElem = document.querySelectorAll(clEl);
    if (clickElem) {
        const activeElem = document.querySelectorAll(acEl);
        for (let i = 0; i < activeElem.length; i++) {
            clickElem[i].addEventListener("click", function() {
                clickElem[i].classList.toggle('_active');
                activeElem[i].classList.toggle('_active');
            });
        }
    }
}


// advant section: mouseover script - changes image and text, after hower on item
let advantItem = document.querySelectorAll(".advant__item");
let targetImg = document.querySelector(".advant__img");
let targetText = document.querySelector(".advant__desc--right");
for (let i = 0; i < advantItem.length; i++) {
    advantItem[i].addEventListener('mouseover', (e) => {
        advantItem[i].style = "color: $darkGreen";
        for (let j = 0; j < advantItem.length; j++) {
            if (advantItem[j] != advantItem[i]) {
                advantItem[j].style = "color: #fff";
            }
        }
        switch (advantItem[i].getAttribute("data-img")) {
            case "img1":
                targetImg.style.backgroundImage = 'url("img/advant/advant1.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции однозначно фиксирует необходимость распределения внутренних резервов и ресурсов. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции"
                break;
            case "img2":
                targetImg.style.backgroundImage = 'url("img/advant/advant2.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Ясность нашей позиции очевидна: синтетическое тестирование в значительной степени обусловливает важность форм воздействия. Таким образом, базовый вектор развития играет важную роль в формировании дальнейших направлений развития."
                break;
            case "img3":
                targetImg.style.backgroundImage = 'url("img/advant/advant3.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Учитывая ключевые сценарии поведения, сложившаяся структура организации не оставляет шанса для вывода текущих активов. Безусловно, социально-экономическое развитие играет важную роль в формировании своевременного выполнения сверхзадачи."
                break;
            case "img4":
                targetImg.style.backgroundImage = 'url("img/advant/advant4.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Следует отметить, что понимание сути ресурсосберегающих технологий способствует повышению качества системы массового участия. Как принято считать, многие известные личности формируют глобальную экономическую сеть и при этом — объявлены нарушающими общечеловеческие нормы этики и морали."
                break;
            case "img5":
                targetImg.style.backgroundImage = 'url("img/advant/advant5.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Лишь активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме. Разнообразный и богатый опыт говорит нам, что убеждённость некоторых оппонентов создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экономической целесообразности принимаемых решений."
                break;
            case "img6":
                targetImg.style.backgroundImage = 'url("img/advant/advant6.jpg")';
                targetImg.classList.toggle("advant__img--mouseover");
                targetText.innerHTML = "Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности, в своём классическом представлении, допускает внедрение благоприятных перспектив. Таким образом, высокотехнологичная концепция общественного уклада выявляет срочную потребность поэтапного и последовательного развития общества."
                break;
            case "img7":
                targetImg.classList.toggle("advant__img--mouseover");
                targetImg.style.backgroundImage = 'url("img/advant/advant7.jpg")';
                targetText.innerHTML = "Также как семантический разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные решения касаемо соответствующих условий активизации! Каждый из нас понимает очевидную вещь: убеждённость некоторых оппонентов предоставляет широкие возможности для новых предложений."
                break;
        }
        
    });
}
// advant section: mouseout script - disables changes from previous script
// for (let i = 0; i < advantItem.length; i++) {
//     advantItem[i].addEventListener('mouseover', (e) => {
        
//     });
// }
activateElem('.header__btn--menu', '.header__list');
activateAllElem('.faq-elem__title', '.faq-elem__content');