function album (name) {

	link = ".." + "\\" + "P" + "\\" + name.replace(/\s/g, '') + "\\";
	card = link + "card";

	console.log(link);
	console.log(card);

	const template = `
	<div class="col-6 col-tablet-4 col-desktop-3 col-desktop-xlg-2">
		<div class="album-grid-item">
			<a href="${link}">
				<img class="img-fluid" src="${card}.png"/>
				<div class="album-grid-item-overlay">
					<div class="album-grid-item-overlay-inner">
						<div class="album-grid-item-name">${name}</div>
					</div>
				</div>
			</a>
		</div>
	</div>
	`.trim();

	var templateString = template;

    var templateElement = document.createElement('template');
    templateElement.innerHTML = template;

	// Grab element from template
	var newElement = templateElement.content.firstChild;

	// Add to grid
	const currentDiv = document.getElementById("album");
	currentDiv.appendChild(newElement);

	return newElement;
}

function addProjectsOnLoad() {

	// C++
	album( "Plasma Engine", "", "PlasmaEngine");

	// JAVA
	//album( "MMOnTAB");

	// Unity & Unreal 4
	album( "Paper Rogue");
	album( "Wizard Rogue");
	album( "NodeNetwork");

	// Python Projects
	album( "The Cybel Project");
	album( "RPG Emulator");
	album( "Face tracker");
	album( "Music player");
	album( "IRC");
	album( "Config");
	album( "RPG Profile Picture Generator");
	album( "Project Reminder");
	album( "Desktop Snake");

	// Blender
	album( "Weapons");














}


window.onload = addProjectsOnLoad;
