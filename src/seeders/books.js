import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig.js";

const bookData = [
  {
    id: 51,
    title: "Echoes of Eternity",
    author: "Michael Reynolds",
    category: "Fantasy",
    description:
      "Embark on a magical journey with this enchanting fantasy novel.",
    price: 27.99,
    image: "echoes_of_eternity.jpg",
  },
  {
    id: 52,
    title: "Tech Titans",
    author: "Emily White",
    category: "Technology",
    description:
      "Explore the lives and innovations of tech visionaries in this insightful book.",
    price: 32.99,
    image: "tech_titans.jpg",
  },
  {
    id: 53,
    title: "Whispers in the Wind",
    author: "Jonathan Turner",
    category: "Mystery",
    description:
      "Unravel the secrets of a small town with this gripping mystery novel.",
    price: 21.99,
    image: "whispers_in_the_wind.jpg",
  },
  {
    id: 54,
    title: "Art of Mindfulness",
    author: "Sophia Lee",
    category: "Self-Help",
    description:
      "Discover the transformative power of mindfulness in this inspiring book.",
    price: 18.99,
    image: "art_of_mindfulness.jpg",
  },
  {
    id: 55,
    title: "Beyond the Horizon",
    author: "Daniel Mitchell",
    category: "Adventure",
    description:
      "Embark on a thrilling adventure across uncharted territories.",
    price: 25.99,
    image: "beyond_the_horizon.jpg",
  },
  {
    id: 56,
    title: "Culinary Masterpieces",
    author: "Gabriella Davis",
    category: "Cooking",
    description:
      "A culinary journey through exquisite recipes and gastronomic delights.",
    price: 29.99,
    image: "culinary_masterpieces.jpg",
  },
  {
    id: 57,
    title: "Echoes of the Past",
    author: "Brandon Martinez",
    category: "Historical Fiction",
    description:
      "Immerse yourself in the rich tapestry of historical events with this captivating novel.",
    price: 23.99,
    image: "echoes_of_the_past.jpg",
  },
  {
    id: 58,
    title: "The Quantum Code",
    author: "Olivia Turner",
    category: "Science Fiction",
    description:
      "Explore the mysteries of quantum physics in this mind-bending sci-fi adventure.",
    price: 26.99,
    image: "quantum_code.jpg",
  },
  {
    id: 59,
    title: "Heartstrings",
    author: "Natalie Foster",
    category: "Romance",
    description:
      "A tale of love, passion, and heartbreak that will tug at your heartstrings.",
    price: 20.99,
    image: "heartstrings.jpg",
  },
  {
    id: 60,
    title: "The Artisan's Guide",
    author: "Marcus Thompson",
    category: "Crafts & Hobbies",
    description:
      "Unlock the secrets of craftsmanship with this comprehensive guide.",
    price: 28.99,
    image: "artisans_guide.jpg",
  },
  {
    id: 61,
    title: "City of Shadows",
    author: "Ava Reynolds",
    category: "Thriller",
    description:
      "A gripping thriller that unfolds in the mysterious alleys of a city plagued by shadows.",
    price: 24.99,
    image: "city_of_shadows.jpg",
  },
  {
    id: 62,
    title: "The Green Revolution",
    author: "Samuel Green",
    category: "Environmental Science",
    description:
      "An exploration of the global movement towards sustainable living and eco-friendly practices.",
    price: 31.99,
    image: "green_revolution.jpg",
  },
  {
    id: 63,
    title: "Songs of Serenity",
    author: "Ella Turner",
    category: "Poetry",
    description:
      "A collection of soulful poems that resonate with the essence of serenity.",
    price: 17.99,
    image: "songs_of_serenity.jpg",
  },
  {
    id: 64,
    title: "Astrology Unveiled",
    author: "Lucas Stone",
    category: "Astrology",
    description:
      "Delve into the secrets of the stars and uncover the mysteries of astrology.",
    price: 22.99,
    image: "astrology_unveiled.jpg",
  },
  {
    id: 65,
    title: "The Silent Symphony",
    author: "Isaac Turner",
    category: "Music",
    description:
      "A captivating exploration of the power and beauty of silence in the world of music.",
    price: 19.99,
    image: "silent_symphony.jpg",
  },
  {
    id: 66,
    title: "Sailing the Seven Seas",
    author: "Catherine Mitchell",
    category: "Adventure",
    description:
      "Join a daring journey of exploration and discovery across the world's oceans.",
    price: 26.99,
    image: "sailing_the_seven_seas.jpg",
  },
  {
    id: 67,
    title: "The Codebreaker's Dilemma",
    author: "Ryan Foster",
    category: "Thriller",
    description:
      "A high-stakes thriller that revolves around the world of cryptic codes and espionage.",
    price: 23.99,
    image: "codebreakers_dilemma.jpg",
  },
  {
    id: 68,
    title: "Gastronomic Adventures",
    author: "Sophie Davis",
    category: "Cooking",
    description:
      "Embark on a culinary journey filled with exotic flavors and gastronomic wonders.",
    price: 30.99,
    image: "gastronomic_adventures.jpg",
  },
  {
    id: 69,
    title: "Beyond the Canvas",
    author: "Benjamin White",
    category: "Art",
    description:
      "Explore the untold stories behind famous works of art and the artists who created them.",
    price: 21.99,
    image: "beyond_the_canvas.jpg",
  },
];

const addBooks = async () => {
  const booksCollection = collection(db, "books");
  bookData.map(async (book) => {
    try {
      await addDoc(booksCollection, book);
      console.log(`Book "${book.title}" added to Firestore.`);
    } catch (error) {
      console.error(`Error adding book "${book.title}":`, error);
    }
  });
};
addBooks();
export default addBooks;
