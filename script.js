function share() {
    var message = $("input[name=Your Name]").val();
    window.open(
        "whatsapp://send?text="+message+"sent you a surprise with https://fauceter.in",'_blank'
    );
}