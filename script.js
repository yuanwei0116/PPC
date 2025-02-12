let count = 0;
const feedButton = document.getElementById("feedButton");
const foodCounter = document.getElementById("foodCounter");
const doll = document.getElementById("doll");
const feedingImages = ["feed.jpg", "bruh.jpg","ghost.jpg"];
feedButton.addEventListener("click", function () {
    count++;
    foodCounter.innerText = "餵食次數：" + count;
    let randomFeedingImage = feedingImages[Math.floor(Math.random() * feedingImages.length)];
    doll.src = randomFeedingImage; 
    if (randomFeedingImage=="bruh.jpg"||randomFeedingImage=="ghost.jpg") {
        count=0;
        foodCounter.innerText = "餵食次數：" + count;
    }
    if (randomFeedingImage === "ghost.jpg") {
        alert("被阿框搶劫!");
        setTimeout(() => {
            doll.src = randomFeedingImage;
        }, 3000);
    }
    setTimeout(() => {
        doll.src = "ppc.jpg";
    }, 1000);
});
