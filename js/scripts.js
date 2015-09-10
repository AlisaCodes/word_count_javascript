var wordOrder = function(string) {
  var words = string.split(" ")
  var completedWords = {}
  var sortedWords = {}

  var i = 0

  while (i < words.length) {
    var i2 = i + 1
    var counter = 1
    while (i2 < words.length) {
      if (words[i] === words[i2]) {
        counter += 1
      }
      i2++
    }
    if (!completedWords.hasOwnProperty(words[i])) {
      completedWords[words[i]] = counter
    }
    i++
  }

  return completedWords

}
