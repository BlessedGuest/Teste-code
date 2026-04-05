/*Abaixo, não é "let" porque o nome da div não poderá mudar (nesse caso), apenas seu conteúdo. */
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");

/*Esse innerText, abaixo, acessará o texto que está dentro do songName = div de id song-name, e mudará esse texto para "In Da Club"*/
songName.innerText = "In Da Club";
artistName.innerText = "50 Cent";

let isPlaying = false;

/*Basicamente a mesma coisa que os 4 caras ali de cima, mas define uma função, e não apenas um elemento. */

function playSong(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    song.pause();
    isPlaying = false;
    play.addEventListener('click', playSong);
}

/*
Esse "querySelector" significa, na tradução, uma consulta de seletor. No Css, todos aqueles que indicam um elemento, classe ou id são os seletores (isto é, [nome]{}, .[nome]{} e #[nome]{}).

Nesse caso, o querySelector verá os elementos que estão apenas dentro da tag "play", ou seja, apenas o "<i class="bi bi-play-circle-fill"></i>"

Como o espaço em classe indica outra classe, então o "bi" é uma das classe, e "bi-play-circle-fill" é outra. Logo, escrever ".bi" pega a classe bi dentro da tag com id play.

O .remove obviamente diz que, dentro dessas coisas selecionadas, ele removerá o "bi-play-circle-fill". Nessa lógica, o .add adicionará.
*/

function playPauseDecider(){
    if (isPlaying === true) {
        pauseSong();
    }
    else{
        playSong();
    }
}

play.addEventListener('click', playPauseDecider);