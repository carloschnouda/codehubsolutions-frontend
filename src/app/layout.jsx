import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import AppProviders from "@/providers/AppProviders";



async function getGeneralSettings() {
  const res = axios.get('https://admin.codehubsolutions.net/api/general');
  return (await res).data;
}

export let metadata = {
  title: "HomeData",
  description: "Test Description",
  openGraph: {
    type: 'website',
    title: 'HomeTest',
    description: 'CodeHubSolutions testing',
    url: 'https://codehub-solutions.vercel.app/',
    siteName: 'CodeHubSolutions',
    images: 'https://codehub-solutions.vercel.app/og-image.png',
  },
  themeColor: "#00004b",
};

//Favicon

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


  if (data?.seo_settings) {
    metadata = {
      title: data.seo_settings.title || metadata.title,
      description: data.seo_settings.description || metadata.description,
      openGraph: {
        title: data.seo_settings.title || metadata.openGraph.title,
        description: data.seo_settings.description || metadata.openGraph.description,
        images: data.seo_settings.full_path.image || metadata.openGraph.images,
      },
    };
  }

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
