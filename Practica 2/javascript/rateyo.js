$(function () {

    $(".rateyo").rateYo(
        {
            rating: 3
        }
    );
    $(".rateyo1").rateYo(
        {
            rating: 4,
            starWidth: "20px"
        }
    );
    $(".rateyo2").rateYo(
        {
            rating: 4,
            starWidth: "20px"
        }
    );
    $(".rateyo3").rateYo(
        {
            rating: 1,
            starWidth: "20px"
        }
    );
    $(".rateyo4").rateYo(
        {
            rating: 5,
            starWidth: "20px"
        }
    );
});

function changeText() {
    var boton = document.getElementById(("btnValoracion"));
    if (boton.value === "Ver valoraciones") {
        boton.value = "Ocultar valoraciones";
    } else {
        boton.value = "Ver valoraciones";
    }
}
