import { motion } from "framer-motion";

export function AboutSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2  font-display">
            About Me
          </h2>
          <p className="text-gray-500 text-lg">Who I am and what I do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Section */}
          <motion.div
            className="bg-neutral-900 rounded-lg border border-white/10 p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hey there!</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              CS undergrad, programming for years, and intentionally optimizing my time to build strong fundamentals and real systems. I'm curious by default, obsessed with learning, and when I'm not coding, I'm probably reading or watching One Piece.
            </p>

            {/* Currently Learning */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-colors">
                  Web3
                </span>
                <span className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-colors">
                  React Native
                </span>
                <span className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-colors">
                  Rust
                </span>
              </div>
            </div>
          </motion.div>

          {/* Blog Card */}
          <motion.div
            className="bg-neutral-900 rounded-lg border border-white/10 overflow-hidden hover:border-white/20 transition-all"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://medium.com/p/63de7d3be3f4"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {/* Article Image - Replace with your article's featured image */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Blogs</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                Small Checkpoint- A year and a half in code.
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                 My first Blog on Medium, describes my early struggles and shortcomings i faced when i was starting out.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Read on Medium</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}