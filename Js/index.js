const musicData = [
    {
        id: 1,
        imgSrc: "img/unnamed (1).jpg",
        title: "KING TONG X ឃុននារី | “ អូនជាកូនដួងផ្កាយ “ [ Official Audio ]",
        description: "KING TONG",
        src: "song/KING_TONG_X_ឃុននារី_អូនជាកូនដួងផ្កាយ_Official_Audio_dwI_qpm0PQ4.mp3",
    },
    {
        id: 2,
        imgSrc: "img/unnamed (20).jpg",
        title: "YCN_DIZZY_ត្រគាកសាយ_អើយនាង_ft_HASHA_&_NPN_Official",
        description: "YCN_DIZZY ft HASHA_&_NPN",
        src: "song/YCN_DIZZY_ត្រគាកសាយ_អើយនាង_ft_HASHA_&_NPN_Official_Lyric_Video.mp3",
    },
    {
        id: 3,
        imgSrc: "img/unnamed (5).jpg",
        title: "នារី Dior",
        description: "G-Devith",
        src: "song/dior.mp3",
    },
    {
        id: 4,
        imgSrc: "img/unnamed (16).jpg",
        title: "ក្រឡាប់​ផ្កាប់ផ្ងារ​ - Prince Ft. SeavUoy | Official Music",
        description: "Prince - ព្រីន",
        src: "song/ក្រឡាប់​ផ្កាប់ផ្ងារ​_Prince_Ft_SeavUoy_｜_Official_Music_V.mp3",
    },
    {
        id: 5,
        imgSrc: "img/unnamed (6).jpg",
        title: "Mann_Doss_រាល់សូរតំណក់ទឹកភ្លៀង",
        description: "Mann Doss",
        src: "song/Mann Doss - រលសរតណកទកភលងWhen the rain drop (Visualizer).mp3",
    },
    {
        id: 6,
        imgSrc: "img/unnamed (4).jpg",
        title: "VANNDA- អាមុំបងអើយ -ពូដាសាច់កាប់ ",
        description: "VANNDA",
        src: "song/vanda.mp3",
    },
    {
        id: 7,
        imgSrc: "img/unnamed (7).jpg",
        title: "GMENGZ -​ CAN I ? អាចទេ? [ OFFICIAL VIDEO ]",
        description: "GMENGZ",
        src: "song/gmengz.mp3",
    },
    {
        id: 8,
        imgSrc: "img/unnamed (22).jpg",
        title: "JADY - Lost (វង្វេង)",
        description: "Jady",
        src: "song/JADY - Lost (វងវង) [ OFFICIAL MUSIC VIDEO ].mp3",
    },
    {
        id: 9,
        imgSrc: "img/unnamed (9).jpg",
        title: "Norith - ណ (1NA) ft. YuuHai",
        description: "Norith",
        src: "song/Norith - ណ (1NA) ft. YuuHai [Music Video].mp3",
    },
    {
        id: 10,
        imgSrc: "img/unnamed (10).jpg",
        title: "KING TONG X ផ្កាស្រពោន",
        description: "KING TONG",
        src: "song/KING TONG X ផកសរពន [ Official Audio ].mp3",
    },
    {
        id: 11,
        imgSrc: "img/unnamed (11).jpg",
        title: "TENDO - Stay Low Remix​ ft. RAKHIE (Prod. Vito)",
        description: "TENDO",
        src: "song/TENDO - Stay Low Remix ft. RAKHIE (Prod. Vito) [OFFICIAL MUSIC VIDEO].mp3",
    },
    {
        id: 12,
        imgSrc: "img/unnamed (12).jpg",
        title: "VITO - STILL ZIN",
        description: "VITO",
        src: "song/VITO - STILL ZIN [OFFICIAL AUDIO].mp3",
    },
    {
        id: 13,
        imgSrc: "img/unnamed (13).jpg",
        title: "VANNDA - 6 YEARS IN THE GAME FT. AWICH",
        description: "VANNDA",
        src: "song/VANNDA - 6 YEARS IN THE GAME FT. AWICH (OFFICIAL MUSIC VIDEO).mp3",
    },
    {
        id: 14,
        imgSrc: "img/unnamed (15).jpg",
        title: "KingChi x RuthKo x Elphen - ១ស្មើ (One Life) ",
        description: "KingChi x RuthKo x Elphen",
        src: "song/KingChi x RuthKo x Elphen - សម (One Life) [OFFICAL VIDEO] CG Movement.mp3",
    },
    {
        id: 15,
        imgSrc: "img/unnamed (17).jpg",
        title: "JADY - OUN (V2) FT. YUUHAI",
        description: "Jady",
        src: "song/JADY - OUN (V2) FT. YUUHAI  [OFFICIAL MUSIC VIDEO].mp3",
    },
    {
        id: 16,
        imgSrc: "img/unnamed (18).jpg",
        title: "My Girlfriend V2",
        description: "OGGOLDEN-អូជីហ្គូលឌិន",
        src: "song/My Girlfriend V2.mp3",
    },
    {
        id: 17,
        imgSrc: "img/unnamed (20).jpg",
        title: "JAll3rgy - 7 Years (Remix)",
        description: "JAll3rgy",
        src: "song/All3rgy - 7 Years (Remix).mp3",
    },
    {
        id: 18,
        imgSrc: "img/unnamed (19).jpg",
        title: "GMENGZ - PEM PEM ft Norith",
        description: "GMENGZ",
        src: "song/GMENGZ - PEM PEM ft Norith ( OFFICIAL MUSIC VIDEO ).mp3",
    },
];


