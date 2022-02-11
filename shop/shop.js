
function PrepScripts(callback) {
    THREE = document.createElement('script');
    THREE.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
    document.head.appendChild(THREE);

    THREE.onload = callback;
}

//



// NOTE to self: please for the love of god change this--
var scene = {};
var camera = {};
var renderer = {};
var geometry = {};
var material = {};
var cube = {};

function onload(event) {
	console.log("[Shop.js] Loaded!");
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	geometry = new THREE.BoxGeometry( 6.3, 8.8, 0.1 );
	material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

	cube = new THREE.Mesh( geometry, material );

	scale = 5

	cube.scale.x /= scale;
	cube.scale.y /= scale;
	cube.scale.z /= scale;

	scene.add( cube );

	camera.position.z = 5;

	animate();
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}



console.log("[Shop.js] Starting!");

(function () {
    PrepScripts(onload);
})();
