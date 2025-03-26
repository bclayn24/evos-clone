import { Dropdown, Space } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/new_address" className="flex items-center px-4"><p className="font-medium text-[17px] leading-[18px] font-inter">Добавить новый адрес</p> <span className="pl-4 text-[26px]">+</span></Link>,
  },
];

export default function AddressDropdown() {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div>
        <Space>
          <button className="font-inter flex items-center gap-2 leading-[18px] bg-[#f6f8f9] max-w-[190px] py-3.5 px-3 rounded">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-[35px] relative top-[-1px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnRoundedIcon"><path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path></svg>
            <p className="text-[17px] whitespace-nowrap truncate font-regular w-full">Укажите адрес</p>
            <FaChevronDown className="w-[12px] h-[12px]" />
          </button>
        </Space>
      </div>
    </Dropdown>
  );
}
