import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BranchesDetail() {
  const { id } = useParams();
  document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS";
  const [branchDetail, setBranchDetail] = useState([]);

  const getBranches = async () => {
    try {
      let response = await axios.get(`http://localhost:5174/branches?id=${id}`);

      if (!response) {
        throw new Error("Error while getting branch datas");
      }

      setBranchDetail(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <React.Fragment>
      <main className="font-inter leading-[22px]">
        <section className="py-24">
          <div className="container max-w-[1360px] w-full">
            {branchDetail.map((value, index) => {
              return (
                <div key={index}>
                  <h1 className="text-[40px] font-bold tracking-[0.41px] leading-[48px]">{value.name}</h1>
                  <div className="w-[780px] bg-white p-12">
                    <ul className="flex flex-col gap-y-6 mb-10">
                      <li className="flex items-center text-end justify-between">
                        <span className="text-[#6e7c87] font-medium traking-[0.38px] text-[20px] leading-[26px]">Адрес</span>
                        <p className="w-[368px] text-[20px] font-normal leading-[25px] tracking-[0.41px]">{value.address}</p>
                      </li>
                      <li className="flex items-center text-end justify-between">
                        <span className="text-[#6e7c87] font-medium traking-[0.38px] text-[20px] leading-[26px]">Часы работы</span>
                        <p className="text-[20px] font-normal leading-[25px] tracking-[0.41px]">{value.workingTimes}</p>
                      </li>
                    </ul>
                    <iframe
                      src={value.iframeSrc}
                      width="682"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
