const rainbow = document.querySelectorAll(".rainbox-col");
// console.log(rainbow);
const body = document.querySelector("body");

rainbow.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.style.backgroundColor === "red"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "orange"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "yellow"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "green"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "blue"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "indigo"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "violet"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
        if(e.target.style.backgroundColor === "white"){
            body.style.backgroundColor = e.target.style.backgroundColor;
        }
    });
});