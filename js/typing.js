$(function () {
    $("#title").typeIt({
        strings: ['Знакомьтесь', 'Общайтесь', 'Встречайтесь'],
        loopDelay: 6000,
        deleteDelay: 1000,
        speed: 250,
        lifeLike: true,
        breakLines: false,
        loop: true,
        autoStart: true
    });
});