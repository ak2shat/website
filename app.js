let mynav = document.getElementById('nvbar');
let nvlinks = document.getElementsByClassName('nav-link');
let logo = document.getElementsByClassName('txt-big');
let hell = document.getElementById('hell');
let loader = document.getElementById('preloader');

window.onload = function animate(){

    // await sleep(2000);
    
    loader.style.display = "none";
     
}



window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        mynav.classList.add('sticky-top');
        
        mynav.classList.add('blue');
        for(let i=0;i<nvlinks.length;i++){
            nvlinks[i].classList.add('text-white');
        }
        logo[0].classList.add('text-white');
    }
    else{
        mynav.classList.remove('sticky-top');
        
        mynav.classList.remove('blue');
        for(let i=0;i<nvlinks.length;i++){
            nvlinks[i].classList.remove('text-white');
        }
        logo[0].classList.remove('text-white');
    }

}