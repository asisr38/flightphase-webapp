import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Download, Play, Shield, Smartphone, Video } from "lucide-react"

export default function OnlineProgramPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030456]">
      <main className="flex-1">
        {/* Hero Section */}


        {/* Program Overview */}
        <section className="w-full py-12 md:py-24 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-[#00BFFF]/20 px-4 py-1 rounded-full">
                  <span className="text-[#00BFFF] font-medium">Featured Program</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your Athletic Performance</h2>
                <p className="text-white/90">
                  The 59-Minute Training Program is a comprehensive system designed to develop explosive speed,
                  strength, and stability for competitive athletes. Based on the same principles used with elite
                  athletes, this program delivers results in an efficient, effective format.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-[#00BFFF]">$197</span>
                  <span className="text-xl text-white/60 line-through">$325</span>
                  <span className="bg-[#00BFFF] text-white text-sm px-2 py-1 rounded">39% OFF</span>
                </div>
                <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8">
                  Buy Now
                </Button>
                <div className="flex items-center text-white/80 text-sm">
                  <Shield className="h-4 w-4 mr-2 text-[#00BFFF]" />
                  <span>30-day money-back guarantee if you're not satisfied</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-video bg-[#010B60] relative">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Program preview"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#00BFFF]/90 flex items-center justify-center cursor-pointer hover:bg-[#00BFFF] transition-colors">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Program Highlights</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                A comprehensive training system designed for maximum results in minimum time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Complete System",
                  description:
                    "Six essential training components that work together to develop explosive athletic performance.",
                  icon: <CheckCircle className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
                {
                  title: "Time Efficient",
                  description:
                    "Complete the entire program in just 59 minutes, making it easy to fit into your schedule.",
                  icon: <Clock className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
                {
                  title: "Video Instruction",
                  description: "Detailed video demonstrations of each exercise with expert coaching cues.",
                  icon: <Video className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
                {
                  title: "Mobile Friendly",
                  description:
                    "Access your program anywhere, anytime on any device with our mobile-optimized platform.",
                  icon: <Smartphone className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
                {
                  title: "Downloadable Resources",
                  description: "PDF workout sheets and progress trackers to monitor your improvement.",
                  icon: <Download className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
                {
                  title: "Lifetime Access",
                  description: "Purchase once and get unlimited access to all program materials and future updates.",
                  icon: <Shield className="h-10 w-10 mb-4 text-[#00BFFF]" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 rounded-xl bg-[#02085C] hover:bg-[#010B60] transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/10"
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Lessons */}
        <section className="w-full py-12 md:py-24 bg-[#010B60]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Program Lessons</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Six essential components that work together to develop explosive athletic performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Hip Opening Routine",
                  description: "Unlock hip mobility to improve speed and prevent injuries.",
                  duration: "8 minutes",
                },
                {
                  number: "02",
                  title: "Dynamic Warm-Up",
                  description: "Prepare your body for optimal performance with targeted activation.",
                  duration: "10 minutes",
                },
                {
                  number: "03",
                  title: "Single Leg Power Series",
                  description: "Develop explosive power and balance with unilateral training.",
                  duration: "12 minutes",
                },
                {
                  number: "04",
                  title: "Strength Through Lunges",
                  description: "Build functional strength that translates directly to athletic movement.",
                  duration: "12 minutes",
                },
                {
                  number: "05",
                  title: "Core Stability & Carry Routine",
                  description: "Strengthen your foundation for improved power transfer and injury prevention.",
                  duration: "10 minutes",
                },
                {
                  number: "06",
                  title: "Recovery & Cool Down",
                  description: "Optimize recovery to maximize training adaptations and prevent soreness.",
                  duration: "7 minutes",
                },
              ].map((lesson, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors border border-[#010B60] group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#00BFFF]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00BFFF] font-bold">{lesson.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                      <p className="text-white/80 mb-3">{lesson.description}</p>
                      <div className="flex items-center text-[#00BFFF]">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">What You'll Get</h2>
                <ul className="space-y-4">
                  {[
                    "Six detailed video lessons with expert instruction",
                    "Downloadable PDF workout sheets for each component",
                    "Progress tracking tools to monitor your improvement",
                    "Mobile-friendly platform for training anywhere",
                    "Lifetime access to all program materials",
                    "Future updates and additional content at no extra cost",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00BFFF] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-[#00BFFF]">$197</span>
                    <span className="text-xl text-white/60 line-through">$325</span>
                  </div>
                  <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8 mt-4">
                    Get Instant Access
                  </Button>
                  <div className="flex items-center text-white/80 text-sm mt-2">
                    <Shield className="h-4 w-4 mr-2 text-[#00BFFF]" />
                    <span>30-day money-back guarantee if you're not satisfied</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "/placeholder.svg?height=300&width=300",
                  "/placeholder.svg?height=300&width=300",
                  "/placeholder.svg?height=300&width=300",
                  "/placeholder.svg?height=300&width=300",
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Program preview ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Athlete Results</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                See what athletes are saying about the 59-Minute Training Program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "I've seen a 15% improvement in my sprint times after just 6 weeks on this program. The single leg power series was a game-changer for me.",
                  name: "Michael T.",
                  title: "College Sprinter",
                },
                {
                  quote:
                    "As a basketball player, I needed to improve my explosiveness. This program delivered exactly what I needed in a time-efficient format.",
                  name: "Sarah K.",
                  title: "D1 Basketball Player",
                },
                {
                  quote:
                    "The hip mobility work alone was worth the price. I've never felt more fluid in my movements, and my recovery time has improved dramatically.",
                  name: "Jason M.",
                  title: "Track Athlete",
                },
              ].map((testimonial, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#030456] border border-[#010B60]">
                  <div className="flex flex-col h-full">
                    <div className="text-[#00BFFF] text-4xl font-serif mb-4">"</div>
                    <p className="text-white/90 italic flex-grow">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-white/70 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Transform Your Athletic Performance?
              </h2>
              <p className="text-white/80">
                Join hundreds of athletes who have already elevated their game with the 59-Minute Training Program.
              </p>
              <div className="flex flex-col items-center mt-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-[#00BFFF]">$197</span>
                  <span className="text-xl text-white/60 line-through">$325</span>
                  <span className="bg-[#00BFFF] text-white text-sm px-2 py-1 rounded">39% OFF</span>
                </div>
                <Button
                  size="lg"
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8 w-full sm:w-auto"
                >
                  Get Instant Access
                </Button>
                <div className="flex items-center text-white/80 text-sm mt-2">
                  <Shield className="h-4 w-4 mr-2 text-[#00BFFF]" />
                  <span>30-day money-back guarantee if you're not satisfied</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

