"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DriverBenefits() {
  const benefits = [
    {
      title: "Flexible Schedule",
      description: "Drive when you want, wherever you want. You're in complete control of your schedule.",
      stat: "Drive on your terms"
    },
    {
      title: "Weekly Earnings",
      description: "Get paid weekly with instant cash-out options. Track your earnings in real-time.",
      stat: "Up to $25/hour"
    },
    {
      title: "Drive Your Car",
      description: "Use your own vehicle or rent one from our partners. We support most car types.",
      stat: "2015+ vehicles"
    },
    {
      title: "Full Support",
      description: "24/7 driver support, insurance coverage, and safety tools to keep you protected.",
      stat: "24/7 assistance"
    }
  ];

  const requirements = [
    "Valid driver's license",
    "Clean driving record", 
    "Vehicle 2015 or newer",
    "Pass background check",
    "Complete driver orientation"
  ];

  return (
    <section id="drive" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Drive and earn with 
                <span className="text-green-600"> RideShare</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of drivers earning money on their own schedule. 
                Whether you want to drive full-time or just a few hours a week, 
                RideShare gives you the flexibility to earn on your terms.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {benefit.description}
                  </p>
                  <div className="text-green-600 font-semibold text-sm">
                    {benefit.stat}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start Driving Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Earnings Calculator */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Potential Earnings Calculator
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10 hours/week:</span>
                    <span className="font-bold text-green-600">$200 - $250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">20 hours/week:</span>
                    <span className="font-bold text-green-600">$400 - $500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">40 hours/week:</span>
                    <span className="font-bold text-green-600">$800 - $1000</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-2 border-t">
                    * Earnings may vary by location, time, and demand
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Driver Image & Requirements */}
          <div className="space-y-8">
            {/* Driver Hero Image */}
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/926ee7fc-0afb-495e-b8f6-c1a63cf08f89.png"
                alt="Professional drivers with their vehicles"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23f3f4f6'/%3E%3Ctext x='300' y='250' text-anchor='middle' fill='%236b7280' font-size='18'%3EDrive with RideShare%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">Join 1M+ Drivers</div>
                <div className="text-lg opacity-90">Earning with RideShare</div>
              </div>
            </div>

            {/* Requirements Card */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Driver Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                      </div>
                      {requirement}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-green-800">
                    <strong>Good news!</strong> Most drivers get approved within 24 hours 
                    and can start earning immediately after completing orientation.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                    💼
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300 mb-1">Driver Success Story</div>
                    <div className="font-bold mb-2">Sarah M., Los Angeles</div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      "I've been driving with RideShare for 2 years. The flexibility 
                      lets me work around my family schedule and I love meeting new people 
                      every day. Best decision I've made!"
                    </div>
                    <div className="flex items-center mt-3">
                      <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                      <div className="text-sm text-gray-300 ml-2">5.0 Rating</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}