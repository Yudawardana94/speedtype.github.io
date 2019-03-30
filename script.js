window.addEventListener('load', initial)
// =================== RULE ===================

let tema_besar = ['musik','programing','makanan','buku']

let tema_musik = [
    'accordion','alto','angklung','artikulasi','bar','barasuara','bass','beat','chord','coldplay',
    'cranberries','dangdut','danilla','dorian','drum','dualipa','duet','flute','genre','gesang',
    'Gitar','Harmonika','Headphone','Irama','Jazz','Kaset','klarinet','Komposisi','Konser','Koor',
    'Mayor','Melodi','Metal','Mixer','Mozart','Musisi','Orkestra','Piano','Pop','Saykoji',
    'Seruling','Simfoni','Speaker','Spotify','Tempo','Viavalen','Vokal','Volume','Waljinah','Whiplash'
]
let tema_programing = [
    'Javascript','ruby','Java','Python','php','swift','fullstack','frontend','bug','developer',
    'linux','ubuntu','variable','html','css','developer','algoritma','pseudocode','conditional','data',
    'debugging','function','Input','iteration','parameter','value','palindrome','reverse','array','string',
    'boolean','program','workspace','node','terminal','github','output','input','database','json',
    'logic','looping','livecode','modular','substring','concat','push','rekursif','branch','regex'
]
let tema_makanan = [
    'bakso','ayam','terong','bebek','lele','mieayam','siomay','steak','soto','gulai',
    'piring','gelas','mcd','kfc','starbucks','burger','pizza','ramen','sushi','wasabi',
    'sumpit','rawon','kwetiaw','bihun','dorang','pasta','gelato','lolipop','sop','pecel',
    'tempe','tahu','bacem','goreng','oseng','kopi','coklat','nasi','sambal','pete',
    'jengkol','cumi','greentea','pedas','sushitei','aice','magnum','pindang','perkedel','latte'
]
let tema_buku = [  'halaman',
    'sampul','bab','judul','cover','penerbit','penulis','daftarisi','hardcover','sinopsis',
    'gramedia','narnia','harrypotter','fiksi','novel','biografi','notebook','pembaca','adaptasi','zine',
    'ebook ','percetakan','kertas','tinta','cerita','tokoh','antagonis','protagonis','kutipan','puisi',
    'isbn','bigbadwolf','bobo','majalah','sastra','kata','kalimat','tokobuku','resensi','cerpen','dilan',
    'adaptasi','kisahnyata','motivasi','genre','supernova','dee','rectoverso','habibiainun','laskarpelangi'
]
var word = [].concat(tema_musik).concat(tema_programing).concat(tema_buku).concat(tema_makanan)

//DOM Things
var Iscore = document.getElementById("theScore")
var Itimer = document.getElementById("theTime")
var IhightScore = document.getElementById("theBest")
var wordNow = document.getElementById("displayedWord")
var wordInput = document.getElementById("input")
var score = 0
var hightScore = 0
var timer = 5
var play = true



//to initiaize the game
function initial(){
    // console.log('its work')
    showWord(word)
    wordInput.addEventListener('input', startMatch)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}

// to start playing
function startMatch (){
    if (matchWord()){
        play === true
        if (Iscore.innerHTML > 10){
            timer = 4
        }else if (Iscore.innerHTML > 20){
            timer = 3
        } else {
            timer = 6
        }
        showWord(word)
        wordInput.value = ''
        score++
    }
    Iscore.innerHTML = score
    console.log (score,timer,Iscore.innerHTML)
}
// to mathcing the word
function matchWord() {
    if (wordInput.value === wordNow.innerHTML){
        return true
    } else {
        return false
    }
}

// to show the word that must be inputed
function showWord(Word){
    var randomWord = Math.floor(Math.random()*word.length)
    wordNow.innerHTML = word[randomWord].toLowerCase()
}
//to make the timer
    function countdown() {
        if (timer > 0){
            timer--
        } else {
            play = false
        }
        Itimer.innerHTML = timer
    }
// //to make the status of the game
function checkStatus() {
    if (play === false && timer === 0){        
        if (Iscore.innerHTML > IhightScore.innerHTML){
            IhightScore.innerHTML = Iscore.innerHTML
        }
        score = 0
    }
}