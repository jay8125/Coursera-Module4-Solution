(function(window) {
    var byeSpeaker = new Object();
    var speakingWord = "GoodBye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakingWord + '' + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);