const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

const btns = document.getElementById('toast-success');
const btnd = document.getElementById('toast-danger');
const btnw = document.getElementById('toast-warning');
const btni = document.getElementById('toast-info');

const Stoast1 = document.querySelector('.toast-success');
const Stoast2 = document.querySelector('.toast-danger');
const Stoast3 = document.querySelector('.toast-warning');
const Stoast4 = document.querySelector('.toast-info');

const Sprog = document.querySelector('.progress');
const Sprog1 = document.querySelector('.progress1');
const Sprog2 = document.querySelector('.progress2');
const Sprog3 = document.querySelector('.progress3');
const closed = document.querySelectorAll('.close');

const modalbtn = document.getElementById('openmdl');
const modal = document.getElementById('modal');
const modalbody = document.querySelector('.modal-content');
const x = document.querySelectorAll('.closed');


const modalbtn1 = document.getElementById('topmdl');
const modalbody1 = document.querySelector('.modal-content-top-modal');
const modal1 = document.getElementById('modaltop');

const modalbtn2 = document.getElementById('leftmdl');
const modalbody2 = document.querySelector('.modal-content-left-modal');
const modal2 = document.getElementById('modalleft');

const modalbtn3 = document.getElementById('rightmdl');
const modalbody3 = document.querySelector('.modal-content-right-modal');
const modal3 = document.getElementById('modalright');


const modalbtn4 = document.getElementById('bottommdl');
const modalbody4 = document.querySelector('.modal-content-bottom-modal');
const modal4 = document.getElementById('modalbottom');





for (let i = 0; i < closed.length; i++) {

  closed[i].addEventListener('click', function () {
    if (Stoast1) {
      Stoast1.classList.remove('active');
    }
    if (Stoast2) {
      Stoast2.classList.remove('active');
    }
    if (Stoast3) {
      Stoast3.classList.remove('active');
    }
    if (Stoast4) {
      Stoast4.classList.remove('active');
    }



  });

}

for (let i = 0; i < x.length; i++) {

  x[i].addEventListener('click', function () {
    if (x) {
      if (modalbody) {
        modalbody.classList.remove('showmodal');
        modalbody.classList.add('hidemodal');
      }
      if (modalbody1) {
        modalbody1.classList.remove('showtopmodal');
        modalbody1.classList.add('hidetopmodal');
      }
      if (modalbody2) {
        modalbody2.classList.remove('showleftmodal');
        modalbody2.classList.add('hideleftmodal');
      }
      if (modalbody3) {
        modalbody3.classList.remove('showrightmodal');
        modalbody3.classList.add('hiderightmodal');
      }
      if (modalbody4) {
        modalbody4.classList.remove('showbottommodal');
        modalbody4.classList.add('hidebottommodal');
      }
      if (modal) {
        modal.style.display = "none";
      }
      setTimeout(() => {
        if (modal1) {
          modal1.style.display = "none";
        }
        if (modal2) {
          modal2.style.display = "none";
        }
        if (modal3) {
          modal3.style.display = "none";
        }
        if (modal4) {
          modal4.style.display = "none";
        }
      }, 500);
    }



  });

}

console.log(Sprog);
console.log(Sprog1);
console.log(Sprog2);
console.log(Sprog3);

console.log(modalbody);
console.log(modalbody1);
console.log(modalbody3);
console.log(modalbody4);

if (btns) {
  btns.addEventListener('click', function () {
    Stoast1.classList.add('active');

    Sprog.classList.add('active');



    setTimeout(function () {
      Stoast1.classList.remove('active');

      Sprog.classList.remove('active');
    }, 5000);
  });
}
if (btnd) {
  btnd.addEventListener('click', function () {
    Stoast2.classList.add('active');
    Sprog1.classList.add('active');





    setTimeout(function () {
      Stoast2.classList.remove('active');
      Sprog1.classList.remove('active');
    }, 5000);
  });
}
if (btnw) {
  btnw.addEventListener('click', function () {
    Stoast3.classList.add('active');
    Sprog2.classList.add('active');



    setTimeout(function () {
      Stoast3.classList.remove('active');
      Sprog2.classList.remove('active');
    }, 5000);
  });
}
if (btni) {
  btni.addEventListener('click', function () {
    Stoast4.classList.add('active');
    Sprog3.classList.add('active');



    setTimeout(function () {
      Stoast4.classList.remove('active');
      Sprog3.classList.remove('active');
    }, 5000);
  });
}
if (modalbtn) {
  modalbtn.addEventListener('click', function () {
    modal.style.display = 'flex';
    modalbody.classList.remove('hidemodal');
    modalbody.classList.add('showmodal');
  });
}


