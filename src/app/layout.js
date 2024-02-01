// Import Fonts
import { primary } from "./configs/fonts";
// Import Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
// Import Css
import "./global.css";
// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "The Entrancing Portal of Animation | Infinity Animations",
  description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primary.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
