import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < results.length; i++) {
    const song = results[i]; {
      template += `
      <div class="card text-white bg-transparent mb-3 mt-3  ml-1.5 mr 1.5 col-4">
        <img class="card-img-top" src="${song.albumArt}"/>
          <h5 class="card-title">Song Name:   ${song.title}</h5>
          <p class="card-text">Song Artist:   ${song.artist}</p>
          <p>Album:   ${song.collection}</p>
          <p>Price:   ${song.price}</p>
          <audio controls>
          <source src="${song.preview}" type="audio/mpeg">
          </audio>
      </div>
    `
      document.getElementById('results').innerHTML = template
    }
  }
  // results.reset()
}

//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }
}

export default ItunesController