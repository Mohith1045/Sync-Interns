  let playing = document.getElementById("playing");
  let song = document.getElementById("song");
  let controlIcon = document.getElementById("controlIcon");
  let songName = document.getElementById("songName");
  let singer = document.getElementById("singer");
  let cover = document.getElementById("cover");
  let bg = document.getElementById("bg");

  song.onloadmetadata = function(){
    playing.max = song.duration; 
    playing.value = song.currentTime;
  }

 let songCount =1;

function playPause(){
  if(controlIcon.classList.contains("pause")){
    song.pause();
    controlIcon.classList.remove("pause");
    controlIcon.classList.add("play");
    controlIcon.src = "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-button-round-icon.png";
  }
  else{
    song.play();
    controlIcon.classList.add("pause");
    controlIcon.classList.remove("play");
    controlIcon.src = "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-round-icon.png";
  }
}

function next(){
  songCount++;
  if(songCount === 2){
    song.src = "./Asset/Once-Upon-a-Time.mp3";
    songName.innerText = "Once Upon A Time";
    singer.innerText = "Anirudh"
    cover.src = "Asset/Once-upon-a-time-cover.jpg";
    bg.style.background = "url(Asset/Once-upon-a-time-bg.jpg) center/cover no-repeat";
  }
  else if(songCount === 3){
    song.src = "./Asset/Wasted.mp3";
    songName.innerText = "Wasted";
    singer.innerText = "Anirudh"
    cover.src = "Asset/Wasted-cover.jpg"
    bg.style.background = "url(Asset/Wasted-bg.jpg) center/cover no-repeat";
  }
  else{
    songCount =1;
    song.src = "./Asset/Boston.mp3";
    songName.innerText = "I'm Shipping Up To Boston";
    singer.innerText = "Dropkick Murphys";
    cover.src = "Asset/boston-cover.jpg";
    bg.style.background = "url(Asset/boston-bg.jpg) center/cover no-repeat";
  }
  song.play();
  controlIcon.classList.add("pause");
  controlIcon.classList.remove("play");
  controlIcon.src = "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-round-icon.png";
}

function previous(){
  songCount--;
  if(songCount === 2){
    song.src = "./Asset/Once-Upon-a-Time.mp3";
    songName.innerText = "Once Upon A Time";
    singer.innerText = "Anirudh";
    cover.src = "Asset/Once-upon-a-time-cover.jpg";
    bg.style.background = "url(Asset/Once-upon-a-time-bg.jpg) center/cover no-repeat";
  }
  else if(songCount === 1){
    song.src = "./Asset/Boston.mp3"
    songName.innerText = "I'm Shipping Up To Boston";
    singer.innerText = "Dropkick Murphys";
    cover.src = "Asset/boston-cover.jpg";
    bg.style.background = "url(Asset/boston-bg.jpg) center/cover no-repeat";
  }
  else{
    songCount =3;
    song.src = "./Asset/Wasted.mp3";
    songName.innerText = "Wasted";
    singer.innerText = "Anirudh"
    cover.src = "Asset/Wasted-cover.jpg";
    bg.style.background = "url(Asset/Wasted-bg.jpg) center/cover no-repeat";
  }
  song.play();
  controlIcon.classList.add("pause");
  controlIcon.classList.remove("play");
  controlIcon.src = "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-round-icon.png";
}

if(song.play()){
  setInterval(()=>{
    playing.value = song.currentTime;
  },500);
}

playing.onchange = function(){
  song.play();
  song.currentTime = playing.value;
  controlIcon.classList.add("pause");
  controlIcon.classList.remove("play");
  controlIcon.src = "https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-round-icon.png";
}

 