if (modalbtn1) {
  modalbtn1.addEventListener('click', function () {
    modal1.style.display = 'flex';
    modalbody1.classList.remove('hidetopmodal');
    modalbody1.classList.add('showtopmodal');
  });
}
if (modalbtn2) {
  modalbtn2.addEventListener('click', function () {
    modal2.style.display = 'flex';
    modalbody2.classList.remove('hideleftmodal');
    modalbody2.classList.add('showleftmodal');
  });
}

if (modalbtn3) {
  modalbtn3.addEventListener('click', function () {
    modal3.style.display = 'flex';
    modalbody3.classList.remove('hiderightmodal');
    modalbody3.classList.add('showrightmodal');
  });
}
if (modalbtn4) {
  modalbtn4.addEventListener('click', function () {
    modal4.style.display = 'flex';
    modalbody4.classList.remove('hidebottommodal');
    modalbody4.classList.add('showbottommodal');
  });
}






window.onclick = function (event) {
  if (event.target == modal) {

    modal.style.display = "none";


  }
  if (event.target == modal1) {
    modalbody1.classList.remove('showtopmodal');
    modalbody1.classList.add('hidetopmodal');
    setTimeout(() => {
      modal1.style.display = "none";
    }, 500);


  }
  if (event.target == modal2) {
    modalbody2.classList.remove('showleftmodal');
    modalbody2.classList.add('hideleftmodal');
    setTimeout(() => {
      modal2.style.display = "none";
    }, 500);



  }
  if (event.target == modal3) {
    modalbody3.classList.remove('showrightmodal');
    modalbody3.classList.add('hiderightmodal');
    setTimeout(() => {
      modal3.style.display = "none";
    }, 500);
  }
  if (event.target == modal4) {
    modalbody4.classList.remove('showbottommodal');
    modalbody4.classList.add('hidebottommodal');
    setTimeout(() => {
      modal4.style.display = "none";
    }, 500);
  }
}
if (toggle) {
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('fa-moon-o');
    body.classList.toggle('dark');
    body.style.transition = '2s';
    // if(this.classList.toggle('fa-sun-o')){
    //     body.style.background="white";
    //     body.style.color='black';
    //     body.style.transition='2s';
    // }
    // else{
    //     body.style.background="black";
    //     body.style.color='white';
    //     body.style.transition='2s';
    // }
  });
}

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');
if (open_btn) {
  open_btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
  });
}
if (close_btn) {
  close_btn.addEventListener('click', () => {
    main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });
}
if (window) {
  window.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.popup-overlay')) {
      main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }
  });
}

const imgmodal=document.querySelector('.imgmodal');
const bodymodal=document.getElementById('bodymodal');
const img=document.getElementById('myimg');

if (img) {
img.addEventListener('click', function() {
  imgmodal.classList.remove('hidemodal');
imgmodal.style.display='block';
bodymodal.src=this.src; 

});
}
if(window){
window.addEventListener('click', function(e) {
if(e.target==imgmodal){
imgmodal.classList.add('hidemodal');
  setTimeout(() => {
    imgmodal.style.display='none';
  }, 500);
}

});
}
const img1=document.getElementById('myimg1');

if(img1){
img1.addEventListener('click', function() {
  imgmodal.classList.remove('hidemodal');
imgmodal.style.display='block';
bodymodal.src=this.src; 

});
}
if(window){
window.addEventListener('click', function(e) {
if(e.target==imgmodal){
imgmodal.classList.add('hidemodal');
  setTimeout(() => {
    imgmodal.style.display='none';
  }, 500);
}

});
}

// const observer = new IntersectionObserver((entries)=> {
//       entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//           entry.target.classList.add('show');
//         }
//         else{
//           entry.target.classList.remove('show');
//         }
//       });

// });
// const hiddenel =document.querySelectorAll('.hidden');
// hiddenel.forEach((el) => observer.observe(el));
document.getElementById('cont').style.backgroundColor='pink';

function funct(){
  document.designMode = "on";
const newdiv= document.createElement("div");
newdiv.style.backgroundColor='red';
newdiv.style.height='100px';
newdiv.innerHTML;
document.body.appendChild(newdiv);
const txt1= document.createElement("p");
txt1.innerText="This is a new paragraph.";
newdiv.appendChild(txt1);
  
}
