import { BackgroundVideo } from "@/components/BackgroundVideo";

/** Hero background — same autoplay behaviour as section videos */
export function HeroVideo() {
  return (
    <BackgroundVideo
      src="/hero.mp4"
      poster="/hero-poster.jpg"
      label="Hauzmaid cleaning service showreel"
    />
  );
}
