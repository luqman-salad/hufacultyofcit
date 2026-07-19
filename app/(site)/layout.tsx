import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const revalidate = 3600;

// app/(site)/layout.tsx
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
