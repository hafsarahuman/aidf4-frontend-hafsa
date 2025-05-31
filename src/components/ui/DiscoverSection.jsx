import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DiscoverSection = () => {
  return (
    <section className="w-full py-10 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Discover Stays That Match Your Style
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Left Side */}
        <div className="space-y-4 md:col-span-1">
          {/* Top-left Card */}
          <Card className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105 active:scale-95">
              <img
                src="https://i.pinimg.com/736x/4e/a2/5a/4ea25a785e7100eb2db0a85d0d29c192.jpg"
                alt="Explore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-center">
              <h3 className="text-white text-lg font-semibold">
                Explore more to get your comfort zone
              </h3>
              <Button className="mt-2 w-fit text-sm">Booking Now</Button>
            </div>
          </Card>

          {/* Bottom-left Card */}
          <Card className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105 active:scale-95">
              <img
                src="https://i.pinimg.com/736x/98/07/b6/9807b6246202b0699dca86a813acc6d0.jpg"
                alt="Hotel Count"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex items-center">
              <div>
                <p className="text-white text-sm">Hotels Available</p>
                <h3 className="text-white text-2xl font-bold">1,764,980</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side */}
        <Card className="md:col-span-2 relative min-h-[330px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105 active:scale-95">
            <img
              src="https://i.pinimg.com/736x/07/23/2f/07232f6548523561afa160490ff8f7b0.jpg"
              alt="Memory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-6 text-center">
            <h3 className="text-white text-2xl md:text-3xl font-semibold max-w-xl">
              Beyond accommodation, creating memories of a lifetime
            </h3>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DiscoverSection;
