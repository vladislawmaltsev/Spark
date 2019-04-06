//modal
$(".button_sign_in").click(function (event) {
    event.preventDefault();
    modalOpen(`<form onsubmit="return false" class="modal-form" action="">
    <h1 class="form__title">Вход</h1>
    <div class="form__group">
    <input placeholder=" " type="text" name="login" id="log" class="form__input" />
    <label class="form__label" for="log">Email</label>
    </div>
    <div class="form__group">
    <input placeholder=" " type="password" id="pass" name="password" class="form__input" />
    <label class="form__label" for="pass">Пароль</label>
    </div>
    <button class="form__button" >Войти</button>
    </form>`);
});

$(".button_register").click(function (event) {
    event.preventDefault();
    modalOpen(`<form onsubmit="return false" class="modal-form" action="">
            <h1 class="form__title">Регистрация</h1>
            <div class="form__group">
            <input placeholder=" " type="text" name="name" id="name" class="form__input" /> 
            <label class="form__label" for="name">Имя</label></div>
            <div class="form__group">
            <input placeholder=" " type="text" name="secondName" id="secondName" class="form__input" /> 
            <label class="form__label" for="secondName">Фамилия</label></div>
            <div class="form__group">
            <p>Ваш пол: 
             <input type="radio" name="sex" value="man" checked>мужской   
             <input type="radio" name="sex" value="woman"> женский
             </p>
            </div>
            <div class="form__group">
            <input placeholder=" " type="text" name="age" id="age" class="form__input" /> 
            <label class="form__label" for="age">Возраст</label></div>
            <div class="form__group"> 
            <input placeholder=" " type="text" name="login" id="reg" class="form__input" /> 
            <label class="form__label" for="reg">Email</label>
            </div>
            <div class="form__group">  
            <input placeholder=" " type="password" id="pass" name="password" class="form__input" />
            <label class="form__label" for="pass">Пароль</label>
            </div>
            <button class="form__button">Зарегистрироваться</button>
        </form>`);
});

$("#modal_close, #overlay").click(function () {
    $("#modal_form").animate({opacity: 0, top: "0%"}, 200, function () {
        $(this).css("display", "none");
        $("#overlay").fadeOut(400);
    });
});


function modalOpen(content) {
    $("#overlay").fadeIn(400, function () {
        $("#modal_form")
            .css("display", "block")
            .animate({opacity: 1, top: "35%"}, 200);
    });
    $("#modal_content").html(content);
}


var header = document.getElementById("header");
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add("header_active");
    } else {
        header.classList.remove("header_active");
    }
};

$(".menu").on("click", "a", function () {
    event.preventDefault();
    let id = $(this).attr("href"),
        top = $(id).offset().top - 60;

    $("body,html").animate({scrollTop: top}, 400);
});
