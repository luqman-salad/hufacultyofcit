"use client";

import React, { useState, useEffect } from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaClock, FaGraduationCap, FaMoneyBillWave, FaCheckCircle, 
  FaBriefcase, FaChevronRight, FaLaptopCode, FaUserAlt, 
  FaBuilding, FaBookOpen
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoSchoolSharp } from "react-icons/io5";

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

interface Course {
  title: string;
  description: string;
  type?: string;
  credits: string;
  assessment: string;
}

interface SemesterBlock {
  semesterNumber: number;
  courses: Course[];
}

interface FacultyMember {
  name: string;
  role: string;
  exp: string;
}

interface LabFacility {
  name: string;
  desc: string;
  room: string;
}

interface UpdateItem {
  title: string;
  date: string;
}

interface DepartmentData {
  title: string;
  description: string;
  duration: string;
  type?: string;
  level: string;
  monthlyFees?: string;
  semesterFees: string;
  requirements?: string[];
  learningOutcomes?: string[];
  curriculum?: SemesterBlock[];
  faculty?: FacultyMember[];
  labs?: LabFacility[];
  careerPaths?: string[];
  latestUpdates?: UpdateItem[];
}

interface ClientLayoutProps {
  departmentData: DepartmentData;
  resolvedHeroImage: string;
}

