import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Форма для леденцов — купить напрямую",
  description: "Металлическая форма для домашних леденцов с палочками в комплекте. Заказ напрямую у продавца.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
