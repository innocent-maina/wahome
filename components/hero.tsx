import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Web Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-4xl md:text-5xl font-bold !leading-[1.2] tracking-tight">
          Crafting Scalable & Delightful Web Experiences
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-muted-foreground">
          Hi, I’m Innocent Maina — a Full Stack Developer passionate about
          building fast, functional, and visually stunning web apps. I design
          and build modern, performant web applications using tools like
          Next.js, TypeScript, and Supabase. Let’s ship something great
          together. Let’s build the future of the web, one project at a time. 🚀
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            See What I Do <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
