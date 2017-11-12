var scene1 = new THREE.Scene();
var scene2 = new THREE.Scene();

var renderer1 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});


var renderer2 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

var canvas1 = document.getElementById("three-container");
var canvas2 = document.getElementById("three-container_skills");

var camera1 = new THREE.PerspectiveCamera(45, CANVAS1_WIDTH / CANVAS1_HEIGHT, 0.1, 100);

var camera2 = new THREE.PerspectiveCamera(45, CANVAS2_WIDTH / CANVAS2_HEIGHT, 0.1, 100);

var CANVAS1_WIDTH = 500;
var CANVAS1_HEIGHT = 500;


var CANVAS2_WIDTH = 500;
var CANVAS2_HEIGHT = 500;

var mesh1 = null;

function loadMesh() {

    var loader = new THREE.JSONLoader();

    loader.load('./json_files/test.json', function (geometry, materials) {
        mesh1 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        scene1.add(mesh1);
    });

}




var SPEED = 0.001;

function rotateThing() {

    mesh1.rotation.y -= SPEED;

}

function setCanvasSize() {

    CANVAS1_WIDTH = document.getElementById('three-container').offsetWidth;
    CANVAS1_HEIGHT = document.getElementById('three-container').offsetHeight;

    CANVAS2_WIDTH = document.getElementById('three-container_skills').offsetWidth;
    CANVAS2_HEIGHT = document.getElementById('three-container_skills').offsetHeight;


};





camera1.position.x = 2.7;
camera1.position.y = 2.7;
camera1.position.z = 2.7;
camera1.lookAt(scene1.position);

camera2.position.x = 15;
camera2.position.y = 15;
camera2.position.z = 15;
camera2.lookAt(scene2.position);


//Lighting - Scene 1

var light1 = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
light1.castShadow = true;
scene1.add(light1);

var directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
scene1.add(directionalLight1);


//Lighting - Scene 2

var light2 = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
light2.castShadow = true;
scene2.add(light2);

var directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
scene2.add(directionalLight2);


canvas1.appendChild(renderer1.domElement);

canvas2.appendChild(renderer2.domElement);


loadMesh();

(function animate() {

    requestAnimationFrame(animate);
    render();
})();

// Rendering function
function render() {

    rotateThing();
    setCanvasSize();

    //Renderer-1

    renderer1.autoClear = false;
    renderer1.clear();
    renderer1.render(scene1, camera1);
    renderer1.setSize(CANVAS1_WIDTH, CANVAS1_HEIGHT);

    camera1.aspect = CANVAS1_WIDTH / CANVAS1_HEIGHT;
    camera1.updateProjectionMatrix();

    //Renderer-2

    renderer2.autoClear = false;
    renderer2.clear();
    renderer2.render(scene2, camera2);
    renderer2.setSize(CANVAS2_WIDTH, CANVAS2_HEIGHT);

    camera2.aspect = CANVAS2_WIDTH / CANVAS2_HEIGHT;
    camera2.updateProjectionMatrix();
};