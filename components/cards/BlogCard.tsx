import { BlogPost } from "@/types/Blog";
import { motion } from "framer-motion";
import Image from "next/image";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:border-orange transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="font-mono text-[11px] text-muted mb-2">{post.date}</p>
        <h3 className="text-base font-semibold text-foreground mb-3 leading-snug group-hover:text-orange transition-colors">
          {post.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-sm text-orange font-medium">
          Read more
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
        </span>
      </div>
    </motion.a>
  );
};
