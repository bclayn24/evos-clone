import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  document.title =
    "EVOS | Быстро. Вкусно. Качественно. Любимые блюда и восточное гостеприимство | EVOS";
  const [product, setProductDetail] = useState([]);

  const getProductDetail = async () => {
    try {
      let response = await axios.get(`http://localhost:5174/products?id=${id}`);
      if (!response) {
        throw new Error("Error while getting branch datas");
      }

      setProductDetail(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <section className="pt-32 pb-96">
      <div className="container max-w-[1360px] w-full font-inter">
        {product.map((value, index) => {
          return (
            <div className="flex items-center" key={index}>
              <img
                src={value.imgPath}
                alt={value.name}
                width={624}
                height={410}
                className="w-[624px] h-[410px]"
              />
              <div className="ml-20">
                <h1 className="text-[40px] font-bold leading-[48px] tracking-[0.41px]">
                  {value.name}
                </h1>
                <p className="font-medium text-[#6e7c87] text-[17px] my-[30px]">
                  {value.description}
                </p>
                <button className="bg-[#077855] text-white tracking-[0.41px] leading-[20px] mt-14 font-medium text-[17px] p-4 rounded">
                  <span className="mr-32">В корзину</span> {product.cost}
                </button>
              </div>
            </div>
          );
        })}
        <span className="flex justify-center mt-10">
          <Link to="/" className="bg-[#077855] text-white px-12 py-4 rounded">
            Назад
          </Link>
        </span>
      </div>
    </section>
  );
}
