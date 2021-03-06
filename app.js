// const searchSong = async()=>{
//     const searchText = document.getElementById("searchField").value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     const res = await fetch(url);
//     const data = await res.json();
//     displaySong(data.data);
// }


//use fetch
const searchSong = ()=>{
    const searchText = document.getElementById("searchField").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySong(data.data))
    .catch(error => displayError('Something Went Wrong! please try again letter.'));
}

const displaySong = songs =>{
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = ' ';
    songs.forEach(song =>{
        const songDiv = document.createElement('div');
        songDiv.className='single-result row align-items-center my-3 p-3';

        songDiv.innerHTML = `
       
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/ogg">
                
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick = "getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
    </div>
    `;
        songContainer.appendChild(songDiv);

    });
}

const getLyric = async(artist,title) =>{
        const url =`https://api.lyrics.ovh/v1/${artist}/${title}`;
        // console.log(url);
        //console.log(artist,title);
       try{
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics);

       }catch(error){
           displayError('Sorry! Ifailed to load lyrics,please try again later!!!');
       }
    }

// const getLyric = async(artist,title) =>{
//     const url =`https://api.lyrics.ovh/v1/${artist}/${title}`;
//     // console.log(url);
//     //console.log(artist,title);
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLyrics(data.lyrics);
// }

// const getLyric = (artist,title) =>{
//     const url =`https://api.lyrics.ovh/v1/${artist}/${title}`;
//     // console.log(url);
//     //console.log(artist,title);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLyrics(data.lyrics));
// }

const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById("song-lyrics");
    lyricsDiv.innerText = lyrics;

}


const displayError = error =>{
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}

        
    














