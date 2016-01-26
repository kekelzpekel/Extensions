if (window == top) {
    chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
        sendResponse(findScore());
    });
}

function findScore() {
    var scores = document.getElementsByClassName('score');
    for (var i = 0; i < scores.length; i++) {
        scores[i].style.display="none";
    }
    return scores.length;
}