import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg"><span className="font-bold">1901 Elendy Lane</span></div>
        <nav className="hidden md:flex space-x-8">
          <a href="#overview" className="text-gray-600 hover:text-gray-900">Overview</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#photos" className="text-gray-600 hover:text-gray-900">Photos</a>
          <a href="#video" className="text-gray-600 hover:text-gray-900">Video</a>
          <a href="#3dtour" className="text-gray-600 hover:text-gray-900">3D Tour</a>
          <a href="#floorplans" className="text-gray-600 hover:text-gray-900">Floor Plans</a>
          <a href="#map" className="text-gray-600 hover:text-gray-900">Map</a>
        </nav>
        <button className="bg-luxury-800 text-white px-4 py-2 rounded hover:bg-luxury-900 transition-colors">
          REQUEST INFO
        </button>
      </div>
    </header>
  );
};

export default Header;