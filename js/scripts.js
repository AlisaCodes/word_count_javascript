var ones = function(number) {
  var onesNumber = ""

  if ((number < 4) && (number !== 0)) {
    for (var i = 0; i < number; i++) {
      onesNumber += "I"
    }
  } else if (number === 4) {
    onesNumber = "IV"
  } else if (number === 5) {
    onesNumber = "V"
  } else if ((number > 5) && (number < 9)) {
    onesNumber = "V"
    for (var i = 0; i < number - 5; i++) {
      onesNumber += "I"
    }
  } else if (number === 9) {
      onesNumber = "IX"
  }
  return onesNumber

}

var tens = function(number) {
  var tensNum = ones(number)
  tensNum = tensNum.replace(/V/g, "L")
  tensNum = tensNum.replace(/X/g, "C")
  tensNum = tensNum.replace(/I/g, "X")
  return tensNum
}

var hundreds = function(number) {
  var hundredsNum = tens(number)
  hundredsNum = hundredsNum.replace(/L/g, "D")
  hundredsNum = hundredsNum.replace(/C/g, "M")
  hundredsNum = hundredsNum.replace(/X/g, "C")
  return hundredsNum
}

var thousands = function(number) {
  var thousandsNum = ones(number)
  thousandsNum = thousandsNum.replace(/I/g, "M")
  return thousandsNum
}

var romanNumerals = function(number) {
  if (number > 3999) {
    return "Not Roman, Dude!"
  }
  var splitNumber = number.toString().split("").map(function(x){return parseInt(x)});
  var last = splitNumber.length - 1
  var romanized = ""

  if (splitNumber.length > 3) {
    romanized += thousands(splitNumber[last - 3])
  }
  if (splitNumber.length > 2) {
    romanized += hundreds(splitNumber[last - 2])
  }
  if (splitNumber.length > 1) {
    romanized += tens(splitNumber[last - 1])
  }
  if (splitNumber.length > 0) {
    romanized += ones(splitNumber[last])
  }

  return romanized

}

$(document).ready(function() {
  $('form#roman-numerals').submit(function(event){
    var number = parseInt($('input#number').val())
    var result = romanNumerals(number)

    $('.roman-numerals').text(result)

    $('.ui.modal')
    .modal('show');
    
    $('#result').show()
    event.preventDefault()
  })


})
