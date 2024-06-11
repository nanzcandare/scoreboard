let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")

let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

let periodCount = 1
let periodEl = document.getElementById("period")

let homeFouls = 0
let homeFoulsEl = document.getElementById("home-fouls")

let guestFouls = 0
let guestFoulsEl = document.getElementById("guest-fouls")

function highlighLeading() {
     if (homeScore > guestScore) {
        //homeScoreEl.style.color = "#FF0000"
        //guestScoreEl.style.color = "#FF5C5C"
        homeEl.style.textShadow = "0px 2px 4px #39FF14"
        guestEl.style.textShadow = "none"
    } else if (guestScore > homeScore) {
        //homeScoreEl.style.color = "#FF5C5C"
        //guestScoreEl.style.color = "#FF0000"
        homeEl.style.textShadow = "none"
        guestEl.style.textShadow = "0px 2px 4px #39FF14"
    } else {
        //homeScoreEl.style.color = "#FF5C5C"
        //guestScoreEl.style.color = "#FF5C5C"
        homeEl.style.textShadow = "none"
        guestEl.style.textShadow = "none"
    }
}

function homePlus1() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
    highlighLeading()
}

function homePlus2() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    highlighLeading()
}

function homePlus3() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    highlighLeading()
}

function guestPlus1() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
    highlighLeading()
}

function guestPlus2() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
    highlighLeading()
}

function guestPlus3() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
    highlighLeading()
}

function periodPlus1() {
    if (periodCount < 4) {
        periodCount += 1
    } 
    periodEl.innerText = periodCount
}

function homeFoulsPlus1() {
    homeFouls += 1
    homeFoulsEl.innerText = homeFouls
}

function guestFoulsPlus1() {
    guestFouls += 1
    guestFoulsEl.innerText = guestFouls
}

function newGame() {
    homeScore = 0
    guestScore = 0
    periodCount = 1
    homeFouls = 0
    guestFouls = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
    periodEl.innerText = periodCount
    homeFoulsEl.innerText = homeFouls
    guestFoulsEl.innerText = guestFouls
    highlighLeading()
}