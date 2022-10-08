function album (name, repo) {

	//link = ".." + "\\" + "projects" + "\\" + name.replace(/\s/g, '').toLowerCase() + "\\";
	link = repo + "\\";
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
	album( "Plasma Engine", "../Plasma");

	// JAVA
	//album( "MMOnTAB");

	// Unity & Unreal 4
	album( "Paper Rogue", "../PaperRogue");
	album( "Wizard Rogue", "../WizardRogue");
	album( "NodeNetwork");

	// Python Projects
	album( "The Cybel Project");
	album( "RPG Emulator");
	album( "IRC");
	album( "Config");
	album( "Desktop Snake");
	//album( "RPG Profile Picture Generator");
	//album( "Project Reminder");
	//album( "Face tracker");
	//album( "Music player");

	// Blender
	album( "Weapons");

}


window.onload = addProjectsOnLoad;
