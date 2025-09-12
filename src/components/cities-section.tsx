"use client";

export default function CitiesSection() {
  const majorCities = [
    { name: "New York", country: "USA", rides: "50M+" },
    { name: "Los Angeles", country: "USA", rides: "35M+" },
    { name: "London", country: "UK", rides: "40M+" },
    { name: "Toronto", country: "Canada", rides: "25M+" },
    { name: "Sydney", country: "Australia", rides: "20M+" },
    { name: "Paris", country: "France", rides: "30M+" },
  ];

  const regions = [
    {
      region: "North America",
      cities: ["New York", "Los Angeles", "Chicago", "Toronto", "Vancouver", "Mexico City"],
      count: "200+"
    },
    {
      region: "Europe", 
      cities: ["London", "Paris", "Berlin", "Madrid", "Rome", "Amsterdam"],
      count: "150+"
    },
    {
      region: "Asia Pacific",
      cities: ["Tokyo", "Sydney", "Singapore", "Mumbai", "Bangkok", "Jakarta"],
      count: "100+"
    },
    {
      region: "Latin America",
      cities: ["São Paulo", "Buenos Aires", "Lima", "Santiago", "Bogotá", "Quito"],
      count: "80+"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RideShare operates in over 500 cities across 6 continents, 
            connecting millions of riders and drivers around the globe.
          </p>
        </div>

        {/* Major Cities Showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {majorCities.map((city, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-green-200 transition-colors">
                    🏙️
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-green-600 transition-colors">
                    {city.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {city.country}
                  </p>
                  <div className="text-green-600 font-semibold text-sm">
                    {city.rides} rides
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {regions.map((region, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {region.region}
                </h4>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {region.count}
                </div>
              </div>
              <div className="space-y-2">
                {region.cities.map((city, cityIndex) => (
                  <div key={cityIndex} className="flex items-center text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global Impact
            </h3>
            <p className="text-xl text-gray-300">
              Connecting communities and creating opportunities worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">500+</div>
              <div className="text-gray-300 text-lg">Cities</div>
              <div className="text-gray-400 text-sm">Across 6 continents</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">10M+</div>
              <div className="text-gray-300 text-lg">Daily Rides</div>
              <div className="text-gray-400 text-sm">Every single day</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">5M+</div>
              <div className="text-gray-300 text-lg">Active Drivers</div>
              <div className="text-gray-400 text-sm">Earning with us</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">99.9%</div>
              <div className="text-gray-300 text-lg">Uptime</div>
              <div className="text-gray-400 text-sm">Reliable service</div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Coming Soon to Your City
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "Denver", "Portland", "Austin", "Miami", "Seattle", "Phoenix",
              "Montreal", "Dublin", "Barcelona", "Milan", "Prague", "Vienna"
            ].map((city, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Don't see your city? We're expanding rapidly. 
            <span className="text-green-600 font-semibold cursor-pointer hover:underline ml-1">
              Let us know where you'd like RideShare next.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}