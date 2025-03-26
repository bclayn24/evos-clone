import { Link } from "react-router-dom"

export default function SectionWhyEvos() {
	return (
		<section className="mb-52">
			<div className="container max-w-[1360px] w-full">
				<h2 className="text-[40px] font-bold text-center mt-[108px] mb-[47px]">Почему EVOS?</h2>
				<ul className="flex flex-wrap">
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10 border-r-2 border-b-2">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/shield.svg" alt="shield icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Контроль качества блюд</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">Безопасность и удовольствие от еды для наших гостей – наша основная задача. Мы внедрили HАССP – свод правил организации производства, гарантирующий обеспечение на выходе качественного и безопасного для потребителя продукта. Процессы на кухне и в залах автоматизированы.</p>
					</li>
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10 border-r-2 border-b-2">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/green_location.svg" alt="location icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Всегда рядом с вами</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">71 филиал по всей республике Узбекистан. Какой ресторан EVOS рядом в Вашим домом или офисом? Расположение каждого филиала <Link to="/branches" className="text-[#ec624e]">здесь</Link></p>
					</li>
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10 border-b-2">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/add_group.svg" alt="group icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Восточное гостеприимство</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">В чем секрет наших вкусных блюд? Все очень просто. Мы готовим для вас как для своих любимых и близких, с заботой и теплотой!</p>
					</li>
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10 border-r-2">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/presentation.svg" alt="presentation icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Быстро, вкусно, натурально</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">Быстрая подача ваших любимых блюд, приготовленных исключительно из натуральных продуктов</p>
					</li>
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10 border-r-2">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/test.svg" alt="test icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Разнообразное меню</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">Мы убеждены, что каждый посетитель ресторана найдет в меню любимые блюда на любой вкус и уж точно не уйдет от нас голодным!</p>
					</li>
					<li className="hover:bg-white transition-all duration-400 w-[432px] flex flex-col items-center p-10">
						<div className="bg-[#f5fff3] w-[72px] h-[72px] flex justify-center mb-[24px]">
							<span className="flex h-[72px] items-center"><img src="/src/assets/images/stopwatch.svg" alt="stopwatch icon" width={40} height={40} /></span>
						</div>
						<h3 className="text-[#131022] font-bold text-[20px] leading-[28px] mb-[17px]">Быстрая доставка</h3>
						<p className="text-[#585c7b] leading-[26px] text-[18px] text-center">Среднее время доставки по городу Ташкент не привышает 15-20 минут</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
