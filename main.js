$.ajax(' https://data.nashville.gov/resource/xakp-ess3.json')
.done((response) => {
    displayArtPics(response);
}).fail((err) => {
    console.error(err);
})

const displayArtPics = (artPieces) => {
    let domString = "";
    artPieces.forEach(artPiece => {
        domString += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${artPiece.photo_link}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${artPiece.title}</h5>
            <p class="card-text">${artPiece.location}.</p>
            </div>
        </div>
         `
    })
    $('#nashville-art').html(domString);
};