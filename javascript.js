console.log("Hello from JS");

function myFunction() {
  console.log("you clicked!");
};

function translateToEn() {
  var lang = "en"
  localStorage.setItem("lang", lang);
  translator.translatePageTo(lang);
};

function translateToDe() {
  var lang = "de"
  localStorage.setItem("lang", lang);
  translator.translatePageTo(lang);
};
