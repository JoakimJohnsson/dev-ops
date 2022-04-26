// Format information
import React from "react";

// Prepare filter text to allow for å, ä and ö
function prepareFilterText(filter) {
    return filter
        .toLowerCase()
        .replace('ö', 'o')
        .replace('ä', 'a')
        .replace('å', 'a')
        .replace('-', ' ')
}

// Randomizer
function randomizer(count, addOn) {
    return Math.floor(Math.random() * count) + addOn;
}
function colorRandomizer() {
    return randomizer(8, 1);
}
function fontRandomizer() {
    return randomizer(16, 1);
}

// Format time display
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

export {prepareFilterText, randomizer, colorRandomizer, fontRandomizer, formatTime}
