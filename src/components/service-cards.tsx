"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCards() {
  const services = [
    {
      title: "Ride",
      description: "Go anywhere, anytime with our reliable rides. Choose from economy to premium options.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26432bce-c214-42a0-a248-146f8ad8a3b9.png",
      features: ["Available 24/7", "Multiple car types", "Upfront pricing", "Professional drivers"],
      cta: "Book a Ride",
      color: "bg-green-500"
    },
    {
      title: "Drive", 
      description: "Earn money on your schedule. Drive when you want, wherever you want.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b78412c-4e49-4757-85ce-30464acd4fc9.png",
      features: ["Flexible schedule", "Weekly payments", "Drive your own car", "24/7 support"],
      cta: "Start Driving",
      color: "bg-blue-500"
    },
    {
      title: "Deliver",
      description: "Get your favorite food delivered fast. Thousands of restaurants at your fingertips.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6ec62dd-3192-4021-8796-d07c146a7063.png",
      features: ["Fast delivery", "Real-time tracking", "Contactless delivery", "Wide restaurant selection"],
      cta: "Order Now",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One app, multiple services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need a ride, want to earn money driving, or craving your favorite meal, 
            we've got you covered with our comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3E" + service.title + "%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className={`absolute top-4 left-4 ${service.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {service.title}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-200`}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10M+</div>
              <div className="text-gray-600">Happy Riders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Active Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}