var deTranslation = {
    "title": "Hier ist ein Deutscher Text."
};

var enTranslation = {
    "title": "Here is some English text."
};

var lang = localStorage.getItem("lang") || "de";
localStorage.setItem("lang", lang);
var translator = new Translator();
translator.add("en", enTranslation);
translator.add("de", deTranslation).translatePageTo(lang);
