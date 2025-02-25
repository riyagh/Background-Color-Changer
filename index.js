$(".btn").click(function () {
  let chooserColour = $(this).attr("id");
  $("body").css("backgroundColor", chooserColour);
});
