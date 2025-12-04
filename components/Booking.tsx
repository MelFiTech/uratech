"use client";

import { motion } from "framer-motion";
import { Send, Calendar, MapPin, Users, FileText, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    pickupDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking request:", formData);
    alert("Booking request submitted! We'll contact you shortly.");
  };

  const serviceTypes = [
    "Vehicle Rental",
    "Logistics & Haulage",
    "Airport Transfer",
    "Corporate Transfer",
  ];

  return (
    <section id="booking" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
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
            <span className="text-white">Request a </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Booking / Quote
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within a few hours
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-black border border-gold/20 rounded-xl h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold" />
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="serviceType" className="block text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold" />
                  Service type
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  required
                >
                  <option value="">Select service type</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="pickupDate" className="block text-white mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  Pick-up date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="passengers" className="block text-white mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  Number of passengers
                </label>
                <input
                  type="number"
                  id="passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  min="1"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="pickupLocation" className="block text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Pick-up location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter pick-up address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dropoffLocation" className="block text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Drop-off location
                </label>
                <input
                  type="text"
                  id="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter drop-off address"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="requests" className="block text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold" />
                Additional requests or details
              </label>
              <textarea
                id="requests"
                value={formData.requests}
                onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Any special requirements or additional information..."
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              Send request
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-black border border-gold/30 rounded-xl p-8 shadow-lg shadow-gold/20 h-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-white">Contact & </span>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Office
              </span>
            </h3>
            
            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Contact person</p>
                  <p className="text-white font-semibold text-lg">Mr. Daniel Sule</p>
                  <a href="tel:08036390205" className="text-gold hover:text-gold-light transition-colors">
                    08036390205
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:uratechy@gmail.com" className="text-white hover:text-gold transition-colors">
                    uratechy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Office</p>
                  <p className="text-white mb-3">Abuja Continental Hotel, Wuse Zone 4 (PCHA)</p>
                  <p className="text-sm text-gray-400 mb-1">Depot</p>
                  <p className="text-white">SPV Estate, Kilometer 20 Airport Road, Abuja</p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 p-4 bg-gold/10 border border-gold/20 rounded-lg"
            >
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                We respond to booking requests within a few hours during business hours. 
                For urgent bookings call the number above.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

