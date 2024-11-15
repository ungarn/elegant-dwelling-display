import { useState } from "react";
import { Camera, House, MapPin, User, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const propertyImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

const agents = [
  {
    name: "Sarah Johnson",
    title: "Senior Luxury Property Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "Michael Chen",
    title: "Executive Real Estate Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    phone: "+1 (555) 987-6543",
  },
];

const propertyFeatures = [
  "5 Bedrooms",
  "6 Bathrooms",
  "3-Car Garage",
  "Wine Cellar",
  "Home Theater",
  "Infinity Pool",
  "Smart Home System",
  "Private Garden",
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(propertyImages[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={selectedImage}
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-4 text-sm tracking-wider">EXCLUSIVE LISTING</div>
            <h1 className="text-5xl md:text-7xl font-light mb-4">Hillside Haven Estate</h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Beverly Hills, CA
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                12,500,000
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="property-card"
        >
          <h2 className="section-title">Property Overview</h2>
          <p className="text-luxury-600 leading-relaxed mb-8">
            Nestled in the prestigious Beverly Hills, this architectural masterpiece offers the perfect
            blend of luxury and comfort. With breathtaking views of the city and mountains, this
            contemporary estate spans over 8,500 square feet of meticulously designed living space.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="feature-item"
              >
                <House className="w-5 h-5" />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title text-center mb-12">Photo Gallery</h2>
        <div className="image-gallery">
          {propertyImages.map((image, index) => (
            <motion.img
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              src={image}
              alt={`Property Image ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* Agents Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title text-center mb-12">Meet Your Agents</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="agent-card"
            >
              <div className="flex items-center gap-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-luxury-800">{agent.name}</h3>
                  <p className="text-luxury-600 mb-2">{agent.title}</p>
                  <p className="text-luxury-500 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {agent.phone}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-light mb-6">Schedule a Private Viewing</h2>
          <p className="text-luxury-600 mb-8">
            Experience the epitome of luxury living. Contact our agents to arrange your private tour.
          </p>
          <button className="bg-luxury-800 text-white px-8 py-3 rounded-lg hover:bg-luxury-700 transition-colors duration-300">
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;