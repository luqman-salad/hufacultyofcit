import { Suspense } from "react";
import { Hero } from "@/components/layout/Hero";
import { Pillars } from "@/components/layout/Pillars";
import { DeansWelcome } from "@/components/layout/DeansWelcome";
import { Departments } from "@/components/layout/Departments";
import { Stats } from "@/components/layout/Stats";
import { AcademicNews } from "@/components/layout/AcademicNews";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import FacultyAdministration from "@/components/layout/FacultyAdministration";
import {
  DeanSkeleton,
  DepartmentsSkeleton,
  FacultyAdminSkeleton,
  NewsSkeleton,
  StatsSkeleton,
  WhyChooseUsSkeleton,
} from "@/components/layout/HomeSkeletons";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Pillars />
      <Suspense fallback={<DeanSkeleton />}>
        <DeansWelcome />
      </Suspense>
      <Suspense fallback={<DepartmentsSkeleton />}>
        <Departments />
      </Suspense>
      <Suspense fallback={<WhyChooseUsSkeleton />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<NewsSkeleton />}>
        <AcademicNews />
      </Suspense>
      <Suspense fallback={<FacultyAdminSkeleton />}>
        <FacultyAdministration />
      </Suspense>
    </div>
  );
}
