
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const upcomingProducts = [
  {
    id: 1,
    name: "McGregory Brain Chip",
    tagline: "Power. Precision. Performance.",
    price: "$49,999.99",
    image: "/lovable-uploads/3e03d403-fd6d-4956-b843-ad30df07722d.png",
  },
  {
    id: 2,
    name: "Cybernetic Wings Sparrow",
    tagline: "Experience True Freedom",
    price: "$89,999.99",
    image: "/lovable-uploads/2779a67e-7bc6-442c-b564-b24ab3776cb5.png",
  },
  {
    id: 3,
    name: "Cybernetic Wings Eagle",
    tagline: "Soar Beyond Limitations",
    price: "$129,999.99",
    image: "/lovable-uploads/7f9511c7-37d2-44bb-8aa8-108640ccf2bb.png",
  },
  {
    id: 4,
    name: "Hawkeye",
    tagline: "Perfect Aim, Every Time",
    price: "$75,999.99",
    image: "/lovable-uploads/8d49e909-f5c0-4051-a383-3b9650c198e4.png",
  },
];

export default function ComingSoonProducts() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-400 text-lg">
            Experience the next evolution of human enhancement
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {upcomingProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                          Coming Soon
                        </Badge>
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-cyan-400 mb-4">{product.tagline}</p>
                      <p className="text-2xl font-bold text-white">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
