import Image from "next/image";
import { CandyCane, Gift, Hexagon, PackageOpen, ShoppingBag, Sparkles, Utensils } from "lucide-react";
import { OrderForm } from "./order-form";

const kit = [
  { image: "/images/mold-lifestyle-v3.webp", label: "Форма", title: "6 фигур животных", text: "Разборная алюминиевая форма с шестью разными объёмными фигурками." },
  { image: "/images/lollipops-clean-v2.webp", label: "Результат", title: "Янтарные леденцы", text: "Петушок, рыбка, слоник, уточка, зайчик и медведь с чётким рельефом." },
  { image: "/images/kit-clean-v2.webp", label: "Комплект", title: "Палочки и инструкция", text: "В коробке лежат 10 палочек и понятная инструкция по приготовлению." },
  { image: "/images/chocolate-lollipops-source.webp", label: "Ещё идея", title: "Фигурки из шоколада", text: "Форма подходит не только для карамели, но и для шоколада." },
];
const useCases = [
  { icon: CandyCane, title: "Домашние леденцы", text: "Карамель на палочке своими руками для всей семьи." },
  { icon: Gift, title: "Сладкие подарки", text: "Небольшие наборы ручной работы к празднику." },
  { icon: Utensils, title: "Детские праздники", text: "Готовить можно вместе с детьми: процесс простой и наглядный." },
  { icon: Sparkles, title: "Карамель и шоколад", text: "Одна форма — два варианта домашних фигурных сладостей." },
];
const advantages = [
  ["01", "6 разных фигур", "Петушок, рыбка, слоник, уточка, зайчик и медведь в одной форме."],
  ["02", "Плотный стык", "Половины плотно соединяются, чтобы горячая масса оставалась внутри."],
  ["03", "Алюминий · 905 г", "Тяжёлая многоразовая форма держит тепло и рассчитана на повторное использование."],
  ["04", "25,5 × 6,5 см", "Полноразмерная форма с ровными стенками и выраженным рельефом фигурок."],
  ["05", "Карамель и шоколад", "Можно готовить классические леденцы или шоколадные фигурки."],
  ["06", "10 палочек и инструкция", "Всё основное уже в коробке — для карамели нужен только сахар."],
];
const faqs = [
  ["Что входит в комплект?", "Алюминиевая форма, 10 палочек для леденцов, инструкция и картонная коробка."],
  ["Можно ли готовить шоколад?", "Да, форма подходит для горячей карамели и шоколадных фигурок."],
  ["Можно ли заказать одну штуку?", "Да, минимального заказа нет. Количество выбирается при оформлении."],
  ["Как ухаживать за формой?", "Промойте горячей водой с мягким средством и вытрите насухо. Не используйте посудомоечную машину и абразивные губки."],
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="brand-lockup" aria-label="Сделай дома"><span className="brand-name">СДЕЛАЙ ДОМА</span></a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex" aria-label="Основная навигация">
            <a href="#product">О форме</a><a href="#kit">Комплект</a><a href="#why">Преимущества</a><a href="#faq">Вопросы</a>
          </nav>
          <a href="#order" className="header-order rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em]">Заказать</a>
        </div>
      </header>

      <section className="hero-grid relative border-b border-border">
        <div className="ember-glow absolute -left-24 top-10 h-80 w-80 rounded-full" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
          <div className="relative z-10">
            <p className="eyebrow"><Sparkles className="size-3.5" /> Леденцы как в детстве дома</p>
            <h1 className="display-font mt-5 text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Металлическая форма <span className="gradient-title">для леденцов</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Полноразмерная алюминиевая форма для шести объёмных фигурок. Готовьте янтарную карамель или шоколад.<br /><span className="inline-block">10 палочек и инструкция уже в коробке.</span></p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#order" className="primary-cta">Купить за 1 290 ₽</a><a href="#product" className="secondary-cta">Посмотреть форму</a></div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              <div className="spec-item"><dt className="display-font text-primary"><PackageOpen className="size-4" /> Комплект</dt><dd className="mt-1 text-muted-foreground">10 палочек</dd></div>
              <div className="spec-item"><dt className="display-font text-primary"><Hexagon className="size-4" /> Материал</dt><dd className="mt-1 text-muted-foreground">алюминий</dd></div>
              <div className="spec-item"><dt className="display-font text-primary"><ShoppingBag className="size-4" /> Фигурки</dt><dd className="mt-1 text-muted-foreground">6 животных</dd></div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-12 pr-5 sm:pb-16 sm:pr-12">
            <div className="absolute inset-8 rounded-[3rem] bg-primary/25 blur-3xl" />
            <Image src="/images/mold-cutout-v3-opt.png" width={1200} height={800} priority alt="Две половины алюминиевой формы для леденцов" className="relative w-full -rotate-3 object-contain drop-shadow-[0_28px_24px_rgba(28,32,34,.22)]" />
            <Image src="/images/rooster-cutout.png" width={515} height={928} alt="Карамельный петушок на палочке" className="float-slow absolute -bottom-8 -left-4 h-40 w-auto object-contain drop-shadow-xl sm:-left-10 sm:h-52" />
            <Image src="/images/rabbit-cutout.png" width={562} height={946} alt="Шоколадный зайчик на палочке" className="float-fast absolute -right-1 top-1 h-36 w-auto rotate-6 object-contain drop-shadow-xl sm:-right-8 sm:h-48" />
            <span className="hero-chip absolute bottom-7 right-0">10 палочек в комплекте</span>
          </div>
        </div>
        <div className="border-t border-border bg-card"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground"><span className="text-primary">Размеры по ГОСТу СССР</span><span>25,5 × 6,5 см · 905 г</span><span className="text-primary">Для карамели и шоколада</span><span>Плотный стык</span></div></div>
      </section>

      <section id="product" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <Image src="/images/mold-source.webp" width={1200} height={800} alt="Две половины алюминиевой формы с шестью фигурками животных" className="aspect-square w-full rounded-3xl border border-border bg-[#f4f1ea] object-contain p-3 sm:mt-8" />
            <Image src="/images/chocolate-lollipops-source.webp" width={800} height={1000} alt="Шоколадные фигурки животных на палочках" className="aspect-square w-full rounded-3xl border border-border object-cover object-center" />
            <Image src="/images/lollipops-clean-v2.webp" width={1200} height={1500} alt="Готовые янтарные леденцы в виде животных" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover sm:col-span-2" />
          </div>
          <div><p className="eyebrow">О продукте</p><h2 className="section-title">Как устроена форма</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">В пазы укладываются палочки, половины плотно соединяются, а ячейки заполняются карамелью или шоколадом. Размер формы — 25,5 × 6,5 см, вес — 905 г; внутри шесть разных фигурок животных.</p>
            <div className="mt-8 grid gap-3">{[["01","Разложите палочки","Каждая палочка фиксируется в отдельном пазе."],["02","Залейте карамель","Ячейки помогают сохранить одинаковый контур."],["03","Остудите и разберите","После полного застывания аккуратно раскройте форму."]].map(([number,title,text]) => <div key={number} className="flex gap-4 rounded-2xl border border-border bg-card p-5"><span className="display-font text-lg text-primary">{number}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section className="mint-band border-y border-border"><div className="mx-auto max-w-6xl px-5 py-16"><h2 className="section-title mt-0">Одна форма — много сладких идей</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{useCases.map((item) => { const Icon = item.icon; return <article key={item.title} className="feature-card"><span className="icon-box"><Icon className="size-5" /></span><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div></div></section>

      <section id="kit" className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="kit-header"><div><p className="eyebrow">Комплект</p><h2 className="section-title">Что вы получаете</h2></div><a href="#order" className="lime-cta">Купить форму</a></div><p className="mt-4 max-w-3xl text-muted-foreground">В коробке: алюминиевая форма, 10 палочек для леденцов и инструкция по приготовлению. Для классической карамели нужен только сахар.</p><p className="mt-3 inline-flex max-w-3xl items-center gap-2 rounded-full bg-[#e5ecca] px-4 py-2 text-sm font-semibold text-[#2f5b3b]"><Sparkles className="size-4 shrink-0" />Карамели можно придать другой цвет с помощью сока, куркумы, клюквы или пищевого красителя.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{kit.map((item,index) => <article key={item.title} className={"group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl " + (index % 2 ? "lg:mt-8" : "")}><div className="relative overflow-hidden"><Image src={item.image} width={700} height={700} alt={item.title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{item.label}</span></div><div className="p-5"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.text}</p></div></article>)}</div><Image src="/images/blue-bunny-v3-opt.png" width={500} height={760} alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 top-[31rem] z-20 hidden h-60 w-auto -rotate-6 object-contain drop-shadow-2xl xl:block" />
      </section>

      <section id="why" className="bg-[#17191b] text-white"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow border-white text-white" style={{ backgroundColor: "#17191b" }}>Преимущества</p><h2 className="display-font mt-5 text-4xl leading-tight sm:text-5xl">Одна форма — много сладких вечеров</h2><Image src="/images/wash-fixed-v2.png" width={1536} height={1536} alt="Уход за закрытой металлической формой" className="mt-8 aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover" /></div><div className="grid gap-4 sm:grid-cols-2">{advantages.map(([number,title,text]) => <div key={number} className="rounded-2xl border border-white/10 bg-white/5 p-6"><span className="advantage-number display-font text-3xl">{number}</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 text-sm text-white/65">{text}</p></div>)}</div></div></section>

      

      <section id="order" className="order-surface relative"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow">Оформление заказа</p><h2 className="section-title">Купить форму для леденцов</h2><div className="mt-7 flex items-center gap-4 rounded-2xl border border-border bg-card p-5"><Image src="/images/mold-cutout-v3-opt.png" width={1200} height={800} alt="Алюминиевая форма для леденцов" className="size-24 rounded-xl bg-muted/40 object-contain p-2" /><div><p className="font-semibold">Металлическая форма</p><p className="text-sm text-muted-foreground">Форма, 10 палочек, инструкция и коробка</p><p className="display-font mt-1 text-2xl text-primary">1 290 ₽</p></div></div></div><OrderForm /></div></section>

      <section id="faq" className="mint-band border-y border-border"><div className="mx-auto max-w-3xl px-5 py-16"><h2 className="section-title mt-0">Частые вопросы</h2><div className="mt-8 grid gap-3">{faqs.map(([question,answer]) => <details key={question} className="group rounded-2xl border border-border bg-card p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{question}<span className="text-2xl font-light text-primary transition group-open:rotate-45">+</span></summary><p className="mt-3 text-sm text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span className="brand-lockup"><span className="brand-name">СДЕЛАЙ ДОМА</span></span><span>© 2026 · Форма для леденцов</span><a href="#order" className="header-order rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em]">Купить форму</a></footer>
    </main>
  );
}
