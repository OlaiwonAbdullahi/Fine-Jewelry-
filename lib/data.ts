import { Product } from "@/components/uis/productCard";

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Solitaire Engagement Ring",
    price: "$12,500",
    image: "/products/ring.png",
    images: ["/products/ring.png", "/products/ring.png", "/products/ring.png"],
    category: "Engagement Rings",
    description:
      "A masterpiece of grace and light, this solitaire engagement ring features a stunning brilliant-cut diamond set in high-grade platinum.",
    story:
      "Inspired by the pure geometry of light, this creation is part of a century-old lineage of excellence. Each gem is meticulously selected for its brilliance and fire, set in high-grade platinum to ensure a lifetime of radiance.",
    details: [
      "Platinum 950",
      "Brilliant-cut diamond",
      "Carat weight: 1.5",
      "Color: D",
      "Clarity: IF",
    ],
  },
  {
    id: 2,
    name: "Classic Gold Bangle",
    price: "$8,200",
    image: "/products/bracelet.png",
    images: [
      "/products/bracelet.png",
      "/products/bracelet.png",
      "/products/bracelet.png",
    ],
    category: "Bracelets",
    description:
      "An elegant expression of style, this classic gold bangle is hand-crafted from 18k yellow gold with a polished finish.",
    story:
      "Woven with gold threads of heritage, this bangle symbolizes the eternal circle of time and tradition. A timeless piece that transitions seamlessly from day to evening.",
    details: [
      "18k Yellow Gold",
      "Width: 6mm",
      "Weight: 24g",
      "Polished finish",
      "Concealed clasp",
    ],
  },
  {
    id: 3,
    name: "Emerald Drop Earrings",
    price: "$15,400",
    image: "/products/earrings.png",
    images: [
      "/products/earrings.png",
      "/products/earrings.png",
      "/products/earrings.png",
    ],
    category: "Earrings",
    description:
      "Dazzling emerald drop earrings surrounded by a halo of micro-pave diamonds, set in 18k white gold.",
    story:
      "Capturing the lush essence of a secret garden, these emeralds are sourced from the finest mines and cut to maximize their deep, enchanting green hue.",
    details: [
      "18k White Gold",
      "Colombian Emeralds",
      "Total weight: 4ct",
      "GIA Certified",
      "Diamond halo",
    ],
  },
  {
    id: 4,
    name: "Heritage Gold Watch",
    price: "$22,000",
    image: "/products/watch.png",
    images: [
      "/products/watch.png",
      "/products/watch.png",
      "/products/watch.png",
    ],
    category: "Watches",
    description:
      "A precision timepiece combining haute horlogerie with fine jewelry, featuring a gold case and leather strap.",
    story:
      "The Heritage collection pays homage to the era of master watchmakers, blending mechanical perfection with the artistic soul of luxury design.",
    details: [
      "18k Rose Gold Case",
      "Swiss Automatic Movement",
      "40-hour power reserve",
      "Sapphire crystal",
      "Alligator leather strap",
    ],
  },
  {
    id: 5,
    name: "Diamond Stud Earrings",
    price: "$4,500",
    image: "/products/earrings.png",
    images: ["/products/earrings.png"],
    category: "Earrings",
    description:
      "Timeless brilliant-cut diamond studs set in 18k white gold settings.",
    story:
      "A staple of every jewelry collection, these diamonds are selected for their exceptional clarity and fire.",
    details: ["18k White Gold", "0.5ct each diamond", "Total weight: 1.0ct"],
  },
  {
    id: 6,
    name: "Rose Gold Eternity Band",
    price: "$3,800",
    image: "/products/ring.png",
    images: ["/products/ring.png"],
    category: "Rings",
    description: "A continuous circle of pavé-set diamonds in 18k rose gold.",
    story:
      "Symbolizing eternal love, this band is designed to be worn alone or stacked with other favorites.",
    details: ["18k Rose Gold", "Pavé-set diamonds", "Width: 3mm"],
  },
  {
    id: 7,
    name: "Sapphire Pendant Necklace",
    price: "$6,200",
    image: "/products/necklace.png",
    images: ["/products/necklace.png"],
    category: "Necklaces",
    description: "A deep blue Ceylon sapphire suspended from a platinum chain.",
    story:
      "The sapphire, known for its celestial blue hue, is the center of this elegant and minimalist design.",
    details: ["Platinum 950", "2ct Ceylon Sapphire", "18-inch chain"],
  },
];
