
import { Product } from '../components/ProductCard';

// Robotic Eyes Products
export const eyesProducts: Product[] = [
  {
    id: "eagle-eye-3000",
    name: "Eagle Eye 3000",
    tagline: "Zoom in on Reality.",
    price: "$10,999,999",
    imageUrl: "/lovable-uploads/856a7cd7-73ff-4b4c-8fcb-d2aa30d9b869.png", 
    category: "Eyes"
  },
  {
    id: "night-owl-vision",
    name: "Night Owl Vision",
    tagline: "Own the Dark.",
    price: "$10,849,999",
    imageUrl: "/lovable-uploads/d0447de1-3f6c-45b6-ae18-0d66fd78c139.png",
    category: "Eyes"
  },
  {
    id: "xray-spectacles",
    name: "X-Ray Oculus",
    tagline: "See Through the Nonsense.",
    price: "$11,499,999",
    imageUrl: "/lovable-uploads/892738fe-c813-45fd-b38f-8d26dcb55d9e.png",
    category: "Eyes"
  },
  {
    id: "ar-lenses",
    name: "Reality",
    tagline: "View the World As It Truly Is.",
    price: "$11,299,999",
    imageUrl: "/lovable-uploads/1141b9c4-4ff0-4349-b713-8035e2961a35.png",
    category: "Eyes"
  }
];

// Speedster Legs Products
export const legsProducts: Product[] = [
  {
    id: "velocity-v3",
    name: "Velocity V3 Legs",
    tagline: "Outrun Your Problems.",
    price: "$12,499,999",
    imageUrl: "/lovable-uploads/79db9054-9985-4d71-90e6-8160506fa626.png",
    category: "Legs"
  },
  {
    id: "quantum-leap-kickers",
    name: "Quantum Leap Kickers",
    tagline: "Short Jumps, Big Gains.",
    price: "$13,999,999",
    imageUrl: "/lovable-uploads/eba72009-e8cc-45f5-9968-3393c5386267.png",
    category: "Legs"
  },
  {
    id: "zero-g-strider",
    name: "Zero-G Strider",
    tagline: "Walk on Air. Literally.",
    price: "$15,999,999",
    imageUrl: "/lovable-uploads/56faa516-5819-4015-9fae-597d1894a9a8.png",
    category: "Legs"
  }
];

// Brain Chips Products
export const chipsProducts: Product[] = [
  {
    id: "instant-genius",
    name: "Instant Genius Chip",
    tagline: "Know It All. Instantly.",
    price: "$19,999,999",
    imageUrl: "/lovable-uploads/7954ee3b-2023-4311-9d77-4a87d47cd079.png",
    category: "Chips"
  },
  {
    id: "lingo-link",
    name: "Cybro Chip Pro",
    tagline: "Download Any Skill, Become a Polymath.",
    price: "$24,999,999",
    imageUrl: "/lovable-uploads/b1060060-3337-47ee-9567-0ef115dc2d59.png",
    category: "Chips"
  },
  {
    id: "serenity-filter",
    name: "Cybro Mini",
    tagline: "Essential Skills, Maximum Efficiency.",
    price: "$17,999,999",
    imageUrl: "/lovable-uploads/76f97c8e-9419-4580-a88a-ff253b8370c8.png",
    category: "Chips"
  },
  {
    id: "memory-max",
    name: "MemoryMax Enhancer",
    tagline: "Never Forget. Zero Practice Required.",
    price: "$16,499,999",
    imageUrl: "/lovable-uploads/97bd471e-5fdb-4919-bef5-c3013729e3ed.png",
    category: "Chips"
  }
];

// Featured Products Data
export const featuredProducts = [
  {
    id: "eyex2000",
    name: "OmniVision X2000",
    category: "Eyes",
    price: "$12,999,999",
    description: "See beyond human limitations with 200x zoom, night vision, and augmented reality overlays.",
    image: "/lovable-uploads/856a7cd7-73ff-4b4c-8fcb-d2aa30d9b869.png",
    rating: 4.9,
    detailedDescription: "The OmniVision X2000 represents the pinnacle of ocular enhancement technology. These premium optical implants offer unprecedented visual capabilities with 8K resolution and quantum neural integration. Experience perfect vision in any lighting condition, from pitch darkness to blinding light. The built-in neural processor allows for instant analysis of visual data, providing immediate contextual information about anything you see.",
    specifications: [
      "Resolution: 500 megapixels (25x human baseline)",
      "Night Vision Range: 2,500 meters in complete darkness",
      "Zoom Capability: 200x optical, 500x digital",
      "Weather Resistance: IP69K (extreme pressure/temperature)",
      "Battery Life: 150 hours continuous use",
      "Neural Interface: Direct optic nerve connection",
      "Processing Unit: Quantum photonic array",
      "Visual Spectrum: Extended to include infrared and ultraviolet"
    ]
  },
  {
    id: "leg-rush",
    name: "Velocity Rush™ Legs",
    category: "Legs",
    price: "$24,999,999",
    description: "Run at speeds up to 100mph with our revolutionary leg replacements.",
    image: "/lovable-uploads/79db9054-9985-4d71-90e6-8160506fa626.png",
    rating: 4.7,
    detailedDescription: "Velocity Rush™ Legs redefine human locomotion with unprecedented speed capabilities. Featuring carbon nanofiber muscles and neural-response kinetic joints, these premium lower-limb replacements allow speeds of up to 100 mph. Advanced shock absorption technology enables 50-foot vertical jumps with perfect landing stability. The proprietary muscle-memory system adapts to your movement patterns, optimizing performance with every step.",
    specifications: [
      "Max Speed: 100 mph sustained",
      "Jump Height: 50 feet vertical",
      "Weight Capacity: 2,500 kg load bearing",
      "Battery Life: 96 hours continuous use",
      "Impact Absorption: 99.9% (reduced to occupant)",
      "Materials: Carbon nanofiber and titanium alloy",
      "Neural Response Time: 0.001 milliseconds",
      "Stealth Capability: Sound dampening to 2 decibels"
    ]
  },
  {
    id: "brain-chip",
    name: "NeuroLink Pro",
    category: "Chips",
    price: "$39,999,999",
    description: "Download skills directly to your brain. Learn piano in 5 minutes!",
    image: "/lovable-uploads/55420c3c-d5d1-49a1-a6ce-ccdceb24d57d.png",
    rating: 5.0,
    detailedDescription: "The NeuroLink Pro is our flagship neural enhancement, directly augmenting your brain's processing capabilities. Experience a permanent 400-point IQ increase, perfect recall of all sensory experiences, and parallel processing allowing you to consciously focus on up to 10 complex tasks simultaneously. The integrated skill-acquisition system allows you to download and master any skill with zero practice time, from concert piano to quantum physics.",
    specifications: [
      "Processing Speed: 75 petaFLOPS",
      "Memory Capacity: 10 petabytes",
      "Neural Interface: Complete cerebral integration",
      "Response Time: 0.00005ms (20,000x faster than natural synapse)",
      "Power Consumption: 1.5W (biological glucose conversion)",
      "Skill Retention: 100% permanent without practice",
      "Learning Speed: 25,000x human baseline",
      "Parallelization: Process up to 10 complex tasks simultaneously"
    ]
  }
];
