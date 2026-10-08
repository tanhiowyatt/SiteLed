import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="ember-glow absolute -left-24 top-10 h-80 w-80 rounded-full" />
      <div className="ember-glow absolute bottom-[-8rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full" />
      <Link href="/" className="secondary-cta absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
        Назад
      </Link>
      <h1 className="display-font relative z-10 text-[clamp(8rem,32vw,32rem)] leading-none tracking-[-0.08em] text-primary">
        404
      </h1>
    </main>
  );
}
