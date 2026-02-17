import { motion } from "framer-motion";
import CanvasBanner from "../banners/excalidraw";
import FlowBanner from "../banners/flowboard";
import SynapseBanner from "../banners/synapse";
import { ProjectComponent } from "../components/Project";

export function ProjectSection() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl  font-display font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg">
            Things I've built and shipped
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          <ProjectComponent
            variant="blue"
            name="Kanban-Board"
            heading="Real time task Management Platform for team works to collaborate."
            descript="A real-time task management and collaboration workspace designed to help teams coordinate work, track progress, and stay in sync. It supports live task updates, image and PDF uploads, and dynamic progress visualization through interactive charts. The project places a strong emphasis on reliability and production readiness, with comprehensive end-to-end and component-level testing to ensure stability under real-world usage."
            image={<FlowBanner />}
            github="https://github.com/ichigoat21/flowboard"
            live="https://flowboard-cyan-ten.vercel.app/"
          />
          <ProjectComponent
            variant="light-blue"
            name="Canvas"
            heading="Real time collaborative web canvas"
            descript="A real-time, multi-user collaborative canvas application architected for low-latency interaction and scalable development. Built within a Turborepo-based monorepo, it enables shared tooling and consistent builds across services. The system uses JWT-based authentication, a strongly typed database layer, and real-time WebSocket communication to synchronize canvas state across multiple users with minimal delay and high consistency."
            image={<CanvasBanner />}
            github="https://github.com/ichigoat21/excalidraw-clone"
            live="https://excalidraw-clone-web.vercel.app/"
          />
          <ProjectComponent
            variant="dark-blue"
            name="Synapse"
            heading="Your Personal Link Management Platform for web."
            descript="A robust, backend-driven link management system built with a strong focus on security, scalability, and clean API design. The application enforces strict runtime validation and type safety across all request boundaries, while secure authentication flows ensure safe credential storage and access control."
            image={<SynapseBanner />}
            github="https://github.com/ichigoat21/synapse"
            live="https://synapse-5z35.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}