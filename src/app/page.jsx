import About from '@/components/about/About';
import Banner from '@/components/banner/Banner';
import Contact from '@/components/contact-us/Contact';
import Services from '@/components/services/Services';
import Statistics from '@/components/statistics/Statistics';
import Testimonials from '@/components/testimonials/Testimonials';
import TheHub from '@/components/theHub/TheHub';


async function getData() {
  const res = await fetch('https://admin.codehubsolutions.net/api/home', { cache: 'no-store' });
  return await res.json();
}

async function Home() {
  const data = await getData();
  const bannerSettings = data?.settings;
  const services = data?.services;
  const theHubSections = data?.the_hub_sections;
  const testimonials = data?.testimonials;
  const statistics = data?.statistics;
  const formSettings = data?.form_settings;
  return (
    <>
      <Banner
        bannerTitle={bannerSettings?.banner_title}
        bannerSubtitle={bannerSettings?.banner_subtitle}
        bannerText={bannerSettings?.banner_text}
        bannerImages={bannerSettings?.full_path?.banner_images} />
      <About
        aboutTitle={data?.settings?.about_section_title}
        aboutDescription={data?.settings?.about_section_description}
        aboutImage={data?.settings?.full_path?.about_section_image} />
      <Services
        servicesTitle={data?.settings?.services_section_title}
        servicesSubtitle={data?.settings?.services_section_subtitle}
        services={services}
      />
      <TheHub TheHubTitle={data?.settings?.the_hub_section_title} theHubSections={theHubSections} />
      <Statistics statistics={statistics} bgImage={data?.settings?.full_path?.statistics_bg_image} />
      <Testimonials posts={testimonials} TestimonialTitle={data?.settings?.testimonials_section_title} />
      <Contact formSettings={formSettings} title={data?.settings?.contact_section_title} services={services} />
    </>
  );
}

export default Home
