


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function GetDevice() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
}

function SendMessage(title, msg = null, colour = "#ff0000") {
    // A small meessger I whipped up, just pings me a message~

    // 'Security' to stop basic webcrawlers from just picking this up
    var key = "U2FsdGVkX18/XGacgV1SWuz2CZFWebrIBH5AdxoEkMSbsEAohJWA07tOaA2xzRLS6+d2YuQP8u1aPpSP1m1XfZdY1uSThlwp340JaNzxlhAEn/QUqG4XXjrpS3LtMY2Z";
    var pass = CryptoJS.AES.decrypt(key, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

    // Embed
    var myEmbed = {
        author: { name: "ByCubed7.github.io observation." },
        title: title,
        description: msg,
        color: parseInt(colour.replace("#", ""), 16)
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

function LoadScript(name, source, callback) {
    var script = document.getElementById(name);

    if (script != null) {
      script = foundElement;
      callback();
      return script;
    }

    script = document.createElement('script');
    script.setAttribute("id", name);
    script.setAttribute('src', source);
    document.head.appendChild(script);

    script.onload = callback;
    return script;
}

function LoadCSS() {
    var file = location.pathname.split( "/" ).pop();

    var link = document.createElement( "link" );
    link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function fillPossibleElementWithText(elementId, text) {
    let element = document.getElementById(elementId);
    if (element == null) return;
    element.innerHTML = text;
}

function looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ')')();
}

function elementLooseJsonParse(element, obj) {
    return Function("element",'"use strict";return (' + obj + ')')(element);
}

function projectParse(project, element, obj) {
    return Function(
        "p", "e",
        '"use strict";return (' + obj + ')'
    )(project, element);
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

const device = GetDevice();

LoadScript("CryptoJs", "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {})

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Dates and such

const startedProgramming = new Date(2012, 9, 17);
let startedProgrammingYearsElapsed = Math.round((Date.now() - startedProgramming) / 1000 / 60 / 60 / 24 / 365);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const quote = `
"Magic is real you fools, it happens when you make other people laugh"<br>- Ethan<br><br>
`

const intro = `
Hey! I'm Ethan, an aspiring game programmer based in the UK. Here you can see some projects I've been working on throughout the years - rather that be for individual enjoyment or something to share.
`

const aboutme1 = `
Over the past ${startedProgrammingYearsElapsed} years, I have self-taught myself in a variety of programming languages and theories, such as C++, C#, Python and Java; As well as trying out and following many programming principles, design structures, libraries and interfaces! I have used this knowledge to develop a series of projects from applications, programs and games for a variety of my friends and community.
<br><br>
All in all, I enjoy building upon my current knowledge and learning both in and outside of programming! - for example rigging and animation in Blender, and once I feel competent in a particular subject I have a fondness to merge and experement it with something else, such as my Blender face rig and my Python facial tracking program.
`;
const aboutme2 = `
Wishing to focus on one thing, but inevitably finds themselfs programming snake in Brainfuck, Playing Minecraft from a discord bot or some other ridiculous project! My personal project consistancy is in shambles, always having the hyperfocus on one project to the next.


`;


window.onload = (event) => {
    // Upload page info
    fillPossibleElementWithText("quote", quote);
    fillPossibleElementWithText("intro", intro);
    fillPossibleElementWithText("about-me-1", aboutme1);
    fillPossibleElementWithText("about-me-2", aboutme2);
};
