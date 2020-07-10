//smooth scroll
var navAnchorTags = document.querySelectorAll('.nav-menu a');

for( var i = 0; i< navAnchorTags.length; i++){
    navAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        if(targetSectionId == 'home'){
            var targetSection = "body-header" ;
        }
        else{
        var targetSection = document.getElementById(targetSectionId);
        }

        var scrollInterval = setInterval(function(){
            var targetPosition = targetSection.getBoundingClientRect();
             if(targetPosition.top <= 0){
                        clearInterval(scrollInterval);
                        return;
                    }
                    window.scrollBy(0,50);
                }, 50);
    });
}

//skills progress
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initializeBars();

function fillBars(){

    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-skill-progress');
        let currentWidth = 0;
        let fillInterval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(fillInterval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';

    }, 10);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initializeBars();
    }
}