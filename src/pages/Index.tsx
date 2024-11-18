import { useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "lucide-react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import AgentCard from "../components/AgentCard";

const propertyImages = [
  "/lovable-uploads/54f7fe51-f6ca-460a-bfda-808d162af3b1.png",
  "/lovable-uploads/6feb3fcb-8958-4c73-abd5-97cb657f37d8.png",
  "/lovable-uploads/7dab745f-6089-437a-8401-d1218e9a2f52.png",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80",
];

const agent = {
  name: "Michael Bunkin",
  title: "Luxury Property Specialist",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  phone: "+1 (555) 123-4567",
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(propertyImages[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen mt-16">
        <div className="absolute inset-4 border-8 border-white z-10"></div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={selectedImage}
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-12 left-12 p-8 text-white z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-light mb-2">1901 Elendy Lane</h1>
            <p className="text-xl opacity-90">Anytown, CA</p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 right-12 p-8 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white text-4xl font-light"
          >
            $1,500,000
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light">Gallery</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-luxury-800 text-white rounded hover:bg-luxury-900 transition-colors">
              <Grid className="w-4 h-4" />
              View All Photos
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {propertyImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Property Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0647966721844!2d-122.41941708468204!3d37.77492897975928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1565832557821!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Agent Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center text-white mb-12">REPRESENTED BY</h2>
          <AgentCard agent={agent} />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Index;