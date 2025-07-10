import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { BinaryRain } from "@/components/BinaryRain";
import { BinaryStream } from "@/components/BinaryStream";
import  ExperienceSection  from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import { ContactSection } from "../components/contactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}

            <ThemeToggle />
            
            {/* Background Effects */}

            <StarBackground />

            {/* {<BinaryStream/>} */}

            {/* {<BinaryRain/>} */}

            {/* NavBar */}

            <NavBar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <ExperienceSection />
                {/* <SkillsSection /> */}
                <ProjectsSection/>
                <ContactSection/>

            </main>


        </div>
    );
};

export default Home;