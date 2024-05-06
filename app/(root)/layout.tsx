import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "DS",
    lastName: "JSM",
  };
  return (
    // the below classname would make the sidebar to be placed to the left and render it simiar to where alyout should be rendered
    <main className="flex h-screen w-full font-inter">
      {/*  */}
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon" />

          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}
