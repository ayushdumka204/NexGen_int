import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../data";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            <div>
              <h1 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] max-w-3xl">
                <span className="block text-[var(--color-primary)]">
                  {blog.title}
                </span>
              </h1>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-700">
                <p>{blog.excerpt}</p>
                <p>
                  This article explores the research approach, the evolving role
                  of data, and the practical implications for teams that need
                  faster, more confident decisions.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white shadow-sm">
              <div className="relative h-full min-h-[320px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-8 text-lg leading-8 text-slate-900">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
