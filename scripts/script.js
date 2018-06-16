var canvas = document.getElementById("myCircleCanvas");
var myCanvas = canvas.getContext("2d");
//debugger;
var radiusInput = document.getElementById('radiusInput');/////////  הקלט של הרדיוס
var circlesArray = [];
var calcButton = document.getElementById('calcBTN');
calcButton.addEventListener("click", function () {
    event.preventDefault();
    let tempCRadius = radiusInput.value; ///////// שמירת הערך של הרדיוס בתור משתנה
    if (tempCRadius.match(/[^0-9]/i)) { /////////   בדיקה שרק מספרים נמצאים בתוך הקלט, זה יעני רגאקספ שאומר תבדוק, אם יש משהו חוץ ממספר אז תתן ארור
        alert("Sphere Radius can contain numbers only")
    }
    else if (tempCRadius < 5) {
        alert('please enter a number which is greater than 4');
    }
    else if (tempCRadius > 499) {
        alert('please enter a number which is smaller than 499');
    }
    else {
        myCanvas.beginPath();
        myCanvas.arc(500, 500, tempCRadius, 0, 2 * Math.PI);
        myCanvas.stroke();
        myCanvas.closePath();
        let tempRvalue = radiusInput.value;
        let volumeInput = document.getElementById('volumeInput');
        volumeInput.value = eval(((4 * Math.PI * (tempRvalue * tempRvalue * tempRvalue)) / 3));
        radiusInput.value = '';
        circlesArray.push(tempCRadius);
    }
});


var j = 0;

var clearButton = document.getElementById('clearBTN');
clearButton.addEventListener("click", function () {
    myCanvas.clearRect(0, 0, canvas.width, canvas.height);
    circlesArray = [];
});


var fillButton = document.getElementById('fillBTN');
fillButton.addEventListener("click", circleAnimation);

function circleAnimation() {
    //debugger;
    let circle = circlesArray[j]
    myCanvas.beginPath();
    myCanvas.arc(500, 500, (parseInt(circle)), 0, 2 * Math.PI);
    myCanvas.fill();
    myCanvas.closePath();
    j++;
    if (j == circlesArray.length) {
        //debugger;
        clearTimeout(myTimeout);
        j = 0;
    }
    else{
        myTimeout = setTimeout(circleAnimation, 100);
    }
};