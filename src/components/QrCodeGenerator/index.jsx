import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // 导入二维码组件（SVG 格式，高清无锯齿）

export default function QrCodeGenerator() {
  // 1. 状态管理输入的文字（比如取餐码、链接等）
  const [inputText, setInputText] = useState("");
  // 2. 二维码配置（可自定义）
  const qrConfig = {
    size: 120, // 二维码尺寸（px）
    fgColor: "#000000", // 前景色（二维码颜色）
    bgColor: "#ffffff", // 背景色
    level: "M", // 容错级别（L/M/Q/H，M 适中）
    includeMargin: true, // 包含边距
  };

  return (
    <div className="w-full p-4">
      {/* 输入框：用于输入要生成二维码的文字 */}
      <div className="mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="请输入要生成二维码的文字（如取餐码、链接等）"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* 居右显示二维码（替换原 img 标签） */}
      <div className="text-base mb-0 flex justify-end items-center">
        {/**
         * 逻辑：输入文字不为空时显示二维码，否则提示“请输入内容”
         * 若想默认显示静态二维码，可给 inputText 赋初始值（如 useState("Cotti Coffee")）
         */}
        {inputText ? (
          <QRCodeSVG
            value={inputText} // 核心：绑定输入的文字
            {...qrConfig} // 透传配置
            className="rounded-md" // 可选：加圆角
          />
        ) : (
          <div className="text-gray-500">请输入文字生成取餐二维码</div>
        )}
      </div>
    </div>
  );
}