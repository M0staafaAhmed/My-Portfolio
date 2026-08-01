import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/customComponents/ProjectCard';
import freshCartImg from '../assets/freshCart.webp'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import adasaImg from '../assets/adasa.webp'
import eliteHomeImg from '../assets/eliteHome.webp'
import gameArenaImg from '../assets/gameArena.webp'
import nutriPlanImg from '../assets/nutriPlan.webp'
import safeSpaceImg from '../assets/safeSpace.webp'
import vibleyImg from '../assets/vibley.webp'
import { motion } from 'motion/react';

const projects = [
    {
        title: "Fresh Cart",
        description: "freshCartDesc",
        image: freshCartImg,
        tags: ["Next.js", "React", "REST API Integration", "Sonner", "shadecn", "TypeScript", "Tailwind CSS v4"],
        repoUrl: "https://github.com/M0staafaAhmed/freshCart",
        demoUrl: "https://fresshcart.vercel.app",
    },
    {
        title: "Safe Space",
        description: "safeSpaceDesc",
        image: safeSpaceImg,
        tags: ["TypeScript", "React", "REST API Integration", "Redux Toolkit", "Tailwind CSS v4", "Express.js"],
        repoUrl: "https://github.com/M0staafaAhmed/mental-health",
        demoUrl: "https://mentall-heallth.vercel.app",
    },
    {
        title: "Adasa",
        description: "adasaDesc",
        image: adasaImg,
        tags: ["React Router", "React", "Bootstrap 5", "Font Awesome"],
        repoUrl: "https://github.com/M0staafaAhmed/adasa",
        demoUrl: "https://addaasa.vercel.app",
    },
    {
        title: "Vibley",
        description: "vibleyDesc",
        image: vibleyImg,
        tags: ["React Router", "React", "React Hooks", "axios", "zod"],
        repoUrl: "https://github.com/M0staafaAhmed/vibley",
        demoUrl: "https://vibbley.vercel.app",
    },
    {
        title: "Elite Homes",
        description: "eliteHomesDesc",
        image: eliteHomeImg,
        tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Bootstrap 5", "Responsive Design"],
        repoUrl: "https://github.com/M0staafaAhmed/eliteHome",
        demoUrl: "https://ellite-home.vercel.app",
    },
    {
        title: "Game Arena",
        description: "gameArenaDesc",
        image: gameArenaImg,
        tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design", "CSS Grid"],
        repoUrl: "https://github.com/M0staafaAhmed/GameArena",
        demoUrl: "https://gamme-arena.vercel.app",
    },
    {
        title: "Nutri Plan",
        description: "nutriPlanDesc",
        image: nutriPlanImg,
        tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design", "Fetch API", "JavaScript"],
        repoUrl: "https://github.com/M0staafaAhmed/GameArena",
        demoUrl: "https://nuttri-plan.vercel.app",
    },
]

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id='projects' className="relative z-10 py-20">
            <motion.div
                className="text-center mb-16"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                    amount: 0.2,
                }}
                transition={{
                    duration: 1,
                    ease: "easeIn",
                }}
            >
                <h2 className="text-3xl md:text-5xl text-primary font-bold uppercase [text-shadow:0_0_20px_var(--color-primary),0_0_40px_var(--color-primary)]">
                    {"<"}
                    <span className='text-white'>{t("projects")}</span>
                    {">"}
                </h2>
            </motion.div>


            <div className="container mx-auto px-3">
                <p className='text-white text-lg font-bold ms-2 mb-5 flex items-center gap-2'><span className='text-primary font-extrabold text-3xl'>{projects.length}</span> {t("selectedProjects")}</p>
                <Carousel dir="ltr" className="w-full">
                    <CarouselContent className="-ml-1">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    className="p-2"
                                    initial={{
                                        opacity: 0,
                                        y: 50
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeIn",
                                    }}
                                >
                                    <ProjectCard
                                        description={t(project.description)}
                                        image={project.image}
                                        index={index + 1}
                                        tags={project.tags}
                                        title={project.title}
                                        demoUrl={project.demoUrl}
                                        repoUrl={project.repoUrl}
                                    />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div dir='ltr' className="flex items-center gap-3 mt-5 mx-auto w-fit ">
                        <CarouselPrevious
                            className="disabled:opacity-60 size-10"
                        />
                        <CarouselNext
                            className="disabled:opacity-60 size-10"
                        />
                    </div>
                </Carousel>
                {/* <div className="w-1/3">
                    <ProjectCard
                        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis asperiores, laudantium a itaque quae dicta mollitia repellendus voluptates ipsa iste quas porro ab aspernatur, aut consequatur accusamus. Odio, itaque iusto.'
                        image={freshCartImg}
                        index={1}
                        tags={["hello", "test", "hola"]}
                        title='name'
                        demoUrl='test'
                        repoUrl='test'
                    />
                </div> */}
            </div>
        </section>
    )
}
