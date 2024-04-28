import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header className="h-20 w-full border-b-2 border-slate-200 px-4">
                <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                        <a href="/teachers" className="text-2xl font-extrabold text-grey-500 tracking-wide">
                            Student Home
                        </a>
                        <a href="/cases" className="text-2xl text-grey-500 tracking-wide">
                            Cases
                        </a>
                        <a href="/courses" className="text-2xl text-grey-500 tracking-wide">
                            Courses
                        </a>
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
