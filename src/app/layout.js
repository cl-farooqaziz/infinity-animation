// Import Fonts
import { primary } from "./configs/fonts";

// Import Css
import "./global.css";

// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "Infinity Animation - Home",
  description: "Infinity Animation",
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
