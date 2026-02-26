import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  Clock, Star, Users, CheckCircle, Award, 
  ArrowRight, ShieldCheck, Zap, Globe 
} from "lucide-react";

import Nav from "../components/Nav"; 
import Footer from "../components/Footer";

const CoursePage = () => {
  const location = useLocation();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const courseDataMap = {
    "permanent-makeup/masters-eyebrows": {
      title: "Master's in Permanent Makeup",
      category: "Elite Certification Program",
      description: "An all-inclusive program covering the full spectrum of Permanent Makeup. Master advanced techniques for precision and natural-looking cosmetic results with clinical precision and creative excellence.",
      duration: "10 Days",
      level: "Mastery",
      image: "/images/courses-banner.jpeg",
      courseDetailImage: "/courses2/MastersinPMU.png", 
      features: [
        "Hands-on Practice",
        "Live Models",
        "Business Training",
        "Full PMU Kit Included"
      ],
      instructor: {
        name: "Dr. Shikha Baghi",
        experience: "12+ Years Experience",
        image: "/images/dr.png"
      }
    }
  };

  useEffect(() => {
    const rawPath = decodeURIComponent(location.pathname);
    let coursePath = rawPath.replace(/^\/+|\/+$/g, "").replace("courses/", "");
    const course = courseDataMap[coursePath];
    if (course) {
      setCourseData(course);
      document.title = course.title;
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) return <div className="h-screen flex items-center justify-center bg-[#0A0A0A] text-[#C8A43F]">Loading...</div>;
  if (!courseData) return <div className="h-screen flex items-center justify-center text-white bg-[#0A0A0A]">Course Not Found</div>;

  return (
    <div className="min-h-screen font-sans">
      <Nav />

      {/* --- LAYER 1: PURE BLACK HEADER Area --- */}
      <div className="bg-[#0A0A0A] pt-24 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-[2px]">
            <span>Home</span>
            <span>/</span>
            <span>Courses</span>
            <span>/</span>
            <span className="text-gray-300">{courseData.title}</span>
          </div>
        </div>
      </div>





      {/* --- LAYER 2: MATTE GRAY HERO (#111414) --- */}
      <section className="bg-[#111414] py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#C8A43F] font-bold text-lg italic tracking-wide">
                Welcome to @Timeless-Studio Family
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {courseData.title} <br/>
                <span className="text-gray-500 font-bold uppercase text-3xl">@Elite-Studio</span>
              </h1>

              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Zap size={16} className="text-[#C8A43F]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Intensive Training</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Globe size={16} className="text-[#C8A43F]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Hindi / English</span>
                </div>
                <div className="flex items-center gap-1 text-[#C8A43F] px-4 py-2">
                  <span className="font-bold mr-1 italic">4.9</span>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Flyer starts here and overlaps with Layer 3) */}
            <div className="lg:col-span-5 relative z-30">
              <div className="lg:absolute top-0 w-full bg-[#1A1A1A] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden p-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
                  <img 
                    src={courseData.courseDetailImage} 
                    alt="Course Flyer" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[2px]">Investment Details</span>
                    <span className="text-white text-3xl font-black uppercase">Enquire For Fees</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#C8A43F] to-[#B8932F] text-black font-black py-5 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-xl shadow-[#C8A43F]/10 uppercase tracking-[2px]">
                    Enroll Now <ArrowRight size={20} className="inline ml-2" />
                  </button>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {courseData.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                        <CheckCircle size={14} className="text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>










      {/* --- LAYER 3: CLEAN WHITE MAIN SECTION --- */}
      <section className="bg-white py-24 min-h-[500px]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* ABOUT CONTENT (Stays White) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter italic flex items-center gap-4">
                  About Course
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#C8A43F] to-transparent opacity-30"></div>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">
                  {courseData.description}
                </p>
              </div>

              {/* INSTRUCTOR SUB-SECTION */}
              <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-8 border border-gray-100">
                <img 
                  src={courseData.instructor.image} 
                  className="w-32 h-32 rounded-full object-cover border-2 border-[#C8A43F] shadow-lg" 
                  alt="Instructor" 
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">{courseData.instructor.name}</h3>
                  <p className="text-[#C8A43F] font-bold text-sm mb-4 uppercase tracking-widest">{courseData.instructor.experience}</p>
                  <p className="text-gray-500 italic max-w-md leading-relaxed">
                    "Leading the industry with decade-long expertise. We don't just teach techniques; we craft professional careers."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;