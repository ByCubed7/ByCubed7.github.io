class Main {
	constructor() {
		window.onload = this.OnLoad.bind(this)

		this.contactme = 'https://sites.google.com/view/bycubed7/me/contact'
		this.siteDiscord = 'https://discord.gg/hQvvMGwJTG';
		this.siteRick = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';
		this.siteMailme = 'mailto:ByCubed7@gmail.com?subject=';
		this.sitePaypal = 'https://www.paypal.com/paypalme/ByCubed7';

		this.tos = "Full payment is required in order to secure your place in queue. Work will not be started unless payment has been received. There are no refunds. \nYou are paying for my time and for my work, so be sure you want to order a commission before placing it because there are no refunds. \nAll listed prices are in GBP. \nPayments must be made via PayPal. \nIf you have a deadline tell me so that I can confirm that I can meet it. \nCommissions are completed on a first-come, first-serve basis. \nMessages are responded to in the order of which they were received, so response time may vary. \nI will still retain the license to the piece. You will have full permission to use them in your project(s), but if you want to sell a piece of my work we will have to negotiate a fair payment, for example, of royalties and if the project is never released I can still release the piece on DeviantArt, Twitter ect. I do this to protect myself. If this is confusing or a problem for you I am happy to discuss it.";

		this.menu = {
			// Menu
			"main": ["Welcome. \nI do commissions now I guess? \nThis is still in a work of progress.. See below for the commissions ", [{
					"Name": "Buy",
					"pg": "buy"
				},
				{
					"Name": "Donate",
					"pg": this.sitePaypal
				},
				{
					"Name": "Talk",
					"pg": this.siteDiscord
				},
				{
					"Name": "Contact",
					"pg": this.contactme
				},
				{
					"Name": ". . .",
					"pg": "main2"
				}
			]],
			"main2": [". . .", [{
					"Name": "Duck",
					"pg": "https://media.discordapp.net/attachments/589091185164025887/834125453676904478/unknown.png?width=701&height=701"
				},
				{
					"Name": ". . .",
					"pg": "main"
				}
			]],

			// Buying
			"buy": ["Ayyee~ \nWhat sort of commission?", [{
					"Name": "Pixel Art",
					"pg": "pixelart"
				},
				//{"Name":"ToS", "pg":"tos"},
				{
					"Name": "Back",
					"pg": "main"
				}
			]],
			"pixelart": ["Alright~ \nIn what format?", [{
					"Name": "Emotes",
					"pg": "pixelart emotes"
				},
				{
					"Name": "Banner",
					"pg": ""
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],

			// Buying Pixelart Emotes
			"pixelart emotes": ["What sort of emotes?", [{
					"Name": "64x",
					"pg": "emotes 64"
				},
				{
					"Name": "128x",
					"pg": "emotes 128"
				},
				{
					"Name": "Examples",
					"pg": "https://sites.google.com/view/bycubed7/me/commissions/pixel-emotes"
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],
			"emotes 64": ["A 64 by 64 pixel emote. \n£12 per one.", [{
					"Name": "Confirm",
					"pg": this.CreateAnswerDocLink(null, null, null, "64x Pixel", "Insert a descripting of what kind of emote you want")
				},
				{
					"Name": "Animate it!",
					"pg": "emotes 64a"
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],
			"emotes 128": ["A 128 by 128 pixel emote. \n£18 per one.", [{
					"Name": "Confirm",
					"pg": this.CreateAnswerDocLink(null, null, null, "128x Pixel", "Insert a descripting of what kind of emote you want")
				},
				{
					"Name": "Animate it!",
					"pg": "emotes 128a"
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],
			"emotes 128a": ["An eight frame animated 128 by 128 pixel emote. \n£35 per one.", [{
					"Name": "Confirm",
					"pg": this.CreateAnswerDocLink(null, null, null, "Animated 128x Pixel", "Insert a descripting of what kind of emote you want")
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],
			"emotes 64a": ["An eight frame animated 64 by 64 pixel emote. \n£20 per one.", [{
					"Name": "Confirm",
					"pg": this.CreateAnswerDocLink(null, null, null, "Animated 64x Pixel", "Insert a descripting of what kind of emote you want")
				},
				{
					"Name": "Back",
					"pg": "buy"
				}
			]],
			"what you get": ["A PNG/GIF image of your concept or idea. \nFree revisions for minor adjustments. If a new drawing is required, an additional commission must be purchased. \nI will send you two updates in the process. One with the finished prototype for your approval and the second with the finished product for your approval.", [{
				"Name": "Back",
				"pg": "pixelart emotes"
			}]],

			// ToS
			"tos": [this.tos, [{
				"Name": "Back",
				"pg": "buy"
			}]],

		}
	}

	OnLoad() {
		this.bg = document.getElementById("background");
		this.chat = document.getElementById("chat");
		this.option = document.getElementById("options");

		this.audio = new Audio("https://cdn.discordapp.com/attachments/589091185164025887/834793372166127696/o.wav");


		//this.Say("Welcome. \nI do commissions now I guess?");
		this.LoadMenu("main");
	}

	LoadMenu(menuName) {

		if (menuName.includes(".com") || menuName.includes("https")) {
			//document.location = menuName;
			window.open(menuName);
			return;
		}

		var menuData = this.menu[menuName];

		if (menuData != null) {
			this.SayClear();
			this.OptionsClear();

			console.log("Loading " + menuName);

			this.num = 0;
			clearInterval(this.talker);
			this.talker = setInterval(function() {
				this.StartSaying(menuData[0]);
			}.bind(this), 40);


			//this.Say(menuData[0])
			this.Options(menuData[1])
		}
	}
	M(menuName) {
		this.LoadMenu(menuName);
	}

	Say(text) {

		// A spaces to Punctuation
		var pun = ".,!?";
		for (var i = 0; i < pun.length; i++) {
			text = text.split(pun[i]).join(pun[i]);
		}

		var createTextElement = function(text) {
			var textNew = document.createElement("div");
			textNew.textContent = text;
			textNew.classList.add("text");
			textNew.classList.add("textleft");
			return textNew;
		}

		var lines = text.split("\n")

		var elementsText = [];
		// For each line loop
		for (var i = 0; i < lines.length; i++) {
			var textNew = createTextElement("* " + lines[i]);

			this.chat.appendChild(textNew);
			elementsText.push(textNew);

			if (lines[i + 1]) {
				var textNew = createTextElement("")
				this.chat.appendChild(textNew);
				elementsText.push(textNew);
			}
		}
	}

	SayClear() {
		this.chat.textContent = '';
	}

	StartSaying(text) {
		this.num += 2
		this.SayClear();

		this.Say(text.slice(0, this.num));

		if (text[this.num])
			if (text[this.num].toLowerCase().match(/[a-z]/i) && (this.num % 3) === 0) {
				this.PlayAudio();
			}

		if (this.num > text.length) clearInterval(this.talker)
	}

	Options(dataList) {
		for (var i = 0; i < dataList.length; i++) {
			var createButtonElement = function(text, action, page) {
				var buttonNew = document.createElement("div");
				buttonNew.textContent = "" + text; // Invs space here
				buttonNew.classList.add("button");
				buttonNew.classList.add("text");


				buttonNew.onclick = function() {
					main.LoadMenu(page)
				}.bind(this).bind(page);

				return buttonNew;
			}.bind(this)

			var action = dataList[i]["Goto"]
			if (dataList[i]["Load"] != null) {
				var data = dataList[i]["Load"]
				action = function() {
					this.LoadMenu(data)
				}.bind(this)
			}

			var page = dataList[i]["pg"];
			var buttonNew = createButtonElement(dataList[i]["Name"], action, String(page));
			this.option.appendChild(buttonNew);

			console.log(buttonNew.onclick);
		}
	}

	OptionsClear() {
		this.option.textContent = '';
	}

	PlayAudio(volume = 1) {
		this.audio.currentTime = 0;
		this.audio.volume = 0.2;
		this.audio.play();
	}


	CreateAnswerDocLink(name, paypalEmail, channelName, commissionType, message) {
		var baselink = "https://docs.google.com/forms/d/e/1FAIpQLScX2QkNvZLi4N-JS3IaU3mN9_CEV7P4SJyztXR8rwxAQqCD_g/viewform?"
		// &entry.1579304661=PaypalEmail@gmail.com&entry.1559062740=channel&entry.1695795381=type+of+commission&entry.1582148078=message
		if (name) baselink += "&entry.1103374320=" + name;
		if (paypalEmail) baselink += "&entry.1579304661=" + paypalEmail;
		if (channelName) baselink += "&entry.1559062740=" + channelName;
		if (commissionType) baselink += "&entry.1695795381=" + commissionType;
		if (message) baselink += "&entry.1582148078=" + message;

		return baselink;
	}

	SendRequest(name, paypalEmail, channelName, commissionType, message) {
		
	}
}

var main = new Main();
