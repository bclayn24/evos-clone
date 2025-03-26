import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CareerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ul>
      <Slider {...settings}>
        <li>
          <div className="flex items-center justify-around">
            <img src="/src/assets/images/user1.webp" alt="evos workers image" />
            <div className="w-[705px]">
              <h2 className="text-[#585c7b] text-[30px] font-550 mb-4">
                Мирзаахмедов Музаффар
              </h2>
              <p className="flex flex-col text-[#585c7b] text-[17px] leading-[28px] font-medium tracking-[0.00938em]">
                <span className="mb-2">
                  в 2013 году Музаффар начал свою деятельность с кассира в
                  филиале Софийский. Показав желание и стремление к работе, уже
                  на следующий год, был переведен на должность младшего, а еще
                  через год – на должность старшего менеджера ресторана.
                  Музаффар проявил себя как сильный и ответственный руководитель
                  и уже в 2018 году возглавил Службу безопасности в роли
                  Директора.
                </span>
                <span>
                  Максимально проявив себя и еще раз подтвердив сильные навыки и
                  компетенции управленца, в 2020 году – Музаффар был назначен
                  Операционным директором компании. В данный момент Мирзаахмедов
                  Музаффар является одним из самых ключевых сотрудников для
                  компании
                </span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-around">
            <img src="/src/assets/images/user2.webp" alt="evos workers image" />
            <div className="w-[705px]">
              <h2 className="text-[#585c7b] text-[30px] font-550 mb-4">
                Юлдашева Гульчехра
              </h2>
              <p className="text-[#585c7b] text-[17px] leading-[28px] font-medium tracking-[0.00938em]">
                Пришла в EVOS кассиром в филиал Паркентский в 2016 году.
                Приступив к должности с высокой вовлеченностью и энтузиазмом,
                Гульчехра проявляла особый интерес к работе с персоналом. Спустя
                4 года, Гульчехра смогла попробовать себя на должности
                рекрутера, а сегодня, благодаря накопленному опыту и
                приобретенным навыкам в новой сфере, Гульчехра является
                высокоценным специалистом по обучению персонала компании
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-around">
            <img src="/src/assets/images/user3.webp" alt="evos workers image" />
            <div className="w-[705px]">
              <h2 className="text-[#585c7b] text-[30px] font-550 mb-4">
                Шолатифов Абдуллох
              </h2>
              <p className="text-[#585c7b] text-[17px] leading-[28px] font-medium tracking-[0.00938em]">
                в 2018 году приступил к работе кассира в филиале на EVOS
                Паркентский, где показал себя целеустремленным, искренне любящим
                свою работу сотрудником, после чего начал быстрый рост по
                карьерной лестнице:
              </p>
							<ul className="list-disc ml-7 my-1.5 text-[#585c7b] text-[17px] leading-[28px] font-normal tracking-[0.00938em]">
								<li>Старший кассир в 2019 г.</li>
								<li>Младший менеджер в 2020 г.</li>
								<li>Старший менеджер в 2021 г.</li>
								<li>Директор ресторана в 2021 г.</li>
							</ul>
              <p className="text-[#585c7b] text-[17px] leading-[28px] font-medium tracking-[0.00938em]">
                Сегодня Абдуллох успешно исполняет на должности Консультанта по
                производству в городе Ташкент и под его операционное руководство
                вверено несколько крупных ресторанов сети. Вся команда ценит
                профессиональные качества Абдуллоха и уверена в его дальнейшем
                карьерном продвижении.
              </p>
            </div>
          </div>
        </li>
      </Slider>
    </ul>
  );
}
