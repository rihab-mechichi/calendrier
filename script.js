
let bloc = document.getElementById('BigBloc');
let days = document.getElementById('days');
for (let i = 0; i < 7; i++) {
    let day = document.createElement('div');
    days.appendChild(day);
    day.setAttribute("class","day");
    let tabDay = ["S","M","T","W","T","F","S"];
    day.textContent = tabDay[i]
}
let pg = document.getElementById('pg');
let months = ["May","June","July","August","September","October","November","December","January","February","March","April"];
pg.textContent = "May" + " " + new Date().getFullYear();

    let mm = $('#ttmois div');
    let i = 0;
    let currentImg = mm.eq(i);
    mm.css("display","none");
    currentImg.css("display","block");
    currentImg.css("display","grid");
    currentImg.css("grid-template-columnsplay","17% 17% 17% 17% 17% 17% 17%");
            
    $("#right").click(function(e){
        i++;
        if (i < 12) {
            pg.textContent = months[i] + " " + new Date().getFullYear();
            mm.css("display","none");
            currentImg = mm.eq(i);
            currentImg.css("display","block");
            currentImg.css("display","grid");
            currentImg.css("grid-template-columnsplay","17% 17% 17% 17% 17% 17% 17%");
            } else{ i = 12}
    })
    let months2 = ["May","April", "March", "February", "January", "December", "November", "October", "September", "August", "July", "June", "May"];
    let j=0;
    $('#left').click(function(e){
        i--; j++;
        if (i < 0) {
        pg.textContent = months2[j] + " " + new Date().getFullYear(); ;
        mm.css("display","none");
        currentImg = mm.eq(i);
        currentImg.css("display","block");
        currentImg.css("display","grid");
        currentImg.css("grid-template-columnsplay","17% 17% 17% 17% 17% 17% 17%");
        } else {i = 0}
    
    })