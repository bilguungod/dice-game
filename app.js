// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэе.
var activePlayer;

// togloom duussan esehiig hadgalah tulwiin huwisagch
var isGameOver;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;


var diceDom = document.querySelector(".dice");

initGame();

// shoog shideh event listener 
document.querySelector(".btn-roll").addEventListener("click", function() {
    if(isGameOver !== true){
        

    //  1-6 dotor sanamsargui neg too gargaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //  shoonii zurgiig web dr gargaj irne.
    diceDom.style.display = "block";

    //  buusan sanamsargui toond hargalzah shoonii zurgiig web dr gargaj irne.
    diceDom.src = 'dice-' + diceNumber +'.png';

   //  buusan too n 1es ylgatai bol idewhtei toglogchiin eeljin onoog uurchilnu.

   if(diceNumber !== 1){
    //    1es ylgatai too buulaa. buusan toog toglogchid nemj ugnu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
   }
   else{
    //    1 buusan tul toglogchin eeljiig solino.
    switchToNextPlayer();
   }
    } else{
        alert('togloom duuschihsan baina shuudee naizaa, NEW GAME darj ehleh hergtei.')
    }
});
// hold towchnii event listener 
document.querySelector(".btn-hold").addEventListener('click', function(){
    // ug toglogchiin tsugluulsan onoog global onoon dr nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // delgets deer onoog n haruulna.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    //  ug toglogchiin onoo 100-s ih bwal hojno.
    if(scores[activePlayer] >= 10){
        // togloomiig duussan tuluwt oruulna
        isGameOver = true;

        // ylagch gesen tekstiig nerniih n orond gargana.
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
    } else{
        // toglogchiin eeljiig solino.
    switchToNextPlayer();
    }

});


function switchToNextPlayer(){
    //  ene toglogchin eeljindee tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // herew idewhtei toglogch n 0 bwal idewhtei toglogchig 1 bolgo
    // ugui bol idewhtei toglogchiig 0 bolgo.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //  ulaan tsegiig haij olno
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // shoog tur alga bolgono
    diceDom.style.display = "none";
}

//  shine togloom ehluuleh buttonii event listener

document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame(){
    //  togloom ehellee gedeg tuluwt oruulna.
    isGameOver = false;


    // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэе.
activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэнэ.
// var dice = Math.floor(Math.random() * 6) + 1;



// программ эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
}