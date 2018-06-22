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
"scene1": "patient.png",
"scene2": "scene2.jpg",
"scene3": "scene1.jpg",
"scene4": "scene2.jpg"

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
	
	
	"e Du hast Geburtstag und möchtest diesen mit deinen Freunden feiern. Dazu hast du einen Gruppenchat gegründet, in dem du deine Freunde einlädst."
	
	// Bild 1
	, "gc Liebe Freunde, hiermit lade ich euch zu meinem Geburtstag am Freitag ein. Ich möchte gerne mit euch an den Baggersee zum Grillen und zum Planschen. Für Essen und Getränke ist gesorgt, wir lassen es richtig krachen! Bitte kommt so gegen 16 Uhr. Bringt am besten Badekleidung mit! Ich freue mich sehr auf euer Kommen!"
	, "f Hallo, danke für die Einladung, aber bitte beachten: Ich darf freitags kein Fleisch essen."
	, "m Danke für die liebgemeinte Einladung. Leider kann ich nicht kommen. Du weißt doch... Freitags ist immer die Sabbatvorbereitung. Außerdem gehe ich mit meiner Familie in den Gottesdienst und danach sind wir als Familie zusammen und feiern Sabbat."
	, "a Hey mir geht es so ähnlich wie Melina... ich bin beim Freitagsgebet. Zudem ist Ramadan und meine Familie und ich brechen immer zusammen das Fasten. Danach wird es leider zu spät, da im Sommer doch die Sonne sowieso erst um halb 10 untergeht... Tut mir wirklich leid!"
	, "e Du bist traurig, dass deine Freunde für Freitag abgesagt haben, willst aber noch nicht aufgeben. Schließlich ist es dein Geburtstag! Überleg dir, wie du auf die Absagen reagierst und wie du deine Feier trotzdem noch steigen lassen könntest. Z.B. indem du Ort, Zeit oder Datum änderst."
	
	,"end"
	]
};