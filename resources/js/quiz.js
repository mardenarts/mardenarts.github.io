
strdata = decodeURIComponent(atob(qdata)); items = JSON.parse(strdata);
var main = document.getElementById('main');
// create label
var lblCorrect = document.createElement('div'); lblCorrect.setAttribute('id', 'label_correct'); var correctAnswers = 0;  var totalAnswers = Object.keys(items).length; main.appendChild(lblCorrect);
var quizContainer = document.createElement('div'); quizContainer.classList.add('quiz_container'); main.appendChild(quizContainer);
for (id in items) {
    // card
    var card = document.createElement('div');
    card.classList.add('quiz_card');
    
    var img = document.createElement('div');
    var dt = "background-image:url('" +  'data:image/png;base64, ' + items[id].img + "');"
    img.classList.add('quiz_image');
    img.setAttribute('style', dt)

    var trp = document.createElement('img');
    trp.setAttribute('src', '/images/pages/transparent.png');
    img.appendChild(trp);

    //var img = document.createElement('img');
    //img.classList.add('quiz_image');
    //img.setAttribute('src', 'data:image/png;base64, ' + items[id].img);
    
    var txt = document.createElement('input');
    txt.classList.add("ipt_quiz");
    txt.setAttribute('id', id);
    txt.addEventListener('focusout', assessAnswer);
    card.appendChild(img);
    card.appendChild(txt);
    quizContainer.appendChild(card);
}
function assessAnswer(event) {

    var id = event.srcElement.id;
    var edt = document.getElementById(id);
    var val = edt.value.toUpperCase();
    var answers = items[id].answers;

    if (val == "") {

    }
    else if (answers.includes(val)) {
        edt.value = answers[0];
        edt.classList.add('quiz_good');
        edt.classList.remove('quiz_bad');
        edt.disabled = true;
        correctAnswers += 1;
        updateLabelCorrect()
    }
    else {
        //edt.before( edt.clone(true) ).remove();
        edt.classList.remove('quiz_bad');
        void edt.offsetWidth;
        edt.classList.add('quiz_bad');
    }
}
function updateLabelCorrect() {

    console.log(correctAnswers);
    lblCorrect.innerHTML = "CORRECT ANSWERS: " + parseInt(correctAnswers*100/totalAnswers) + "%";
    if (correctAnswers == totalAnswers) {
        lblCorrect.classList.add('blink_me');
    }

};
window.onload = function(){

    updateLabelCorrect();
};