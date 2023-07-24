var counter = 1;

function next(){
    counter ++;
    switch (counter){
        case 2:
            document.getElementById("box1").classList.add("off");
            document.getElementById("box2").classList.add("on");
            document.getElementById("box3").classList.remove("on");
            break
        case 3:
            document.getElementById("box1").classList.add("off");
            document.getElementById("box2").classList.remove("on");
            document.getElementById("box3").classList.add("on");  
            break
    }
    if (counter > 3){
        document.getElementById("box1").classList.remove("off");
        document.getElementById("box2").classList.remove("on");
        document.getElementById("box3").classList.remove("on"); 
        counter = 1;
    }
    document.getElementById("counter-a").innerHTML = "0"+ counter;
    console.log(counter);
}

function prev(){
    counter--;
    switch (counter){
        case 1:
            document.getElementById("box1").classList.remove("off");
            document.getElementById("box2").classList.remove("on");
            document.getElementById("box3").classList.remove("on"); 
            break
        case 2:
            document.getElementById("box1").classList.add("off");
            document.getElementById("box2").classList.add("on");
            document.getElementById("box3").classList.remove("on");
            break
        case 3:
            document.getElementById("box1").classList.add("off");
            document.getElementById("box2").classList.remove("on");
            document.getElementById("box3").classList.add("on");  
            break
    }
    if (counter < 1){
        document.getElementById("box1").classList.add("off");
        document.getElementById("box2").classList.remove("on");
        document.getElementById("box3").classList.add("on");
        counter = 3;
    }
    document.getElementById("counter-a").innerHTML = "0"+ counter;
    console.log(counter);
}