var scene1 = new THREE.Scene();
var scene2 = new THREE.Scene();
var scene3 = new THREE.Scene();

var renderer1 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});


var renderer2 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

var renderer3 = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

//Canvas'
var canvas1 = document.getElementById("three-container");
var canvas2 = document.getElementById("three-container_skills");
var canvas3 = document.getElementById("threejs_portfolio");

var CANVAS1_WIDTH = 500;
var CANVAS1_HEIGHT = 500;


var CANVAS2_WIDTH = 500;
var CANVAS2_HEIGHT = 500;

var CANVAS3_WIDTH = 500;
var CANVAS3_HEIGHT = 500;

var camera1 = new THREE.PerspectiveCamera(45, CANVAS1_WIDTH / CANVAS1_HEIGHT, 0.1, 100);

var camera2 = new THREE.PerspectiveCamera(45, CANVAS2_WIDTH / CANVAS2_HEIGHT, 0.1, 100);

var camera3 = new THREE.PerspectiveCamera(45, CANVAS3_WIDTH / CANVAS3_HEIGHT, 0.1, 100);

var mesh1 = null;
var meAvatar;

//LOADERS

var JSONloader = new THREE.JSONLoader();

//var daeLoader = new THREE.ColladaLoader();
//
//var loadingManager = new THREE.LoadingManager(function () {
//
//    scene2.add(meAvatar);
//    alert('yeet');
//
//});
//
//
//daeLoader.load("./dae/test.dae", function (collada) {
//
//    meAvatar = collada.scene;
//    meAvatar.position.set(0, 0, 0);
//
//});

function loadMesh() {

    JSONloader.load('./json_files/test.json', function (geometry, materials) {
        mesh1 = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        scene1.add(mesh1);
    });


    //Loads Default Avatar
    setAvatar(1);

}

function setAvatar(avatarNum) {

    var caseNum = avatarNum;

    switch (caseNum) {

        case 1:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/default-avatar-2.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;

        case 2:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/3d-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;

        case 3:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/illustrator-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;


        case 4:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/coding-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);


            });

            break;

        case 5:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/gaming-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;


        case 6:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/photoshop-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;

        case 7:

            scene2.remove(meAvatar);

            JSONloader.load('./json_files/avatars/github-avatar.json', function (geometry, materials) {

                meAvatar = new THREE.SkinnedMesh(geometry, materials, false);

                scene2.add(meAvatar);

            });

            break;
    }

}



//LOADERS - END

var SPEED = 0.001;

function rotateThing() {

    mesh1.rotation.y -= SPEED;
    meAvatar.rotation.y -= SPEED;
}


//Dynamically Update Canvas (Responsive)

function setCanvasSize() {

    CANVAS1_WIDTH = document.getElementById('three-container').offsetWidth;
    CANVAS1_HEIGHT = document.getElementById('three-container').offsetHeight;

    CANVAS2_WIDTH = document.getElementById('three-container_skills').offsetWidth;
    CANVAS2_HEIGHT = document.getElementById('three-container_skills').offsetHeight;
    
    CANVAS3_WIDTH = document.getElementById('threejs_portfolio').offsetWidth;
    CANVAS3_HEIGHT = document.getElementById('threejs_portfolio').offsetHeight;


};

//Camera-Position Set

camera1.position.x = 2.7;
camera1.position.y = 2.7;
camera1.position.z = 2.7;
camera1.lookAt(scene1.position);

camera2.position.x = 0;
camera2.position.y = 4.5;
camera2.position.z = 15;

camera3.position.x = 0;
camera3.position.y = 0;
camera3.position.z = 0;

//camera2.lookAt(meAvatar.position);


//Lighting - Scene 1

var light1 = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
light1.castShadow = true;
scene1.add(light1);

var directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
scene1.add(directionalLight1);

//Lighting - Scene 2

var light2 = new THREE.AmbientLight(0xffffff, 1); // soft white light
light2.castShadow = true;
scene2.add(light2);

var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
scene2.add(directionalLight2);

var hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.3);
scene2.add(hemLight);

//Append Canvas'

canvas1.appendChild(renderer1.domElement);

canvas2.appendChild(renderer2.domElement);

canvas3.appendChild(renderer3.domElement);

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
    
    //Renderer-3

    renderer3.autoClear = false;
    renderer3.clear();
    renderer3.render(scene2, camera2);
    renderer3.setSize(CANVAS2_WIDTH, CANVAS2_HEIGHT);

    camera3.aspect = CANVAS2_WIDTH / CANVAS2_HEIGHT;
    camera3.updateProjectionMatrix();
};