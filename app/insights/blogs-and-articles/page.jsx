import Image from "next/image";
import Link from "next/link";
import { blogs } from "./data";

function BlogCard({ blog }) {
  return (
    <Link href={`/insights/blogs-and-articles/${blog.slug}`} className="group block">
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100/40">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            quality={68}
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h3 className="mt-4 text-xl font-semibold text-black leading-snug line-clamp-2">
            {blog.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-black/70 line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="border-b border-black/10 bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start px-6 lg:px-12">
          <div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight max-w-xl">
              <span className="block text-[var(--color-primary)]">
                Real research ideas,
              </span>
              <span className="block text-[var(--color-accent)]">
                for better business decisions.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-black max-w-xl">
              Read concise, practical thinking on market research, data quality,
              and consumer insight so your next strategy move is sharper and
              faster.
            </p>
          </div>

          <div className="border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="relative h-[300px] sm:h-[360px] lg:h-full lg:min-h-[360px] w-full">
              <Image
                src="/blog.jpg"
                alt="Blog hero"
                fill
                className="object-cover object-[50%_45%]"
                priority
                quality={76}
                sizes="(max-width: 1023px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
