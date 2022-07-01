function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


const loader = document.querySelector(".preload");

setTimeout(function(){
    loader.classList.add("low");
    }, 2000);

const circleY = document.querySelector(".circle");

window.addEventListener('scroll', ()=>{
    let value = window.screenY;
    circleY.style.position = "absolute";
    circleY.style.top = 10 + value * 1.5 + '%';
    console.log(e);
});
