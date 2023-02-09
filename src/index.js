module.exports = function towelSort (matrix) {
  if (!matrix) return []
  let array = []
  matrix.forEach(function (item, index) {
    if (index % 2 != 0){
      item.reverse()
   }
      console.log(item)
      item.map(function(num){
      array.push(num)
    })
  })
  return array
}