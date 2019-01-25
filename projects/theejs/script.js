var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
camera.position.z = 30;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

var geometry = new THREE.SphereGeometry(10, 32, 32);
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load("./earthmap4k.jpg");
var earthMesh = new THREE.Mesh(geometry, material);

scene.add(earthMesh);

var geometryMoon = new THREE.SphereGeometry(3, 32, 32);
var materialMoon = new THREE.MeshPhongMaterial();
materialMoon.map = new THREE.TextureLoader().load("./moonmap4k.jpg");
var moonMesh = new THREE.Mesh(geometryMoon, materialMoon);

scene.add(moonMesh);
moonMesh.position.x = 10;

var geometryMars = new THREE.SphereGeometry(2, 32, 32);
var materialMars = new THREE.MeshPhongMaterial();
materialMars.map = new THREE.TextureLoader().load("./marsmap1k.jpg");
var marsMesh = new THREE.Mesh(geometryMars, materialMars);

scene.add(marsMesh);
marsMesh.position.x = 25;
marsMesh.position.y = 25;

// var imagePrefix = "publicthree/";
var urls = [
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg"
];
var skyBox = new THREE.CubeTextureLoader().setPath().load(urls);
scene.background = skyBox;

var orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
//////////////////////////////////////////////////////////////////////
var r = 35;
var theta = 0;
var dTheta = (2 * Math.PI) / 1000;
////////////////////////////////////////////////////////////////////
var render = function() {
    requestAnimationFrame(render);
    // earthMesh.rotation.x += 0.005;
    earthMesh.rotation.y += 0.005;
    moonMesh.rotation.x += 0.005;
    moonMesh.rotation.y += 0.005;
    theta += dTheta;
    moonMesh.position.x = r * Math.cos(theta);
    moonMesh.position.z = r * Math.sin(theta);

    renderer.render(scene, camera);
};
render();
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
