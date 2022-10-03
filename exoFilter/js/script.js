$("tr:odd").css("background-color", "red");

$("input:submit").click(function (e) {
  $("input:checked").each(function () {
    console.log($(this).val());
  });
  e.preventDefault();
});

