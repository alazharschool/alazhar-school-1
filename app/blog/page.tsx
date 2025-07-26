'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BookOpen, Users, Globe, Award, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { ShimmerBackground } from "@/components/shimmer-background"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import ArticleCard from "@/components/article-card";

export default function BlogPage() {
  const missionValues = [
    {
      icon: Heart,
      title: "Heartfelt Mission",
      description: "Helping Muslim children truly love and understand their faith through authentic Islamic education."
    },
    {
      icon: BookOpen,
      title: "Quran & Sunnah",
      description: "Exploring the Holy Qur'an and the Sunnah of Prophet Muhammad (peace be upon him) to bring knowledge to life."
    },
    {
      icon: Users,
      title: "Connecting Hearts",
      description: "Learning isn't just about memorizing – it's about connecting hearts, minds, and values."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Dynamic online classrooms making learning Islam an engaging journey wherever you are in the world."
    }
  ]

  const teachingFeatures = [
    {
      icon: Award,
      title: "Dedicated Teachers",
      description: "Certified Al-Azhar scholars with years of teaching experience and deep Islamic knowledge."
    },
    {
      icon: Star,
      title: "Interactive Tools",
      description: "Modern technology and interactive learning methods to make Islamic education engaging and effective."
    },
    {
      icon: Users,
      title: "International Community",
      description: "Join students from around the world in a supportive and diverse learning environment."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div
              className="content-overlay max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl"
              style={{
                border: '4px solid #8B4513',
                boxShadow: '0 8px 32px #8B451344, 0 4px 32px #000a',
                borderRadius: '2rem',
                backgroundImage: "url('/islamic.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Noto Serif', fontWeight: 900, color: '#5a2600' }}>
                Our Mission & Values
              </h1>
              <p className="text-sm text-gray-600 mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600, color: '#5a2600' }}>
                Assalam Alikum! We're an international, non-profit Egyptian Islamic school with one heartfelt mission
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200" style={{ backgroundColor: '#8B4513', border: '3px solid #FFD700' }}>
                <p className="text-sm text-gray-800 leading-relaxed mb-6" style={{ fontFamily: "Noto Serif", fontWeight: 500, color: '#fff', textShadow: '2px 2px 8px #000' }}>
                  Through exploring the Holy Qur'an and the Sunnah of Prophet Muhammad (peace be upon him), we aim to bring knowledge to life in a way that's authentic, reliable, and inspiring.
                </p>
                <p className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: "Noto Serif", fontWeight: 500, color: '#fff', textShadow: '2px 2px 8px #000' }}>
                  Learning with us isn't just about memorizing – it's about connecting hearts, minds, and values. With our dynamic online classrooms, dedicated teachers, and interactive tools, we make learning Islam an engaging journey wherever you are in the world.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-lg text-[#5a2600]" style={{ fontFamily: "Noto Serif", fontWeight: 900 }}>
                Our Core Values
              </h2>
              <p className="text-sm text-[#8b4513] mt-4" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                The principles that guide our approach to Islamic education
              </p>
            </div>
          </FadeInSection>

          <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {missionValues.map(({ icon: Icon, title, description }, idx) => (
              <Card
                key={idx}
                className="rounded-2xl group luxury-card-bg h-full"
                style={{
                  border: '3px solid #8B4513',
                  borderRadius: '2rem',
                  boxShadow: '0 4px 24px #000a',
                  overflow: 'hidden'
                }}
              >
                <CardHeader className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 pb-6 sm:pb-8">
                  <div className="icon-3d w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                  <CardTitle className="text-center text-sm sm:text-base text-[#5a2600]" style={{ fontFamily: "Noto Serif", fontWeight: 900, fontSize: "20px !important" }}>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <CardDescription className="text-center text-xs sm:text-sm text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Teaching Features Section */}
      <section className="py-16 px-4" style={{ backgroundImage: "url('/islamic.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2
                className="character-faith-mobile"
                style={{
                  fontSize: "32px !important",
                  color: "white",
                  fontFamily: "Noto Serif",
                  fontWeight: 900,
                  lineHeight: "1.4",
                  marginBottom: "1rem",
                  marginTop: "2rem",
                  textShadow: "4px 4px 16px #000",
                  WebkitTextStroke: "1px #8B4513",
                  whiteSpace: "nowrap",
                  textAlign: "right",
                  marginRight: "5cm"
                }}
              >
                🧠 Building Strong Character and Faith
              </h2>
              <style jsx>{`
                @media (max-width: 768px) {
                  .character-faith-mobile {
                    WebkitTextStroke: '0.1px #8B4513 !important';
                    textShadow: '1px 1px 4px #000 !important';
                    whiteSpace: 'normal !important';
                    textAlign: 'center !important';
                    marginRight: '0 !important';
                  }
                }
              `}</style>
              <p className="text-sm text-[#8b4513] mt-4" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Discover what makes our Islamic education unique and effective
              </p>
            </div>
          </FadeInSection>

          <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teachingFeatures.map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="text-center group">
                <div className="luxury-card-bg rounded-2xl p-6 sm:p-8 border-2 border-amber-300 hover:border-amber-500 transition-all duration-300 hover:shadow-gold hover:-translate-y-2 h-full" style={{ backgroundColor: "rgba(255, 248, 220, 0.9)", backdropFilter: "blur(10px)", border: "2px solid #8B4513" }}>
                  <div className="icon-3d w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:shadow-gold transition">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  </div>
                  <h3 className="text-base mb-3 sm:mb-4 text-[#5a2600]" style={{ fontFamily: "Noto Serif", fontWeight: 900, fontSize: "14px !important" }}>
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                    {description}
                  </p>
                </div>
                  </div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-lg font-bold mb-2 latest-articles-mobile" style={{ color: "white", fontFamily: "Noto Serif", fontWeight: 900, fontSize: "30px", WebkitTextStroke: "1px #8B4513", textShadow: "4px 4px 16px #000" }}>
                Latest Articles
              </h3>
              <style jsx>{`
                @media (max-width: 768px) {
                  .latest-articles-mobile {
                    WebkitTextStroke: '0.1px #8B4513 !important';
                    textShadow: '1px 1px 4px #000 !important';
                  }
                }
              `}</style>
              <p className="text-lg text-[#5a2600] font-semibold mb-2" style={{ fontFamily: "Noto Serif" }}>
                Read more about various topics related to Islamic education
              </p>
            </div>
          </FadeInSection>

          <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                id: "learn-quran-online",
                title: "The Importance of Learning and Memorizing the Holy Quran Online",
                excerpt: "In today's fast-paced, connected world, learning the Holy Quran online has become an essential choice for Muslims everywhere.",
                image: "/quran_7221480.png"
              },
              {
                id: "islamic-education-benefits",
                title: "Benefits of Islamic Education for Children in the Digital Age",
                excerpt: "Discover how modern Islamic education combines traditional values with contemporary learning methods to provide children with a balanced and meaningful educational experience.",
                image: "/blog 2.png"
              },
              {
                id: "tajweed-mastery",
                title: "Mastering Tajweed: The Art of Beautiful Quran Recitation",
                excerpt: "Learn the essential rules of Tajweed and how proper pronunciation enhances your connection with the Holy Quran.",
                image: "/quran-logo.jpg"
              },
              {
                id: "ramadan-preparation",
                title: "Preparing for Ramadan :\nA Complete Guide for Families",
                excerpt: "Get ready for the blessed month of Ramadan with practical tips for families, including spiritual preparation.",
                image: "/ramadan.jpg"
              },
              {
                id: "best-quran-platforms-kids",
                title: "Best Online Quran Learning Platforms for Kids",
                excerpt: "Discover the top trusted and engaging online Quran classes for children, with certified teachers and interactive tools.",
                image: "/platform.jpg"
              }
            ].map((post) => (
              <ArticleCard post={post} key={post.id} />
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/islamic.svg'), linear-gradient(to right, #d97706, #ea580c)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 animate-pulse opacity-50"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="content-overlay-heavy bg-black/10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "Noto Serif", fontWeight: 900 }}>
                Start Your Islamic Learning Journey
              </h2>
              <p className="text-sm mb-8 opacity-90" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Join our international community of learners and discover the beauty of Islamic education with certified Al-Azhar scholars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  asChild
                  size="lg"
                  animation="pulse"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-sm rounded-full hover:shadow-2xl hover:shadow-white/25"
                >
                  <Link href="/contact">Get Started Today</Link>
                </AnimatedButton>
                <AnimatedButton
                  asChild
                  size="lg"
                  animation="pulse"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-sm rounded-full hover:shadow-2xl hover:shadow-white/25"
                >
                  <Link href="/services">Explore Our Programs</Link>
                </AnimatedButton>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* كارد ديكور بخلفية backgrund1.svg قبل الفوتر */}
      <div
        className="mx-auto my-12 bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/backgrund1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px #8B451344",
          maxWidth: "1200px"
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5a2600]" style={{ fontFamily: 'Noto Serif', fontWeight: 900, textShadow: '2px 2px 8px #e8b007, 0 2px 8px #fff' }}>
          Welcome to Al-Azhar Blog
        </h2>
        <p className="text-lg text-[#8b4513] text-center mb-2" style={{ fontFamily: 'Noto Serif', textShadow: '1px 1px 6px #e8b007, 0 1px 8px #fff' }}>
          Stay tuned for more articles, tips, and updates about Islamic education.
        </p>
      </div>
    </div>
  )
}
