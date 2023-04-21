


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

// Content blocking won't allow this
//LoadScript("CryptoJs", "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js", () => {})

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Dates and such

const startedProgramming = new Date(2012, 9, 17);
const startedHighschool  = new Date(2014, 9, 15);
const startedCollege     = new Date(2019, 9, 26);
const startedUni         = new Date(2021, 9, 26);

let startedProgrammingYearsElapsed = Math.round((Date.now() - startedProgramming) / 1000 / 60 / 60 / 24 / 365);

window.onload = (event) => {
    document.querySelectorAll('startedProgrammingYearsElapsed').forEach((el) => {
        el.innerHTML = startedProgrammingYearsElapsed;
    }
};

// Ready each code display correctly and highlightjs them
document.addEventListener('DOMContentLoaded', (event) => {

    if (typeof hljs !== 'object') return;

    // TODO: Find smallest indent on each element before subtraction

    document.querySelectorAll('pre code').forEach((el) => {
        var newContent = "";
        el.textContent.split('\n').forEach((line) => {
            // Unindent each line 6 times.
            newContent += line.replace("    ".repeat(6), "") + '\n';
            //i = 6; while(i > 0) { line = line.replace("    ", ""); i--; }
            //newContent += line + '\n';
        });
        //newContent = newContent.replaceAll("<", "&lt;");

        el.textContent = newContent.trim();
        hljs.highlightElement(el);
    });
});