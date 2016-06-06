/**
 * Created by Tales on 02/06/2016.
 */

$(document).ready(function(){
    $("#frame-sap").hide();
    $("#frame-num").hide();
});

$(document).ready(function() {
    $("#botao-numeracao").click(function () {
        $("#frame-sap").fadeOut();
        $("#frame-num").fadeIn(3000);
        position(response);
    });
});


$(document).ready(function () {
    $("#botao-sapatinho").click(function () {
        $("#frame-num").fadeOut();
        $("#frame-sap").fadeIn(3000);
        position(response);
    });
});

