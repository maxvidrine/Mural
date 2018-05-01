

let binary = [];
let wildCard = [];


 let colorSelector = function () {
    switch (binary[i]) {
        case 0:
            switch (wildCard[i]) {
                case 0:
                    return "d0";
                case 1:
                case 2:
                case 3:
                    return "d1";
                case 4:
                case 5:
                    return "d2";
                case 6:
                case 7:
                    return "d6";
                case 8:
                    return "d2";
                case 9:
                    return "d6";
                default:
                    return "d7";
            }
        case 1:
            switch (wildCard[i]) {
                case 0:
                    return "d7";
                case 1:
                case 2:
                case 3:
                    return "d4";
                case 4:
                case 5:
                    return "d3";
                case 6:
                case 7:
                    return "d5";
                case 8:
                    return "d3";
                case 9:
                    return "d5";
                default:
                    return "d7";
            }
        default:
            return "d0";
    }
}

let flipDiv = function () {
    var divId = this.getAttribute('div-id');
    console.log("User clicked div " + divId);
    i = parseInt(this.getAttribute('div-id'));
    binary[i] = (binary[i] + 1) % 2;
    this.setAttribute('class', colorSelector());
    console.log("Class for " + divId + " is now " + this.getAttribute('class'));
}

let createDivs = function () {
    for (i = 0; i < 125; i++) {
        var pixel = document.createElement('div');
        pixel.setAttribute('div-id', i);
        binary.push(1);
        wildCard.push(Math.floor(Math.random() * 10));
        pixel.setAttribute('class', colorSelector());
        pixel.addEventListener("click", flipDiv);
        console.log(document.getElementsByTagName('body'));
        document.getElementsByTagName('body')[0].appendChild(pixel);
    }
}

//add clearfloat

createDivs();