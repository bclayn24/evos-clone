import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS"

  return (
		<React.Fragment>
			<main className="font-inter leading-[22px]">
				<section className="pt-10 pb-32">
					<div className="container max-w-[1360px] w-full">
						<h1 className="text-[40px] mb-10 font-bold tracking-[0.41px] leading-[48px]">Новости</h1>
						<ul className="flex flex-wrap items-center gap-8 text-[#3e4265] font-medium leading-[22.4px] tracking-[0]">
							<li className="w-[300px] bg-white">
								<Link to="/news/breakfasts">
									<img src="/src/assets/images/news1.webp" alt="news images" width={301} height={280} />
									<h4 className="truncate mt-2 p-2">За хорошим завтраком — в EVOS!</h4>
								</Link>
							</li>
							<li className="w-[300px] bg-white">
								<Link to="/news/combo2023">
									<img src="/src/assets/images/news2.webp" alt="news images" width={301} height={280} />
									<h4 className="truncate mt-2 p-2">ЕЩЁ БОЛЬШЕ КОМБО ВО ВСЕХ РЕСТОРАНАХ EVOS</h4>
								</Link>
							</li>
							<li className="w-[300px] bg-white">
								<Link to="/news/table-service">
									<img src="/src/assets/images/news3.webp" alt="news images" width={301} height={280} />
									<h4 className="truncate mt-2 p-2">Новый сервис Table Service: Ваш комфорт — наш приоритет!</h4>
								</Link>
							</li>
							<li className="w-[300px] bg-white">
								<Link to="/news/new-branch">
									<img src="/src/assets/images/news4.webp" alt="news images" width={301} height={280} />
									<h4 className="truncate mt-2 p-2">Новый филиал EVOS «Водник» распахнул свои двери!</h4>
								</Link>
							</li>
							<li className="w-[300px] bg-white">
								<Link to="/news/playgrounds">
									<img src="/src/assets/images/news5.webp" alt="news images" width={301} height={280} />
									<h4 className="truncate mt-2 p-2">Детские площадки EVOS: уютное пространство для развития и радости.</h4>
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</React.Fragment>
	);
}
