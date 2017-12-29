/**
Необходимо реализовать функционал четырёх кнопок аудиоплеера:

Аудиоплеер

Play – начинает играть текущая песня, состояние кнопки меняется на Pause.
Pause – останавливается воспроизведение текущей песни, состояние кнопки меняется на Play. При нажатии на кнопку Play воспроизведение начнется с момента, на котором было остановлено.
Stop – останавливает воспроизведение текущей песни, состояние кнопки не меняется. При нажатии на кнопку Play воспроизведение начинается с начала песни.
Back – происходит переключение на предыдущую песню.
Next – происходит переключение на следующую песню.
Песни должны листаться по кругу с помощью кнопок Back и Next.

По окончании проигрывания текущей песни автопереключения на следующую не происходит.

Интерфейс
Play
<i class="fa fa-play"></i>, вложенный в кнопку <button class="playstate">

Pause
<i class="fa fa-pause"></i>, вложенный в кнопку <button class="playstate">

Stop <button class="stop">

Back <button class="back">

Next <button class="next">

Нужно реализовать функционал кнопок аудиоплеера, управляя свойствами тега audio. Визуальное отображение проигрывания песни происходит с помощью добавления или удаления класса play на элементе <div class="mediaplayer">.

Дополнительно, при переключении песен при помощи кнопок Back и Next нужно выводить название песни с помощью обновления свойства title у тега <span class="title" title="LA Chill Tour"></span>.

Материалы
Песни для плеера
[LA Chill Tour](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3)
[This is it band](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3)
[LA Fusion Jam](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3)
*/

'use strict';

const playList = ['mp3/LA_Fusion_Jam.mp3', 'mp3/This_is_it_band.mp3', 'mp3/LA_Chill_Tour.mp3'];

const visualPlay = document.getElementsByClassName('mediaplayer')[0],
audio = document.getElementsByTagName('audio')[0],
playPause = document.getElementsByClassName('playstate')[0],
nextTrack = document.getElementsByClassName('next')[0],
prevTrack = document.getElementsByClassName('back')[0],
stopPlayer = document.getElementsByClassName('fa-stop')[0],
title = document.getElementsByClassName('title')[0];

playPause.onclick = function() {
	if (!visualPlay.classList.contains('play')) {
		visualPlay.classList.toggle('play');
		audio.play();
	}else {
		visualPlay.classList.contains('play')
		visualPlay.classList.toggle('play');
		audio.pause();
	}
}

const playListLength = playList.length - 1;
let i = 0;

nextTrack.onclick = function() {
	playPause.click();
	i === playListLength ? i = 0 : i++;
	audio.src = playList[i];
	title.title = playList[i];
	playPause.click();
}

prevTrack.onclick = function() {
	playPause.click();
	i === 0 ? i = playListLength : i--;
	audio.src = playList[i];
	title.title = playList[i];
	playPause.click();
}

stopPlayer.onclick = function() {
	audio.pause();
	audio.currentTime = 0;
};