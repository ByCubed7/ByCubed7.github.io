var cryptoJs;

function PrepScripts(callback) {
    cryptoJs = document.createElement('script');
    cryptoJs.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js');
    document.head.appendChild(cryptoJs);

    cryptoJs.onload = callback;
}

function Update()
{
    // A small 'tracker' I whipped up, just pings me a message to let me know how much
    // trafic I'm getting on each page, helps me see how easy navigation is and what
    // pages aren't being used and also helps with dead link changing.

    // 'Security' to stop basic webcrawlers from just picking this up
    var key = "U2FsdGVkX18/XGacgV1SWuz2CZFWebrIBH5AdxoEkMSbsEAohJWA07tOaA2xzRLS6+d2YuQP8u1aPpSP1m1XfZdY1uSThlwp340JaNzxlhAEn/QUqG4XXjrpS3LtMY2Z";
    var pass = CryptoJS.AES.decrypt(key, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

    // Embed
    var myEmbed = {
        author: { name: "ByCubed7.github.io observation." },
        title: window.location.href,
        //description: "",
        color: parseInt("#ff0000".replace("#", ""), 16)
    };

    const params = {
        embeds: [myEmbed]
    };

    // Send
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/905068408129871912/" + pass);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
}



(function () {
    PrepScripts(Update);
})();
