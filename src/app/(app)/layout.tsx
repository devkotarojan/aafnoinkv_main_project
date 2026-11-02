import Navbar from "@/components/navbar";
import "../globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <>
        <Navbar />
        {children}
      </>
  );
}
