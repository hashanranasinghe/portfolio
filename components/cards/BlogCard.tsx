import { BlogPost } from "@/types/Blog";
import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
export const BlogCard = ({ post }: { post: BlogPost }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const, // optional cast for safety
      },
    },
  };

  return (
    <motion.div
      key={post.id}
      className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden bg-white/10 backdrop-blur-sm ">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          layout="fill"
          objectFit="fill"
          className="transition-transform duration-700 group-hover:scale-110 rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Categories badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-black text-realWhite text-xs font-semibold rounded-full backdrop-blur-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-realWhite">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-orange transition-colors duration-300">
          {post.title}
        </h3>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
            <span className="text-white">•</span>
            <span className="text-white">{post.date}</span>
          </div>
        </div>

        {/* Read more link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            className="inline-flex items-center gap-2 text-orange font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
