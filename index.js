

    
    let value = document.querySelectorAll(".num");
    let page2 = document.getElementById("Page-2");
    let scrolldebate = document.querySelector(".debate-box");
    let debateitem = document.querySelector(".debate-item");
    let next = document.getElementById("Nextbtn");
    let prev = document.getElementById("Prevbtn");
    let interval = 3000;
    let evmBtn = document.getElementsByClassName("evm-btn");
    let toggleBtn = document.querySelector(".toggle-btn");
    let toggleBtnicon = document.querySelector(".toggle-btn i");
    let dropMenu = document.querySelector(".dropdownmenu");
    
    
    
    
    function onpage2(){
    
        value.forEach(value=>{
            let st = 0;
            let en = parseInt(value.getAttribute("data-value"));
            let duration = Math.floor(interval/en);
            let counter = setInterval(function(){
                st += 1;
                value.textContent = st;
                if(st==en) clearInterval(counter);
            },duration);
        });
    };
    
    if(next || prev){

        next.addEventListener("click",()=>{
            scrolldebate.scrollLeft += scrolldebate.offsetWidth - 50;
            
        });
        prev.addEventListener("click",()=>{
            scrolldebate.scrollLeft -= scrolldebate.offsetWidth-50;
            
        });
    }
    
    function Audmeme(temp) {
     
        
        if (temp === 1) {
            let num = Math.floor(Math.random() * 3 + 1);
            let beat = new Audio("./aud/Modi-" + num + ".mp3");
            beat.play();
        }
        else if (temp === 2) {
            let num = Math.floor(Math.random() * 3 + 1);
            let beat = new Audio("./aud/Rahul-" + num + ".mp3");
            beat.play();
        }
        else if (temp === 3) {
            let num = Math.floor(Math.random() * 2 + 1);
            let beat = new Audio("./aud/Mamta-" + num + ".mp3");
            beat.play();
        }
        else if (temp === 4) {
            
            let beat = new Audio("./aud/Stalin.mp3");
            beat.play();
        }
        else if (temp === 5) {
            let num = Math.floor(Math.random() * 3 + 1);
            let beat = new Audio("./aud/Kejriwal-" + num + ".mp3");
            beat.play();
        }
        else if (temp === 6) {
          
            let beat = new Audio("./aud/uddhav.mp3");
            beat.play();
        }
        else if (temp === 7) {
           
            let beat = new Audio("./aud/Ys.mp3");
            beat.play();
        }
        else if (temp === 8) {
           
            let beat = new Audio("./aud/fakir.mp3");
            beat.play();
        }
        let el = document.getElementById("evm-btn-"+temp);
        el.classList.add("flash");
        setTimeout(() => {
            el.classList.remove("flash");
        }, 100);
    }
    
    // toggleBtn.addEventListener("click",()=>{
    //     dropMenu.classList.toggle("open");
    //     const check = dropMenu.classList.contains("open");
    
    //     toggleBtnicon.classList = check ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    // })
    
    window.addEventListener("DOMContentLoaded", (event) => {
        const el = document.querySelector('.toggle-btn');
        if (el) {
          el.addEventListener('click', ()=>{
            dropMenu.classList.toggle("open");
            const check = dropMenu.classList.contains("open");
    
            toggleBtnicon.classList = check ? "fa-solid fa-xmark" : "fa-solid fa-bars";
          });
        }
    });
    
    
    
    

  

