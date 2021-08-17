import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
})
const torus = new THREE.Mesh(geometry, material) // Mesh

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(
  camera,
  renderer.domElement
)

function addStar() {
  const geometry = new THREE.SphereGeometry(
    Math.random(),
    24,
    24
  )
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load(
  '../img/space.jpg'
)
scene.background = spaceTexture

// Avatar
const boxTexture = new THREE.TextureLoader().load(
  '../img/avatar.png'
)
const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: boxTexture })
)
scene.add(avatar)

// Moon
const moonTexture = new THREE.TextureLoader().load(
  '../img/moon.jpg'
)
const moonNormal = new THREE.TextureLoader().load(
  '../img/moon_normal.png'
)

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormal,
  })
)
moon.position.set(-10, 0, 30)
scene.add(moon)

function moveCamera() {
  const scrollPos =
    document.body.getBoundingClientRect().top // How far away from top
  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05

  avatar.rotation.y += 0.01
  avatar.rotation.z += 0.01

  camera.position.x = scrollPos * -0.0002
  camera.position.y = scrollPos * -0.0002
  camera.position.z = scrollPos * -0.01
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  controls.update()

  renderer.render(scene, camera)
}

animate()
