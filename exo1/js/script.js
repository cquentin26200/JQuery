$(document).ready(function () {
  var link = $("<a>", {
    href: "http://www.afip.fr",
    title: "Allez sur le site de l'école !",
    text: "site de eden",
  });
  $(".menu").replaceWith(link);
});
