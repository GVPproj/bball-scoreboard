const home1 = document.getElementById("home-1")
const home2 = document.getElementById("home-2")
const home3 = document.getElementById("home-3")

const guests1 = document.getElementById("guests-1")
const guests2 = document.getElementById("guests-2")
const guests3 = document.getElementById("guests-3")

const homeScoreText = document.getElementById("home-score")
const guestsScoreText = document.getElementById("guests-score")
const newGame = document.getElementById("new-game")

const homeName = document.getElementById("home-name")
const guestsName = document.getElementById("guests-name")

let homeScore = 0
let guestsScore = 0

homeScoreText.textContent = homeScore
guestsScoreText.textContent = guestsScore

newGame.addEventListener("click", () => {
  homeScore = 0
  guestsScore = 0
  homeScoreText.textContent = homeScore
  guestsScoreText.textContent = guestsScore
  hightlightLeader()
})

home1.addEventListener("click", () => {
  homeScore += 1
  homeScoreText.textContent = homeScore
  hightlightLeader()
})

home2.addEventListener("click", () => {
  homeScore += 2
  homeScoreText.textContent = homeScore
  hightlightLeader()
})

home3.addEventListener("click", () => {
  homeScore += 3
  homeScoreText.textContent = homeScore
  hightlightLeader()
})

guests1.addEventListener("click", () => {
  guestsScore += 1
  guestsScoreText.textContent = guestsScore
  hightlightLeader()
})

guests2.addEventListener("click", () => {
  guestsScore += 2
  guestsScoreText.textContent = guestsScore
  hightlightLeader()
})

guests3.addEventListener("click", () => {
  guestsScore += 3
  guestsScoreText.textContent = guestsScore
  hightlightLeader()
})

hightlightLeader()

function hightlightLeader() {
  if (homeScore > guestsScore) {
    homeName.style.textDecoration = "overline"
    guestsName.style.textDecoration = "none"
  } else if (guestsScore > homeScore) {
    guestsName.style.textDecoration = "overline"
    homeName.style.textDecoration = "none"
  } else {
    guestsName.style.textDecoration = "none"
    homeName.style.textDecoration = "none"
  }
}
