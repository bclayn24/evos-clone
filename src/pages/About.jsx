import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
		<React.Fragment>
			<main className="font-inter leading-[22px]">
				<section className="pb-32">
					<img src="/src/assets/images/about_banner.png" alt="about banner" className="w-[100%] h-auto" />
					<div className="container max-w-[1360px] w-full">
						<div className="bg-white m-auto w-[1150px] py-20 px-24 relative top-[-60px] border-2">
							<h1 className="text-center text-[40px] font-bold leading-[52px] mb-4 tracking-[0.00938em]">О нас</h1>
							<p className="text-center text-[#585c7b] text-[20px] leading-[32px] font-normal">Знаете ли вы, что самый первый филиал компании был открыт в далеком 2006 году и успешно функционирует и по сей день? За 15 лет компания выросла из небольшой закусочной на автобусной остановке в современную развернутую сеть, включающую на сегодняшний день более 65 ресторанов по всему Узбекистану, собственную самую быструю службу доставки, современную развернутую IT-инфраструктуру и более 3 000 сотрудников.</p>
						</div>
						<ul className="flex items-center justify-center">
							<li className="flex gap-7">
								<div className="bg-[#f5fff3]  rounded-xl w-[80px] h-[80px] flex justify-center items-center">
									<img src="/src/assets/images/bx_map.svg" alt="about icon" />
								</div>
								<div className="w-[270px]">
									<h3 className="text-[#131022] text-[40px] font-bold leading-[52px] tracking-[0.00938em]">15</h3>
									<p className="w-[165px] text-[#585c7b] text-[16px] leading-[25px] font-bold tracking-[0.00938em]">лет большой истории</p>
								</div>
							</li>
							<li className="flex gap-7">
								<div className="bg-[#f5fff3] rounded-xl  w-[80px] h-[80px] flex justify-center items-center">
									<img src="/src/assets/images/bx_line.svg" alt="about icon" />
								</div>
								<div className="w-[270px]">
									<h3 className="text-[#131022] text-[40px] font-bold leading-[52px] tracking-[0.00938em]">71</h3>
									<p className="w-[165px] text-[#585c7b] text-[16px] leading-[25px] font-bold tracking-[0.00938em]">ресторана по всему Узбекистану</p>
								</div>
							</li>
							<li className="flex gap-7">
								<div className="bg-[#f5fff3]  rounded-xl w-[80px] h-[80px] flex justify-center items-center">
									<img src="/src/assets/images/add_group.svg" alt="about icon" />
								</div>
								<div className="w-[270px]">
									<h3 className="text-[#131022] text-[40px] font-bold leading-[52px] tracking-[0.00938em]">3 000 +</h3>
									<p className="w-[165px] text-[#585c7b] text-[16px] leading-[25px] font-bold tracking-[0.00938em]">сотрудников</p>
								</div>
							</li>
						</ul>
						<ul className="py-28 flex flex-wrap items-center justify-between gap-y-10">
							<li className="w-[48%] bg-white p-10">
								<h3 className="mb-[16px] font-bold text-[28px] leading-[121.4285714286%] tracking-[.337647px]">История EVOS</h3>
								<p className="mb-[27px] text-[14px] font-normal leading-[160%] tracking-[0.00938em]">История компании начинается с её основателя, Каюмова Хусамиддина. 2006 году Хусамиддин и его партнёры основали компанию Burger, первая торговая точка, она была открыта на остановочном комплексе-так...</p>
								<img src="/src/assets/images/evos_history.png" alt="evos history" className="mb-[20px]" width={417} height={194} />
								<Link to="/about/history" className="text-[#309b42] leading-[22.4px] tracking-[0.00938em] font-medium ml-[10px]">Подробнее <span>-&gt;</span></Link>
							</li>
							<li className="w-[48%] bg-white p-10">
								<h3 className="mb-[16px] font-bold text-[28px] leading-[121.4285714286%] tracking-[.337647px]">Бренд EVOS</h3>
								<p className="mb-[27px] text-[14px] font-normal leading-[160%] tracking-[0.00938em]">В 2011 году компания поменяла свое название и стала называться EVOS – как отражение глобальной цели инноваций и эволюции во всем – в ассортименте и качестве новых блюд</p>
								<img src="/src/assets/images/brand_banner.png" alt="evos history" className="mb-[20px]" width={417} height={194} />
								<Link to="/about/history" className="text-[#309b42] leading-[22.4px] tracking-[0.00938em] font-medium ml-[10px]">Подробнее <span>-&gt;</span></Link>
							</li>
							<li className="w-[48%] bg-white p-10">
								<h3 className="mb-[16px] font-bold text-[28px] leading-[121.4285714286%] tracking-[.337647px]">Семья EVOS</h3>
								<p className="mb-[27px] text-[14px] font-normal leading-[160%] tracking-[0.00938em]">Начали появляться новые филиалы, росла команда, но несмотря на численность - мы одна большая семья! Мы поддерживаем и являемся опорой друг для друга. Мы стараемся создавать такую атмосферу, где в ...</p>
								<img src="/src/assets/images/evos_family.png" alt="evos history" className="mb-[20px]" width={417} height={194} />
								<Link to="/about/history" className="text-[#309b42] leading-[22.4px] tracking-[0.00938em] font-medium ml-[10px]">Подробнее <span>-&gt;</span></Link>
							</li>
							<li className="w-[48%] bg-white p-10">
								<h3 className="mb-[16px] font-bold text-[28px] leading-[121.4285714286%] tracking-[.337647px]">Действительно быстрая доставка</h3>
								<p className="mb-[27px] text-[14px] font-normal leading-[160%] tracking-[0.00938em]">Компания EVOS активно развивает направление доставки - это экономит время, быстро и удобно. Более того, это один из обязательных элементов сервиса, который всегда высоко ценится и востребован покупателем.</p>
								<img src="/src/assets/images/delivery.png" alt="evos history" className="mb-[20px]" width={417} height={194} />
								<Link to="/about/history" className="text-[#309b42] leading-[22.4px] tracking-[0.00938em] font-medium ml-[10px]">Подробнее <span>-&gt;</span></Link>
							</li>
						</ul>
						<div className="bg-[#32724e] flex justify-between items-center px-12 py-8 rounded-lg">
							<img src="/src/assets/images/notifications.svg" alt="notifications icon" width={45} height={45} />
							<p className="font-extrabold text-[24px] w-[650px] leading-[140%] tracking-[0.00938em] text-white">Хотите получать самые свежие новости про новинки, акции, специальные предложения?</p>
							<form method="post" action="/notifications" autoComplete="off">
								<input type="text" placeholder="Your email" className="outline-none p-3 rounded-md rounded-r-none text-[#73797e] text-[17px] font-medium" />
								<button className="bg-[#309b42] text-white p-3 rounded-md rounded-l-none">Отправить</button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</React.Fragment>
	);
}
