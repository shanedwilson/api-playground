// $.ajax(' https://data.nashville.gov/resource/xakp-ess3.json')
// .done((response) => {
//     displayArtPics(response);
// }).fail((err) => {
//     console.error(err);
// })

const loadArt = () => {
    return new Promise((resolve, reject) => {
        $.ajax('https://data.nashville.gov/resource/xakp-ess3.json')
            .done((data) => {
                resolve(data);
            })
            .fail((error) => {
                reject(error);
            })
    });
}

const intializeBoardView = () => {
    boardsData.loadBoards().then((boards) => {
        return pinsData.loadPinsOnBoards(boards);
    }).then((boardsWithPins) => {
        writeBoards(boardsWithPins);
        bindEvents();
    }).catch((error) => {
        console.error(error);
    })
};

const displayArtPics = () => {
    loadArt().then ((artPieces) => {
        let domString = "";
        artPieces.forEach(artPiece => {
            domString += `
            <div class="card col-md-3 px-0 m-3" style="width: 18rem;">
                <div class="card-header text-center font-weight-bold">
                    ${artPiece.title}
                </div>
                <img class="card-img-top" src="${artPiece.photo_link}" alt="Card image cap">
                <div class="card-body"> 
                </div>
                <div class="caption card-footer mt-auto">
                    <p class="card-text">${artPiece.location}.</p>
                </div> 
            </div>
            `
        })
    $('#nashville-art').html(domString);
    })
};

displayArtPics();