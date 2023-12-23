function navigate(direction) {
  console.log("test");
  currentIndex += direction;

  const imageUrl = `./meme_gallery/${currentIndex}.png`;

  // Create an Image object
  const img = new Image();
  img.src = imageUrl;

  // Add an event listener to check when the image has loaded
  img.addEventListener("load", function () {
    // Replace the following line with the logic to display the image
    console.log(`Navigating to image: ${imageUrl}`);
    // For now, log the image source to the console
    console.log(img.src);
  });

  // Add an event listener to check for errors
  img.addEventListener("error", function () {
    console.error(`Error loading image: ${imageUrl}`);
  });
}
