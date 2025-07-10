import { useState } from "react";

const projectData = {
  Electrical: [
    {
      title: "Ideal Voltage-Controlled Switch Design",
      description:
        "Designed and tested MOSFET-based voltage-controlled switches to explore real-world deviations from ideal switch behavior.",
      link: "https://github.com/your-electrical-project",
      image: "/images/Switch.png",
    },
    {
      title: "DC Power Supply",
      description:
        "Created a 120V AC to 3V DC supply with ±0.1V tolerance using a bridge rectifier.",
      link: "https://github.com/your-dc-project",
      image: "/images/ACDC.png",
    },
    {
      title: "MOSFET-Based XOR Gate Design and Testing",
      description:
        "Designed a CMOS-based XOR gate with optimized PMOS/NMOS sizing for balanced timing.",
      link: "https://github.com/your-electrical-project",
      image: "/images/XOR.png",
    },
    {
      title: "3-bit Digital to Analog Converter",
      description:
        "Built a 3-bit digital-to-analog converter using a summing amplifier and binary-weighted resistors, achieving accurate voltage output and linear signal conversion.",
      link: "https://github.com/your-electrical-project",
      image: "/images/DAC.png",
    },
    {
      title: "Linear Amplifier",
      description:
        "Designed, simulated, and built a linear amplifier to deliver a ±0.5V signal from a 100Ω source to a 100Ω load with less than 10% attenuation.",
      link: "https://github.com/your-electrical-project",
      image: "/images/LinearAmp.png",
    },
  ],
  FPGA: [
    {
      title: "Image Decompression System",
      description:
        "Designed and simulated a hardware image decompression pipeline on FPGA with memory interfacing and optimized logic using SystemVerilog and ModelSim",
      link: "https://github.com/your-fpga-project",
      image: "/images/decompressor.png",
    },
    {
      title: "PONG GAME",
      description:
        "Developed a real-time Pong game on FPGA using VHDL, featuring VGA video output, FSM-based game logic, and responsive button input.",
      link: "https://github.com/your-imu-project",
      image: "/images/Pong.png",
    },
  ],
  Firmware: [
    {
      title: "3D Spatial Scanner",
      description:
        "A real-time 3D spatial scanner built with an MSP432 microcontroller, ToF sensor, and stepper motor, featuring UART-based data visualization in Python.",
      link: "https://github.com/your-motor-firmware",
      image: "/images/SpatialMapping.png",
    },
    {
      title: "Pacemaker System",
      description:
        "Simulated a pacemaker system in Simulink with modular control logic, hardware abstraction, and a Python GUI for real-time configuration.",
      link: "https://github.com/your-pacemaker-project",
      image: "/images/pacemaker.png",
    },
  ],
};

export default function ProjectSection() {
  const [category, setCategory] = useState("Electrical");

  return (
    <section
      id="projects"
      className="py-20 px-4"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16">Projects</h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(projectData).map((key) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                category === key
                  ? "shadow-[0_0_10px_hsl(var(--primary)/0.4)]"
                  : "hover:brightness-110"
              }`}
              style={{
                backgroundColor:
                  category === key
                    ? "hsl(var(--primary))"
                    : "hsl(var(--card))",
                color:
                  category === key
                    ? "hsl(var(--primary-foreground))"
                    : "hsl(var(--foreground))",
              }}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {projectData[category].map((proj, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border relative group transition duration-300"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
            >
              {/* Image */}
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>

              {/* Description */}
              <p
                className="text-sm mb-3"
                style={{ color: "hsl(var(--foreground) / 0.75)" }}
              >
                {proj.description}
              </p>

              {/* GitHub Link */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: "hsl(var(--primary))" }}
              >
                View on GitHub →
              </a>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  boxShadow: "0 0 25px hsl(var(--primary) / 0.3)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
