var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if (results[0].label == "Barking")
         { img.src = 'bark.gif'; dog = dog+1; }

          else if (results[0].label == "Meowing")

           { img.src = 'meow.gif'; cat = cat + 1; }
           
        else if(results[0].label == "Roar"){
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flion-cartoon&psig=AOvVaw1y_heE7gR7WzWY6vmF6RB2&ust=1686046366683000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKDpxKbyq_8CFQAAAAAdAAAAABAE";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcartoon%2Bcow&psig=AOvVaw2Yo1WpFzlkM9lNmkkvQbrQ&ust=1686046450717000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJi79c7yq_8CFQAAAAAdAAAAABAE";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fhearing-ear-icon-vector-graphics-gm1268414791-372305553&psig=AOvVaw2Fq_nFLGt4EuJhi2lzq-uu&ust=1686045938141000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJia5d3wq_8CFQAAAAAdAAAAABAE";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}

  