"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
"scene1": "scene1.jpg",
"scene2": "scene2.jpg",
"scene3": "scene3.jpg",
"scene4": "scene4.jpg",
"kalender": "kalender.jpg"

};

// Define the Characters
const characters = {
	"a": {
		"Name": "Aylin",
		"Color": "#5bcaff",
		"Face": "aylin_erzählend.png"
	}
	,
	"gc": {
		"Name": "Gruppenchat",
		"Color": "#5bcaff"
	}
	,
	"f": {
		"Name": "Finn",
		"Color": "#5bcaff",
		"Face": "finn_erzählend.png"
	}
	,
	"m": {
		"Name": "Melina",
		"Color": "#5bcaff",
		"Face": "melina_erzählend.png"
	}
	,
	"e": {
		"Name": "Erzähler",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
	
	 "scene kalender with fadeIn"
	
	
	,"e Du hast Geburtstag und möchtest diesen mit deinen Freunden feiern. Dazu hast du einen Gruppenchat gegründet, in dem du deine Freunde einlädst."
	, "wait 100"
	, "scene kalender with fadeOut"
	, "scene scene1 with fadeIn"
	, "wait 5000"
	, "scene scene1 with fadeOut"
	, "wait 100"
	, "scene scene2 with fadeIn"
	, "wait 5000"
	, "scene scene2 with fadeOut"
	, "wait 100"
	, "scene scene3 with fadeIn"
	, "wait 5000"
	, "scene scene3 with fadeOut"
	, "wait 100"
	, "scene scene4 with fadeIn"
	, "wait 5000"
	, "scene scene4 with fadeOut"
	,"end"
	]
};