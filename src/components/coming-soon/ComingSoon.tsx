import Link from "next/link";

export interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-black py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 400px at 15% 20%, rgba(189,245,0,0.12), transparent 60%), radial-gradient(600px 400px at 85% 80%, rgba(12,87,101,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-5 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#BDF500]/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BDF500]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#BDF500]" />
          Coming Soon
        </span>

        <h1 className="font-['Outfit'] mt-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#BDF500] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#d0ff17] sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            href="/press"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Read the latest news
          </Link>
        </div>
      </div>
    </section>
  );
}