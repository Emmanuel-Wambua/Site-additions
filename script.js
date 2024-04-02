var divPrimary = document.getElementById('primaryInfo')
var display = 0;

function hideShow(){
    if(display == 0){
        divPrimary.style.display = 'flex'
        display = 1;
    }
    else{
        divPrimary.style.display ='none'
        display = 0;
    }
}

var divHighschool = document.getElementById('highschoolInfo')
var detroit = 0;

function highInfo(){
    if(detroit == 0){
        divHighschool.style.display = 'flex'
        detroit = 1;
    }
    else{
        divHighschool.style.display = 'none'
        detroit = 0;
    }
}

var divCoding = document.getElementById('codingInfo')
var anything = 0

function shortcourseInfo(){
    if(anything == 0){
        divCoding.style.display = 'flex'
        anything = 1;
    }
    else{
        divCoding.style.display = 'none'
        anything = 0;
    }
}