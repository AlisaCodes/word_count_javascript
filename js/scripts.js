var countUpBy = function(number1, number2) {
  var multiples = []

  for(var index = number2; index <= number1; index += number2) {
    multiples.push(index)
  }
  return multiples
}

$(document).ready(function() {
  $("form#count-up-by").submit(function(event) {
    var number1 = parseInt($("input#number1").val())
    var number2 = parseInt($("input#number2").val())
    var result = countUpBy(number1, number2)

    $(".number-array").text(result)

    $("#result").show()
    event.preventDefault()
  })
})
