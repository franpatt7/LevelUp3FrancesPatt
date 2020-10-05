function homeLoan (b1, b2, b3) {
  let homeFV = b1 * (1 + b2)**b3/((1+b2)**(b3-1))
  return homeFV
  }
  
if (decision == "home"){
  let homePrincipal = Number(prompt("What is the principal?"))
  let homeRate = Number(prompt("What is the rate?))
  let homePeriod = Number(prompt("What is your period (in months)?))
  let homePercent = homeRate * 100 var monthlyHomePayment = (homeLoan(homePrincipal, homeRate, homePeriod)) / homePeriod


var homePayment = monthlyHomePayment.toFixed; 
alert(`A car payment for $${homePrincipal} over ${homePeriod} months at ${homePercent}% interest would be a monthly payment of $${homePayment}`)
}