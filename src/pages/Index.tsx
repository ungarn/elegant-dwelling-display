import { useState } from "react";
import { Camera, Home, MapPin, User, DollarSign, Calendar, Calculator, FileText, Headphones, BarChart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const propertyImages = [
  "/lovable-uploads/54f7fe51-f6ca-460a-bfda-808d162af3b1.png",
  "/lovable-uploads/6feb3fcb-8958-4c73-abd5-97cb657f37d8.png",
  "/lovable-uploads/7dab745f-6089-437a-8401-d1218e9a2f52.png",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

const propertyStats = [
  { value: "8,295", label: "SQFT" },
  { value: "32,474", label: "LOT SIZE SF" },
  { value: "1,147", label: "GARAGE" },
];

const tools = [
  { icon: Calendar, label: "Schedule a showing" },
  { icon: Calculator, label: "Mortgage Calculator" },
  { icon: FileText, label: "Get Info" },
  { icon: Headphones, label: "Share Info" },
  { icon: BarChart, label: "Market Data" },
  { icon: GraduationCap, label: "School Data" },
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
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-light">1901 Elendy Lane</div>
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

      {/* Rest of the sections */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propertyImages.map((image, index) => (
              <motion.img
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                src={image}
                alt={`Property Image ${index + 1}`}
                className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            {propertyStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center text-white mb-12">TOOLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center text-white cursor-pointer hover:text-gray-300 transition-colors"
              >
                <tool.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">{tool.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center text-white mb-12">REPRESENTED BY</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-light text-white mb-2">{agent.name}</h3>
            <p className="text-gray-400 mb-4">{agent.title}</p>
            <p className="text-gray-400">{agent.phone}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-gray-700 text-white rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 bg-gray-700 text-white rounded"
            />
            <input
              type="tel"
              placeholder="Your phone"
              className="w-full p-3 bg-gray-700 text-white rounded"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 bg-gray-700 text-white rounded h-32"
            />
            <button
              type="submit"
              className="w-full bg-white text-gray-900 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;