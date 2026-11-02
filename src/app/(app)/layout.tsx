import Navbar from "@/components/layout/navbar/navbar";
import "../globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
