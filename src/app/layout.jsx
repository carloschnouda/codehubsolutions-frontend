import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AppProviders from "@/providers/AppProviders";
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";


async function getGeneralSettings() {
  const res = await fetch('https://admin.codehubsolutions.net/api/general', { cache: 'no-store' });
  return await res.json();
}

const data = await getGeneralSettings();

export let metadata = {
  title: data.seo_settings.title || "CodeHubSolutions",
  description: data.seo_settings.description || "CodeHubSolutions",
  themeColor: "#00004b",

  openGraph: {
    type: 'website',
    title: data.seo_settings.title || 'CodeHubSolutions',
    description: 'CodeHubSolutions',
    url: 'https://www.codehubsolutions.net/',
    siteName: 'CodeHubSolutions',
    images: data.seo_settings.full_path.image || 'https://www.codehubsolutions.net/og-image.png',
  },

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




  if (data?.seo_settings) {
    metadata = {
      title: data.seo_settings.title || metadata.title,
      description: data.seo_settings.description || metadata.description,
      openGraph: {
        title: data.seo_settings.title || metadata.openGraph.title,
        description: data.seo_settings.description || metadata.openGraph.description,
        images: data.seo_settings.full_path.image || metadata.openGraph.images,
      },
      themeColor: "#00004b",
    };
  }

  return (
    <>
      <html lang="en" >
        <GoogleAnalytics />
        <body>
          <AppProviders>
            <Navbar menuItems={data?.menu_items} Logo={data?.logo} />
            {children}
            <SpeedInsights />
            <Footer Logo={data?.logo} FooterSettings={data?.footer_settings} socialMedia={data?.social_media_links} footerDetails={data?.footer_details} />
          </AppProviders>
        </body>

      </html>
    </>
  );
}
