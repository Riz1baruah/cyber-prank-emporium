
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const services = [
  {
    image: "/lovable-uploads/53174622-2717-4f1c-9582-cc72f152d5c6.png",
    title: "Enhanced Vision",
    description: "See beyond limitations with our cutting-edge optical implants",
  },
  {
    image: "/lovable-uploads/3f07ae03-d95e-4e26-ade7-0cdfea4cfb29.png",
    title: "Neural Integration",
    description: "Seamless connection between mind and technology",
  },
  {
    image: "/lovable-uploads/8f41bb68-41cf-4300-8df3-c4751ae69409.png",
    title: "Physical Augmentation",
    description: "Unlock your body's true potential",
  },
  {
    image: "/lovable-uploads/7e277d39-5e41-4835-bf0d-9bc282c4b1a1.png",
    title: "Strength Enhancement",
    description: "Push beyond natural limits",
  },
  {
    image: "/lovable-uploads/9a59924f-b437-4827-b0ab-fcfeb7b53842.png",
    title: "Precision Skills",
    description: "Master any craft with enhanced dexterity",
  },
  {
    image: "/lovable-uploads/49d628f6-0918-437e-92f4-d6b3fb38670e.png",
    title: "Ocular Precision",
    description: "Advanced visual processing for enhanced perception",
  },
  {
    image: "/lovable-uploads/0450715d-f7a0-49fa-b887-98981929ff04.png",
    title: "Neural Enhancement",
    description: "Upgrade your cognitive capabilities",
  },
];

export default function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000); // Changed to 4 seconds for smoother transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="transform-your-life" className="py-24 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Transform Your Life
        </h2>
        <p className="text-gray-400 text-lg text-center mb-12">
          Experience the future of human enhancement
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            startIndex: activeIndex,
            duration: 60, // Increased duration for smoother animation
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className={cn(
                  "relative group h-[400px] rounded-xl overflow-hidden",
                  "transform transition-all duration-1000", // Increased duration
                  index === activeIndex ? "scale-100" : "scale-95 opacity-75"
                )}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" // Increased duration
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
