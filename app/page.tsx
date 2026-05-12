import { Hero } from "@/components/layout/Hero";
import { Pillars } from "@/components/layout/Pillars";
import { DeansWelcome } from "@/components/layout/DeansWelcome";
import { Departments } from "@/components/layout/Departments";
import { Stats } from "@/components/layout/Stats.tsx";
import {AcademicNews} from "@/components/layout/AcademicNews";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import FacultyAdministration from "@/components/layout/FacultyAdministration.tsx";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Pillars />
      <DeansWelcome />
      <Departments />
      <WhyChooseUs />
      <Stats/>
      <AcademicNews />
      <FacultyAdministration />
      
    </div>
  );
}