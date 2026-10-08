import type { ReactNode } from "react";
import Link from "next/link";

export function LegalShell({
  title,
  children,
}: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/90">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5">
          <Link href="/" className="brand-lockup"><span className="brand-name">СДЕЛАЙ ДОМА</span></Link>
          <Link href="/#order" className="header-order rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em]">Вернуться к заказу</Link>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <p className="eyebrow">Черновик для заполнения</p>
        <h1 className="display-font mt-5 text-4xl leading-tight sm:text-6xl">{title}</h1>
        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5 leading-relaxed">
          Перед публикацией заполните все поля, выделенные оранжевым, и передайте документ юристу на проверку с учётом вашей формы работы, способов оплаты и доставки.
        </div>
        <div className="legal-copy mt-10 space-y-8">{children}</div>
      </article>
    </main>
  );
}

export function Fill({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="rounded bg-primary/10 px-1 font-semibold text-primary">[ЗАПОЛНИТЬ: {children}]</span>;
}