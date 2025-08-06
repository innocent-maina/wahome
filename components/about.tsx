import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate About Creating Impactful Web Experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With 4+ years of hands-on experience in full-stack development, I
              specialize in building modern, scalable web applications using
              tools like React, Next.js, Node.js, and cloud platforms. I enjoy
              crafting clean, maintainable code and solving real-world problems
              with elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="https://github.com/innocent-maina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full">
                  <GithubLogo />
                  View Github
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1thpN4iLR-ZgdBgRe1jCQM-G9dtNMdhp8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full" variant="outline">
                  <Download />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-52 h-52 md:w-66 md:h-66", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/wahome.jpg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
