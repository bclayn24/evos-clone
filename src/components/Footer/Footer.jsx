import { Link } from "react-router-dom";

export default function Footer() {
  return (
		<footer className="font-inter leading-[22px] bg-[#ebedf8] py-12">
			<div className="container max-w-[1360px] w-full">
				<div className="flex items-center justify-between border-b-2 border-[#d3d5df] pb-[50px]">
					<ul></ul>
					<ul className="flex items-center gap-5 font-medium text-[17px] tracking-[.41px] whitespace-nowrap">
						<li><Link to="/">Главная</Link></li>
						<li><Link to="/branches">Филиалы</Link></li>
						<li><Link to="/vacancy">Вакансии</Link></li>
						<li><Link to="/news">Новости</Link></li>
						<li><Link to="/about">О нас</Link></li>
						<li><Link to="/contacts">Контакты</Link></li>
					</ul>
					<div className="flex gap-6">
						<a href="https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US&pli=1" target="_blank" rel="noreferrer noopener"><img src="/src/assets/images/app_store.svg" alt="app store" width={169} height={56} /></a>
						<a href="https://apps.apple.com/us/app/evos-uz/id1595897228" target="_blank" rel="noreferrer noopener"><img src="/src/assets/images/google_play.svg" alt="app store" width={169} height={56} /></a>
					</div>
				</div>
				<div className="py-7 flex justify-between">
					<div>
						<p className="text-[17px] font-medium tracking-[0.00938em]">© Evos 2006 - 2025 All rights reserved</p>
						<a href="/politics" target="_blank" className="text-[#077855] font-550 font-inter text-[12px] tracking-[-.41px]">Публичная оферта</a>
					</div>
					<div className="flex items-center gap-6">
						<a href="https://www.instagram.com/evosuzbekistan" target="_blank" rel="noreferrer noopener" ><img src="/src/assets/images/instagram.svg" alt="instagram icon" width={24} height={24} /></a>
						<a href="https://www.facebook.com/evosuzbekistan" target="_blank" rel="noreferrer noopener" ><img src="/src/assets/images/facebook.svg" alt="facebook icon" width={24} height={24} /></a>
						<a href="https://t.me/evosdeliverybot" target="_blank" rel="noreferrer noopener" ><img src="/src/assets/images/telegram.svg" alt="telegram icon" width={24} height={24} /></a>
					</div>
				</div>
			</div>
		</footer>
	);
}
