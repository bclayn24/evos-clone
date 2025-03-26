import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Certificate() {
  document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS"
  const [certificates, setCertificates] = useState([]);

  const getCertifications = async () => {
    try {
      let response = await axios.get("http://localhost:5174/certificates");

      if (!response) {
        throw new Error("Error while getting response");
      }

      setCertificates(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCertifications();
  }, []);

  return (
    <React.Fragment>
      <main className="font-inter leading-[22px]">
        <div className="container max-w-[1360px] w-full">
          <h4 className="font-medium text-[22px] tracking-[0.41px] mt-12 mb-5">
            Сертификаты
          </h4>
          <p className="text-[#6e7c87] text-justify text-[15px] font-medium">
            Компания EVOS придает особое значение качеству своей продукции и
            строго соблюдает высокие стандарты при выборе партнеров и
            поставщиков. Мы стремимся работать только с проверенными и надежными
            компаниями, которые соответствуют нашим требованиям по качеству и
            безопасности. Вся продукция, используемая в ресторанах EVOS,
            проходит обязательные проверки и соответствует действующим
            нормативным актам Республики Узбекистан.
          </p>

          <ul className="flex flex-wrap justify-between items-center gap-y-12 py-28">
            {certificates.map((value, index) => {
              return (
                <li key={index}>
                  <img
                    src={value.certificatePath}
                    alt="сертификация"
                    className="w-[310px] h-[439px] object-cover"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
}
