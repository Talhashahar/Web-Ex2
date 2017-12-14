

function getRandomColor() {                     // taken from stackoverflow
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function star() {
    if(this.childElementCount === 0) {
        var addStar = document.createElement('img');
        addStar.src = "images/star.png";
        this.appendChild(addStar);

    } else {
        this.removeChild(this.lastChild);
    }
}

function rectangle() {
    console.log("here!");
    var rec = document.createElement("article");
    rec.style.backgroundColor = getRandomColor();
    var rectangles = document.getElementById("rectangle");

    if(rectangles.childElementCount === 0) {
        rec.appendChild(document.createTextNode("+"));
        rec.addEventListener('click', rectangle);
        rectangles.appendChild(rec);

    } else {
        rec.addEventListener('click', star);
        rectangles.insertBefore(
            rec,
            rectangles.firstChild
        );
    }
}



function rectangleManager(){
    var init = function () {
        for(var i = 0 ; i < 39 ; ++i) {
            this.rectangle();
        }
    };
    init();
}