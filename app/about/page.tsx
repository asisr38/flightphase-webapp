import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Briefcase, GraduationCap, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030456]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#030456] via-[#02085C] to-[#030456] opacity-90"></div>
            <Image
              src="/coachimage/aronlong2.png"
              alt="Aron Long coaching"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                About Aron Long
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Division I track athlete, professional coach, and founder of FlightPhase
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="w-full py-12 md:py-16 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-xl md:text-2xl font-light text-white/90 italic">
                "To transform athletes through elite training methodologies that develop explosive speed, strength, and
                skill training, enabling them to reach their highest competitive potential."
              </p>
            </div>
          </div>
        </section>

        {/* Athletic Journey */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Athletic Journey</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                From Division I competition to professional coaching, Aron's journey has been defined by excellence.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#010B60]"></div>

              <div className="grid grid-cols-1 gap-12 relative z-10">
                {[
                  {
                    year: "2010-2014",
                    title: "Division I Track Athlete",
                    description:
                      "Competed at the highest collegiate level, developing deep insights into athletic performance.",
                    icon: <Award className="h-8 w-8 text-[#00BFFF]" />,
                  },
                  {
                    year: "2014-2016",
                    title: "Regional Championships",
                    description:
                      "Achieved success in regional competitions, refining techniques and training methodologies.",
                    icon: <Target className="h-8 w-8 text-[#00BFFF]" />,
                  },
                  {
                    year: "2016-2020",
                    title: "Fortune 300/5 Experience",
                    description: "Applied discipline and performance mindset to excel in corporate environments.",
                    icon: <Briefcase className="h-8 w-8 text-[#00BFFF]" />,
                  },
                  {
                    year: "2020-Present",
                    title: "FlightPhase Founder",
                    description: "Established FlightPhase to share elite training methods with competitive athletes.",
                    icon: <Users className="h-8 w-8 text-[#00BFFF]" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-[#010B60] flex items-center justify-center z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div className={`md:w-1/2 p-6 rounded-xl bg-[#02085C] hover:bg-[#010B60] transition-colors`}>
                      <span className="text-[#00BFFF] font-medium">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                      <p className="text-white/80 mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Professional Background */}
        <section className="w-full py-12 md:py-24 bg-[#010B60]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Academic & Professional Background</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                A foundation of education and experience that informs FlightPhase's training methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">MBA Graduate</h3>
                    <p className="text-white/80 mt-2">
                      Advanced business education providing strategic insights for athletic development programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">VMI Degree</h3>
                    <p className="text-white/80 mt-2">
                      Education from the Virginia Military Institute, instilling discipline and leadership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors">
                <div className="flex items-start space-x-4">
                  <Briefcase className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Fortune 300/5 Experience</h3>
                    <p className="text-white/80 mt-2">
                      Professional experience in high-performance corporate environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-[#00BFFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Continuous Education</h3>
                    <p className="text-white/80 mt-2">
                      Ongoing study of the latest athletic performance research and methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Training in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Training Philosophy</h2>
                <p className="text-white/90">
                  FlightPhase's methodology is built on a foundation of scientific principles and practical experience.
                  We focus on developing three key pillars of athletic performance:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00BFFF]/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-[#00BFFF] font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Explosive Speed</h3>
                      <p className="text-white/80">Techniques to maximize acceleration and top-end velocity.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00BFFF]/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-[#00BFFF] font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Functional Strength</h3>
                      <p className="text-white/80">Building power that translates directly to athletic performance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00BFFF]/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-[#00BFFF] font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Core Stability</h3>
                      <p className="text-white/80">Developing the foundation that supports all athletic movement.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="w-full py-12 md:py-24 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Athlete Success Stories</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Hear from athletes who have transformed their performance with FlightPhase training.
              </p>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden bg-[#010B60] flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">Video Testimonials Coming Soon</h3>
                <p className="text-white/80">
                  We're currently collecting success stories from our athletes. Check back soon to hear their
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Work with Aron?</h2>
              <p className="text-white/80">
                Take the first step toward transforming your athletic performance with expert coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8">
                  Explore Training Programs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent hover:bg-white/10 text-white font-medium px-8"
                >
                  Contact Aron
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

