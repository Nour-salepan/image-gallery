const imageWrapper = document.getElementById("imageWrapper");
const popImg = document.getElementById("pop-img");
const popUp = document.getElementById("popup");
const filterButtons = document.querySelectorAll(".filter-btn");

const animalSizes = {
  small: ["rat", "bird", "fish"],
  medium: ["dog", "cat", "horse"],
  large: ["lion", "bear", "tiger"],
};

function createImages() {
  const animals = [
    ...animalSizes.small,
    ...animalSizes.medium,
    ...animalSizes.large,
  ];

  animals.forEach((animalType) => {
    const image = document.createElement("img");
    image.src = `https://source.unsplash.com/600x400?${animalType}`;
    image.alt = `image of ${animalType} animal`;

    image.addEventListener("click", () => {
      popUp.setAttribute("data-popup", true);
      popImg.src = image.src;
    });

    imageWrapper.append(image);
  });

  popUp.addEventListener("click", (e) => {
    if (e.target.id === "close" || e.target === e.currentTarget) {
      popUp.removeAttribute("data-popup");
    }
  });
}
createImages();


// l  could only declare single array with 10 animals but
// from my prespective its much easier when it comes to filtering
// incase you may prefer only small animals then you can easily match data-filtes
