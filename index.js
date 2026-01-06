const pin1 = document.querySelector("#pin1"); 
const cards = document.querySelector(".cards");
const pothole = document.querySelector("#pothole");  
const pin2 = document.querySelector("#pin2")
const wheelchair = document.querySelector("#wheelchair");  
const pin3 = document.querySelector("#pin3");
const trafficlight = document.querySelector("#trafficlight");  
const pin4 = document.querySelector("#pin4");
const tree = document.querySelector("#tree");  
const pin5 = document.querySelector("#pin5");
const garbage = document.querySelector("#garbage");  
const pin6 = document.querySelector("#pin6");
const water = document.querySelector("#water");  
const pin7 = document.querySelector("#pin7");
const manhole = document.querySelector("#manhole");  
const pin8 = document.querySelector("#pin8");
const sign = document.querySelector("#sign");  
const pin9 = document.querySelector("#pin9");
const headding = document.querySelector("#headding");
const counters = document.querySelectorAll(".stat-number");
let started = false;



pin1.onclick = function () { 

  if (cards.style.display === "block") {
    cards.style.display = "none";
    pin1.style.transform = "scale(1)";
  } else {
    cards.style.display = "block";
    pin1.style.transform = "scale(1.5)";
  }
};

pin2.onclick = function(){
  if (pothole.style.display === "block") {
    pothole.style.display = "none";
    pin2.style.transform = "scale(1)";
  } else {
    pothole.style.display = "block";
     pin2.style.transform = "scale(1.5)";
  };
};

pin3.onclick = function(){
  if (wheelchair.style.display === "block") {
    wheelchair.style.display = "none";
    pin3.style.transform = "scale(1)";
  } else {
    wheelchair.style.display = "block";
     pin3.style.transform = "scale(1.5)";
  };
};

pin4.onclick = function(){
  if (trafficlight.style.display === "block") {
    trafficlight.style.display = "none";
    pin4.style.transform = "scale(1)";
  } else {
    trafficlight.style.display = "block";
     pin4.style.transform = "scale(1.5)";
  };
};

pin5.onclick = function(){
  if (tree.style.display === "block") {
    tree.style.display = "none";
    pin5.style.transform = "scale(1)";
  } else {
    tree.style.display = "block";
     pin5.style.transform = "scale(1.5)";
  };
};

pin6.onclick = function(){
  if (garbage.style.display === "block") {
    garbage.style.display = "none";
    pin6.style.transform = "scale(1)";
  } else {
    garbage.style.display = "block";
    pin6.style.transform = "scale(1.5)";
  };
};

pin7.onclick = function(){
  if (water.style.display === "block") {
    water.style.display = "none";
    pin7.style.transform = "scale(1)";
  } else {
    water.style.display = "block";
    pin7.style.transform = "scale(1.5)";
  };
};

pin8.onclick = function(){
  if (manhole.style.display === "block") {
    manhole.style.display = "none";
    pin8.style.transform = "scale(1)";
  } else {
    manhole.style.display = "block";
    pin8.style.transform = "scale(1.5)";
  };
};

pin9.onclick = function(){
  if (sign.style.display === "block") {
    sign.style.display = "none";
    pin9.style.transform = "scale(1)";
  } else {
    sign.style.display = "block";
    pin9.style.transform = "scale(1.5)";
  };
};



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000; 
                const startTime = performance.now();

                const updateCount = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                
                    const currentVal = progress * target;

                    
                    if (target % 1 !== 0) {
                        counter.innerText = currentVal.toFixed(1);
                    } else {
                        counter.innerText = Math.floor(currentVal);
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target; 
                    }
                };

                requestAnimationFrame(updateCount);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});


