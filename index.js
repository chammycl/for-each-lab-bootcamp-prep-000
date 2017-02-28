function iterativeLog(array) {
  array.forEach(log_array)
}

function log_array(element, index, array) {
  console.log(`${index}: ${element}`)
}

function iterate(callback) {
  var evens = [0, 2, 4, 6, 8, 10]

  evens.forEach(callback)

  return evens
}

function doToArray(array, callback) {
  array.forEach(callback)
}
