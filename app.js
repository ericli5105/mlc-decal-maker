function isHexColor(str) {
    const regex = /^#([0-9a-fA-F]){6}$/i;
    return regex.test(str);
}

function isWeight(str) {
    const num = Number(str);
    return Number.isFinite(num) && num < 1000 && num > 0;
}

function drawCircle(color, weight) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.font = "24px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(weight, 200, 200);
}

const colorInput = document.getElementById('color');
const weightInput = document.getElementById('weight');
const colorError = document.getElementById('colorError');
const weightError = document.getElementById('weightError');
const button1 = document.getElementById('button1');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

button1.addEventListener('click', 
    function makeDecal(){
        const color = colorInput.value.trim();
        const weight = weightInput.value.trim();
        colorError.textContent = "";
        weightError.textContent = "";

        /*Check if inputted values are valid*/
        if (isHexColor(color) == false) {
            colorError.textContent = "Invalid color!";
        } else if (isWeight(weight) == false || weight == "") {
            weightError.textContent = "Invalid weight!";
        } else {
            drawCircle(color, weight);
        }

    }
)




