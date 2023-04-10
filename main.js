function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DOTrzVEnU/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var monkey = 0;

function gotResults (error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results)
        rn_r = Math.floor(Math.random() * 255) + 1;
        rn_g = Math.floor(Math.random() * 255) + 1;
        rn_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("timesDetected").innerHTML = 'Detected Dog - '+ dog+ ' Detected Cat - '+ cat+ ' Detected Cow - '+ cow+ ' Detected Monkey - '+ monkey;
        document.getElementById("audioName").innerHTML = 'The animal sound that was detected is '+ results[0].label;
        document.getElementById("timesDetected").style.color = "rgb("+rn_r+","+rn_g+","+rn_b+")";
        document.getElementById("audioName").style.color = "rgb("+rn_r+","+rn_g+","+rn_b+")";

        var img = document.getElementById("animal");

        if (results[0].label == "Dog Sounds") {
            img.src = 'dog.gif';
            ++dog;
            console.log(dog);
        } else if (results[0].label == "Cat Sounds") {
            img.src = 'cat.gif';
            ++cat;
            console.log(cat);
        } else if (results[0].label == "Cow Sounds") {
            img.src = 'cow.gif';
            ++cow;
            console.log(cow);
        } else if (results[0].label == "Monkey Sounds") {
            img.src = 'monkey.gif';
            ++monkey;
            console.log(monkey);
        } else {
            img.src = 'sound_waves.gif';
        }
    }
}