let toggleNav = false;
let bars = document.getElementById('bars');
let dropmenu = document.getElementById('dropMenu');
let newList = document.getElementById('newsList');

let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');

let slideWord1 = document.getElementById('slide1');
let slideWord2 = document.getElementById('slide2');

function open() {
    slideWord1.style.display = 'block';
    slideWord2.style.display = 'block';
}

open();

barsClick = function() {
    if(toggleNav === false) {
        dropmenu.style.visibility = 'visible';
        dropmenu.style.height = '620px';
        newList.style.visibility = 'visible';
        newList.style.height = '200px';
        bar1.style.transform = 'rotate(40deg)';
        bar1.style.position = 'relative';
        bar1.style.top = '10px';
        bar2.style.display = 'none';
        bar3.style.transform = 'rotate(-40deg)';
        toggleNav = true;
    } else {
        dropmenu.style.height = '0px';
        newList.style.height = '0px';
        bar1.style.transform = 'rotate(0deg)';
        bar1.style.display = 'block';
        bar1.style.top = '0px';
        bar2.style.display = 'block';
        bar3.style.transform = 'rotate(0deg)';


        ;

        toggleNav = false;
    }
    
}