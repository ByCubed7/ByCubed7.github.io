
function SendMessage()
{
    // Get Message
    var messageBox = document.getElementById('message');
    if (messageBox == null) return;
    var message = messageBox.value;

    var authorBox = document.getElementById('author');
    if (authorBox == null) return;
    var author = authorBox.value;

    // 'Security' to stop basic webcrawlers from just picking this up
    var key = "U2FsdGVkX18/XGacgV1SWuz2CZFWebrIBH5AdxoEkMSbsEAohJWA07tOaA2xzRLS6+d2YuQP8u1aPpSP1m1XfZdY1uSThlwp340JaNzxlhAEn/QUqG4XXjrpS3LtMY2Z";
    var pass = CryptoJS.AES.decrypt(key, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

    // Embed
    var myEmbed = {
        author: { name: "ByCubed7.github.io observation." },
        title: `A message from ${author}!`,
        description: message,
        color: parseInt("#3fa8ae".replace("#", ""), 16)
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
