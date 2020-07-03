$(document).ready(function() {
  $(".sign-out").on("click", (e) => {
      e.preventDefault();
      
    $("#exampleModal").css({
      display: "block",
      opacity: 1,
      paddingTop: 20,
      background: 'rgba(0,0,0,.5)'
    });

    $('.stay-btn,.close').on('click', () => {
        $("#exampleModal").fadeOut();
    });
  });
});
