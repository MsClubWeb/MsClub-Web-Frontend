import { HeroParallax } from "@/components/hero-parallax";
import { StatsCounter } from "@/components/stats-counter";
import { TestimonialSlider } from "@/components/testimonial-slider";
import UpcomingEvents from "@/components/UpcomingEvents";
import events from "@/data/events.json";
import PastEvents from "@/components/PastEvents";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { PartnersGrid } from "@/components/partners-grid";
import { FeatureHighlight } from "@/components/feature-highlight";
import { ContactForm } from "@/components/contact-form";
// import { MentorshipProgram } from "@/components/mentorship";
// import { UWUAesthetics } from "@/components/uwu-aesthetics";

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
