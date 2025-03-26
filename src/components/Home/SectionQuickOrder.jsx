export default function SectionQuickOrder() {
  return (
    <section className="mb-32">
      <div className="container max-w-[1360px] w-full">
				<div className="flex items-center">
          <img src="/src/assets/images/phone.webp" alt="phone image" className="w-[309px] h-[680px]" />
          <div className="ml-28 mr-4">
            <h2 className="font-black leading-[39px] text-[40px]"><span className="text-[#009c37] text-[75px] leading-[50px] block mb-[25px]">Любимые блюда</span> в один клик</h2>
            <p className="text-[#9397ad] text-[18px] font-normal mt-[30px] mb-21 leading-7" >Включите камеру на вашем телефоне и отсканируйте QR-код</p>
            <ul className="mt-[48px] flex flex-col gap-y-12">
              <li className="flex items-center gap-x-6">
                <span className="bg-[#ebedf8] w-[60px] h-[60px] flex items-center justify-center rounded-lg"><img src="/src/assets/images/shield.svg" alt="shield icon" width={28} height={28}/></span>
                <h3 className="text-[18px] leading-[128%] font-medium">Находите адрес удобного филиала</h3>
              </li>
              <li className="flex items-center gap-x-6">
                <span className="bg-[#ebedf8] w-[60px] h-[60px] flex items-center justify-center rounded-lg"><img src="/src/assets/images/credit_card.svg" alt="credit card icon" width={28} height={28}/></span>
                <h3 className="text-[18px] leading-[128%] font-medium">Заказывайте любимые блюда</h3>
              </li>
              <li className="flex items-center gap-x-6">
                <span className="bg-[#ebedf8] w-[60px] h-[60px] flex items-center justify-center rounded-lg"><img src="/src/assets/images/bars_graphic.svg" alt="bars graphic icon" width={28} height={28}/></span>
                <h3 className="text-[18px] leading-[128%] font-medium">Следите за акциями и специальными предложениями</h3>
              </li>
              <li className="flex items-center gap-x-6">
                <span className="bg-[#ebedf8] w-[60px] h-[60px] flex items-center justify-center rounded-lg"><img src="/src/assets/images/communication.svg" alt="shield icon" width={28} height={28}/></span>
                <h3 className="text-[18px] leading-[128%] font-medium">Получайте свой заказ и наслаждайтесь! Приятного аппетита!</h3>
              </li>
            </ul>
          </div>
          <div className="mt-32">
            <div className="flex flex-col items-center mb-[30px] gap-y-3">
              <a href="https://apps.apple.com/us/app/evos-uz/id1595897228" target="_blank" rel="noreferrer noopener"><img src="/src/assets/images/google_play.svg" alt="app store" width={189} height={56} /></a>
              <img src="/src/assets/images/app_store_qr.svg" alt="app store qr" width={135} height={140} />
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <a href="https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US&pli=1" target="_blank" rel="noreferrer noopener"><img src="/src/assets/images/app_store.svg" alt="app store" width={189} height={56} /></a>
              <img src="/src/assets/images/google_play_qr.svg" alt="app store qr" width={135} height={140} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}