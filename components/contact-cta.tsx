import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactCTA() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Connect With Us</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            We're always here to help with any questions about our products or services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden border-0 shadow-md transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">WhatsApp</h3>
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

          <Card className="overflow-hidden border-0 shadow-md transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Instagram</h3>
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

          <Card className="overflow-hidden border-0 shadow-md transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Email</h3>
                <a
                  href="mailto:info@denikesignatures.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@denikesignatures.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-md transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Business Hours: Monday - Saturday, 9am - 6pm</p>
        </div>
      </div>
    </section>
  )
}

