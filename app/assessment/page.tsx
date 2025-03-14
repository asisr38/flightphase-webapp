import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, LineChart, ListChecks, Target } from "lucide-react"

export default function AssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030456]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#030456] via-[#02085C] to-[#030456] opacity-90"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Athlete assessment"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Explosive Athlete Assessment
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Discover your athletic strengths and areas for improvement with our comprehensive assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Introduction */}
        <section className="w-full py-12 md:py-16 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Unlock Your Athletic Potential</h2>
                <p className="text-white/90">
                  The Explosive Athlete Assessment is designed to identify your current athletic profile, pinpoint areas
                  for improvement, and provide personalized recommendations to elevate your performance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Comprehensive Analysis", icon: <ListChecks className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Personalized Insights", icon: <Target className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Action Plan", icon: <ArrowRight className="h-5 w-5 text-[#00BFFF]" /> },
                    { label: "Performance Metrics", icon: <LineChart className="h-5 w-5 text-[#00BFFF]" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      {item.icon}
                      <span className="text-white font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">
                  Start Assessment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Athlete assessment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Embed */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Take the Assessment</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Complete the assessment below to receive your personalized athletic profile and recommendations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-[4/3] w-full relative">
                  {/* This would be replaced with the actual ScoreApp embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-bold text-[#030456] mb-2">ScoreApp Assessment</h3>
                      <p className="text-[#030456]/80 mb-4">
                        This is where the ScoreApp assessment would be embedded.
                        <br />
                        (https://topo-mge3qshy.scoreapp.com/)
                      </p>
                      <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium">
                        Start Assessment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="w-full py-12 md:py-24 bg-[#010B60]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What to Expect</h2>
              <p className="text-white/80 max-w-2xl mx-auto">Here's what happens after you complete the assessment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Immediate Results",
                  description:
                    "Receive your athletic profile and initial insights as soon as you complete the assessment.",
                  step: "1",
                },
                {
                  title: "Personalized Recommendations",
                  description:
                    "Get tailored training suggestions based on your specific strengths and areas for improvement.",
                  step: "2",
                },
                {
                  title: "Next Steps",
                  description: "Explore training options that align with your goals and athletic profile.",
                  step: "3",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#02085C] hover:bg-[#030456] transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00BFFF]/20 flex items-center justify-center mb-4">
                      <span className="text-[#00BFFF] font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Assessment Success Stories</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Hear from athletes who have benefited from the Explosive Athlete Assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  quote:
                    "The assessment pinpointed exactly what was holding me back. After following the recommendations, I saw a 20% improvement in my sprint times within 8 weeks.",
                  name: "David R.",
                  title: "College Football Player",
                },
                {
                  quote:
                    "I was surprised by how accurate the assessment was. It identified imbalances I didn't even know I had, and the personalized plan helped me address them effectively.",
                  name: "Emma L.",
                  title: "Track & Field Athlete",
                },
              ].map((testimonial, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#02085C] border border-[#010B60]">
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

        {/* FAQ */}
        <section className="w-full py-12 md:py-24 bg-[#02085C]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Assessment FAQ</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Common questions about the Explosive Athlete Assessment.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How long does the assessment take to complete?",
                  answer:
                    "The assessment typically takes 10-15 minutes to complete. It's designed to be thorough yet efficient.",
                },
                {
                  question: "Is the assessment free?",
                  answer:
                    "Yes, the Explosive Athlete Assessment is completely free. We offer it as a valuable tool to help athletes identify their strengths and areas for improvement.",
                },
                {
                  question: "What kind of information will I need to provide?",
                  answer:
                    "The assessment will ask about your sport, current training regimen, performance goals, and specific athletic challenges you're facing.",
                },
                {
                  question: "How accurate are the results?",
                  answer:
                    "The assessment has been developed based on years of experience working with elite athletes. While no assessment is perfect, athletes consistently report that the insights are highly relevant and actionable.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#030456]">
                  <h3 className="text-xl font-bold text-white mb-2">{item.question}</h3>
                  <p className="text-white/80">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#030456]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Discover Your Athletic Potential?</h2>
              <p className="text-white/80">
                Take the free assessment today and get personalized insights to elevate your performance.
              </p>
              <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white font-medium px-8">
                Start Assessment Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

