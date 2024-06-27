import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import AppProviders from "@/providers/AppProviders";

export const metadata = {
  title: "CodeHubSolutions",
  description: "CRAFT YOUR CODING PROJECT",
  themeColor: "#00004b",
};

async function getGeneralSettings() {
  const res = axios.get('http://127.0.0.1:8000/api/general');
  return (await res).data;
}

<>
  <link
    rel="apple-touch-icon"
    href="/apple-touch-icon.png>"
    type="image/png"
    sizes="180x180"
  />

  <link
    rel="icon"
    href="/favicon-16x16.png>"
    type="image/png"
    sizes="16x16"
  />

  <link
    rel="icon"
    href="/favicon-32x32.png>"
    type="image/png"
    sizes="32x32"
  />

  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" type="image/svg" href="/safari-pinned-tab.svg" />

</>

export default async function RootLayout({ children }) {

  const data = await getGeneralSettings();

  return (
    <>
      <html lang="en" >
        <body>
          <AppProviders>
            <Navbar menuItems={data?.menu_items} Logo={data?.logo} />
            {children}
            <Footer Logo={data?.logo} FooterSettings={data?.footer_settings} socialMedia={data?.social_media_links} footerDetails={data?.footer_details} />
          </AppProviders>
        </body>
      </html>
    </>
  );
}
