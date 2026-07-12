import { HeroParallax } from "@/components/sections/hero-parallax";
import { StatsCounter } from "@/components/sections/stats-counter";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import events from "@/data/events.json";
import PastEvents from "@/components/events/PastEvents";
import { GalleryCarousel } from "@/components/sections/gallery-carousel";
import { PartnersGrid } from "@/components/sections/partners-grid";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { ContactForm } from "@/components/sections/contact-form";
// import { MentorshipProgram } from "@/components/sections/mentorship";
// import { UWUAesthetics } from "@/components/common/uwu-aesthetics";

export default function Home() {
  return (
    <>
      <HeroParallax />
<StatsCounter />
        <TestimonialSlider />
        <UpcomingEvents upcomingEvents={events} />
        <PastEvents events={events} />
        <GalleryCarousel />
        <PartnersGrid />
        <FeatureHighlight />
        {/* <MentorshipProgram />
        <UWUAesthetics /> */}
        <ContactForm />
    </>
  );
}
