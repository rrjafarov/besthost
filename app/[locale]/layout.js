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



















// import NavigationProgress from "@/components/NavigationProgress";
// import "./globals.scss";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";

// export const metadata = {
//   title: "Best Host",
//   description: "Best Host",
// };

// async function fetchHeaderFooterData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   const [contact, category, services, translations] = await Promise.all([
//     axiosInstance.get("/page-data/contact"),
//     axiosInstance.get("/page-data/categories"),
//     axiosInstance.get("/page-data/services"),
//     axiosInstance.get("/translation-list"),
//   ]);

//   return {
//     contact: contact.data,
//     category: category.data,
//     services: services.data,
//     translations: translations.data,
//   };
// }

// export default async function RootLayout({ children }) {
//   const { contact, category, services, translations } =
//     await fetchHeaderFooterData();

//   return (
//     <html lang="en">
//       <body suppressHydrationWarning>
//         <NavigationProgress />

//         {/* Header */}
//         <Header
//           t={translations}
//           contact={contact.data}
//           category={category}
//         />

//         {/* Page Content */}
//         {children}

//         {/* Footer */}
//         <Footer
//           category={category}
//           servicesData={services.data.data}
//           t={translations}
//           contact={contact.data}
//         />
//       </body>
//     </html>
//   );
// }