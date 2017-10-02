const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump() {
    return counter += 1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function deadlyDevice(deviceType) {
    return {animalType: `${animalType}`, deadlyDevice: `${deviceType}`}
  }
  return deadlyDevice
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
