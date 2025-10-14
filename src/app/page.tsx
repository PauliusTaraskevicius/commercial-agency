import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Commercial agency",
    absolute: "Commercial agency",
  },
  description:
    "A results-driven commercial agency specializing in digital growth, creative strategy, and performance marketing. We help brands scale with clarity, precision, and measurable ROI.",
};

export default function Home() {
  return (
    <div className="flex h-full w-full items-baseline justify-center bg-red-300 p-4 pt-2">
      <Button variant="destructive">Hello</Button>
    </div>
  );
}
