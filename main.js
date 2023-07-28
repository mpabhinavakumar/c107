//https://teachablemachine.withgoogle.com/models/_AnM4sDL4/

function startClassification()
{

    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_AnM4sDL4/model.json',modelReady);
}

function modelReady(){

    classifier.classify(gotResults);
}