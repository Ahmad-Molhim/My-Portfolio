import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "FPGA Developer Intern",
    company: "MARS Robotics",
    color: "text-[hsl(var(--primary))]",
    date: "May 2025 – Present",
    description:
      "Developing real-time FPGA systems for sensor and camera integration using VHDL and Xilinx tools.",
    link: "https://www.marsrobotic.com/",
  },
  {
    role: "Electrical Subteam Member",
    company: "McMaaster Aerial Robotics and Drone Team",
    color: "text-green-400",
    date: "May 2025 – Present",
    description:
      "Designing custom PCBs for drone systems like PDBs, ensuring full compatibility across all electronic components.",
    link: "https://www.linkedin.com/company/mcmaster-aerial-drone-robotics-club/",
  },
  {
    role: "PCB Design Intern",
    company: "Jitterware",
    color: "text-red-400",
    date: "Feb. 2025 – Mar. 2025",
    description:
      "Designed a cost-efficient custom PCB for a Hall-effect keyboard using KiCad",
    link: "https://www.jitterware.com/",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 flex flex-col justify-center items-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <h2 className="text-5xl font-bold mb-16 text-center">Experience</h2>

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative p-8 rounded-2xl border transition duration-300 group bg-[hsl(var(--card))] border-[hsl(var(--border))]"
          >
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">{exp.role}</h3>
                <p className={`mt-1 text-lg font-medium ${exp.color}`}>
                  {exp.company}
                </p>
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[hsl(var(--foreground))] transition"
                >
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              )}
            </div>

            <div className="mt-4 inline-block text-sm md:text-base px-4 py-1 rounded-md bg-[hsl(var(--border)/0.3)] text-[hsl(var(--foreground)/0.7)]">
              {exp.date}
            </div>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[hsl(var(--foreground)/0.85)]">
              {exp.description}
            </p>

            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_hsl(var(--primary)/0.3)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
