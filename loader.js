function Update() {

    var page = window.location.href.split("ByCubed7.github.io")[1];

    var myEmbed = {
        author: { name: "ByCubed7.github.io observation." },
        title: "Page loaded: " + page,
        //description: "This is a cool-looking Discord embed, sent directly from JavaScript!",
        color: parseInt("#ff0000".replace("#", ""), 16)
    };

    const params = {
        embeds: [myEmbed]
    };

    // Send
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/905068408129871912/J16MmbMIf-qhWnTwfCYtLH5UlodlpW_uxJ6vC01X0fxMFbtHE2Gxye6b28-YuDvA8xsN");
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
}



(function () {
    Update();
})();