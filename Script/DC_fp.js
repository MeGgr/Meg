//-----------Меню бутони----------//
//функция, правеща визуално да изглежда бутона натиснат
$("button").click(function () {
    $("button").removeClass("pushed");
    $(this).addClass("pushed");
});
//при зареждане на сайта визуализираме бутон "начало" като натиснат
$(document).ready(function () {
    $("#nachalo").addClass("pushed");
});

//Функции зареждащи html в iframe
$("#nachalo").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_NACHALO.html");
});

$("#igri").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_IGRI.html");
});

$("#parti").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_PARTITA_I_RD.html");
});

$("#novini").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_NOVINI.html");
});

$("#qa").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_QA.html");
});

$("#kontakti").click(function () {
    $("iframe").attr("src", "HTMLs/DC_fp_KONTAKTI.html");
});

// -----------Новини---------//
//Бутон, визуализиращ div с повече информация и скриващ себе си
$("#art_atelie").click(function () {
    $(".art_atelie_visible").css("display", "block");
    $(this).css("display", "none");
});
$("#detski_kuvert").click(function () {
    $(".detski_kuvert_visible").css("display", "block");
    $(this).css("display", "none");
});
//Бутон, скриващ div и визуализира бутона "повече информация"
$("#malko_inf").click(function () {
    $(".art_atelie_visible").css("display", "none");
    $("#art_atelie").css("display", "block");
});
$("#po_malko_inf").click(function () {
    $(".detski_kuvert_visible").css("display", "none");
    $("#detski_kuvert").css("display", "block");
});

//------------------Лява и дясна стрелка в началната страница---------------//
//функция взимаща името на текущо заредената снимка, увеличава се с едно и се зарежда
$(".desen_button").click(function () {
    var res = $(".nachalni_snimki").attr("src");
    res = res.substring(24, 25);
    res = ++res;
    //при достигане на несъществуваща снимка да върне първата
    if (res == 10) res = 1;
    $(".nachalni_snimki").fadeOut(300, function () {
        $(".nachalni_snimki").attr("src", "../Image/nachalo_snimki/" + res + ".jpg");
    }).fadeIn(300);
});
//функция взимаща името на текущо заредената снимка, намалява се с едно и се зарежда
$(".lqv_button").click(function () {
    var res = $(".nachalni_snimki").attr("src");
    res = res.substring(24, 25);
    res = --res;
    //при достигане на несъществуваща снимка да върне последната 
    if (res == 0) res = 9;
    //Прехване/появяване на снимката чрез fadeOut/FadeIn с 300 ms
    $(".nachalni_snimki").fadeOut(300, function () {
        $(".nachalni_snimki").attr("src", "../Image/nachalo_snimki/" + res + ".jpg");
    }).fadeIn(300);
});
//------------Контакти--------------//
//функция задействаща излитането на самолетчето при натискане на submit бутонa, чрез смяна на класа с transition ефект
$("form").submit(function (Event) {
    $("#button-send").attr("value", "DONE!");
    $("#button-send").removeClass("vurnat_samolet");
    $("#button-send").addClass("izlita_samolet");
});
//при клик в input/textarea поле връща самолетчето в изходна позиция 
$("input, textarea").click(function () {
    $("#button-send").attr("value", "SEND");
    $("#button-send").removeClass("izlita_samolet");
    $("#button-send").addClass("vurnat_samolet");
});
