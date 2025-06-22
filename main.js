window.addEventListener("scroll", () => {
    const navbar =document.getElementById("navbar");
    if (window.scrollY > 35) {
       navbar.classList.add("show"); 
    } else {
      navbar.classList.remove("show"); 
    }
   
    let btn = document.getElementById('topBtn');
    window.onscroll = () => btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    btn.onclick = () => {
        let pos = window.scrollY, step = pos / 40;
        let id = setInterval(() => {
            if (pos <= 0) clearInterval(id);
            else window.scrollBy(0, -step), pos -= step;
        }, 15);
    };

});
