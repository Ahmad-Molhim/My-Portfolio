import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-28 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 tracking-tight"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto"
        >
          Whether it's a new project, an opportunity in embedded systems, or just a question, I'm always happy to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap mb-12"
        >
          <a
            href="mailto:molhima@mcmaster.ca"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            molhima@mcmaster.ca
          </a>

          <a
            href="https://github.com/Ahmad-Molhim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ahmad-molhim/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
