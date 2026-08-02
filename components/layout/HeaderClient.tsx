"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, Monitor } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export interface NavChild {
  title: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export function HeaderClient({ academicChildren }: { academicChildren: NavChild[] }) {
  const [open, setOpen] = React.useState(false);

  const navData: NavItem[] = [
    { label: "Home", children: [{ title: "Dean's Message", href: "/dean-message" }, { title: "Vision & Mission", href: "/vision-mission" }] },
    { label: "About", children: [{ title: "Facilities", href: "/about/facilities" }, { title: "Faculty History", href: "/about/history" }] },
    { label: "Academic", children: academicChildren },
    { 
      label: "Research", 
      children: [
        { title: "Journals", href: "/research/journal" },
        { title: "Theses", href: "/research/thesis" }
      ] 
    },
    { label: "Staff", href: "/staff" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#BF833D] w-8 h-8 md:w-10 md:h-10">
            <Monitor aria-hidden="true" className="w-full h-full" />
          </div>
          <span className="font-black text-[12px] uppercase tracking-tighter text-[#1F2E4F]">Faculty of Computer & IT</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navData.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-[#1F2E4F] font-bold text-[13px] bg-transparent hover:bg-gray-50 uppercase tracking-tight">{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] p-2 bg-white">
                        {item.children.map((child) => <ListItem key={child.href} title={child.title} href={child.href} />)}
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

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2" aria-label="Open navigation menu">
              <Menu className="w-8 h-8 text-[#1F2E4F]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-[#1F2E4F] font-black uppercase tracking-tighter">Menu</span>
                  <SheetClose className="p-2 bg-gray-100 rounded-full" aria-label="Close navigation menu" />
                </div>

                <nav className="flex-1 overflow-y-auto px-2 py-4" aria-label="Mobile navigation">
                  {navData.map((item) => (
                    <div key={item.label} className="border-b border-gray-50">
                      {item.children ? (
                        <details className="group">
                          <summary className="flex items-center justify-between p-5 font-bold text-[#1F2E4F] uppercase text-sm cursor-pointer hover:bg-gray-50">
                            {item.label}
                            <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="bg-gray-50 px-4 py-2">
                            {item.children.map((child) => (
                              <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-gray-600 hover:text-[#E31E24] pl-4 border-l-2 border-gray-200 hover:border-[#E31E24]">
                                {child.title}
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