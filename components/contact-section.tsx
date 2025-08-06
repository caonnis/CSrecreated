import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, MapPin } from "lucide-react" // Ensure MapPin is imported

export function ContactSection() {
  const contactMethods = [
    {
      title: "WhatsApp",
      value: "+54 911 6117 9711",
      icon: MessageCircle,
    },
    {
      title: "Email",
      value: "info@certainty.solutions",
      icon: Mail,
    },
    {
      title: "Locations",
      value: "Buenos Aires, AR • CDMX, MX",
      icon: MapPin,
    },
  ]

  return (
    <section className="relative z-10 py-20 md:py-32 lg:py-40 text-center px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-text-light">
          Get in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-accent to-pink-accent">
            Touch
          </span>
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16">
          Ready to ensure your compliance? Let&apos;s discuss your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-card-bg border border-card-border rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden
                         before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-accent/10 before:to-pink-accent/10 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100 hover:border-purple-accent"
            >
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold text-text-light">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-text-muted text-lg">{method.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="bg-white text-dark-bg px-8 py-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg">
          <Mail className="mr-2 w-5 h-5" /> Contact Us
        </Button>
      </div>
    </section>
  )
}
