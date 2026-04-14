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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg">
            Things I've built and shipped
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProjectComponent
              variant="blue"
              name="Kanban-Board"
              heading="Real time task Management Platform for team works to collaborate."
              descript="A real-time task management and collaboration workspace designed for teams to plan, track, and execute work in sync. It supports live task updates, image and PDF file uploads, and dynamic progress visualization using Chart.js."
              image={<FlowBanner />}
              github="https://github.com/ichigoat21/synapse"
              live="https://synapse-5z35.vercel.app/"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProjectComponent
              variant="light-blue"
              name="Canvas"
              heading="Real time collaborative web canvas"
              descript="A real-time, multi-user collaborative canvas application architected for low-latency interaction and scalable development. Built within a Turborepo-based monorepo, it enables shared tooling and consistent builds across services. The system uses JWT-based authentication, a strongly typed database layer, and real-time WebSocket communication to synchronize canvas state across multiple users with minimal delay and high consistency."
              image={<CanvasBanner />}
              github="https://github.com/ichigoat21/synapse"
              live="https://synapse-5z35.vercel.app/"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProjectComponent
              variant="dark-blue"
              name="Synapse"
              heading="Your Personal Link Management Platform for web."
              descript="A robust, backend-driven link management system built with a strong focus on security, scalability, and clean API design. The application enforces strict runtime validation and type safety across all request boundaries, while secure authentication flows ensure safe credential storage and access control."
              image={<SynapseBanner />}
              github="https://github.com/ichigoat21/synapse"
              live="https://synapse-5z35.vercel.app/"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProjectComponent
              variant="blue"
              name="ChatApp"
              heading="Real-time messaging platform with WebSocket technology"
              descript="A full-featured real-time chat application built with WebSockets for instant messaging. Supports one-on-one conversations, group chats, message notifications, and online/offline status indicators. Features include message history persistence, typing indicators, and end-to-end message delivery confirmation with a clean, responsive UI."
              image={
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              }
              github="https://github.com/ichigoat21/chatapp"
              live="https://chatapp.vercel.app/"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ProjectComponent
              variant="light-blue"
              name="DevMuse"
              heading="AI-powered project idea generator and development assistant"
              descript="An intelligent chatbot that helps developers discover their next project. Leverages AI to suggest personalized project ideas based on skill level, interests, and tech stack preferences. Provides detailed project breakdowns, tech recommendations, learning resources, and implementation roadmaps to turn ideas into reality."
              image={
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-md">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              }
              github="https://github.com/ichigoat21/devmuse"
              live="https://devmuse.vercel.app/"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}