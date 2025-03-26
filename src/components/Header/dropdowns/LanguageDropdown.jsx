import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const items = [
  {
    key: "1",
    label: (
      <Link to="/uz" className="flex items-center gap-3 text-[18px] pl-1 pr-6 py-1.5 font-medium"><img src="/src/assets/images/uz.svg" alt="uz" />O&apos;zbekcha</Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/" className="flex items-center gap-3 text-[18px] pl-1 pr-6 py-1.5 font-medium"><img src="/src/assets/images/ru.svg" alt="ru" />Русский</Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="/en" className="flex items-center gap-3 text-[18px] pl-1 pr-6 py-1.5 font-medium"><img src="/src/assets/images/en.svg" alt="uz" />English</Link>
    ),
  },
];

export default function LanguageDropdown() {
  return (
    <Dropdown menu={{ items }}>
      <div>
        <Space>
          <div className="flex items-center justify-between gap-3.5 bg-[#f6f8f9] rounded py-3.5 px-3">
            <img src="/src/assets/images/ru.svg" alt="ru" />
            <FaChevronDown className="w-[14px] h-[14px] relative top-[2px]" />
          </div>
        </Space>
      </div>
    </Dropdown>
  );
}
