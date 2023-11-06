let counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter<4){
        counter=1;
    }
},7000)

const swith = document.querySelector('.switch');
swith.addEventListener("click", function () {
        swith.classList.toggle("active");
        document.body.classList.toggle("active");
    })