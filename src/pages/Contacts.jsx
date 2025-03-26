import React from "react";

export default function Contacts() {
  document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS"
  return (
    <React.Fragment>
      <main className="font-inter leading-[22px]">
        <section className="py-48">
          <div className="container max-w-[1360px] w-full">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[40px] font-bold leading-[48px] tracking-[0.41px]">
                  Контакты
                </h1>
                <ul className="mt-10 flex flex-col gap-10 w-[600px] text-end">
                  <li className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[17px] tracking-[0.00938em]">
                        Call-центр
                      </h3>
                    </div>
                    <div className="font-medium text-[15px] leading-[28px] text-[#5b6871] flex flex-col">
                      <a href="tel:+998712031212">+998 71-203-12-12</a>
                      <a href="tel:+998712035555">+998 71-203-55-55</a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-[#d4d4d6] pb-8">
                    <div>
                      <h3 className="font-medium text-[17px] tracking-[0.00938em]">
                        Телефоны доставки:
                      </h3>
                    </div>
                    <div className="font-medium text-[15px] leading-[28px] text-[#5b6871] w-[264px]">
                      <a href="tel:+998712031212">
                        +998 71-203-12-12 (единый номер доставки)
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[17px] tracking-[0.00938em]">
                        Адрес офиса:
                      </h3>
                    </div>
                    <div className="font-medium text-[15px] leading-[28px] text-[#5b6871] w-[264px]">
                      <p>
                        г. Ташкент, 100066, Чиланзарский р-н., тупик Фурката,
                        175
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[17px] tracking-[0.00938em]">
                        Часы работы офиса:
                      </h3>
                    </div>
                    <div className="font-medium text-[15px] leading-[28px] text-[#5b6871]">
                      <span>9:00 – 18:00</span>
                      <p>Выходные: суббота, воскресенье</p>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[17px] tracking-[0.00938em]">
                        Электронная почта:
                      </h3>
                    </div>
                    <div className="font-medium text-[15px] leading-[28px] text-[#5b6871]">
                      <p>HR – rabota@evos.uz</p>
                      <p>Маркетинг – marketing@evos.uz</p>
                    </div>
                  </li>
                </ul>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.66968214764!2d69.19696733361242!3d41.28256807359954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1736620772691!5m2!1sen!2s"
                width="600"
                height="527"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