export default function DepartmentClientLayout({ departmentData, resolvedHeroImage }: ClientLayoutProps) {
  const liveCurriculum = departmentData.curriculum || [];
  const liveRequirements = departmentData.requirements || [];
  const liveOutcomes = departmentData.learningOutcomes || [];
  const liveFaculty = departmentData.faculty || [];
  const liveLabs = departmentData.labs || [];
  const liveUpdates = departmentData.latestUpdates || [];
  const liveCareers = departmentData.careerPaths || [];

  const initialSemester = liveCurriculum[0]?.semesterNumber || 1;
  const initialCourse = liveCurriculum[0]?.courses?.[0] || null;

  const [activeSemester, setActiveSemester] = useState<number>(initialSemester);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(initialCourse);

  // Synchronize dynamic updates if the dataset updates on the fly
  useEffect(() => {
    if (liveCurriculum.length > 0) {
      const currentSemData = liveCurriculum.find(s => s.semesterNumber === activeSemester) || liveCurriculum[0];
      setActiveSemester(currentSemData.semesterNumber);
      if (currentSemData.courses?.length > 0) {
        setSelectedCourse(currentSemData.courses[0]);
      }
    }
  }, [departmentData]);

  const handleSemesterChange = (semNum: number) => {
    setActiveSemester(semNum);
    const targetSem = liveCurriculum.find(s => s.semesterNumber === semNum);
    if (targetSem && targetSem.courses?.length > 0) {
      setSelectedCourse(targetSem.courses[0]);
    } else {
      setSelectedCourse(null);
    }
  };

  return (
    <main className="bg-[#FCFCFD] pb-24 antialiased">
      <InnerHero 
        title={departmentData.title} 
        backgroundImage={resolvedHeroImage} 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: MAIN CONTENT (8 Cols) */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* Overview Section */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-[#E31E24] font-black text-xs uppercase tracking-[0.2em] mb-4">Department Overview</h2>
              <h3 className="text-2xl md:text-3xl font-black text-[#1a2b4a] mb-6 leading-tight tracking-tight">
                Welcome to {departmentData.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10 font-normal">
                {departmentData.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { label: "Duration", val: departmentData.duration, icon: <FaClock /> },
                  { label: "Degree Level", val: departmentData.level, icon: <FaGraduationCap /> },
                  { label: "Semester Fee", val: departmentData.semesterFees, icon: <FaMoneyBillWave /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:border-gray-200">
                    <div className="text-[#4c9c6f] mb-4 text-2xl bg-[#4c9c6f]/10 p-3 rounded-xl">{stat.icon}</div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{stat.label}</span>
                    <span className="text-[#1a2b4a] font-bold text-sm tracking-tight">{stat.val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Entry Requirements */}
            {liveRequirements.length > 0 && (
              <section className="bg-[#1a2b4a]/5 p-8 md:p-10 rounded-3xl border border-[#1a2b4a]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c9c6f]/5 rounded-bl-full pointer-events-none" />
                <h3 className="text-xl font-black text-[#1a2b4a] mb-8 flex items-center gap-3 tracking-tight">
                  <FaCheckCircle className="text-[#4c9c6f] text-2xl" /> Entry & Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {liveRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-700 bg-white/60 p-4 rounded-xl border border-white backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mt-2 shrink-0" />
                      <span className="text-sm font-semibold leading-relaxed text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Learning Outcomes */}
            {liveOutcomes.length > 0 && (
              <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                  <IoSchoolSharp className="text-[#4c9c6f] text-2xl" /> Intended Learning Outcomes
                </h3>
                <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">What you will master through this degree path</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {liveOutcomes.map((outcome, i) => (
                    <div key={i} className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl flex gap-4 hover:bg-white hover:shadow-md transition-all">
                      <FaCheckCircle className="text-[#4c9c6f] shrink-0 mt-0.5 text-base" />
                      <span className="text-xs font-bold text-gray-600 leading-normal">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum Segment Matrix */}
            {liveCurriculum.length > 0 && (
              <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-col justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-black text-[#1a2b4a] tracking-tight flex gap-3">
                      <FaLaptopCode className="text-[#1F2E4F] text-2xl" /> Academic Curriculum Plan
                    </h3>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Interactive Syllabus Matrix</p>
                  </div>

                  {/* Semester Tab Bars */}
                  <div className="flex bg-gray-100/80 p-1.5 rounded-xl self-start max-w-full overflow-scroll scrollbar-none gap-1">
                    {liveCurriculum.map((sem) => (
                      <button
                        key={sem.semesterNumber}
                        onClick={() => handleSemesterChange(sem.semesterNumber)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-xs font-black tracking-wider uppercase transition-all outline-none whitespace-nowrap",
                          activeSemester === sem.semesterNumber 
                            ? "bg-white text-[#1a2b4a] shadow-sm" 
                            : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        Sem 0{sem.semesterNumber}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Inspector Views */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Side Courses Hook */}
                  <div className="md:col-span-7 space-y-3">
                    {liveCurriculum
                      .find((s) => s.semesterNumber === activeSemester)
                      ?.courses?.map((course, idx) => {
                        const isSelected = selectedCourse?.title === course.title;
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedCourse(course)}
                            className={cn(
                              "p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group",
                              isSelected 
                                ? "bg-white border-[#1F2E4F] shadow-md shadow-[#1F2E4F]/5 pl-5 border-l-4 border-l-[#1F2E4F]" 
                                : "bg-[#FCFCFD] border-gray-100 hover:bg-white hover:border-gray-200"
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <div className={cn(
                                "w-7 h-7 rounded-lg font-mono text-[11px] font-black flex items-center justify-center transition-colors",
                                isSelected ? "bg-[#1F2E4F] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                              )}>
                                0{idx + 1}
                              </div>
                              <div>
                                <h4 className="font-bold text-[#1a2b4a] text-xs tracking-tight group-hover:text-[#4c9c6f] transition-colors">
                                  {course.title}
                                </h4>
                                <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">{course.credits}</span>
                              </div>
                            </div>
                            <FaChevronRight className={cn(
                              "text-[10px] transition-all",
                              isSelected ? "text-[#4c9c6f] translate-x-1" : "text-gray-300 group-hover:text-gray-400"
                            )} />
                          </div>
                        );
                      })}
                  </div>

                  {/* Right Side Focus Panel */}
                  <div className="md:col-span-5 bg-gradient-to-br from-[#1a2b4a]/5 to-[#1a2b4a]/10 p-6 rounded-2xl border border-[#1a2b4a]/5 md:sticky md:top-24">
                    {selectedCourse ? (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-black bg-[#1F2E4F]/10 text-[#1F2E4F] px-2.5 py-1 rounded-md uppercase tracking-widest">
                            {selectedCourse.type || "Core Module"}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-[#4c9c6f] animate-pulse" />
                        </div>
                        
                        <h4 className="font-black text-[#1a2b4a] text-base tracking-tight mb-3 flex items-center gap-2">
                          <FaBookOpen className="text-xs text-gray-400 shrink-0" /> {selectedCourse.title}
                        </h4>
                        
                        <p className="text-gray-600 text-xs font-medium leading-relaxed mb-6 border-l-2 border-gray-300 pl-3">
                          {selectedCourse.description}
                        </p>

                        <div className="pt-4 border-t border-gray-200/50 grid grid-cols-2 gap-3">
                          <div>
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Assessment</span>
                            <span className="text-xs font-bold text-gray-700">{selectedCourse.assessment}</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Prerequisites</span>
                            <span className="text-xs font-bold text-gray-700">None Approved</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-xs text-gray-400 text-center py-6">Select a module to review criteria parameters.</p>
                    )}
                  </div>

                </div>
              </section>
            )}

            {/* Faculty Section */}
            {liveFaculty.length > 0 && (
              <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                  <FaUserAlt className="text-[#BF833D] text-lg" /> Department Faculty Leadership
                </h3>
                <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">Mentorship from seasoned academic experts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {liveFaculty.map((member, i) => (
                    <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50/50 to-white shadow-sm hover:shadow-md transition-all">
                      <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 shrink-0">
                        <FaUserAlt className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2b4a] text-sm leading-tight tracking-tight">{member.name}</h4>
                        <span className="text-[10px] font-black text-[#E31E24] uppercase tracking-wider block mt-1">{member.role}</span>
                        <span className="text-[11px] font-medium text-gray-500 block mt-0.5">{member.exp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Labs Infrastructure */}
            {liveLabs.length > 0 && (
              <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                  <FaBuilding className="text-[#4c9c6f] text-sm" /> Campus Labs & Practical Infrastructure
                </h3>
                <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">Research environments optimized for real-world simulation</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {liveLabs.map((lab, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-[#FCFCFD] hover:bg-white hover:shadow-md transition-all">
                      <span className="text-[9px] font-black bg-[#4c9c6f]/10 text-[#4c9c6f] px-2 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">{lab.room}</span>
                      <h4 className="font-bold text-[#1a2b4a] text-sm mb-2">{lab.name}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{lab.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT: SIDEBAR (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Career Opportunities Block */}
            {liveCareers.length > 0 && (
              <div className="bg-[#1a2b4a] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
                <h3 className="text-lg font-black tracking-tight mb-2 flex items-center gap-2">
                  <FaBriefcase className="text-sm text-[#BF833D]" /> Target Horizons
                </h3>
                <p className="text-white/60 text-xs mb-6">Vocational sectors mapped directly to this training layout:</p>
                
                <div className="space-y-3">
                  {liveCareers.map((path, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/5 hover:bg-white/15 transition-all">
                      <div className="w-2 h-2 rounded-full bg-[#4c9c6f] shrink-0" />
                      <span className="text-xs font-bold tracking-tight text-white/90">{path}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Updates Sidebar Panel */}
            {liveUpdates.length > 0 && (
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#1a2b4a] font-black text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <HiOutlineLightBulb className="text-base text-[#E31E24]" /> Program Updates
                </h3>
                <div className="space-y-5">
                  {liveUpdates.map((update, i) => (
                    <div key={i} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-gray-400 block mb-1">{update.date}</span>
                      <h4 className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#4c9c6f] transition-colors leading-snug">
                        {update.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </main>
  );
}