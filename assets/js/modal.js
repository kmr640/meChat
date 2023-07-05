  const avatarImages = document.querySelectorAll(".avatar__image");
  avatarImages.forEach(function(avatarImage) {
    avatarImage.addEventListener("click", function(e) {
      e.preventDefault();
      console.log("Default action prevented!");
    });
  });