// Function to create a single music card
function createMusicCard(data) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6"; // Adjust column size for responsiveness

    const storeMusic = document.createElement("div");
    storeMusic.className = "store_music";

    const link = document.createElement("a");
    link.href = "#";

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Music Thumbnail";

    const musicInfo = document.createElement("div");
    musicInfo.className = "music-info";

    const h6 = document.createElement("h6");
    h6.className = "music-title";
    h6.textContent = data.title;

    const p = document.createElement("p");
    p.textContent = data.description;

    const timeSpan = document.createElement("span");
    timeSpan.className = "time_music";

    // Get the duration of the song and format it as MM:SS
    const audio = new Audio(data.src); // Create an audio object to get the duration
    audio.addEventListener('loadedmetadata', function () {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        timeSpan.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    // Append child elements
    musicInfo.appendChild(h6);
    musicInfo.appendChild(p);
    link.appendChild(img);
    link.appendChild(musicInfo);
    link.appendChild(timeSpan);
    storeMusic.appendChild(link);
    col.appendChild(storeMusic);

    return col;
}

// Function to hide or show the playmusic section
function togglePlayMusicVisibility(show = true) {
    const playMusicSection = document.querySelector(".playmusic");
    if (show) {
        playMusicSection.style.display = "block"; // Show the playmusic section
    } else {
        playMusicSection.style.display = "none"; // Hide the playmusic section
    }
}

// Play/Pause Button Toggle
document.getElementById("playPause").addEventListener("click", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPause");

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "⏸"; // Change icon to Pause
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "▶"; // Change icon to Play
    }
});

// Previous Song Button
document.getElementById("prev").addEventListener("click", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSongIndex = musicData.findIndex(song => decodeURIComponent(audioPlayer.src).includes(song.src));

    if (currentSongIndex === -1) return; // Ensure there's no error if the song isn't found

    const prevSongIndex = (currentSongIndex === 0) ? musicData.length - 1 : currentSongIndex - 1;
    updatePlayMusic(musicData[prevSongIndex], prevSongIndex);

    // Auto-play the previous song
    audioPlayer.play();
});

// Next Song Button
document.getElementById("next").addEventListener("click", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSongIndex = musicData.findIndex(song => decodeURIComponent(audioPlayer.src).includes(song.src));

    if (currentSongIndex === -1) return; // Ensure there's no error if the song isn't found

    const nextSongIndex = (currentSongIndex === musicData.length - 1) ? 0 : currentSongIndex + 1;
    updatePlayMusic(musicData[nextSongIndex], nextSongIndex);

    // Auto-play the next song
    audioPlayer.play();
});

// Click on the progress bar to set the song's time
document.getElementById("progressBar").addEventListener("click", function (event) {
    const progressBar = event.currentTarget;
    const clickPosition = event.offsetX; // Get the click position on the bar
    const progressBarWidth = progressBar.offsetWidth;

    const audioPlayer = document.getElementById("audioPlayer");
    const newTime = (clickPosition / progressBarWidth) * audioPlayer.duration; // Calculate new time based on click position
    audioPlayer.currentTime = newTime; // Set the audio player's current time
});

// Function to update the progress bar on time updates
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.addEventListener('timeupdate', function () {
    // Update current time display
    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    document.getElementById("currentTime").textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    // Update progress bar width
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.querySelector(".progress").style.width = `${progressPercent}%`;
});

// Updated renderMusicList function to ensure playmusic section is shown when a music item is clicked
function renderMusicList(dataArray) {
    const row = document.createElement("div");
    row.className = "row";

    // Loop through the data and create cards
    dataArray.forEach((item, index) => {
        const musicCard = createMusicCard(item);

        // Add click event to update the playmusic section
        musicCard.addEventListener("click", () => {
            togglePlayMusicVisibility(true); // Show the playmusic section
            updatePlayMusic(item, index);

            // Update the URL with the song title in the hash
            window.location.hash = encodeURIComponent(item.title);

            // Update the document title with the song's title
            document.title = `${item.title} - Music Player`;
        });

        row.appendChild(musicCard);
    });

    // Select the placeholder and append the generated row
    const listMusic = document.getElementById("musicList").querySelector(".container");
    listMusic.appendChild(row);
}

// Function to update the playmusic section with the clicked song
function updatePlayMusic(data, index) {
    // Update song details in the playmusic section
    document.getElementById("songImage").src = data.imgSrc;
    document.getElementById("songTitle").textContent = data.title;
    document.getElementById("songArtist").textContent = data.description;
    document.getElementById("audioPlayer").src = data.src; // Ensure `src` is updated

    // Reset the progress bar and play the song
    document.querySelector(".progress").style.width = "0%";
    document.getElementById("currentTime").textContent = "00:00";
    document.getElementById("duration").textContent = "00:00"; // Reset duration text

    // Play the audio and change the button icon to "Pause"
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();

    const playPauseButton = document.getElementById("playPause");
    playPauseButton.textContent = "⏸"; // Change button text to pause

    // Listen to time updates
    audioPlayer.addEventListener('timeupdate', function () {
        // Update current time display
        const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
        const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
        document.getElementById("currentTime").textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

        // Update progress bar
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.querySelector(".progress").style.width = `${progressPercent}%`;
    });

    // Update the duration when metadata is loaded
    audioPlayer.addEventListener('loadedmetadata', function () {
        const durationMinutes = Math.floor(audioPlayer.duration / 60);
        const durationSeconds = Math.floor(audioPlayer.duration % 60);
        document.getElementById("duration").textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    });
}

// Call the function to render the music list
renderMusicList(musicData);

