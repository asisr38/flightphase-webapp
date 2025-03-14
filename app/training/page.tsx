import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Zap, Timer, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030456]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#030456] via-[#02085C] to-[#030456] opacity-90"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Athletes training"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Training Programs
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Elite coaching and training programs designed to develop explosive speed, strength, and stability.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-16 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Training Overview</h2>
                <p className="text-white/90">
                  FlightPhase offers specialized training programs for competitive athletes looking to elevate their
                  performance. Our methodology focuses on developing explosive power, speed, and stability through
                  proven techniques.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Personalized Approach", icon: <Users className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Science-Based Methods", icon: <Zap className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Efficient Training", icon: <Timer className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Measurable Results", icon: <CheckCircle className="h-5 w-5 text-[#00BFFF]" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      {item.icon}
                      <span className="text-white font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Training session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section id="one-on-one" className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Training Programs</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Choose the training option that best fits your goals and schedule.
              </p>
            </div>

            <div className="space-y-16">
              {/* 1:1 Coaching */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image src="/coachimage/aronlong1.png" alt="1:1 Coaching" fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-[#00BFFF]/20 px-4 py-1 rounded-full">
                    <span className="text-[#00BFFF] font-medium">Premium</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">First Class 1:1 Coaching</h3>
                  <p className="text-white/90">
                    Personalized coaching sessions tailored to your specific goals and needs. Work directly with Aron to
                    develop a customized training plan that addresses your unique strengths and areas for improvement.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Personalized assessment and goal setting",
                      "Custom training program development",
                      "Real-time technique correction and feedback",
                      "Progress tracking and program adjustments",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#00BFFF] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">$750</span>
                    <span className="text-white/80">per session</span>
                  </div>
                  <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">Book a Session</Button>
                </div>
              </div>

              {/* Group Training */}
              <div id="group" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden md:order-last">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Group Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-[#00BFFF]/20 px-4 py-1 rounded-full">
                    <span className="text-[#00BFFF] font-medium">Team</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Elite Group Training</h3>
                  <p className="text-white/90">
                    High-intensity group sessions focused on explosive power and speed development. Train alongside
                    other motivated athletes in a competitive environment that pushes everyone to excel.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Small group sizes (4-8 athletes)",
                      "Sport-specific training options",
                      "Competitive training environment",
                      "Team-building and motivation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#00BFFF] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">Contact</span>
                    <span className="text-white/80">for rates</span>
                  </div>
                  <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">Inquire Now</Button>
                </div>
              </div>

              {/* Two-a-Day Intensives */}
              <div id="intensives" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Two-a-Day Intensives"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-[#00BFFF]/20 px-4 py-1 rounded-full">
                    <span className="text-[#00BFFF] font-medium">Intensive</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">FlightPhase Two-a-Day Intensives</h3>
                  <p className="text-white/90">
                    Immersive training experience with morning and afternoon sessions. These intensive days are designed
                    for athletes looking to make significant progress in a condensed timeframe.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Morning and afternoon training sessions",
                      "Comprehensive skill development",
                      "Video analysis and technique refinement",
                      "Recovery protocols between sessions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#00BFFF] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">$1,250</span>
                    <span className="text-white/80">per day</span>
                  </div>
                  <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">
                    Schedule Intensive
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Availability */}
        <section className="w-full py-12 md:py-24 bg-[#010B60]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Travel Availability</h2>
              <p className="text-white/80 max-w-2xl mx-auto">FlightPhase can bring elite training to your location.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-[#02085C]">
                  <AccordionTrigger className="text-white hover:text-[#00BFFF] hover:no-underline">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-[#00BFFF]" />
                      <span>Regional Travel</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Available for training sessions within a 100-mile radius of our home base. Additional travel fees
                    may apply based on distance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-[#02085C]">
                  <AccordionTrigger className="text-white hover:text-[#00BFFF] hover:no-underline">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-[#00BFFF]" />
                      <span>National Travel</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Available for multi-day training camps and team sessions throughout the United States. Travel and
                    accommodation expenses will be added to the base rate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-[#02085C]">
                  <AccordionTrigger className="text-white hover:text-[#00BFFF] hover:no-underline">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-[#00BFFF]" />
                      <span>Booking Requirements</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Travel sessions require a minimum of 2 weeks advance booking. For team training, a minimum of 5
                    athletes is required. Contact us for detailed availability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Common questions about our training programs and methodology.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What should I wear to training sessions?",
                    answer:
                      "Comfortable athletic clothing and appropriate footwear for your sport. For track athletes, bring both training shoes and spikes if you have them.",
                  },
                  {
                    question: "How quickly will I see results?",
                    answer:
                      "Most athletes notice improvements in technique within the first few sessions. Measurable performance gains typically become evident after 4-6 weeks of consistent training.",
                  },
                  {
                    question: "Do you offer nutrition guidance?",
                    answer:
                      "While our primary focus is on physical training, we do provide basic nutrition recommendations to support athletic performance and recovery.",
                  },
                  {
                    question: "Can I book a single session or do I need to commit to multiple?",
                    answer:
                      "Single sessions are available, but we recommend a minimum of 4-6 sessions to see meaningful progress. Discounted packages are available for multiple session bookings.",
                  },
                  {
                    question: "What age groups do you work with?",
                    answer:
                      "We work with competitive athletes ages 14 and up. Training methods are adapted appropriately based on age, development stage, and experience level.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`} className="border-[#02085C]">
                    <AccordionTrigger className="text-white hover:text-[#00BFFF] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Elevate Your Performance?</h2>
              <p className="text-white/80">Take the first step toward unlocking your full athletic potential.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8">
                  Book a Session
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent hover:bg-white/10 text-white font-medium px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

