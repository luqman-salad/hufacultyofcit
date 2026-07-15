"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// --- Type Definitions ---
interface NavChild {
  title: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [academicChildren, setAcademicChildren] = React.useState<NavChild[]>([]);

  React.useEffect(() => {
    async function fetchLiveDepartments() {
      try {
        const query = groq`*[_type == "department" && defined(slug.current)]{ title, slug }`;
        const data = await client.fetch(query);
        if (data) {
          setAcademicChildren(data.map((d: any) => ({ 
            title: d.title, 
            href: `/departments/${d.slug.current}` 
          })));
        }
      } catch (err) {
        console.error("Error fetching departments:", err);
      }
    }
    fetchLiveDepartments();
  }, []);

  const navData: NavItem[] = [
    { label: "Home", children: [{ title: "Dean's Message", href: "/dean-message" }, { title: "Vision & Mission", href: "/vision-mission" }] },
    { label: "About", children: [{ title: "Facilities", href: "/about/facilities" }, { title: "Faculty History", href: "/about/history" }] },
    { label: "Academic", children: academicChildren },
    { label: "Research", href: "/research" },
    { label: "Staff", href: "/staff" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#BF833D] w-8 h-8 md:w-10 md:h-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M20 18H4V6h16v12zM4 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3h6l-2-3h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4z" /></svg>
          </div>
          <span className="font-black text-[12px] uppercase tracking-tighter text-[#1F2E4F]">Faculty of Computer & IT</span>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navData.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-[#1F2E4F] font-bold text-[13px] bg-transparent hover:bg-gray-50 uppercase tracking-tight">{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] p-2 bg-white">
                        {item.children.map((c) => <ListItem key={c.title} title={c.title} href={c.href} />)}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href || "#"} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[13px] font-bold uppercase hover:bg-gray-50")}>{item.label}</Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2"><Menu className="w-8 h-8 text-[#1F2E4F]" /></SheetTrigger>
            <SheetContent side="right" className="w-full p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-[#1F2E4F] font-black uppercase tracking-tighter">Menu</span>
                  <SheetClose className="p-2 bg-gray-100 rounded-full"></SheetClose>
                </div>
                
                <nav className="flex-1 overflow-y-auto px-2 py-4">
                  {navData.map((item) => (
                    <div key={item.label} className="border-b border-gray-50">
                      {item.children ? (
                        <details className="group">
                          <summary className="flex items-center justify-between p-5 font-bold text-[#1F2E4F] uppercase text-sm cursor-pointer hover:bg-gray-50">
                            {item.label}
                            <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="bg-gray-50 px-4 py-2">
                            {item.children.map((c) => (
                              <Link key={c.title} href={c.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-gray-600 hover:text-[#E31E24] pl-4 border-l-2 border-gray-200 hover:border-[#E31E24]">
                                {c.title}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link href={item.href || "#"} onClick={() => setOpen(false)} className="block p-5 font-bold text-[#1F2E4F] uppercase text-sm hover:bg-gray-50">
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof Link> & { title: string }>(({ className, title, href, ...props }, ref) => (
  <li>
    <Link href={href || "#"} ref={ref} className={cn("block px-4 py-3 text-sm font-medium text-[#1F2E4F] hover:bg-gray-50 hover:text-[#E31E24] transition-colors", className)} {...props}>
      {title}
    </Link>
  </li>
));
ListItem.displayName = "ListItem";