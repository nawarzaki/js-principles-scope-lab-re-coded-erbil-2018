// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName(x) {
  var b = ''
  if (x = 1) {
    b = (customerName = 'BOB')
  }
  return b
}

function setBestCustomer(value) {
  bestCustomer = ''
  if (value = 1){
    bestCustomer= 'not bob'
  }
  return bestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = setBestCustomer(value)
  if (bestCustomer = 'not bob'){
    bestCustomer = 'maybe bob'
  }
  return bestCustomer

}
