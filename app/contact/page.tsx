import { Phone, Instagram, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="container px-4 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or reach out to us directly through any of our
            contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Call or WhatsApp</h3>
                <a
                  href="https://wa.me/2349077443815"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +234 907 744 3815
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Follow Us</h3>
                <a
                  href="https://instagram.com/deni.kesignature"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @deni.kesignature
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} required />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <div className="prose max-w-none">
              <p>
                At Denikesignatures, we value your feedback and inquiries. Our team is dedicated to providing
                exceptional customer service and addressing any questions you may have about our products.
              </p>
              <p>
                Whether you're interested in placing a custom order, have questions about shipping, or simply want to
                learn more about our craftsmanship, we're here to help.
              </p>
              <p>
                For the fastest response, reach out to us via WhatsApp or follow us on Instagram to stay updated with
                our latest collections and promotions.
              </p>

              <div className="mt-8 not-prose">
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/2349077443815"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <span>Chat with us on WhatsApp</span>
                  </a>

                  <a
                    href="https://instagram.com/deni.kesignature"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <span>Follow us on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

