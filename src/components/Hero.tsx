import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="container py-20 md:py-32 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Robotics
            </span>{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Software
            </span>{" "}
          </h1>
          <h2 className="inline">Engineer</h2>
        </main>

        <p className="text-xl text-muted-foreground">
          High-performance Qt/C++ applications for multi-robot control,
          configuration, and real-time monitoring.
        </p>

        <p className="text-xl text-muted-foreground">
          Experience across the robot stack: backend + web/mobile monitoring,
          and embedded STM32 (C) integration.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-2">
          <a href="#projects">
            <Button className="w-auto px-8">View My Work</Button>
          </a>

          <a
            href="#cta"
            className={`${buttonVariants({ variant: "outline" })} w-auto px-8`}
          >
            Get In Touch
            <ChatBubbleIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
