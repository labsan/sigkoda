document.addEventListener('DOMContentLoaded', () => {

    // Navigasi sidebar
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Event Slider
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 400,
        interval: 5000,
    });

    // Event Materialboxed
    const image = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(image);

    // Event ScrollSpy
    const scroll = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scroll, {
        scrollOffset: 50,
    });

    // Daftar event listener pada setiap tautan menu
    document.querySelectorAll(".topnav, .sidenav")
        .forEach(elm => elm.addEventListener('click', function (event) {
            // Tutup sidenav
            const sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav).close();
        }));

});