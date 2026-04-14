async function fetchCSV(url) {
  const response = await fetch(url);
  const csvText = await response.text();
  return csvText.split("\n").slice(1).map(row => {
    const [href, imgSrc, alt] = row.split(",");
    return { href: href.trim(), imgSrc: imgSrc.trim(), alt: alt.trim() };
  });
}

async function populateCarousel() {
  const carousel = document.getElementById("carousel");
  const data = await fetchCSV("projects.csv");

  data.forEach((project, index) => {
    const link = document.createElement("a");
    link.href = project.href;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.alt;
    if (index === 0) img.classList.add("active");

    link.appendChild(img);
    carousel.appendChild(link);
  });

  let currentIndex = 0;
  const images = carousel.querySelectorAll("img");

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 5000);
}

populateCarousel();
