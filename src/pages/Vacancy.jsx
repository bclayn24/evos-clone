import React from "react";
import CareerSlider from "../components/Vacancy.jsx/CareerSlider";
import { Link } from "react-router-dom";

export default function Vacancy() {
  document.title =
    "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS";

  return (
    <React.Fragment>
      <main className="font-inter leading-[22px]">
        <section className="py-14">
          <div className="container max-w-[1360px] w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[40px] font-bold tracking-[0.41px] leading-[48px]">
                Вакансии
              </h1>
              <p className="w-[526px] font-medium text-[17px] text-[#6e7c87]">
                Мы по праву гордимся, что на сегодняшний день наша компания
                является одним из крупнейших работодателей для студентов и
                молодежи Узбекистана, благодаря тем условиям, которые мы создаем
                для наших сотрудников.
              </p>
            </div>
            <ul className="my-24 flex items-center justify-between">
              <li className="w-[405px] h-[650px] p-7 bg-white">
                <h3 className="text-[22px] leading-[28px] tracking-[0.35px] font-bold mb-4">
                  Оператор call-центра
                </h3>
                <ul className="list-disc h-[438px] flex flex-col gap-2 text-[#6e7c87]">
                  <li>
                    <p>опыт работы не требуется, мы всему научим;</p>
                  </li>
                  <li>
                    <p>хорошая дикция;</p>
                  </li>
                  <li>
                    <p>
                      культура и грамотность речи (знание узбекского и русского
                      языков и этикета общения);
                    </p>
                  </li>
                  <li>
                    <p>
                      хорошие коммуникативные навыки (четкость, логичность
                      высказываний, внимательность к собеседнику);
                    </p>
                  </li>
                  <li>
                    <p>
                      партнерское поведение человека в конфликтных ситуациях;
                    </p>
                  </li>
                  <li>
                    <p>стрессоустойчивость.</p>
                  </li>
                  <li>
                    <p>Приветствуется:</p>
                  </li>
                  <li>
                    <p>- опыт работы в службе поддержке или call-центре;</p>
                  </li>
                  <li>
                    <p>- понимание принципов работы сетевых устройств.</p>
                  </li>
                </ul>
                <div className="mt-16 flex items-center justify-between">
                  <button className="bg-[#f6f8f9] hover:bg-[#dadada] w-[48%] py-3.5 rounded text-[17px] font-bold tracking-[-41.px] text-[#25282a]">
                    Подробнее
                  </button>
                  <button className="bg-[#077855] hover:bg-[#1d8364] w-[48%] py-3.5 rounded text-white font-bold tracking-[-41.px] text-[17px]">
                    Откликнуться
                  </button>
                </div>
              </li>
              <li className="w-[405px] h-[650px] p-7 bg-white">
                <h3 className="text-[22px] leading-[28px] tracking-[0.35px] font-bold mb-4">
                  Курьер
                </h3>
                <ul className="h-[438px] list-disc flex flex-col gap-2 text-[#6e7c87]">
                  <li>
                    <p>Пешком, на вело-/мототранспорте, на автомобиле</p>
                  </li>
                  <li>
                    <p>Хорошое зание г. Ташкент</p>
                  </li>
                  <li>
                    <p>Наличие смартфона на базе Android</p>
                  </li>
                  <li>
                    <p>Пунктуальность и ответственность</p>
                  </li>
                  <li>
                    <p>Своеременная доставка заказа</p>
                  </li>
                </ul>
                <div className="mt-16 flex items-center justify-between">
                  <button className="bg-[#f6f8f9] hover:bg-[#dadada] w-[48%] py-3.5 rounded text-[17px] font-bold tracking-[-41.px] text-[#25282a]">
                    Подробнее
                  </button>
                  <button className="bg-[#077855] hover:bg-[#1d8364] w-[48%] py-3.5 rounded text-white font-bold tracking-[-41.px] text-[17px]">
                    Откликнуться
                  </button>
                </div>
              </li>
              <li className="w-[405px] h-[650px] p-7 bg-white">
                <h3 className="text-[22px] leading-[28px] tracking-[0.35px] font-bold mb-4 truncate">
                  Работник ресторана/Универсальный сотрудник
                </h3>
                <ul className="h-[438px] list-disc flex flex-col gap-2 text-[#6e7c87]">
                  <li>
                    <p>опыт работы не требуется, мы всему научим;</p>
                  </li>
                  <li>
                    <p>активность;</p>
                  </li>
                  <li>
                    <p>ответственность;</p>
                  </li>
                  <li>
                    <p>пунктуальность;</p>
                  </li>
                  <li>
                    <p>улыбчивость и позитивность;</p>
                  </li>
                </ul>
                <div className="mt-16 flex items-center justify-between">
                  <button className="bg-[#f6f8f9] hover:bg-[#dadada] w-[48%] py-3.5 rounded text-[17px] font-bold tracking-[-41.px] text-[#25282a]">
                    Подробнее
                  </button>
                  <button className="bg-[#077855] hover:bg-[#1d8364] w-[48%] py-3.5 rounded text-white font-bold tracking-[-41.px] text-[17px]">
                    Откликнуться
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="pb-32 pt-4">
          <div className="container max-w-[1360px] w-full">
            <h1 className="text-[40px] font-bold tracking-[0.41px] leading-[48px] mb-7">
              Основные профили
            </h1>
            <ul className="flex flex-wrap justify-between items-center gap-y-6">
              <li className="bg-white w-[640px] h-[486px] p-8">
                <div className="bg-[#077855] w-[72px] h-[72px] rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/director.svg"
                    alt="profile icon"
                  />
                </div>
                <h3 className="text-[28px] font-bold my-6">
                  Директор ресторана
                </h3>
                <p className="w-[536px] text-[#6e7c87] flex flex-col">
                  <span className="mb-6">
                    Директор ресторана это инициативный руководитель, который
                    может выстроить эффективную работу в ресторане, научит
                    каждого сотрудника своей команды работать легко, быстро и
                    правильно, создаст приятную, мотивирующую атмосферу в
                    коллективе, наведет порядок как во всех бизнес- и
                    производственных процессах и на территории кухни и зала.
                  </span>
                  <span>
                    Директор ресторана работает по стандартам и нормативам
                    компании, но всегда готов предлагать и свои идеи по
                    усовершенствованию и продвижению своего филиала.
                  </span>
                </p>
              </li>
              <li className="bg-white w-[640px] h-[486px] p-8">
                <div className="bg-[#077855] w-[72px] h-[72px] rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/luggage.svg"
                    alt="profile icon"
                  />
                </div>
                <h3 className="text-[28px] font-bold my-6">
                  Универсальный сотрудник
                </h3>
                <p className="w-[536px] text-[#6e7c87] flex flex-col">
                  <span className="mb-6">
                    Лицо нашего заведения. Человек, который душевно встречает
                    гостей. В Узбекистане поесть можно везде, но выбор падает
                    именно туда, куда выбирает душа.
                  </span>
                  <span>
                    С восточным гостеприимством помогает гостю выбрать блюда,
                    ориентируясь на его предпочтения, предупредит о времени
                    приготовления, принимает оплату, умеет приготовить каждое
                    блюда из ассортимента, выдает готовый заказ.
                  </span>
                </p>
              </li>
              <li className="bg-white w-[640px] h-[486px] p-8">
                <div className="bg-[#077855] w-[72px] h-[72px] rounded-lg flex items-center justify-center">
                  <img src="/src/assets/images/car.svg" alt="profile icon" />
                </div>
                <h3 className="text-[28px] font-bold my-6">Доставщик</h3>
                <p className="w-[536px] text-[#6e7c87] flex flex-col">
                  <span className="mb-6">
                    Курьер в EVOS это заботливый и оперативный сотрудник,
                    который позаботится о заказах и вовремя доставит их по
                    нужным адресам.
                  </span>
                  <span className="mb-6">
                    Мы всегда рады принять в семью ответственных людей, имеющих
                    желание зарабатывать в удобное время и удобным способом – на
                    автомобиле, велосипеде, мопеде, самокате или пешком.
                  </span>
                  <span>
                    Наших курьеров всегда с нетерпением ждут – ведь они несут
                    людям вкусную, горячую, любимую еду!
                  </span>
                </p>
              </li>
              <li className="bg-white w-[640px] h-[486px] p-8">
                <div className="bg-[#077855] w-[72px] h-[72px] rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/handset.svg"
                    alt="profile icon"
                  />
                </div>
                <h3 className="text-[28px] font-bold my-6">
                  Оператор Call центра
                </h3>
                <p className="w-[536px] text-[#6e7c87] flex flex-col">
                  <span className="mb-6">
                    Работа в службе поддержки пользователей подразумевает
                    искреннее желание помогать другим и делать это
                    профессионально, быстро и качественно.{" "}
                  </span>
                  <span>
                    Оператsор колл-центра это действительно важный для нас
                    сотрудник, который будет принимать заказы, вежливо и
                    доброжелательно ответит на любые вопросы, проконсультирует
                    наших потенциальных и постоянных клиентах о продуктах,
                    предложениях и условиях доставки и оплаты.{" "}
                  </span>
                  <span>
                    В основные задачи этого сотрудника входят обработка
                    поступающих по разным каналам обращений, активное участие в
                    развитии наших сервисов, решение любых вопросов, возникающих
                    у обратившихся.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="pb-36">
          <div className="container max-w-[1360px] w-full">
            <h1 className="text-[40px] font-bold tracking-[0.41px] leading-[48px] mb-24">
              Истории карьерного роста
            </h1>
            <CareerSlider />
          </div>
        </section>
        <section className="py-36 bg-[#32724e] vacancies-ellipse mt-16 mb-32">
          <div className="container max-w-[1360px] w-full">
            <div className="flex items-center gap-x-48">
              <div className="text-white w-[400px]">
                <h1 className="text-[40px] leading-[52px] font-extrabold tracking-[0.41px]">
                  Преимущества работы с нами
                </h1>
                <p className="text-[16px] leading-[25px] font-normal mt-[26px]">
                  За долголетнюю историю HR-бренд EVOS неоднократно занимал
                  призовые места, участвую в различных премиях, таких как Бренд
                  Года, Лучший работодатель Узбекистана в различных номинациях.
                  Эти награды абсолютно заслужены, и мы действительно гордимся
                  тем уровнем развития бизнеса, в котором сейчас функционирует
                  EVOS
                </p>
              </div>
              <ul className="flex flex-wrap gap-5 border-l-2 border-white pl-10">
                <li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/bx_map.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Стабильность</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
								<li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/trip.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Работа рядом с домом</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
								<li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/bx_line.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Карьерный рост</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
								<li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/smile.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Дружный коллектив</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
								<li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/female.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Забота о сотрудниках</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
								<li className="w-[357px] h-[151px] bg-white flex items-center rounded-xl gap-10 p-9">
                  <img
                    src="/src/assets/images/happy_heart_eyes.svg"
                    alt="advantage icons"
										width={32}
										height={32}
                  />
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-medium">Обучение сотрудников</h3>
                    <Link to="/vacancy/advantages" className="flex items-center mt-[23px] text-[#077855] font-medium text-[17px]">
                      Подробнее <span className="ml-3">-&gt;</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
