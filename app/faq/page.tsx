import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { AnimatedButton } from "@/components/animated-button"
import { ShimmerBackground } from "@/components/shimmer-background"

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "Do teachers speak English?",
          answer:
            "Yes, all our teachers are fluent in English and Arabic. Many of our instructors also speak additional languages including French, German, and Urdu to better serve our diverse student community.",
        },
        {
          question: "Are certificates provided?",
          answer:
            "Yes, we provide official certificates of completion for all our courses. These certificates are issued upon successful completion of the program and meeting all requirements. Our certificates are recognized by many Islamic institutions worldwide.",
        },
        {
          question: "What payment methods are available?",
          answer:
            "We accept various payment methods including major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and direct bank transfers. We also offer payment plans for longer courses.",
        },
        {
          question: "How are lesson times scheduled?",
          answer:
            "We offer flexible scheduling to accommodate students across different time zones. You can choose from available time slots that work with your schedule. Our booking system allows you to reschedule lessons up to 24 hours in advance.",
        },
      ],
    },
    {
      category: "Course Information",
      questions: [
        {
          question: "What age groups do you teach?",
          answer:
            "We welcome students of all ages, from children (6+) to adults. Our teaching methods are adapted to suit different age groups and learning styles. We have specialized programs for children, teenagers, and adults.",
        },
        {
          question: "How long does it take to complete a course?",
          answer:
            "Course duration varies depending on the program and your learning pace. Typically, Arabic language courses take 6-12 months, Quran memorization varies greatly based on individual goals, and Islamic Studies courses range from 3-6 months.",
        },
        {
          question: "Can I switch between different courses?",
          answer:
            "Yes, you can switch between courses or take multiple courses simultaneously. Our academic advisors will help you create a learning plan that suits your goals and schedule.",
        },
        {
          question: "Do you offer group classes?",
          answer:
            "Yes, we offer both individual and group classes. Group classes are available for families, friends, or students at similar levels. Group classes also come with discounted rates.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What technology do I need for online classes?",
          answer:
            "You need a computer, tablet, or smartphone with a stable internet connection, a webcam, and a microphone. We use user-friendly video conferencing platforms that work on all devices.",
        },
        {
          question: "What if I have technical issues during a lesson?",
          answer:
            "Our technical support team is available during all class hours. If technical issues prevent you from attending a lesson, we'll reschedule it at no extra cost.",
        },
        {
          question: "Are lessons recorded?",
          answer:
            "Yes, with your permission, lessons can be recorded for your review. This helps you revisit important concepts and track your progress. Recordings are stored securely and only accessible to you and your teacher.",
        },
      ],
    },
    {
      category: "Pricing and Payments",
      questions: [
        {
          question: "Are there any hidden fees?",
          answer:
            "No, our pricing is completely transparent. The prices listed on our website include all teaching materials and resources. There are no registration fees or hidden charges.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we offer a satisfaction guarantee. If you're not satisfied with your first lesson, we'll provide a full refund. For ongoing courses, refunds are available according to our refund policy terms.",
        },
        {
          question: "Can I pause my subscription?",
          answer:
            "Yes, you can pause your subscription for up to 3 months if needed due to travel, illness, or other circumstances. Just contact our support team to arrange this.",
        },
        {
          question: "Are there discounts for families?",
          answer:
            "Yes, we offer family discounts of up to 20% when multiple family members enroll. We also have special rates for group bookings and long-term commitments.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div className="content-overlay max-w-4xl mx-auto" style={{ border: '4px solid #8b4513', boxShadow: '0 8px 32px 0 rgba(139,69,19,0.18)', borderRadius: '2rem', background: '#fff' }}>
              <h1
                className="text-3xl md:text-5xl font-black text-[#5a2600] mb-2 text-center drop-shadow-lg"
                style={{ fontFamily: 'Noto Serif', fontWeight: 900, letterSpacing: '1px', textShadow: '0 2px 8px #e8b00755, 0 2px 0 #fff', lineHeight: 1.1 }}
              >
                Frequently Asked Questions
              </h1>
              <p
                className="text-base md:text-lg text-[#8b4513] font-semibold max-w-2xl mx-auto text-center mb-4"
                style={{ fontFamily: 'Noto Serif', fontWeight: 600, textShadow: '0 1px 6px #fffbe6', lineHeight: 1.6, letterSpacing: '0.2px' }}
              >
                Find answers to common questions about our Islamic education programs, scheduling, and services.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <FadeInSection key={categoryIndex} delay={categoryIndex * 200}>
              <div>
                <div className="text-enhanced-readability mb-8">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <HelpCircle className="w-8 h-8 text-amber-600 mr-3 hover:scale-110 hover:rotate-12 transition-all duration-300" />
                    {category.category}
                  </h2>
                </div>
                <StaggeredFadeIn className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Collapsible key={faqIndex}>
                      <Card className="enhanced-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/70 transform-gpu" style={{ perspective: '800px' }}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="hover:bg-amber-50 transition-colors cursor-pointer group hover:rotate-y-6" style={{ transition: 'transform 0.5s' }}>
                            <CardTitle className="text-left flex items-center justify-between text-base font-black" style={{ color: '#111', fontFamily: 'Noto Serif', letterSpacing: '0.5px' }}>
                              {faq.question}
                              <ChevronDown className="w-5 h-5 text-amber-600 transition-transform duration-300 group-hover:scale-110 group-data-[state=open]:rotate-180" />
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
                          <CardContent className="pt-0 pb-6">
                            <p className="text-base leading-relaxed mt-2" style={{ color: '#5a2600', fontFamily: 'Noto Serif', fontWeight: 500 }}>
                              {faq.answer}
                            </p>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </StaggeredFadeIn>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 section-light" style={{
        backgroundImage: "url(/backgrund1.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <Card className="enhanced-card rounded-3xl shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/70 transform-gpu hover:rotate-y-6" style={{ perspective: '800px', transition: 'transform 0.5s' }}>
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#222] mb-2" style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}>Still Have Questions?</h2>
                <p className="text-lg text-[#444] font-semibold max-w-2xl mx-auto text-center mb-8" style={{ fontFamily: 'Noto Serif', fontWeight: 600 }}>
                  Can't find the answer you're looking for? Our friendly support team is here to help you with any questions about our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Card className="enhanced-card rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors duration-200">
                        Email Support
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">Get detailed answers to your questions</p>
                      <a href="mailto:info.alazhar.school@gmail.com" className="inline-block text-sm font-semibold text-amber-600 hover:bg-amber-50 hover:text-white hover:bg-amber-500 px-4 py-2 rounded transition-all duration-200 shadow-sm border border-amber-200 a-brown-active">
                        info.alazhar.school@gmail.com
                      </a>
                      <div className="text-sm text-gray-500 mt-2">Response within 24 hours</div>
                    </CardContent>
                  </Card>
                  <Card className="enhanced-card rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors duration-200">
                        WhatsApp Chat
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">Quick answers and instant support</p>
                      <a href="https://wa.me/201023594533" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-amber-600 hover:bg-amber-50 hover:text-white hover:bg-amber-500 px-4 py-2 rounded transition-all duration-200 shadow-sm border border-amber-200 a-brown-active">
                        00201023594533
                      </a>
                      <div className="text-sm text-gray-500 mt-2">Available 24 hours a day, 7 days a week</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
