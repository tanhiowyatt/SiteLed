"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { MapPin, Minus, PackageCheck, Plus, Truck } from "lucide-react";
import { formatPrice, PRODUCT_PRICE } from "../../price";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const pickupPoints = [
  { id: "pvz-1", name: "Пункт выдачи Яндекс", address: "Москва, ул. Тверская, 12", hours: "Ежедневно 09:00–21:00" },
  { id: "pvz-2", name: "Постамат Яндекс", address: "Москва, ул. Лесная, 20", hours: "Ежедневно 08:00–23:00" },
  { id: "pvz-3", name: "Партнёрский пункт выдачи", address: "Москва, пр-т Мира, 51", hours: "Пн–Вс 10:00–20:00" },
];

export function OrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState<"pickup" | "courier">("pickup");
  const [selectedPickup, setSelectedPickup] = useState<(typeof pickupPoints)[number] | null>(null);
  const [consent, setConsent] = useState(false);
  const [offer, setOffer] = useState(false);
  const [message, setMessage] = useState("");

  const productTotal = PRODUCT_PRICE * quantity;
  const deliveryPrice = deliveryType === "pickup" ? 249 : 449;
  const deliveryTerm = deliveryType === "pickup" ? "2–4 дня" : "1–3 дня";
  const total = productTotal + deliveryPrice;
  const deliveryReady = deliveryType === "courier" || selectedPickup !== null;

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || !offer || !deliveryReady) return;
    setMessage(`Демонстрация готова: товар ${formatPrice(productTotal)} + доставка ${formatPrice(deliveryPrice)}. После подключения сервисов здесь откроется настоящая оплата.`);
  }

  return (
    <form onSubmit={submit} className="order-panel rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="form-label">Имя<input required name="name" maxLength={100} placeholder="Как к вам обращаться" /></label>
          <label className="form-label">Телефон<input required name="phone" type="tel" maxLength={30} placeholder="+7 ___ ___-__-__" /></label>
        </div>
        <label className="form-label">Email для чека<input required name="email" type="email" maxLength={255} placeholder="you@mail.ru" /></label>
        <label className="form-label">Адрес доставки<input required name="address" maxLength={300} placeholder="Город, улица, дом" /></label>

        <div className="rounded-2xl border border-border bg-background/70 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-semibold">Способ получения</span>

          </div>
          <RadioGroup value={deliveryType} onValueChange={(value) => setDeliveryType(value as "pickup" | "courier")} className="grid gap-3 sm:grid-cols-2">
            <label className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition ${deliveryType === "pickup" ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card"}`}>
              <RadioGroupItem value="pickup" className="mt-1" />
              <PackageCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <span><strong className="block">Пункт выдачи</strong><small className="mt-1 block text-muted-foreground">249 ₽ · 2–4 дня</small></span>
            </label>
            <label className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition ${deliveryType === "courier" ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card"}`}>
              <RadioGroupItem value="courier" className="mt-1" />
              <Truck className="mt-0.5 size-5 shrink-0 text-primary" />
              <span><strong className="block">Курьером</strong><small className="mt-1 block text-muted-foreground">449 ₽ · 1–3 дня</small></span>
            </label>
          </RadioGroup>

          {deliveryType === "pickup" ? (
            <div className="mt-4">
              {selectedPickup ? (
                <div className="rounded-xl border border-[#94bd00]/50 bg-[#f3f8df] p-4 text-sm">
                  <div className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-[#769900]" /><div><p className="font-semibold text-foreground">{selectedPickup.name}</p><p className="mt-1 text-muted-foreground">{selectedPickup.address}</p><p className="text-muted-foreground">{selectedPickup.hours}</p><p className="mt-2 font-semibold text-[#5f7b00]">249 ₽ · 2–4 дня</p></div></div>
                </div>
              ) : <p className="text-sm text-muted-foreground">Выберите удобный пункт выдачи, чтобы продолжить оформление.</p>}

              <Dialog>
                <DialogTrigger asChild><Button type="button" variant="outline" className="mt-3 w-full rounded-full">{selectedPickup ? "Изменить пункт выдачи" : "Выбрать пункт выдачи"}</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Выберите пункт выдачи</DialogTitle><DialogDescription>Демонстрационный список. После подключения Яндекс Доставки здесь появится карта с реальными пунктами, сроками и ценами.</DialogDescription></DialogHeader>
                  <div className="grid gap-3">
                    {pickupPoints.map((point) => (
                      <DialogClose asChild key={point.id}>
                        <button type="button" onClick={() => setSelectedPickup(point)} className="rounded-xl border border-border bg-card p-4 text-left transition hover:border-primary hover:bg-primary/5">
                          <span className="font-semibold">{point.name}</span><span className="mt-1 block text-sm text-muted-foreground">{point.address}</span><span className="block text-sm text-muted-foreground">{point.hours}</span><span className="mt-2 block text-sm font-semibold text-primary">249 ₽ · 2–4 дня</span>
                        </button>
                      </DialogClose>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <label className="form-label">Квартира или офис<input name="apartment" maxLength={30} placeholder="Например, 42" /></label>
              <label className="form-label">Подъезд<input name="entrance" maxLength={20} placeholder="Например, 2" /></label>
              <label className="form-label">Этаж<input name="floor" maxLength={20} placeholder="Например, 5" /></label>
              <label className="form-label">Домофон<input name="intercom" maxLength={30} placeholder="Код или номер" /></label>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
          <span className="text-sm text-muted-foreground">Количество</span>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="quantity-button" aria-label="Уменьшить количество"><Minus className="size-4" /></button>
            <span className="display-font w-8 text-center text-lg">{quantity}</span>
            <button type="button" onClick={() => setQuantity((value) => Math.min(50, value + 1))} className="quantity-button" aria-label="Увеличить количество"><Plus className="size-4" /></button>
          </div>
        </div>
        <label className="form-label">Комментарий<textarea name="comment" rows={3} maxLength={1000} placeholder="Пожелания по заказу и доставке" /></label>

        <div className="grid gap-2 border-t border-border pt-4 text-sm">
          <div className="flex justify-between text-muted-foreground"><span>Товар</span><span>{formatPrice(productTotal)}</span></div>
          <div className="flex justify-between text-muted-foreground"><span>Доставка · {deliveryTerm}</span><span>{formatPrice(deliveryPrice)}</span></div>
          <div className="mt-1 flex items-center justify-between border-t border-border pt-3"><span className="font-semibold">Итого</span><span className="display-font text-2xl text-primary">{formatPrice(total)}</span></div>
        </div>

        <div className="grid gap-3 rounded-2xl bg-muted/70 p-4">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
            <Checkbox required checked={consent} onCheckedChange={(value) => setConsent(value === true)} aria-label="Согласие на обработку персональных данных" className="mt-0.5" />
            <span>Даю <a href="/privacy#consent" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">согласие на обработку персональных данных</a> и ознакомлен(а) с <a href="/privacy#policy" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">Политикой обработки персональных данных</a>.</span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
            <Checkbox required checked={offer} onCheckedChange={(value) => setOffer(value === true)} aria-label="Принятие публичной оферты" className="mt-0.5" />
            <span>Принимаю условия <a href="/offer" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-2">Публичной оферты</a>.</span>
          </label>
        </div>

        <Button type="submit" disabled={!consent || !offer || !deliveryReady} size="lg" className="h-auto rounded-full py-4 text-sm font-bold uppercase tracking-[0.12em] shadow-lg">
          Перейти к оплате · {formatPrice(total)}
        </Button>

        {message && <output aria-live="polite" className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed">{message}</output>}
      </div>
    </form>
  );
}