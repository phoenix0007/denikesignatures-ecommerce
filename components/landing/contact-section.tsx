"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })
      setFormData({ name: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+234 907 744 3815",
      link: "https://wa.me/2349077443815",
      color: "bg-green-500",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@deni.kesignature",
      link: "https://instagram.com/deni.kesignature",
      color: "bg-pink-500",
    },
    {
      icon: MapPin,
      title: "Showroom",
      value: "Lagos, Nigeria",
      link: "https://maps.google.com",
      color: "bg-red-500",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Connect With Us</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to make a purchase? Reach out to us through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl p-4 md:p-6 shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${method.color} flex items-center justify-center mb-3 md:mb-4`}
                  >
                    <method.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">{method.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                    {method.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border/50">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Business Hours</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border/50">
                  <span className="font-medium text-sm md:text-base">Monday - Friday</span>
                  <span className="text-muted-foreground text-sm md:text-base">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/50">
                  <span className="font-medium text-sm md:text-base">Saturday</span>
                  <span className="text-muted-foreground text-sm md:text-base">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm md:text-base">Sunday</span>
                  <span className="text-muted-foreground text-sm md:text-base">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border/50">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4 md:h-5 md:w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

