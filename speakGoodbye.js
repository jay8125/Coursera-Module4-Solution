(function(window) {
    var byeSpeaker = new Object();
    var speakingWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakingWord + ' ' + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
