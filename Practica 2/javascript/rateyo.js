$(function () {
    $("#ratemirador").rateYo({rating: 3.25});
    $(".rate1mirador").rateYo({rating: 5,starWidth: "20px"});
    $(".rate2mirador").rateYo({rating: 4,starWidth: "20px"});
    $(".rate3mirador").rateYo({rating: 3,starWidth: "20px"});
    $(".rate4mirador").rateYo({rating: 1,starWidth: "20px"});

    $("#ratemuseo").rateYo({rating: 4.5});
    $(".rate1museo").rateYo({rating: 5,starWidth: "20px"});
    $(".rate2museo").rateYo({rating: 4,starWidth: "20px"});

    $("#ratecasa").rateYo({rating: 3});
    $(".rate1casa").rateYo({rating: 4,starWidth: "20px"});
    $(".rate2casa").rateYo({rating: 3,starWidth: "20px"});
    $(".rate3casa").rateYo({rating: 2,starWidth: "20px"});

    $("#rateEntroido").rateYo({rating: 4.5});
    $(".rate1entroido").rateYo({rating: 4,starWidth: "20px",marginLeft:0});
    $(".rate2entroido").rateYo({rating: 5,starWidth: "20px",marginLeft:0});

    $("#rateTour").rateYo({rating: 4});
    $(".rate1tour").rateYo({rating: 5,starWidth: "20px",marginLeft:0});
    $(".rate2tour").rateYo({rating: 3,starWidth: "20px",marginLeft:0});

    $("#ratesurf").rateYo({rating: 5});
    $(".rate1surf").rateYo({rating: 5,starWidth: "20px",marginLeft:0});
});

function changeText() {
    var boton = document.getElementById(("btnValoracion"));
    if (boton.value === "Ver valoraciones") {
        boton.value = "Ocultar valoraciones";
    } else {
        boton.value = "Ver valoraciones";
    }
}
