"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, X, Phone, Mail } from "lucide-react"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navData = [
  { 
    label: "Home", 
    children: [
      { title: "Dean's Message", href: "/dean-message" },
      { title: "Vision & Mission", href: "/vision-mission" },
    ] 
  },
  {
    label: "About",
    children: [
      { title: "Facilities", href: "/about/facilities" },
      { title: "Faculty History", href: "/about/history" },
    ],
  },
  {
    label: "Academic",
    children: [
      { title: "B.Sc. in Computer Applications", href: "/departments/computer-applications" },
      { title: "B.Sc. in Computer Networking & Security", href: "/departments/networking-security" },
      { title: "B.Sc. in Computer Multimedia", href: "/departments/multimedia" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Staff", href: "/staff" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 px-10">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#BF833D] w-10 h-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M20 18H4V6h16v12zM4 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3h6l-2-3h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4z"/>
            </svg>
          </div>
          <div className="flex flex-col text-[#1F2E4F]">
            <span className="font-bold text-[12px] md:text-[14px] leading-tight uppercase tracking-tight">Faculty of Computer &</span>
            <span className="font-bold text-[12px] md:text-[14px] leading-tight uppercase tracking-tight">Information Technology</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navData.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-[#1F2E4F] font-bold text-[14px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent uppercase tracking-tight">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex flex-col w-[300px] py-1">
                        {item.children.map((child) => (
                          <ListItem key={child.title} title={child.title} href={child.href} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link 
                    href={item.href || "#"} 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-[#1F2E4F] font-bold text-[14px] bg-transparent uppercase tracking-tight"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Section */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            {/* FIX: Using a div asChild to prevent <button> inside <button> */}
            <SheetTrigger asChild>
              <div 
                className="p-2 transition-colors hover:bg-gray-50 rounded-lg outline-none cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Open Menu"
              >
                <Menu className="w-7 h-7 text-[#1F2E4F]" />
              </div>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-l-0 bg-[#F9FAFB] flex flex-col">
              <div className="bg-[#1F2E4F] p-8 text-white relative">
                <SheetClose className="absolute right-6 top-6 opacity-70 hover:opacity-100 transition-opacity outline-none">
                  <X className="h-6 w-6" />
                </SheetClose>
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 bg-[#BF833D] rounded-lg flex items-center justify-center font-bold">IT</div>
                   <div className="flex flex-col text-left">
                      <SheetTitle className="text-white font-black text-sm uppercase tracking-tighter m-0">Faculty of IT</SheetTitle>
                      <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Hormuud University</span>
                   </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-4">
                  {navData.map((item) => (
                    <div key={item.label} className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
                      {item.children ? (
                        <details className="group" suppressHydrationWarning>
                          <summary className="flex items-center justify-between list-none cursor-pointer p-5 group-open:bg-gray-50">
                            <span className="text-[#1F2E4F] font-black text-sm uppercase tracking-wider">{item.label}</span>
                            <ChevronDown className="w-4 h-4 text-[#BF833D] group-open:rotate-180 transition-transform duration-300" />
                          </summary>
                          <div className="px-5 pb-5 pt-2 flex flex-col gap-4 border-t border-gray-50">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-[#E31E24] font-bold text-[13px] uppercase tracking-tight flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#BF833D] rounded-full" />
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-5 text-[#1F2E4F] font-black text-sm uppercase tracking-wider hover:bg-gray-50"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-6 bg-white border-t border-gray-100 grid grid-cols-2 gap-4">
                 <Link 
                   href="/contact" 
                   onClick={() => setOpen(false)}
                   className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl gap-2 hover:bg-[#E31E24] group transition-all"
                 >
                    <Mail className="w-5 h-5 text-[#E31E24] group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase text-[#1F2E4F] group-hover:text-white">Email Us</span>
                 </Link>
                 <a 
                   href="tel:+252000000" 
                   className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl gap-2 hover:bg-[#4c9c6f] group transition-all"
                 >
                    <Phone className="w-5 h-5 text-[#4c9c6f] group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase text-[#1F2E4F] group-hover:text-white">Call Office</span>
                 </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li className="w-full list-none">
      <Link
        href={href || "#"}
        ref={ref}
        className={cn(
          "w-full rounded-md block select-none px-5 py-3 no-underline outline-none transition-all",
          "text-[#1F2E4F] font-semibold text-[13px]",
          "hover:bg-[#E31E24] hover:text-white focus:bg-[#E31E24] focus:text-white",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";