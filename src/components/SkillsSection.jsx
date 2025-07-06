import { motion } from "framer-motion";
import { Code, Cpu, Settings2 } from "lucide-react";

const skills = [
  {
    title: "Languages & Tools",
    icon: <Code className="w-6 h-6 text-primary" />,
    items: ["C/C++", "Python", "VHDL", "Verilog", "Git", "Bash"],
  },
  {
    title: "Platforms & IDEs",
    icon: <Settings2 className="w-6 h-6 text-primary" />,
    items: ["Vivado", "Vitis", "PetaLinux", "KiCad", "STM32CubeIDE", "Linux"],
  },
  {
    title: "Technologies",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    items: [
      "FPGA Design",
      "Embedded Systems",
      "PCB Design",
      "UART/I2C/SPI",
      "FreeRTOS",
      "Real-Time Data Acquisition",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center text-4xl font-bold mb-16 tracking-tight">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/20 bg-card p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="hover:text-primary transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
