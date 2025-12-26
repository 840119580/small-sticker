import dayjs from "dayjs";
import { useState, useRef } from "react";
import HighText from "../../components/HighText";
import { useOutletContext } from "react-router-dom";
import { RefObject } from "react";
import BaseCard from "../../components/BaseCard";
import SecureWatermark from "../../components/SecureWatermark";

export default function LuckinOld() {
  const [highLight, ref]: [highLight: boolean, ref: RefObject<HTMLDivElement>] =
    useOutletContext();

  // 状态管理
  const [name, setName] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [number1, setNumber1] = useState<string>("1");
  const [number2, setNumber2] = useState<string>("1");
  const [temp, setTemp] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [sweet, setSweet] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [remark, setRemark] = useState<string>("建议尽快饮用，风味更佳");
  const [logoSelection, setLogoSelection] = useState<number>(0); // 0: 无, 1: 新, 2: 旧

  // 用于绑定contentEditable的refs
  const nameRef = useRef<HTMLDivElement>(null);
  const sexRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const number1Ref = useRef<HTMLDivElement>(null);
  const number2Ref = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const sweetRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const remarkRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <BaseCard ref={ref} className="rounded-lg overflow-hidden">
        <div className="bg-[#A8D3FD] rounded-md relative w-80">
          <SecureWatermark />

          {/* Logo显示 - 根据logoSelection值显示不同Logo */}
          {(logoSelection === 1 || logoSelection === 2) && (
            <img
              src={
                logoSelection === 1
                  ? "/images/lucking_coffee.svg"
                  : "/images/lucking_coffee_dark.svg"
              }
              alt="Luckin Coffee Logo"
              className="absolute w-8 right-4 top-5"
            />
          )}

          {/* Hi，用户名 性别 */}
          <div className="px-3 text-xl">
            Hi，
            <HighText
              ref={nameRef}
              show={highLight}
              text="您的姓名"
              eg="刘**"
              onChange={(value: string) => setName(value)}
            />{" "}
            <HighText
              ref={sexRef}
              show={highLight}
              text="性别"
              eg="先生"
              onChange={(value: string) => setSex(value)}
            />
          </div>

          {/* 取餐码 取餐方式 杯数 */}
          <div className="flex items-center px-3 pt-2">
            <div className="font-bold text-4xl">
              <HighText
                ref={codeRef}
                show={highLight}
                text="取餐码"
                eg="114"
                onChange={(value: string) => setCode(value)}
              />
            </div>
            <div className="text-lg pl-2">
              <HighText
                ref={typeRef}
                show={highLight}
                text="取餐方式"
                eg="自提"
                onChange={(value: string) => setType(value)}
              />
            </div>
            <div className="text-lg pl-2">
              第
              <HighText
                ref={number1Ref}
                show={highLight}
                text="第N杯"
                eg="1"
                onChange={(value: string) => setNumber1(value)}
              />
              /
              <HighText
                ref={number2Ref}
                show={highLight}
                text="共M杯"
                eg="1"
                onChange={(value: string) => setNumber2(value)}
              />
              杯
            </div>
          </div>

          {/* 温度 商品 */}
          <div className="flex">
            <div className="text-lg pl-2">
              <HighText
                ref={tempRef}
                show={highLight}
                text="温度"
                eg="【热】"
                onChange={(value: string) => setTemp(value)}
              />
            </div>
            <div className="text-lg pl-2">
              <HighText
                ref={productRef}
                show={highLight}
                text="商品"
                eg="马斯卡彭生酪拿铁"
                onChange={(value: string) => setProduct(value)}
              />
            </div>
          </div>

          {/* 甜度 */}
          <div className="text-lg pl-2">
            <HighText
              ref={sweetRef}
              show={highLight}
              text="甜度"
              eg="标准糖"
              onChange={(value: string) => setSweet(value)}
            />
          </div>

          {/* 日期时间 */}
          <div className="pl-2 font-bold pt-4">
            <HighText
              ref={dateRef}
              show={highLight}
              text="日期"
              eg={dayjs().format("YYYY-MM-DD")}
              onChange={(value: string) => setDate(value)}
            />{" "}
            <HighText
              ref={timeRef}
              show={highLight}
              text="时间"
              eg={dayjs().format("HH:mm")}
              onChange={(value: string) => setTime(value)}
            />
          </div>

          {/* 备注 */}
          <div className="pl-2 pb-3 mt-1">
            <HighText
              ref={remarkRef}
              show={highLight}
              text="备注"
              eg="建议尽快饮用，风味更佳"
              onChange={(value: string) => setRemark(value)}
            />
          </div>

          {/* Logo选择按钮 */}
          <div className={`mt-4 px-4 pt-2 ${!highLight ? "hidden" : ""}`}>
            <div className={`flex space-x-0.5 absolute right-14 top-7`}>
              <button
                type="button"
                onClick={() => setLogoSelection(0)}
                className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${
                  logoSelection === 0
                    ? "border-2 border-[#3B82F6] bg-[#3B82F6] text-white"
                    : "border-2 border-[#3B82F6] bg-white text-black"
                }`}
              >
                无
              </button>
              <button
                type="button"
                onClick={() => setLogoSelection(2)}
                className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${
                  logoSelection === 2
                    ? "border-2 border-[#3B82F6] bg-[#3B82F6] text-white"
                    : "border-2 border-[#3B82F6] bg-white text-black"
                }`}
              >
                黑
              </button>
              <button
                type="button"
                onClick={() => setLogoSelection(1)}
                className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${
                  logoSelection === 1
                    ? "border-2 border-[#3B82F6] bg-[#3B82F6] text-white"
                    : "border-2 border-[#3B82F6] bg-white text-black"
                }`}
              >
                蓝
              </button>
              <div
                className={`absolute top-8 w-[160px] text-xs text-[#6B7280]`}
              >
                是否显示Logo
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  );
}
