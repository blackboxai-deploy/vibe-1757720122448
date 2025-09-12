"use client";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Investor Relations", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Ride", href: "#" },
        { name: "Drive", href: "#" },
        { name: "Deliver", href: "#" },
        { name: "RideShare for Business", href: "#" },
        { name: "RideShare Freight", href: "#" },
        { name: "Gift Cards", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Safety", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Lost Items", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Bug Bounty", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Data Protection", href: "#" },
        { name: "Accessibility Statement", href: "#" },
        { name: "Modern Slavery Act", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">RideShare</h3>
              <p className="text-gray-400 leading-relaxed">
                Connecting people and creating opportunities in cities around the world. 
                Join millions who rely on RideShare for safe, reliable transportation.
              </p>
            </div>
            
            {/* App Download */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg mb-4">Download the App</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors cursor-pointer">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors cursor-pointer">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get the latest news, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RideShare Technologies Inc. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
              <span>Available in 500+ cities worldwide</span>
              <span>•</span>
              <span>24/7 customer support</span>
              <span>•</span>
              <span>Safe and reliable rides</span>
              <span>•</span>
              <span>Professional drivers</span>
            </div>
            <p className="text-xs text-gray-500">
              RideShare does not provide emergency medical services or emergency services of any kind. 
              In case of emergency, please call your local emergency number.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}