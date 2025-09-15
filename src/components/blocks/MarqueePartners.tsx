import { cn } from "@/lib/utils.ts";
import { Marquee } from "@/components/magicui/marquee.tsx";

const reviews = [
  {
    name: "Jack",
    img: "/images/partners/about-us.png",
  },
  {
    name: "Jill",
    img: "/images/partners/about-us.png",
  },
  {
    name: "John",
    img: "/images/partners/about-us.png",
  },
  {
    name: "Jane",
    img: "/images/partners/about-us.png",
  },
  {
    name: "Jenny",
    img: "/images/partners/about-us.png",
  },
  {
    name: "James",
    img: "/images/partners/about-us.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <figure
      className={cn(
        "relative flex h-full cursor-pointer justify-center rounded-2xl p-8",
      )}
    >
      <img
        className="outline-primary border-invisible hover:border-primary h-32 w-32 rounded-lg border-2 object-cover hover:-translate-y-2"
        alt=""
        src={img}
      />
    </figure>
  );
};

export function MarqueePartners() {
  // NOTE: In Astro, `background` is not a standard Tailwind class.
  // Replaced `from-background` with `from-white dark:from-black` for demonstration.
  // Adjust this to match your actual background color.
  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}
