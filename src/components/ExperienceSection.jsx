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
    color: "text-green-400", // You can switch this to a CSS variable if you define it
    date: "May 2025 – Present",
    description:
      "Designing custom PCBs for drone systems like PDBs, ensuring full compatibility across all electronic components.",
    link: "https://www.linkedin.com/company/mcmaster-aerial-drone-robotics-club/",
  },
  {
    role: "PCB Design Intern",
    company: "Jitterware",
    color: "text-red-400", // Same here — define a red in your HSL scheme if needed
    date: "Feb. 2025 – Mar. 2025",
    description:
      "Designed a cost-efficient custom PCB for a Hall-effect keyboard using KiCad",
    link: "https://www.jitterware.com/",
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="py-16 px-6 relative z-10"
      id="experience"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center">Experience</h2>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl border transition duration-300 group"
            style={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              boxShadow: "0 0 0 transparent",
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className={`mt-1 font-medium ${exp.color}`}>
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
                  <ExternalLink />
                </a>
              )}
            </div>

            <div
              className="mt-3 inline-block text-sm px-3 py-1 rounded-md"
              style={{
                backgroundColor: "hsl(var(--border) / 0.3)",
                color: "hsl(var(--foreground) / 0.7)",
              }}
            >
              {exp.date}
            </div>

            <p
              className="mt-4 text-sm"
              style={{ color: "hsl(var(--foreground) / 0.85)" }}
            >
              {exp.description}
            </p>

            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: "0 0 25px hsl(var(--primary) / 0.3)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
