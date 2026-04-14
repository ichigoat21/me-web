import { motion } from "framer-motion";
import CanvasBanner from "../banners/excalidraw";
import FlowBanner from "../banners/flowboard";
import SynapseBanner from "../banners/synapse";
import { ProjectComponent } from "../components/Project";
import {  Devmuse } from "../banners/devmuse";
import { Chat } from "../banners/chat";

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
              image={<Chat/>}
              github="https://github.com/ichigoat21/roomly"
              live="https://roomly-chat.vercel.app/"
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
              image={<Devmuse/>}
              github="https://github.com/ichigoat21/devmuse"
              live="https://devmuse.vercel.app/"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}