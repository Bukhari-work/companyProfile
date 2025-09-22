import { cn } from "@/lib/utils.ts";
import { Marquee } from "@/components/magicui/marquee.tsx";

const reviews = [
  {
    name: "Event 1",
    img: "/images/news/Global Health Security COVID-19 Task Force T20 Indonesia 2022 1.webp",
  },
  {
    name: "Event 2",
    img: "/images/news/Policy Dialogue Closing The Gap 6.webp",
  },
  {
    name: "Event 3",
    img: "/images/news/Global Health Leadership & Diplomacy Training 2.webp",
  },
  {
    name: "Event 4",
    img: "/images/news/Efforts to Improve Financial Independence of PUBLIC Hospitals 1.webp",
  },
];

const ReviewCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <figure
      className={cn(
        "relative flex h-full cursor-pointer justify-center rounded-2xl p-4",
        "hover:border-primary border-2 border-transparent hover:-translate-y-2 hover:shadow-xl",
      )}
    >
      <img
        className="h-[60dvh] w-[75dvw] rounded-xl border-2 object-cover"
        alt=""
        src={img}
      />
    </figure>
  );
};

export function MarqueePartners() {
  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="px-8 [--duration:40s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
