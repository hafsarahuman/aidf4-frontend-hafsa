import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner"; // Import the toast

const offers = [
  {
    title: "💥 Summer Splash Deal",
    description: "Enjoy up to 50% off on premium beach resorts. Limited time offer!",
    image: "https://i.pinimg.com/736x/49/c5/41/49c5411a3b8cf10e067e01fe0899f6ed.jpg",
    label: "50% OFF",
  },
  {
    title: "🌙 Romantic Weekend",
    description: "Get 2 nights for the price of 1 on couple suites this weekend only.",
    image: "https://i.pinimg.com/736x/52/3a/1a/523a1ae8831bfe2a34b08c297b6fb576.jpg",
    label: "BOGO",
  },
  {
    title: "🌍 Explore the World",
    description: "Book your next city stay and get free breakfast & airport pickup.",
    image: "https://i.pinimg.com/736x/ef/bb/28/efbb28e55e413082610ebf68b1a4db97.jpg",
    label: "Hot Deal",
  },
];

export default function Offers() {
  const handleClaim = (offerTitle) => {
    toast.success(`🎉 Successfully claimed: ${offerTitle}`);
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">🎁 Offers & Promotions</h2>
        <p className="text-gray-600 mt-2">Unlock the best hotel deals just for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <div className="relative h-48">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 left-3 bg-amber-600 text-white">
                {offer.label}
              </Badge>
            </div>
            <CardContent className="p-5 space-y-3">
              <CardTitle>{offer.title}</CardTitle>
              <CardDescription>{offer.description}</CardDescription>
              <Button className="w-full" onClick={() => handleClaim(offer.title)}>
                Claim Offer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
