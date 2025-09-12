"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleBookRide = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ride booking logic here
    alert(`Booking ride from ${pickup} to ${destination}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc11eba6-a8a5-4ffc-961d-0a35335cf5b5.png")`
        }}
      />
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            RideShare
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#services" className="hover:text-green-400 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">
              How it works
            </a>
            <a href="#drive" className="hover:text-green-400 transition-colors">
              Drive
            </a>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Go anywhere with 
              <span className="text-green-400"> RideShare</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Request a ride, hop in, and go. Choose from multiple ride options 
              and arrive at your destination safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Book Your Ride
                </h2>
                <form onSubmit={handleBookRide} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full px-4 py-3 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Where to?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-3 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-semibold rounded-lg"
                  >
                    Request Ride
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Estimated arrival:</span>
                    <span className="font-semibold">2-5 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                    <span>Price range:</span>
                    <span className="font-semibold">$8 - $15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}