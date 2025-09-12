"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Ride",
      description: "Open the app and enter your destination. We'll match you with the nearest driver.",
      icon: "📱",
      details: [
        "Available on iOS and Android",
        "Real-time driver matching",
        "Upfront pricing displayed"
      ]
    },
    {
      number: "02",
      title: "Meet Your Driver",
      description: "See your driver's photo, name, and vehicle details. Track their arrival in real-time.",
      icon: "🚗",
      details: [
        "Driver photo and rating",
        "Vehicle make and model",
        "Live GPS tracking"
      ]
    },
    {
      number: "03",
      title: "Enjoy the Ride",
      description: "Hop in and relax. Your driver knows the best routes to get you there safely.",
      icon: "🎯",
      details: [
        "Professional drivers",
        "Clean, comfortable vehicles",
        "Optimal route selection"
      ]
    },
    {
      number: "04",
      title: "Pay & Rate",
      description: "Payment is automatic through your preferred method. Rate your experience.",
      icon: "⭐",
      details: [
        "Cashless transactions",
        "Multiple payment options",
        "Driver rating system"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How RideShare works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting a ride has never been easier. Follow these simple steps 
            to get from point A to point B safely and efficiently.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 h-0.5 bg-green-500 transform -translate-y-1/2 w-0 timeline-progress" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Circle */}
                <div className="relative mx-auto w-20 h-20 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center mb-6 group-hover:border-green-500 transition-colors duration-300 z-10">
                  <div className="text-2xl">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Step Circle */}
              <div className="relative flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                {step.icon}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 ml-8 relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-green-200" />
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Download the RideShare app and take your first ride today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              <span>📱</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              <span>🤖</span>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}