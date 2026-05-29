"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaClock, FaGraduationCap, FaMoneyBillWave, FaCheckCircle, 
  FaBriefcase, FaSearch, FaChevronRight, FaFileDownload,
  FaChevronDown, FaLaptopCode, FaUserAlt, FaBuilding, FaBookOpen
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoSchoolSharp } from "react-icons/io5";

export default function DepartmentDetailPage() {
  const departmentData = {
    title: "Bachelor of Science in Computer Applications",
    description: `Bachelor of Science in Computer Applications is an Undergraduate Computer Science course. 
    Application software or computer application are two aspects of the same thing; it is computer software 
    designed to help the user to perform singular or multiple related specific tasks.`,
    duration: "4 Years (8 Semesters)",
    type: "Full-Time / Part-Time",
    level: "Undergraduate (Bachelor)",
    monthlyFees: "65$",
    semesterFees: "390$",
    requirements: [
      "Must have completed Secondary school.",
      "Should bring the original Secondary School Leaving Certificate with two copies.",
      "Should bring four (4) passport-size photos with white backgrounds.",
      "For part-time program applicants, an experience of two years is recommended.",
      "Admission and ID Fee: USD 30."
    ],
    learningOutcomes: [
      "Master modern full-stack web and mobile application architectures.",
      "Design, implement, and optimize highly secure database management systems.",
      "Apply algorithmic thinking to solve complex real-world computing problems.",
      "Collaborate effectively in agile software engineering product teams."
    ],
    curriculum: [
      {
        semester: 1,
        courses: [
          {
            title: "Introduction to ICT",
            description: "This foundational module introduces students to the core building blocks of computing infrastructure, operating systems, hardware systems, and global internet architectures. Students learn how data flows through modern digital systems and establish essential digital literacy skills required for complex engineering pipelines.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Exam + Lab"
          },
          {
            title: "Structured Programming (C)",
            description: "An intensive entry-level programming experience focused on the syntax, structure, and execution mechanics of the C programming language. The course heavily emphasizes procedural logic control, memory allocation models, pointers, and custom data stream configurations to build an absolute foundation in raw computer science thinking.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Calculus I",
            description: "This math intensive establishes the absolute prerequisites for machine logic, computer graphics formulas, and complex data modeling workflows. It explores limits, single-variable derivatives, integral optimizations, and coordinates, mapping pure algebraic concepts to computational algorithm rendering.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          },
          {
            title: "Islamic Studies",
            description: "A comprehensive core humanities module that looks closely at professional ethics, civic responsibilities, and societal values from an Islamic framework. It challenges tech builders to approach software engineering, data privacy, and global technological disruption with high moral integrity and a strong sense of community impact.",
            type: "Humanities",
            credits: "2 Credit Hours",
            assessment: "Presentation"
          }
        ]
      },
      {
        semester: 2,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
      {
        semester: 3,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
      {
        semester: 4,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
      {
        semester: 5,
        courses: [
          {
            title: "Introduction to ICT",
            description: "This foundational module introduces students to the core building blocks of computing infrastructure, operating systems, hardware systems, and global internet architectures. Students learn how data flows through modern digital systems and establish essential digital literacy skills required for complex engineering pipelines.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Exam + Lab"
          },
          {
            title: "Structured Programming (C)",
            description: "An intensive entry-level programming experience focused on the syntax, structure, and execution mechanics of the C programming language. The course heavily emphasizes procedural logic control, memory allocation models, pointers, and custom data stream configurations to build an absolute foundation in raw computer science thinking.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Calculus I",
            description: "This math intensive establishes the absolute prerequisites for machine logic, computer graphics formulas, and complex data modeling workflows. It explores limits, single-variable derivatives, integral optimizations, and coordinates, mapping pure algebraic concepts to computational algorithm rendering.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          },
          {
            title: "Islamic Studies",
            description: "A comprehensive core humanities module that looks closely at professional ethics, civic responsibilities, and societal values from an Islamic framework. It challenges tech builders to approach software engineering, data privacy, and global technological disruption with high moral integrity and a strong sense of community impact.",
            type: "Humanities",
            credits: "2 Credit Hours",
            assessment: "Presentation"
          }
        ]
      },
      {
        semester: 6,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
      {
        semester: 7,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
      {
        semester: 8,
        courses: [
          {
            title: "Object-Oriented Programming (C++)",
            description: "Transitions students from raw procedural structure into scalable application layouts using standard object-oriented design patterns. The curriculum covers encapsulation, multiple inheritance paradigms, runtime polymorphism, data abstractions, and structured file configurations to prepare students for real-world enterprise software creation.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Project"
          },
          {
            title: "Data Structures & Algorithms",
            description: "A highly rigorous core architecture course targeting operational performance and algorithm efficiencies. Students dive deep into custom execution logic for linked lists, complex tree nodes, sorting heuristics, graph traversals, and hash maps to write production-grade code capable of running efficiently under heavy hardware load parameters.",
            type: "Core Module",
            credits: "4 Credit Hours",
            assessment: "Exam + Coding Lab"
          },
          {
            title: "Digital Logic Design",
            description: "Introduces basic electronic gates, Boolean algebra, flip-flops, registers, and sequential network counters. Students learn how high-level software logic gates translate directly down to raw hardware signals and silicon circuit layers.",
            type: "Core Lab",
            credits: "3 Credit Hours",
            assessment: "Lab Practicum"
          },
          {
            title: "Discrete Mathematics",
            description: "Covers standard propositional logic configurations, set theory principles, mathematical inductions, and graph networks. This structural engineering math provides the formulas required for modern data querying structures.",
            type: "Core Module",
            credits: "3 Credit Hours",
            assessment: "Written Exam"
          }
        ]
      },
    ],
    faculty: [
      { name: "Dr. Ahmed Jama", role: "Head of Department", exp: "Ph.D. in Software Engineering", img: "/staff-placeholder.png" },
      { name: "Prof. Leyla Mohamed", role: "Senior Lecturer", exp: "M.Sc. in Data Science", img: "/staff-placeholder.png" }
    ],
    labs: [
      { name: "Advanced Software Engineering Lab", desc: "Equipped with high-performance nodes running modern deployment, containerization, and IDE tooling workflows.", room: "Lab Block A - Room 302" },
      { name: "Interactive Mobile & UI/UX Studio", desc: "Dedicated prototyping layout for cross-platform app engineering, asset testing, and interface modeling.", room: "Lab Block B - Room 104" }
    ],
    careerPaths: [
      "Computer Operator",
      "Computer Programmer",
      "Computer Application Tutor",
      "Laboratory Technician",
      "Mobile Application Developer",
      "Senior Applications Support Analyst"
    ],
    latestUpdates: [
      { title: "Empowering Future Networking Engineers", date: "21 Oct, 2023" },
      { title: "Unlock Your Future: Admission Now Open", date: "09 Sep, 2023" }
    ]
  };

  // State Management for Interactive Curriculum Matrix
  const [activeSemester, setActiveSemester] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState(departmentData.curriculum[0].courses[0]);

  // Handle semester change and reset selected course summary
  const handleSemesterChange = (semNum: number) => {
    setActiveSemester(semNum);
    const targetSem = departmentData.curriculum.find(s => s.semester === semNum);
    if (targetSem && targetSem.courses.length > 0) {
      setSelectedCourse(targetSem.courses[0]);
    }
  };

  return (
    <main className="bg-[#FCFCFD] pb-24 antialiased">
      <InnerHero 
        title={departmentData.title} 
        backgroundImage="/computerScienceimg.png" 
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
            <section className="bg-[#1a2b4a]/5 p-8 md:p-10 rounded-3xl border border-[#1a2b4a]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c9c6f]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-black text-[#1a2b4a] mb-8 flex items-center gap-3 tracking-tight">
                <FaCheckCircle className="text-[#4c9c6f] text-2xl" /> Entry & Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {departmentData.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 bg-white/60 p-4 rounded-xl border border-white backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mt-2 shrink-0" />
                    <span className="text-sm font-semibold leading-relaxed text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Learning Outcomes */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                <IoSchoolSharp className="text-[#4c9c6f] text-2xl" /> Intended Learning Outcomes
              </h3>
              <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">What you will master through this degree path</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departmentData.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl flex gap-4 hover:bg-white hover:shadow-md transition-all">
                    <FaCheckCircle className="text-[#4c9c6f] shrink-0 mt-0.5 text-base" />
                    <span className="text-xs font-bold text-gray-600 leading-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Integrated Timeline Grid Curriculum Layout */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-col justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-black text-[#1a2b4a] tracking-tight flex gap-3">
                    <FaLaptopCode className="text-[#1F2E4F] text-2xl" /> Academic Curriculum Plan
                  </h3>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Interactive Syllabus Matrix</p>
                </div>

                {/* Tab Switchers */}
                <div className="flex bg-gray-100/80 p-1.5 rounded-xl self-start max-w-full overflow-scroll scrollbar-thumb-gray-300/80 scrollbar-track-gray-100/50">
                  {departmentData.curriculum.map((sem) => (
                    <button
                      key={sem.semester}
                      onClick={() => handleSemesterChange(sem.semester)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-xs font-black tracking-wider uppercase transition-all outline-none max-w-full ",
                        activeSemester === sem.semester 
                          ? "bg-white text-[#1a2b4a] shadow-sm" 
                          : "text-gray-400 hover:text-gray-600"
                      )}
                    >
                      Sem 0{sem.semester}
                    </button>
                  ))}
                </div>
              </div>

              {/* Matrix Layout View */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Course Index List Left side */}
                <div className="md:col-span-7 space-y-3">
                  {departmentData.curriculum
                    .find((s) => s.semester === activeSemester)
                    ?.courses.map((course, idx) => {
                      const isSelected = selectedCourse.title === course.title;
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

                {/* Focus Dashboard Inspector Box Right side */}
                <div className="md:col-span-5 bg-gradient-to-br from-[#1a2b4a]/5 to-[#1a2b4a]/10 p-6 rounded-2xl border border-[#1a2b4a]/5 md:sticky md:top-24">
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
                </div>

              </div>
            </section>

            {/* Department Leadership & Faculty */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                <FaUserAlt className="text-[#BF833D] text-lg" /> Department Faculty Leadership
              </h3>
              <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">Mentorship from seasoned academic experts</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {departmentData.faculty.map((member, i) => (
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

            {/* Labs & Research Facilities */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                <FaBuilding className="text-[#4c9c6f] text-lg" /> Technology Infrastructure & Systems
              </h3>
              <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">Hands-on application runtime testing centers</p>
              <div className="space-y-4">
                {departmentData.labs.map((lab, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-5 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all">
                    <div className="w-full md:w-36 h-24 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-300 font-bold text-[10px] uppercase tracking-widest shrink-0 border border-gray-100 gap-1.5">
                      <FaLaptopCode className="text-xl text-gray-300" />
                      <span>Core Lab Layout</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h4 className="font-bold text-[#1a2b4a] text-base tracking-tight leading-none">{lab.name}</h4>
                        <span className="text-[9px] font-black bg-[#4c9c6f]/10 text-[#4c9c6f] px-2 py-0.5 rounded uppercase tracking-wider">{lab.room}</span>
                      </div>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed">{lab.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Paths Section */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-[#1a2b4a] mb-2 flex items-center gap-3 tracking-tight">
                <FaBriefcase className="text-[#E31E24] text-lg" /> Industry Career Opportunities
              </h3>
              <p className="text-gray-400 mb-8 text-xs font-medium uppercase tracking-wider">Strategic target professions for department alumni</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departmentData.careerPaths.map((path, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-[#4c9c6f] hover:text-white hover:border-[#4c9c6f] transition-all group cursor-default shadow-sm bg-white">
                    <div className="bg-gray-50 group-hover:bg-white/20 p-2.5 rounded-xl transition-colors">
                      <HiOutlineLightBulb className="text-[#4c9c6f] group-hover:text-white text-lg" />
                    </div>
                    <span className="font-bold text-xs text-gray-700 group-hover:text-white tracking-tight">{path}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: SIDEBAR (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* 1. Search Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-[#1a2b4a] font-bold text-sm mb-4 uppercase tracking-wider">Search Courses</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..." 
                  className="w-full text-xs font-semibold px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-all"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#E31E24] text-white px-3.5 rounded-lg hover:bg-[#c4191f] transition-colors text-xs">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* 2. Contact Card */}
            <div className="bg-gradient-to-br from-[#E31E24] to-[#b31419] p-7 rounded-2xl text-white shadow-lg shadow-red-500/10 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
              <h4 className="text-lg font-black mb-2 leading-tight tracking-tight">Department Contact Info</h4>
              <p className="text-white/80 text-xs font-medium mb-6 leading-relaxed">Need specific information or advice concerning curriculum application paths? Connect directly with local counselors.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#E31E24] px-5 py-3 rounded-xl font-bold text-xs hover:bg-gray-50 transition-all w-full justify-center shadow-md shadow-black/5 uppercase tracking-wider">
                Get Started Today <FaChevronRight className="text-[10px]" />
              </Link>
            </div>

            {/* 3. Latest Updates */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-[#1a2b4a] font-bold text-sm mb-5 border-b border-gray-50 pb-3 uppercase tracking-wider">Latest Updates</h4>
              <div className="space-y-5">
                {departmentData.latestUpdates.map((update, i) => (
                  <div key={i} className="group cursor-pointer border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                    <span className="text-[9px] uppercase font-black text-gray-400 tracking-widest">{update.date}</span>
                    <h5 className="text-xs font-bold text-[#1a2b4a] group-hover:text-[#4c9c6f] transition-colors leading-snug mt-1 tracking-tight">
                      {update.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Downloads Section */}
            <div className="bg-[#1F2E4F] p-6 rounded-2xl text-white shadow-sm">
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider">Course Resources</h4>
              <div className="space-y-2.5">
                <button className="flex items-center justify-between w-full p-3.5 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-xs font-bold border border-white/5">
                  Full Curriculum (PDF) <FaFileDownload className="text-[#4c9c6f] text-sm" />
                </button>
                <button className="flex items-center justify-between w-full p-3.5 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-xs font-bold border border-white/5">
                  Fee Structure (PDF) <FaFileDownload className="text-[#4c9c6f] text-sm" />
                </button>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}

// Small utility function for merging dynamic tailwind class strings safely
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}