function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200/80 ${className}`} />;
}

export function DeanSkeleton() {
  return (
    <section className="py-24 bg-white text-[#1F2E4F]" aria-label="Loading dean message">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 border-b border-gray-200 pb-10">
          <SkeletonBlock className="h-4 w-40 mb-4 rounded" />
          <SkeletonBlock className="h-12 w-full max-w-xl rounded" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SkeletonBlock className="aspect-square rounded-2xl" />
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <SkeletonBlock className="h-6 w-full mb-4 rounded" />
              <SkeletonBlock className="h-6 w-11/12 mb-4 rounded" />
              <SkeletonBlock className="h-6 w-4/5 mb-8 rounded" />
              <SkeletonBlock className="h-12 w-44 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DepartmentsSkeleton() {
  return (
    <section className="py-24 bg-[#F8F9FA]" aria-label="Loading departments">
      <div className="max-w-[1300px] mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl w-full">
            <SkeletonBlock className="h-4 w-44 mb-4 rounded" />
            <SkeletonBlock className="h-10 w-full max-w-lg mb-3 rounded" />
            <SkeletonBlock className="h-10 w-64 rounded" />
          </div>
          <div className="max-w-sm w-full">
            <SkeletonBlock className="h-4 w-full mb-3 rounded" />
            <SkeletonBlock className="h-4 w-5/6 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((item) => (
            <div key={item} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <SkeletonBlock className="h-56 w-full" />
              <div className="p-8">
                <SkeletonBlock className="h-6 w-3/4 mb-4 rounded" />
                <SkeletonBlock className="h-4 w-full mb-3 rounded" />
                <SkeletonBlock className="h-4 w-11/12 mb-8 rounded" />
                <SkeletonBlock className="h-4 w-32 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSkeleton() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-label="Loading why choose us">
      <div className="max-w-[1300px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SkeletonBlock className="h-4 w-36 mb-4 rounded" />
            <SkeletonBlock className="h-12 w-full max-w-xl mb-14 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[0, 1, 2, 3].map((item) => (
                <div key={item}>
                  <SkeletonBlock className="w-14 h-14 mb-5 rounded-xl" />
                  <SkeletonBlock className="h-6 w-2/3 mb-3 rounded" />
                  <SkeletonBlock className="h-4 w-full mb-2 rounded" />
                  <SkeletonBlock className="h-4 w-5/6 rounded" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SkeletonBlock className="w-[min(480px,80vw)] h-[min(480px,80vw)] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSkeleton() {
  return (
    <section className="relative py-20 bg-[#1F2E4F]" aria-label="Loading statistics">
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <SkeletonBlock className="w-12 h-12 rounded-xl bg-white/10" />
                <SkeletonBlock className="h-8 w-16 rounded bg-white/10" />
                <SkeletonBlock className="h-3 w-20 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSkeleton() {
  return (
    <section className="py-24 bg-white" aria-label="Loading academic news">
      <div className="max-w-[1300px] mx-auto px-10">
        <SkeletonBlock className="h-10 w-72 mx-auto mb-16 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[0, 1, 2].map((item) => (
            <div key={item}>
              <SkeletonBlock className="aspect-[1.5/1] mb-6 rounded-sm" />
              <SkeletonBlock className="h-6 w-full mb-4 rounded" />
              <SkeletonBlock className="h-6 w-4/5 mb-8 rounded" />
              <SkeletonBlock className="h-10 w-32 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FacultyAdminSkeleton() {
  return (
    <section className="bg-white py-20 px-6" aria-label="Loading faculty administration">
      <div className="max-w-[1300px] mx-auto">
        <SkeletonBlock className="h-10 w-80 mx-auto mb-16 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <SkeletonBlock className="w-32 h-32 rounded-full mb-6" />
              <SkeletonBlock className="h-7 w-40 mb-2 rounded" />
              <SkeletonBlock className="h-4 w-28 mb-6 rounded" />
              <SkeletonBlock className="h-4 w-full mb-3 rounded" />
              <SkeletonBlock className="h-4 w-4/5 mb-8 rounded" />
              <SkeletonBlock className="h-5 w-32 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
