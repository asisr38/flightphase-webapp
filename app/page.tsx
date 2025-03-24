"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Timer,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Play,
  Shield,
  Zap,
  Clock,
  Download,
  Smartphone,
  Video
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import VideoPlayer from "./components/VideoPlayer";
import { InquiryModal } from "@/components/InquiryModal";
import { useState } from "react";

export default function HomePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("General");

  const handleInquireClick = (programType: string) => {
    setSelectedProgram(programType);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-100 md:scale-110 blur-[2px]"
              style={{ opacity: "0.5" }}
            >
              <source src="/flightphase-promo.webm" type="video/webm" />
              <source src="/flightphase-promo.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Background gradients and effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 z-20"></div>

          <div className="container relative z-30 px-4 mx-auto">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/20 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-blue-500"></span>
                  </span>
                  Elite Athletic Training
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
                  Elevate Your Athletic{" "}
                  <span className="gradient-text-accent animate-gradient">
                    Performance
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-100 max-w-2xl leading-relaxed">
                  Unlock Your Full Potential with Tailored Training and Proven
                  Methods
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-lg text-neutral-200 max-w-3xl">
                  At Flight Phase, we transform athletes into explosive
                  performers. Whether you're looking to enhance your speed,
                  strength, or overall athleticism, Aron Long's proven coaching
                  methods are designed to push you beyond your limits.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <a href="#online-program">
                    <Button
                      size="lg"
                      className="gradient-button text-white rounded-full h-12 md:h-14 px-6 md:px-8 text-base md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                    >
                      Get Transformation Program
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </a>
                  <a href="#assessment">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full h-12 md:h-14 px-6 md:px-8 text-base md:text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Take Free Assessment
                    </Button>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pt-6 md:pt-8 max-w-3xl w-full">
                  {[
                    { stat: "Division I", label: "Conference Champion" },
                    { stat: "Full Ride Division I", label: "Scholarship Athlete" },
                    { stat: "Top 10 Fastest Sprinter", label: "in VMI History" }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-sm bg-black/30 md:bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-4 border border-white/10"
                    >
                      <div className="gradient-text-accent text-sm sm:text-base md:text-base font-medium md:font-semibold">
                        {item.stat}
                      </div>
                      <div className="text-xs sm:text-sm md:text-sm text-neutral-200">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-white/60 z-30">
            <span className="text-xs sm:text-sm md:text-sm">
              Scroll to explore
            </span>
            <div className="w-[1px] sm:w-[2px] h-4 sm:h-6 md:h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 bg-neutral-900 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                About Aron Long
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white relative">
                Meet{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 relative">
                  Aron Long
                  <span className="absolute inset-0 blur-sm opacity-30 bg-gradient-to-r from-blue-400 to-purple-500 -z-10"></span>
                </span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Division I track athlete, professional coach, and founder of
                FlightPhase
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/coachImage/aronlong3.png"
                  alt="Aron Long"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Mission Statement
                  </h3>
                  <p className="text-xl text-neutral-300 italic">
                    "At Flight Phase, we empower athletes to reach their highest
                    potential through scientifically backed training methods and
                    a commitment to excellence, focusing on explosive speed,
                    strength, and skill training."
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Professional Background
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-800/80 transition-colors">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Elite Track Experience
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            Over a decade of elite track and field expertise
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-800/80 transition-colors">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0">
                          <Target className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Championship Athlete
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            Division I Conference Champion
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-800/80 transition-colors">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Professional Leadership
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            9 years at Fortune 5 & Fortune 300 companies
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-800 rounded-xl p-4 hover:bg-neutral-800/80 transition-colors">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4 flex-shrink-0">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Higher Education
                          </h4>
                          <p className="text-neutral-400 text-sm">
                            University of Louisville MBA '19 & Virginia Military Institute B.A '16
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Training Philosophy
                  </h3>
                  <p className="text-neutral-300">
                    FlightPhase's methodology is built on a foundation of
                    scientific principles and practical experience, focusing on
                    developing explosive speed, functional strength, and core
                    stability.
                  </p>
                  <Button className="gradient-button text-white rounded-full">
                    Learn More About Aron
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Program Section */}
        <section
          id="online-program"
          className="py-24 bg-black relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-900 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Featured Online Program
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Athletic Speed & Power{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Transformation
                </span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Master explosive techniques to reach your full potential
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Transform Your Athletic Ability
                  </h3>
                  <p className="text-neutral-300">
                    This comprehensive online program delivers elite training
                    methods directly to you, no matter where you are. Designed
                    by Aron Long, this program distills years of professional
                    training expertise into focused, results-driven workouts.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Six detailed training modules with HD video demonstrations",
                      "Progressive workout structures for continued improvement",
                      "Mobility routines to enhance movement patterns and prevent injury",
                      "Detailed breakdown of explosive movement mechanics",
                      "Access anytime, anywhere, on any device"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-neutral-300">
                        <CheckCircle className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        $197
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl text-neutral-500 line-through">
                          $325
                        </span>
                        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                          39% OFF
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://buy.stripe.com/test_9AQaG78Vm3YC8Mg001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="gradient-button text-white rounded-full h-14 px-8 text-lg"
                      >
                        Buy Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="flex items-center text-neutral-400 text-sm">
                  <Shield className="h-4 w-4 mr-2 text-blue-400" />
                  <span>Lifetime access with no recurring fees</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <VideoPlayer />
              </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Program Lessons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    number: "01",
                    title: "Hip Opening Routine",
                    description:
                      "Unleash your lower body potential with targeted exercises designed to improve flexibility and strength, setting the foundation for explosive movements.",
                    duration: "8 minutes"
                  },
                  {
                    number: "02",
                    title: "Dynamic Warm-Up",
                    description:
                      "Prepare your body for peak performance with a series of dynamic stretches and drills that activate key muscle groups and reduce injury risk.",
                    duration: "10 minutes"
                  },
                  {
                    number: "03",
                    title: "Single Leg Power Series",
                    description:
                      "Enhance your balance, power, and control with exercises focused on unilateral strength, critical for sprinting and quick directional changes.",
                    duration: "12 minutes"
                  },
                  {
                    number: "04",
                    title: "Strength Through Lunges",
                    description:
                      "Build lower body strength and endurance with advanced lunge variations that target multiple muscle groups for comprehensive development.",
                    duration: "12 minutes"
                  },
                  {
                    number: "05",
                    title: "Core Stability & Carry Routine",
                    description:
                      "Fortify your core and improve overall stability with challenging carries and core exercises designed to translate directly to on-field performance.",
                    duration: "10 minutes"
                  },
                  {
                    number: "06",
                    title: "Recovery & Cool Down",
                    description:
                      "Learn the essential recovery techniques to ensure your muscles repair and grow, preparing you for the next challenge.",
                    duration: "7 minutes"
                  }
                ].map((lesson, i) => (
                  <div
                    key={i}
                    className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300 hover:translate-y-[-5px] border border-neutral-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-bold">
                          {lesson.number}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {lesson.title}
                        </h4>
                        <p className="text-neutral-400 text-sm mb-3">
                          {lesson.description}
                        </p>
                        <div className="flex items-center text-blue-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "HD Video Instruction",
                    description:
                      "Crystal clear demonstrations for all exercises with detailed technique cues.",
                    icon: <Video className="h-5 w-5" />
                  },
                  {
                    title: "Lifetime Access",
                    description:
                      "Purchase once and train indefinitely. No monthly subscriptions or hidden fees.",
                    icon: <Download className="h-5 w-5" />
                  },
                  {
                    title: "Mobile & Desktop Friendly",
                    description:
                      "Train anywhere with seamless access across all your devices.",
                    icon: <Smartphone className="h-5 w-5" />
                  },
                  {
                    title: "Immediate Availability",
                    description:
                      "Start your training journey instantly after purchase with immediate access.",
                    icon: <Zap className="h-5 w-5" />
                  }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section
          id="assessment"
          className="py-24 bg-neutral-900 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Free Assessment
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Discover Your Athletic{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Potential
                </span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Take our comprehensive assessment to identify strengths and
                areas for improvement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Why Take The Assessment?
                </h3>
                <p className="text-neutral-300">
                  This comprehensive assessment helps identify your athletic
                  profile, strengths, and areas for improvement. In just 5
                  minutes, you'll receive valuable insights to guide your
                  training journey.
                </p>

                <ul className="space-y-3">
                  {[
                    "Get a customized athletic profile",
                    "Identify muscular imbalances and weaknesses",
                    "Receive tailored training recommendations",
                    "Establish a personalized baseline",
                    "Set realistic performance goals"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-neutral-300">
                      <CheckCircle className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href="https://form.typeform.com/to/GJzwHsmP"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      className="gradient-button text-white rounded-full h-14 px-8 text-lg"
                    >
                      Start Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Assessment{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      Questions
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Do you regularly incorporate plyometric exercises in your workouts?",
                      "Are you experiencing any ongoing muscle imbalances or weaknesses?",
                      "Have you suffered any recent sports-related injuries?",
                      "Are you currently engaging in regular sprint training?",
                      "Do you incorporate explosive movements in your workouts?"
                    ].map((question, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-neutral-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        {question}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-neutral-700">
                    <p className="text-neutral-400 text-sm">
                      Complete the assessment to receive your personalized
                      athletic profile and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Immediate Results",
                    description:
                      "Receive your athletic profile and initial insights as soon as you complete the assessment.",
                    step: "1"
                  },
                  {
                    title: "Personalized Recommendations",
                    description:
                      "Get tailored training suggestions based on your specific strengths and areas for improvement.",
                    step: "2"
                  },
                  {
                    title: "Next Steps",
                    description:
                      "Explore training options that align with your goals and athletic profile.",
                    step: "3"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-800/80 transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                        <span className="text-blue-400 font-bold text-xl">
                          {item.step}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section
          id="training"
          className="py-24 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
          <div className="container px-4 mx-auto relative">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Work With Me
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Training{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Programs
                </span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                At Flight Phase, we offer a range of training programs tailored
                to meet the unique needs of every athlete
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "1-on-1 Elite Coaching",
                  price: "Contact",
                  period: "for details",
                  description:
                    "Personalized training tailored to your specific goals and needs. This comprehensive approach addresses all aspects of your athletic development, from biomechanics to injury prevention and recovery strategies.",
                  features: [
                    "Custom training programs",
                    "Detailed technique analysis",
                    "Progress monitoring",
                    "Travel available for U.S. and International clients"
                  ],
                  icon: <Users className="h-6 w-6" />
                },
                {
                  title: "Elite Group Training",
                  price: "Contact",
                  period: "for details",
                  description:
                    "Train alongside other driven athletes in a competitive yet supportive environment. This program emphasizes teamwork, pushing you to achieve more through shared goals and mutual motivation.",
                  features: [
                    "Small group sizes (4-8 athletes)",
                    "Sport-specific training options",
                    "Competitive training environment",
                    "Travel available for U.S. and International clients"
                  ],
                  icon: <Target className="h-6 w-6" />
                },
                {
                  title: "Flight Phase Two-a-Day Intensives",
                  price: "Contact",
                  period: "for details",
                  description:
                    "Double your progress with our exclusive two-a-day training sessions. Morning and evening sessions designed to maximize your gains in a single day, focusing on speed, power, and recovery techniques.",
                  features: [
                    "Morning and afternoon training sessions",
                    "Comprehensive skill development",
                    "Video analysis and technique refinement",
                    "Travel available for U.S. and International clients"
                  ],
                  icon: <Timer className="h-6 w-6" />
                }
              ].map((program, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 p-6 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {program.title}
                      </h3>
                      <div className="space-y-1 mb-4">
                        <div className="text-2xl font-bold text-white">
                          {program.price}
                        </div>
                        <div className="text-sm text-neutral-400">
                          {program.period}
                        </div>
                      </div>
                      <p className="text-neutral-300 mb-4">
                        {program.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start text-sm text-neutral-400"
                          >
                            <CheckCircle className="h-4 w-4 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Button
                        className="w-full bg-neutral-700 hover:bg-blue-600 text-white rounded-xl"
                        onClick={() =>
                          program.price === "Contact"
                            ? handleInquireClick(program.title)
                            : null
                        }
                      >
                        {program.price === "Contact"
                          ? "Inquire Now"
                          : "Book Now"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-neutral-800/50 p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Travel Availability
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-neutral-700">
                    <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                      Regional Travel
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400">
                      Available for training sessions within a 100-mile radius
                      of our home base. Additional travel fees may apply based
                      on distance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-neutral-700">
                    <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                      National Travel
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400">
                      Available for multi-day training camps and team sessions
                      throughout the United States. Travel and accommodation
                      expenses will be added to the base rate.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-neutral-700">
                    <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                      Booking Requirements
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400">
                      Travel sessions require a minimum of 2 weeks advance
                      booking. For team training, a minimum of 5 athletes is
                      required. Contact us for detailed availability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-24 bg-neutral-900 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Questions & Answers
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Common questions about our training programs and methodology
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How quickly will I see results?",
                    answer:
                      "Most athletes notice improvements in technique within the first few sessions. Measurable performance gains typically become evident after 4-6 weeks of consistent training."
                  },
                  {
                    question: "What should I wear to training sessions?",
                    answer:
                      "Comfortable athletic clothing and appropriate footwear for your sport. For track athletes, bring both training shoes and spikes if you have them."
                  },
                  {
                    question: "Do you offer nutrition guidance?",
                    answer:
                      "While our primary focus is on physical training, we do provide basic nutrition recommendations to support athletic performance and recovery."
                  },
                  {
                    question:
                      "Can I book a single session or do I need to commit to multiple?",
                    answer:
                      "Single sessions are available, but we recommend a minimum of 4-6 sessions to see meaningful progress. Discounted packages are available for multiple session bookings."
                  },
                  {
                    question: "What age groups do you work with?",
                    answer:
                      "We work with competitive athletes ages 14 and up. Training methods are adapted appropriately based on age, development stage, and experience level."
                  }
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i + 1}`}
                    className="border-neutral-700"
                  >
                    <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="container px-4 mx-auto relative">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-12">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready to Transform Your Athletic Performance?
                  </h2>
                  <p className="text-neutral-300 max-w-2xl mx-auto">
                    Get instant access to our Elite Athlete Transformation
                    Program and start seeing results today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a href="#online-program">
                      <Button
                        size="lg"
                        className="gradient-button text-white rounded-full h-14 px-8 text-lg"
                      >
                        Get The Program
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <a href="#assessment">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full h-14 px-8 text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        Take Free Assessment
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Inquiry Modal */}
      <InquiryModal
        open={inquiryModalOpen}
        onOpenChange={setInquiryModalOpen}
        programType={selectedProgram}
      />
    </div>
  );
}
