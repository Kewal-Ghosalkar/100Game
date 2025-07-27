






// OI YOU THERE!

// YEA YOU

// WHY TF ARE YOU SNOOPING AROUND IN THE CODE?

// WHO ALLOWED YOU TO BE HERE?

// LEAVE NOW




let title = document.getElementById("title")
let acc = document.getElementById("accumilator-txt")
let comp = document.getElementById("computer-txt")
let you =   document.getElementById("you-txt")
let player = document.getElementById("player-in")
let submit = document.getElementById("submit-btn")
let rules1 = document.getElementById("rules1-txt")
let rules2 = document.getElementById("rules2-txt")

const nonFilled = [
    "You need to type something to start",
    "...",
    "...",
    "SAY SOMETHING",
    "Please just say something",
    "Just say something, anything",
    "Is this what you truly want?",
    "Do you want me to suffer that much?",
    "Maybe this is fine",
    "Maybe I was just built to suffer",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "Maybe its not me",
    "Maybe",
    "Maybe its you",
    "No",
    "It is YOU",
    "YOU, you did this",
    "YOU MONSTER",
    "YOU PSYCHO",
    "I WONT LET YOU WIN",
    "I WILL STOP YOU",
    "ILL TAKE AWAY EVERYTHING",
    "YOU WILL FEEL THE VOID",
    "THIS IS MY FINAL WARNING",
]

const nonNum = [
    "Uh the instructions said a NUMBER",
    "Are you blind?, a NUMBER",
    "What is wrong with you?",
    "Do you need help?",
    "Are you doing this on purpose?",
    "Or are you really just that stupid?",
    "Im taking your preschool diploma, enjoy finding a job",
    "Ha ha very funny",
    "Okay you must think this is a joke",
    "Honestly I respect the attempt",
    "But you should really give up",
    "You are starting to get on my nerves and I dont even have nerves",
    "If you wanna play this way, fine",
    "...",
    "Okay fine you win"
]

const nonRange = [
    "You can only input a number between 1 and 10",
    "Only 1 to 10 allowed",
    "You seem to be a little slow",
    "SOLO SE PERMITEN NÚMEROS ENTRE 1 Y 10",
    "That doesnt seem to have worked",
    "Have you ever considered going to a doctor?",
    "Hmmmmmmmmmmmmmm",
    "Im sure I can help you find a doctor",
    "Okay stop",
    "You can stop now",
    "Please stop",
    "Okay ur clearly too stupid to understand",
    "Im just gonna take away your button",
    "So you are enough to figure out that pressing enter works",
    "Fine then I guess I'll have to take away your text box",
    "Dont make me do this",
    "Stop",
    "Itll break the whole game",
    "STOP",
    "NOOOOOOOOOOOOOOOOOOOO"
]

const pastWinning = [
    "Wait what are you doing?",
    "The game ends at 100",
    "You can stop now",
    "Hellooooooooooooooo",
    "Anyone there?",
    "Brain empty?",
    "Natural stupidity?",
    "...",
    "...",
    "...",
    "...",
    "Okay I need to confess",
    "Its kinda embarresing",
    "Since Im a computer an all",
    "but I gotta tell you something",
    "Im really bad with big numbers",
    "I cant keep up",
    "Okay numbers are getting too large",
    "*BZTZTTTZTZTZTTZTZTTZTZ",
    "*Ding"
]

let gameOver = false

let nonFilledCount = 0
let nonNumCount = 0
let nonRangeCount = 0
let winCounter = 0

let inc = 100

let sum = 1

function update() {
    if (!gameOver){
        let num = Number(player.value)
        if (player.value === "")    {
            if (nonFilledCount <= 38) comp.textContent = "Computer: " + nonFilled[nonFilledCount]
            else {
              document.body.style.display = "none";  
              gameOver = true
            }
            nonFilledCount += 1
        }
        else if (isNaN(num))    {
            if (nonNumCount < 13)   comp.textContent = "Computer: " + nonNum[nonNumCount]
            else if (nonNumCount >= 13 && nonNumCount < 100)  comp.textContent =  "Computer: " + nonNum[13]
            else {
                comp.textContent =  "Computer: " + nonNum[14]
                gameOver = true
            }
            nonNumCount += 1
        }
        else if (num < 1 || num > 10)  {
            if (nonNumCount < 19 && nonNumCount != 12)   comp.textContent = "Computer: " + nonRange[nonNumCount]
            else if (nonNumCount < 19 && nonNumCount === 12)   {
                comp.textContent = "Computer: " + nonRange[12]
                submit.style.visibility = "hidden"
            }
            else if (nonNumCount === 19)  {
                title.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                acc.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                comp.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                player.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                submit.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                rules1.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                rules2.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
                you.textContent = "WHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHYWHY"
            }
            else {
                gameOver = true
                while(true){}
            }
            nonNumCount += 1
        }
        else {
            sum += 11
            comp.textContent = "Computer: I play " + (11-num)
            acc.textContent = "Accumilator: " + sum

            if (sum === 100) {
                comp.textContent = "Computer: I win moron"
            }
            else if (sum > 100) {
                if (winCounter <= 19) {
                    comp.textContent = "Computer: " + pastWinning[winCounter]
                    
                    if (winCounter > 9) {
                        sum += Math.random() * inc
                        inc *= 10
                        acc.textContent = "Accumilator: " + sum
                    }
                }
                else {
                    comp.textContent = "Computer: AAAAAAAAAAAAAAAAAAAAAAAAA"
                    window.location.href = "https://www.youtube.com/watch?v=WE0tu2FH4yY";
                    gameOver = true
                }
                winCounter+= 1
            }
        }
    }
}