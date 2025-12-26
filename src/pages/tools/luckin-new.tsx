import dayjs from "dayjs";
import { useState, useRef } from "react";
import HighText from "../../components/HighText";
import { useOutletContext } from "react-router-dom";
import { RefObject } from "react";
import BaseCard from "../../components/BaseCard";
import SecureWatermark from "../../components/SecureWatermark";
import LogoSelector from "../../components/Selector";

export default function LuckinNew() {
  const [highLight, ref]: [highLight: boolean, ref: RefObject<HTMLDivElement>] =
    useOutletContext();

  // 只保留必要的状态
  const [logoSelection, setLogoSelection] = useState<number>(0); // 0: 无, 1: 新, 2: 旧
  const [tempSelection, setTempSelection] = useState<string>("冰"); // 温度选择：冰、热、去冰

  return (
    <div>
      <BaseCard ref={ref} className="rounded-lg overflow-hidden">
        <div
          className={`bg-[#B4DDF9] rounded-md relative w-[320px] ${
            !highLight ? "h-[360px]" : ""
          }`}
        >
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
              className={`absolute w-9 right-[16px] top-[12px] ${
                highLight ? "hidden" : ""
              }`}
            />
          )}
          {/* Hi，用户名 性别 */}
          <div
            className={`px-3 text-xl ${
              !highLight ? "pt-[40px] pl-4" : "pt-10 pl-3"
            }`}
            style={{
              fontFamily: "'HanSansNormal', sans-serif",
            }}
          >
            Hi，
            <HighText show={highLight} text="您的姓名" eg="刘**" />
          </div>

          {/* 取餐码 取餐方式 杯数 */}
          <div className={` px-3 pt-2 flex items-center`}>
            <div
              className={` text-5xl ${!highLight ? "pl-1 mt-[-1px]" : ""}`}
              style={{
                fontFamily: "'HanSansBold', sans-serif", // 条件样式：仅!highLight时生效
                ...(!highLight
                  ? {
                      letterSpacing: "1.3px", // 自定义字间距（如2px，负数更密）
                      transform: "scaleY(1.1) scaleX(1)",
                      transformOrigin: "left center", // 避免缩放后偏移（可选）
                      display: "inline-block", // 让scaleX生效（行内元素必加）
                    }
                  : {}),
              }}
            >
              <HighText
                show={highLight}
                text="取餐码"
                eg="004"
                style={{
                  ...(!highLight ? {} : { width: "100px" }),
                }}
              />
            </div>

            {/* 右侧：根据highLight条件决定横向或纵向排列 */}
            <div
              className={`${
                !highLight
                  ? "flex-col items-start space-y-[-1px] pl-[5px] pt-[1px]"
                  : "flex items-center space-x-4 pl-4" // highLight时横向排列
              }`}
              style={{
                fontFamily: highLight
                  ? "'HanSansNormal', sans-serif"
                  : "'HanSansBold', sans-serif", // 条件样式：仅!highLight时生效

                letterSpacing: highLight ? "" : "0.3px", // 自定义字间距（如2px，负数更密）
                transform: highLight ? "scaleX(1)" : "scaleX(0.9)", // 自定义文字宽度（1.2=加宽20%，0.8=变窄20%）
                transformOrigin: highLight ? "center" : "left center", // 避免缩放后偏移（可选）
                display: highLight ? "" : "inline-block", // 让scaleX生效（行内元素必加）
                fontSize: highLight ? "" : "12px",
              }}
            >
              <div
                className={`text-xs ${
                  highLight ? "text-center" : "text-left pl-1"
                } ${!highLight ? "mt-[1px]" : ""} font-bold`}
              >
                <HighText show={highLight} text="取餐方式" eg="自取" />
              </div>
              <div
                className={`text-xs ${
                  highLight ? "text-center" : "text-left pl-1"
                } ${!highLight ? "pt-[3px]" : ""} font-bold`}
              >
                第
                <HighText
                  show={highLight}
                  text="杯数"
                  eg="1/1"
                  inputed={true}
                />
                杯
              </div>
            </div>
          </div>
          {/* 商品 */}
          <div className="flex">
            <div
              className={`pl-[19px] mt-[-6px] flex `}
              style={{
                fontFamily: highLight
                  ? "'HanSansNormal', sans-serif"
                  : "'HanSansBold', sans-serif",
                letterSpacing: "-0.4px", // 自定义字间距（如2px，负数更密）
                transform: "scaleX(0.91)", // 自定义文字宽度（1.2=加宽20%，0.8=变窄20%）
                transformOrigin: "left center", // 避免缩放后偏移（可选）
                display: "inline-block", // 让scaleX生效（行内元素必加）
                fontSize: highLight ? "" : "30px",
                width: highLight ? "110px" : "",
                maxWidth: highLight ? "110px" : "",
              }}
            >
              <HighText show={highLight} text="商品" eg="巴拿拿拿铁" />
            </div>

            {/* 温度选择按钮 */}
            <div
              className={`mt-[-6px] pl-4 h-[30px] ${
                !highLight ? "hidden" : ""
              }`}
            >
              <div
                className="flex space-x-1 h-[30px]"
                style={{ fontFamily: "'HanSansMedium', sans-serif" }}
              >
                <button
                  type="button"
                  onClick={() => setTempSelection("冰")}
                  className={`px-3 py-1 text-sm rounded-[5px] transition-colors ${
                    tempSelection === "冰"
                      ? "border-1 border-[#F5C400] bg-[#FFF9E3] text-black"
                      : "border-1 border-[#00000000] text-black"
                  }`}
                >
                  <span
                    style={{
                      background: "#003D9B",
                      borderRadius: "2px",
                      width: "20px",
                      height: "20px",
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    冰
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setTempSelection("热")}
                  className={`px-3 py-1 text-sm rounded-[5px] transition-colors ${
                    tempSelection === "热"
                      ? " border-1 border-[#F5C400] bg-[#FFF9E3] text-black"
                      : "border-1 border-[#00000000] text-black"
                  }`}
                >
                  热
                </button>
                <button
                  type="button"
                  onClick={() => setTempSelection("去冰")}
                  className={`px-3 py-1 text-sm rounded-[5px] transition-colors ${
                    tempSelection === "去冰"
                      ? "border-1 border-[#F5C400] bg-[#FFF9E3] text-black"
                      : "border-1 border-[#00000000] text-black"
                  }`}
                >
                  去冰
                </button>
              </div>
            </div>
          </div>

          {/* 温度显示 - 根据tempSelection值显示不同温度 */}
          <div
            className={`flex items-center text-center ${
              tempSelection === "冰"
                ? "pl-4.5 mt--0.8"
                : !highLight
                ? "pl-3 mt--0.8"
                : "pl-4.5 mt--0.8"
            } `}
          >
            {tempSelection === "冰" && highLight === false && (
              <span
                style={{
                  background: "#003D9B",
                  borderRadius: "0px",
                  width: "45px",
                  height: "27px",
                  color: "#B4DDF9",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'HanSansMedium', sans-serif",
                  fontSize: "20px",
                }}
              >
                {tempSelection}
              </span>
            )}
            {(tempSelection === "热" || tempSelection === "去冰") &&
              highLight === false && (
                <span
                  style={{
                    background: "#B4DDF9",
                    borderRadius: "0px",
                    width: "45px",
                    height: "27px",
                    color: "#000000",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "start",
                    fontFamily: "'HanSansMedium', sans-serif",
                    fontSize: "20px",
                  }}
                >
                  {tempSelection}
                </span>
              )}

            {/* 规格 */}
            <div
              className=""
              style={{
                fontFamily: "'HanSansNormal', sans-serif",
                ...(!highLight
                  ? {
                      letterSpacing: "0.3px", // 自定义字间距（如2px，负数更密）
                      transform: "scaleX(0.91)", // 自定义文字宽度（1.2=加宽20%，0.8=变窄20%）
                      transformOrigin: "left center", // 避免缩放后偏移（可选）
                      display: "inline-block", // 让scaleX生效（行内元素必加）
                    }
                  : {
                      // marginLeft: "2px",
                    }),
              }}
            >
              <HighText show={highLight} text="规格" eg="大杯" />
            </div>
          </div>

          {/* 甜度 */}
          <div className="text-lg pl-2">
            <HighText show={highLight} text="甜度" eg="标准糖" />
          </div>
          <div className="pl-4 pr-4">
            <div
              className="text-xs pt-3 flex items-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, black 0%, black 1px, transparent 1px, transparent 2px)",
                backgroundSize: "3px 1px",
                backgroundRepeat: "repeat-x",
                paddingTop: "12px",
                marginTop: "50px",
              }}
            ></div>
          </div>
          {/* //创建一个横向布局，日期时间在左侧，备注在右侧 */}
          <div className="flex items-baseline mt--1">
            {/* 日期时间 */}
            <div
              className="pl-4 text-xs"
              style={{
                fontFamily: "'HanSansBold', sans-serif", // 条件样式：仅!highLight时生效
                ...(!highLight
                  ? {
                      letterSpacing: "0.3px", // 自定义字间距（如2px，负数更密）
                      transform: "scaleX(1.0)", // 自定义文字宽度（1.2=加宽20%，0.8=变窄20%）
                      transformOrigin: "left center", // 避免缩放后偏移（可选）
                      display: "inline-block", // 让scaleX生效（行内元素必加）
                      fontSize: "12px",
                    }
                  : {}),
              }}
            >
              <HighText
                show={highLight}
                text="日期"
                eg={dayjs().format("YYYY-MM-DD HH:mm")}
                inputed={true}
              />
            </div>

            {/* 备注 */}
            <div
              className={`pl-4 text-xs font-bold ${
                !highLight ? "pl-9.9 ml-2" : ""
              }`}
            >
              <HighText
                show={highLight}
                text="备注"
                eg="建议尽快享用，风味更佳"
                inputed={true}
              />
            </div>
          </div>
          {/* Logo选择按钮 */}
          <div className={`mt-4 px-4 pt-2 ${!highLight ? "hidden" : ""}`}>
            <div className={`flex space-x-0.5 absolute right-14 top-10`}>
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
