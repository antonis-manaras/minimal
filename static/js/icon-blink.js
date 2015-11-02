function blink(){
    $('.blink').delay(200).fadeTo(200,0.0).delay(200).fadeTo(200,1, blink);
}

$(document).ready(function() {
    blink();
});
