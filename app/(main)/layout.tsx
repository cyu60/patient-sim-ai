// Please add mobile header here with name
// if the person is a student, then just the different cases/home page
// otherwise, show the cases list + course list for the teachers
// import { MobileHeader } from "@/components/mobile-header";
// import { MobileSidebar } from "@/components/mobile-sidebar";
// import { Sidebar } from "@/components/sidebar";
import React from "react";
import Image from "next/image"

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>

      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/patientSimLogo.png" height={80} width={80} alt="Logo"/>
            <h1 className="text-2xl font-extrabold text-grey-600 tracking-wide">PatientSimAI</h1>
          </div>
        </div>
      </header>
      {/* <Sidebar className={"hidden lg:flex"}></Sidebar>
      <MobileHeader></MobileHeader> */}
      {/* <main className="lg:pl-[256px] min-h-screen pt-[50px] lg:pt-0"> */}
      <main className="min-h-screen pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
