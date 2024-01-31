// Import Fonts
import { primary } from "./configs/fonts";

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
        {children}
      </body>
    </html>
  );
}
