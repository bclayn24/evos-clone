import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Branches() {
	document.title = "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS"
  const [branches, setBranches] = useState([]);

  const getBranches = async () => {
    try {
      let response = await axios.get("http://localhost:5174/branches");

			if (!response) {
				throw new Error("Error while getting branch datas")
			}

      setBranches(response.data);
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
        <section className="py-12">
          <div className="container max-w-[1360px] w-full">
						<h1 className="text-[40px] font-bold tracking-[0.41px] leading-[48px]">Филиалы</h1>
            <ul className="py-10 flex flex-wrap gap-10">
              {branches.map((value, index) => {
                return (
                  <li key={index} className="bg-white w-[770px] p-6 hover:shadow-md transition-all duration-150">
										<Link to={`/branches/${value.id}`} className="flex items-center justify-between">
											<div className="flex items-center">
												<img src={value.imgPath} alt="Филиалы" width={95} height={69} />
												<h3 className="text-[22px] font-medium tracking-[0.35px] leading-[26px] ml-7">{value.name}</h3>
											</div>
											<div>
												<span className="text-[#b0babf]">Часы работы</span>
												<p className="text-[#6e7c87]">{value.workingTimes}</p>
											</div>
										</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
