window.onload = function() {
    // Menu
    const btnHamburguer = document.getElementsByClassName("btn-hamburguer");
    const navbar = document.getElementsByClassName("navbar")[0];
    const header = document.getElementsByClassName("menu")[0];
    
    for ( btn of btnHamburguer ) {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            navbar.classList.toggle("active");
            header.classList.toggle("active");
        });
    }

    // Mudar cor do header
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            header.classList.add("newMenu");
        } else {
            header.classList.remove("newMenu");
        }
    });
}

