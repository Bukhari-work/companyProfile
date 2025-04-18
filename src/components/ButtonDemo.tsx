import { ArrowRightIcon, Loader2Icon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">
        <SendIcon /> Send
      </Button>
      <Button variant="outline" className="group">
        Learn More
        <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
      <Button disabled variant="outline">
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" size="sm" className="group" asChild>
        <a href="#/">
          Go to Dashboard
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </Button>
    </div>
  );
}
