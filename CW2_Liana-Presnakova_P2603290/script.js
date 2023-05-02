// music booleans
let playing = false;
let backgroundMusicplaying = false;

// Audios
let doorOpening = new Audio("/sound effects/door-opening.mp3");
let night = new Audio("/sound effects/night.mp3");
let backgroundMusic = new Audio("/sound effects/background-music.mp3");
let shipHorn = new Audio("/sound effects/ship-horn.mp3");
let rubberDuck = new Audio("/sound effects/rubber-duck.mp3");
let birds = new Audio("/sound effects/birds.mp3");
let workingOnTheBoat = new Audio("/sound effects/working-on-the-boat.mp3");
let sea = new Audio("/sound effects/sea.mp3");
let seaBadWeather = new Audio("/sound effects/sea-bad-weather.mp3");
let snow = new Audio("/sound effects/snow.mp3");
let people = new Audio("/sound effects/people-speaking.mp3");

// cheking if the main element is scrolling
document.getElementById("scroll").onscroll = () => {
  // the amount of pixels scrolled
  let scrollY = document.getElementById("scroll").scrollTop;

  // getting Elements from html
  let image = document.getElementsByClassName("img");
  let storyLines = document.getElementsByClassName("story-lines");
  let firstLine = document.getElementById("first-line");

  // adding the background music on scroll
  if (!backgroundMusicplaying) {
    backgroundMusic.play();
    backgroundMusicplaying = true;
  }

  // cheaking for the scrolled amout to add a follow scrolling effect
  if (scrollY <= 1100) {
    // adding an effect that makes the image follows the scrolling and text effects
    image[0].style.marginTop = scrollY + "px";

    // add animations to the h2 elements/to the story lines
    storyLines[0].classList.remove("fadeInOut");
  }

  // doing the same as above for the rest of the of the statments including sceans names
  if (scrollY >= 1000 && scrollY <= 1200) {
    storyLines[0].classList.add("fadeInOut");
    firstLine.classList.remove("fadeInOut");
  }
  if (scrollY >= 1400) {
    firstLine.classList.add("fadeInOut");
  }
  if (scrollY < 1990) {
    storyLines[1].classList.remove("fadeInOut");
    playing = false;
    doorOpening.pause();
  }

  // Penguin at the door
  if (scrollY >= 1990 && scrollY <= 2500) {
    people.pause();
    image[1].style.marginTop = scrollY - 1990 + "px";
    storyLines[1].classList.add("fadeInOut");
    if (!playing) {
      doorOpening.play();
      playing = true;
    }
    storyLines[2].classList.remove("fadeInOut");
  }

  // lonley penguin
  if (scrollY >= 3390 && scrollY <= 4200) {
    image[2].style.marginTop = scrollY - 3390 + "px";
    doorOpening.pause();
    storyLines[2].classList.add("fadeInOut");
    storyLines[3].classList.remove("fadeInOut");
    storyLines[4].classList.remove("fadeInOut");
  }

  // lost and found office
  if (scrollY >= 4780 && scrollY <= 5400) {
    rubberDuck.pause();
    if (playing) {
      people.play();
      playing = false;
    }
    image[3].style.marginTop = scrollY - 4780 + "px";
    storyLines[3].classList.add("fadeInOut");
    storyLines[4].classList.add("fadeInOut");
    storyLines[5].classList.remove("fadeInOut");
  }

  // birds
  if (scrollY >= 6200 && scrollY <= 6700) {
    image[4].style.marginTop = scrollY - 6200 + "px";
    storyLines[5].classList.add("fadeInOut");
    storyLines[6].classList.remove("fadeInOut");
    storyLines[7].classList.remove("fadeInOut");
    people.pause();
    if (!playing) {
      birds.play();
      rubberDuck.pause();
      playing = true;
    }
  }

  // rubber duck
  if (scrollY >= 7600 && scrollY <= 8200) {
    birds.pause();
    image[5].style.marginTop = scrollY - 7600 + "px";
    storyLines[6].classList.add("fadeInOut");
    storyLines[7].classList.add("fadeInOut");
    storyLines[8].classList.remove("fadeInOut");
    if (playing) {
      night.pause();
      rubberDuck.play();
      playing = false;
    }
  }

  // The night
  if (scrollY >= 8950 && scrollY <= 9400) {
    rubberDuck.pause();
    storyLines[8].style.marginTop = scrollY - 8950 + "px";
    storyLines[8].classList.add("fadeInOut");
    if (!playing) {
      shipHorn.pause();
      night.play();
      playing = true;
    }
    storyLines[9].classList.remove("fadeInOut");
    storyLines[10].classList.remove("fadeInOut");
  }

  // Big boat
  if (scrollY >= 10350 && scrollY <= 11100) {
    night.pause();
    if (playing) {
      workingOnTheBoat.pause();
      shipHorn.play();
      playing = false;
    }
    storyLines[9].style.marginTop = scrollY - 10350 + "px";
    storyLines[9].classList.add("fadeInOut");
    storyLines[10].classList.add("fadeInOut");
    storyLines[11].classList.remove("fadeInOut");
  }

  // working on the boat
  if (scrollY >= 11790 && scrollY <= 12300) {
    shipHorn.pause();
    if (!playing) {
      sea.pause();
      workingOnTheBoat.play();
      playing = true;
    }
    storyLines[11].classList.add("fadeInOut");
    image[8].style.marginTop = scrollY - 11790 + "px";
    storyLines[12].classList.remove("fadeInOut");
    storyLines[13].classList.remove("fadeInOut");
  }

  // The Sea
  if (scrollY >= 13190 && scrollY <= 13800) {
    workingOnTheBoat.pause();
    if (playing) {
      seaBadWeather.pause();
      sea.play();
      playing = false;
    }
    storyLines[12].classList.add("fadeInOut");
    storyLines[13].classList.add("fadeInOut");
    image[9].style.marginTop = scrollY - 13190 + "px";
    storyLines[14].classList.remove("fadeInOut");
    storyLines[15].classList.remove("fadeInOut");
  }

  // Sea With bad weather
  if (scrollY >= 14570 && scrollY <= 15100) {
    sea.pause();
    if (!playing) {
      snow.pause();
      seaBadWeather.play();
      playing = true;
    }
    storyLines[14].classList.add("fadeInOut");
    storyLines[15].classList.add("fadeInOut");
    storyLines[14].style.marginTop = scrollY - 14590 + "px";
    storyLines[16].classList.remove("fadeInOut");
    storyLines[17].classList.remove("fadeInOut");
  }

  // South Pole
  if (scrollY >= 15970 && scrollY <= 16500) {
    seaBadWeather.pause();
    if (playing) {
      snow.play();
      playing = false;
    }
    storyLines[16].classList.add("fadeInOut");
    storyLines[17].classList.add("fadeInOut");
    storyLines[16].style.marginTop = scrollY - 15970 + "px";
    storyLines[18].classList.remove("fadeInOut");
    storyLines[19].classList.remove("fadeInOut");
  }

  // lonley penguin again
  if (scrollY >= 17400 && scrollY <= 18000) {
    storyLines[18].classList.add("fadeInOut");
    image[12].style.marginTop = scrollY - 17400 + "px";
    storyLines[19].classList.remove("fadeInOut");
    storyLines[20].classList.remove("fadeInOut");
    storyLines[21].classList.remove("fadeInOut");
    storyLines[22].classList.remove("fadeInOut");
    storyLines[23].classList.remove("fadeInOut");
  }

  // saying goodbye
  if (scrollY >= 18800 && scrollY <= 19150) {
    storyLines[19].classList.add("fadeInOut");
    storyLines[20].classList.add("fadeInOut");
    storyLines[21].classList.add("fadeInOut");
    storyLines[22].classList.add("fadeInOut");
    storyLines[23].classList.add("fadeInOut");
    image[13].style.marginTop = scrollY - 18800 + "px";
    storyLines[24].classList.remove("fadeInOut");
    storyLines[25].classList.remove("fadeInOut");
  }

  // Looking for penguin
  if (scrollY >= 20190 && scrollY <= 20800) {
    storyLines[24].classList.add("fadeInOut");
    storyLines[25].classList.add("fadeInOut");
    image[14].style.marginTop = scrollY - 20190 + "px";
    storyLines[26].classList.remove("fadeInOut");
    storyLines[27].classList.remove("fadeInOut");
    storyLines[28].classList.remove("fadeInOut");
  }

  // not finding the penguin
  if (scrollY >= 21590 && scrollY <= 22250) {
    storyLines[26].classList.add("fadeInOut");
    storyLines[27].classList.add("fadeInOut");
    storyLines[28].classList.add("fadeInOut");
    image[15].style.marginTop = scrollY - 21590 + "px";
    storyLines[29].classList.remove("fadeInOut");
    storyLines[30].classList.remove("fadeInOut");
  }

  // finding The penguin happy ending
  if (scrollY > 21700) {
    storyLines[29].classList.add("fadeInOut");
    storyLines[30].classList.add("fadeInOut");
    storyLines[31].classList.add("fadeInOut");
  }
};
