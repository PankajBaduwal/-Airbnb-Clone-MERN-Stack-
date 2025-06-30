const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "cozy-beachfront-cottage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "modern-loft-downtown"
    },
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "mountain-retreat"
    },
    price: 1000,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Historic Castle",
    description:
      "Live like royalty in this beautifully preserved castle. A truly unique and regal experience awaits.",
    image: {
      url: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "historic-castle"
    },
    price: 3000,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Desert Glamping",
    description:
      "Experience the magic of the desert with all the comforts of luxury glamping. Stargazing guaranteed!",
    image: {
      url: "https://images.unsplash.com/photo-1545259742-2ea3ebf61fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "desert-glamping"
    },
    price: 900,
    location: "Sahara",
    country: "Morocco"
  },
  {
    title: "Lakeside Cabin",
    description:
      "Cozy up in this rustic cabin by the lake. Perfect for fishing, kayaking, and evening bonfires.",
    image: {
      url: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "lakeside-cabin"
    },
    price: 1100,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Tropical Bungalow",
    description:
      "Wake up to the sound of waves in this beautiful bungalow surrounded by palm trees and white sands.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "tropical-bungalow"
    },
    price: 1300,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Reconnect with nature in this serene farmhouse surrounded by rolling hills and open fields.",
    image: {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "countryside-farmhouse"
    },
    price: 800,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Ski Chalet",
    description:
      "Hit the slopes and then relax by the fireplace in this luxurious ski chalet with stunning mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "ski-chalet"
    },
    price: 1700,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Urban Studio",
    description:
      "Compact and convenient, this studio apartment is perfect for solo travelers or couples exploring the city.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "urban-studio"
    },
    price: 700,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Jungle Treehouse",
    description:
      "Immerse yourself in the jungle in this unique treehouse. Adventure and tranquility await!",
    image: {
      url: "https://images.unsplash.com/photo-1519821172141-b5d8b4e3a3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "jungle-treehouse"
    },
    price: 950,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Luxury Penthouse",
    description:
      "Enjoy top-floor views and high-end amenities in this stunning luxury penthouse.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "luxury-penthouse"
    },
    price: 2500,
    location: "Dubai",
    country: "UAE"
  }
];

  module.exports = { data: sampleListings };
  