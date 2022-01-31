let mynav = document.getElementById('nvbar');
let nvlinks = document.getElementsByClassName('nav-link');
let logo = document.getElementsByClassName('txt-big');
let hell = document.getElementById('hell');
let loader = document.getElementById('preloader');
let navi = document.getElementById('navigator');
let year = document.getElementById('year');

year.innerText = new Date().getFullYear();

window.onload = function animate(){

    // await sleep(2000);
    // setTimeout(function(){
    //     loader.style.display = "none";
    // },3000);

//  setTimeout(function(){
//     hell.innerText = hell.innerText + " " + "World";

//  },1000);
  
    setTimeout(()=>{
        hell.innerText = hell.innerText + "e";
    },100);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "l";
    },200);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "l";
    },300);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "o";
    },400);
    
    setTimeout(()=>{
        hell.innerText = hell.innerText + " W";
    },500);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "o";
    },600);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "r";
    },650);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "l";
    },700);
    setTimeout(()=>{
        hell.innerText = hell.innerText + "d!";
    },750);


    setTimeout(function()
    {
         loader.style.display = "none";

        }, 1700);
    // loader.style.display = "none";
    


        
}

// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         console.log("yes");
//           navi.style.display = "none";
//     }
// }

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
        // navi.style.display = "none";

    }

    if(document.documentElement.scrollTop > 200){
        navi.style.display = "flex";
      }
      else{
        navi.style.display = "none";
      }

}

