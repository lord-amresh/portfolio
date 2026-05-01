import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Techno | Full-Stack MERN E-Commerce Platform",
    description:
      "Engineered a comprehensive, end-to-end e-commerce solution utilizing the MERN stack (MongoDB, Express, React, Node.js). Developed a robust RESTful API to manage complex data relations, including product inventories, user profiles, and order histories. Integrated JWT-based authentication and a secure third-party payment gateway to ensure a safe and seamless checkout experience for users.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Khalti", "MongoDB", "Tailwind"],
    link: "https://ecommerce-mern-cfr6.vercel.app/",
    github: "#",
  },
    {
    title: "StudyNp Quiz | Dynamic FullStack Quiz Application",
    description:
      "A high-performance SaaS-based quiz application built with React, Node.js, and MongoDB. Key technical implementations include role-based access control (RBAC), secure authentication, and a custom-built Admin Dashboard for payment verification. I focused on clean state management and responsive UI using Tailwind CSS to ensure a seamless experience across all devices. Built with the MERN stack to help students prepare for technical exams and coding interviews.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express","React", "JavaScript", "NodeJS", "Tailwind"],
    link: "https://quiz.amresh.com.np/",
    github: "#",
  },
  {
    title: "SpendWise | Dynamic Expense Tracking Application",
    description:
      "Architected a sleek, data-driven financial management tool using React to help users visualize and control personal spending. Developed an interactive dashboard that translates raw transaction data into actionable insights through dynamic charting and categorized breakdowns. The application prioritizes a friction-less user experience with instant UI feedback and persistent data handling for reliable long-term tracking.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "NodeJS", "Tailwind"],
    link: "https://finance-tracker-nine-alpha-73.vercel.app/",
    github: "#",
  },
  
  {
    title: "Productivity Pro | React Task Management App",
    description:
      "Developed a high-performance, responsive Task Management application using React and Tailwind CSS. Implemented persistent data storage via Local Storage and integrated a dynamic filtering system to categorize tasks by completion status. Focused on State Management and optimized component rendering to ensure a seamless, zero-lag user experience across mobile and desktop devices.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "NodeJS", "Tailwind"],
    link: "https://to-do-app-psi-bice.vercel.app/",
    github: "#",
  },
  {
    title: "Queue Management Application",
    description:
      "A real-time virtual queuing solution designed to replace physical lines with a digital check-in system. It allows businesses to manage customer flow while providing users with live updates on their position in the queue.",
    image: "/projects/project4.png",
    tags: ["React", "JavaScript", "NodeJS", "Tailwind"],
    link: "https://2-queue-management-system.vercel.app/",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
