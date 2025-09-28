"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  Users,
  FileText,
  Shield,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  Home,
  Briefcase,
  Heart,
  Gavel,
} from "lucide-react"
import { useEffect, useState } from "react"

function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true)
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [end, duration, delay])

  return { count, hasStarted }
}

export default function HomePage() {
  const yearsCount = useCountUp(25, 2500, 200)
  const casesCount = useCountUp(500, 3000, 400)
  const satisfactionCount = useCountUp(100, 2000, 600)
  const clientsCount = useCountUp(1200, 2800, 800)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20 px-4 fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/professional-law-office-interior-with-books-and-sc.jpg"
          alt="Professional law office"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <div className="mb-8">
            <Scale className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">Kheri Law Firm</h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-balance">Attorneys at Law</p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              Providing exceptional legal services with integrity, professionalism, and unwavering commitment to our
              clients for over 25 years.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary hover:bg-white/90 transition-colors animate-bounce-subtle"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">
              About Kheri Law Firm
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="/professional-lawyer-in-suit-standing-in-modern-law.jpg"
                alt="Professional lawyer"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover-lift mb-8"
              />
              <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">25+ Years of Legal Excellence</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                For over two and a half decades, Kheri Law Firm has been a trusted partner to individuals and
                businesses, providing comprehensive legal solutions across multiple practice areas. Our commitment to
                excellence, integrity, and client-focused service has established us as a leading law firm in the
                region.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                We specialize in Corporate Law, Intellectual Property, and Litigation, bringing deep expertise and
                strategic thinking to every case. Our approach combines traditional legal principles with innovative
                solutions to achieve the best possible outcomes for our clients.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Kheri Law Firm, we believe that every client deserves personalized attention, clear communication,
                and unwavering advocacy. Our reputation is built on credibility, integrity, and a proven track record of
                success.
              </p>
            </div>

            <div className="fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className={`counter-animation ${yearsCount.hasStarted ? "animate-counter-glow" : ""}`}>
                    <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300">
                      {yearsCount.count}+
                    </div>
                    <div className="text-sm text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className={`counter-animation ${casesCount.hasStarted ? "animate-counter-glow" : ""}`}>
                    <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300">
                      {casesCount.count}+
                    </div>
                    <div className="text-sm text-muted-foreground">Cases Won</div>
                  </div>
                  <div className={`counter-animation ${satisfactionCount.hasStarted ? "animate-counter-glow" : ""}`}>
                    <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300">
                      {satisfactionCount.count}%
                    </div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className={`counter-animation ${clientsCount.hasStarted ? "animate-counter-glow" : ""}`}>
                    <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300">
                      {clientsCount.count}+
                    </div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">
              Our Practice Areas
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide comprehensive legal services across multiple practice areas, delivering expert guidance and
              strategic solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/corporate-boardroom-meeting-with-business-people.jpg"
                  alt="Corporate Law"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Corporate Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Comprehensive corporate legal services including business formation, mergers & acquisitions,
                  compliance, and corporate governance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/intellectual-property-patents-and-trademarks-docum.jpg"
                  alt="Intellectual Property"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Protecting your innovations through patent applications, trademark registration, copyright protection,
                  and IP litigation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/courtroom-with-judge-bench-and-legal-proceedings.jpg"
                  alt="Litigation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Litigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Experienced trial attorneys representing clients in civil litigation, commercial disputes, and
                  appellate matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/legal-contracts-and-documents-being-signed.jpg"
                  alt="Contract Drafting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Contract Drafting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Expert contract drafting, review, and negotiation services to protect your interests and ensure legal
                  compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/real-estate-property-documents-and-house-keys.jpg"
                  alt="Real Estate Law"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Real Estate Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Complete real estate legal services including property transactions, title disputes, zoning issues,
                  and commercial real estate matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/employment-law-workplace-meeting-discussion.jpg"
                  alt="Employment Law"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Employment Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Comprehensive employment law services covering workplace disputes, discrimination claims, contract
                  negotiations, and compliance matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/family-law-mediation-and-legal-consultation.jpg"
                  alt="Family Law"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Family Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Sensitive family law representation including divorce proceedings, child custody, adoption, and
                  domestic relations matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in practice-card">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/criminal-defense-courtroom-and-legal-advocacy.jpg"
                  alt="Criminal Defense"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <Gavel className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-serif">Criminal Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Aggressive criminal defense representation for all types of criminal charges, from misdemeanors to
                  serious felonies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">
              Why Choose Kheri Law Firm
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <Scale className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Professionalism</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining the highest standards of legal practice with ethical integrity and professional excellence
                in every case.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Personalized Attention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client receives individualized attention and customized legal strategies tailored to their unique
                circumstances and goals.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Client Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building lasting relationships based on trust, transparency, and consistent delivery of exceptional
                legal services.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                A track record of successful outcomes and satisfied clients across all our practice areas over 25+
                years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our satisfied clients have to say about our legal services
              and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift fade-in testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/professional-business-woman-headshot.png"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CEO, Tech Innovations Inc.</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Kheri Law Firm handled our complex corporate merger with exceptional professionalism. Their attention
                  to detail and strategic guidance was invaluable throughout the entire process."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/professional-businessman-headshot.png"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Founder, Creative Solutions LLC</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Outstanding intellectual property services! They successfully protected our trademark and patents.
                  The team's expertise and dedication exceeded our expectations."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift fade-in testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="/professional-woman-lawyer-headshot.png"
                    alt="Emily Rodriguez"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Director, Global Enterprises</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Kheri Law Firm represented us in a challenging litigation case. Their strategic approach and
                  courtroom expertise led to a favorable outcome. Highly recommended!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-serif font-semibold mb-8 text-primary">Ready to Get Started?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-muted-foreground">info@kherilawfirm.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <p className="text-muted-foreground text-center">
                  123 Legal Plaza, Suite 456
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="w-8 h-8" />
                <span className="text-xl font-serif font-bold">Kheri Law Firm</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Providing exceptional legal services with integrity and professionalism for over 25 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-white/80">
                <li>Corporate Law</li>
                <li>Intellectual Property</li>
                <li>Litigation</li>
                <li>Contract Drafting</li>
                <li>Real Estate Law</li>
                <li>Employment Law</li>
                <li>Family Law</li>
                <li>Criminal Defense</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <p>123 Legal Plaza, Suite 456</p>
                <p>City, State 12345</p>
                <p>+1 (555) 123-4567</p>
                <p>info@kherilawfirm.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/80 text-sm">© 2025 Kheri Law Firm. All rights reserved.</p>
              <p className="text-white/80 text-sm text-center">
                <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute
                legal advice. Consult with a qualified attorney for legal guidance specific to your situation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
