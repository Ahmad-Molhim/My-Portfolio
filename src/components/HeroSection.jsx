import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* Optional background visual (e.g. glowing blob) */}
      {/* <div className="absolute top-1/3 left-[60%] w-[400px] h-[400px] bg-purple-500 opacity-10 blur-3xl rounded-full z-0" /> */}

      <div className="container max-w-3xl md:max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ahmad</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Molhim</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            a passionate computer engineering student with hands-on experience in embedded systems,
            Digital Design, and robotics. I've worked on a wide range of innovative projects—from building
            electronic circuits to developing systems on FPGAs. I enjoy learning new technologies and applying
            them to create practical solutions to real-world problems.
          </p>

          <a
            href="#projects"
            className="cosmic-button mt-4 opacity-0 animate-fade-in-delay-4 inline-block"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
