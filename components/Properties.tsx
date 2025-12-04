"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment Complex",
    location: "Wuse Zone 4, Abuja",
    type: "Residential",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,500 sqft",
    image: "/image/interior.jpg",
    price: "₦45,000,000",
    description: "Modern luxury apartment with premium finishes and stunning city views"
  },
  {
    id: 2,
    title: "Executive Office Space",
    location: "Maitama, Abuja",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 4,
    area: "5,000 sqft",
    image: "/image/interior.jpg",
    price: "₦120,000,000",
    description: "Prime commercial space ideal for corporate headquarters"
  },
  {
    id: 3,
    title: "Luxury Villa",
    location: "Asokoro, Abuja",
    type: "Residential",
    bedrooms: 5,
    bathrooms: 4,
    area: "8,000 sqft",
    image: "/image/interior.jpg",
    price: "₦180,000,000",
    description: "Spacious villa with private garden and premium amenities"
  },
  {
    id: 4,
    title: "Retail Complex",
    location: "Garki, Abuja",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 6,
    area: "10,000 sqft",
    image: "/image/interior.jpg",
    price: "₦250,000,000",
    description: "Prime retail location with high foot traffic"
  },
  {
    id: 5,
    title: "Penthouse Suite",
    location: "Central Business District, Abuja",
    type: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,500 sqft",
    image: "/image/interior.jpg",
    price: "₦95,000,000",
    description: "Exclusive penthouse with panoramic city views"
  },
  {
    id: 6,
    title: "Warehouse Facility",
    location: "Airport Road, Abuja",
    type: "Industrial",
    bedrooms: 0,
    bathrooms: 2,
    area: "25,000 sqft",
    image: "/image/interior.jpg",
    price: "₦350,000,000",
    description: "Large warehouse facility with loading docks and storage"
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium real estate investments across Abuja's most desirable locations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-black border border-gold/20 rounded-xl overflow-hidden hover:border-gold/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-black text-sm font-semibold rounded-full">
                    {property.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{property.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-gold" />
                      <span>{property.bedrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-gold" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4 text-gold" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <div>
                    <p className="text-2xl font-bold text-gold">{property.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-lg hover:bg-gold hover:text-black transition-all text-sm font-semibold"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

