import NavigationProgress from "@/components/NavigationProgress";
import "./globals.scss";


export const metadata = {
  title: "Best Host",
  
  description: "Best Host",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
         <NavigationProgress />
        {children}
      </body>
    </html>
  );
}
