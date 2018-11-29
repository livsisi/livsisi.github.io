console.log("Skriptet er lastet");

window.onkeydown = function(event){
    console.log(event.code);
    const lyd = document.querySelector(`audio[data-code=${event.code}]`);

    if(!lyd){
        return;
    }

    lyd.currentTime = 0;
    lyd.play();

    boks.classList.add("spiller");

}
window.onkeyup = function(event){
    const boks = document.querySelector(`div[data-code=${event.code}]`);

    if(!boks){
        return;
    }

    boks.classList.remove("spiller");
}
