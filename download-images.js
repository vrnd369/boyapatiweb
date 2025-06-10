const https = require("https");
const fs = require("fs");
const path = require("path");

const images = [
  {
    url: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80",
    filename: "hero-sweets.jpg",
    description: "Hero section image showing assortment of Indian sweets",
  },
  {
    url: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=800&q=80",
    filename: "about-sweets.jpg",
    description: "About page image showing traditional Indian sweets",
  },
  {
    url: "https://images.unsplash.com/photo-1606472401803-0a0c0c0c0c0c?w=800&q=80",
    filename: "kaju-nest.jpg",
    description: "Kaju Nest sweet",
  },
  {
    url: "https://images.unsplash.com/photo-1606472401803-0a0c0c0c0c0c?w=800&q=80",
    filename: "milk-mithai.jpg",
    description: "Milk Mithai collection",
  },
  {
    url: "https://images.unsplash.com/photo-1606472401803-0a0c0c0c0c0c?w=800&q=80",
    filename: "dry-fruit.jpg",
    description: "Dry Fruit sweets collection",
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, "public", "images", filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
};

const downloadAllImages = async () => {
  console.log("Starting image downloads...");
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  console.log("All downloads completed!");
};

downloadAllImages();
