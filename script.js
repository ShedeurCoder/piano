function id(id) {
    return document.getElementById(id)
}
function playSound(note) {
    const source = id("source");
    source.src = "sounds/" + note + '.mp3';
    id('player').load()
    id('player').play()
}