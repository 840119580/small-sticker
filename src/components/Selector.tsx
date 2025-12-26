// LogoSelector.tsx
import { useState } from "react";

// 按钮配置类型
interface Button {
  value: string | number;
  text: string;
  unSelectedBorderColor?: string;
  unSelectedBgColor?: string;
  unSelectedTextColor?: string;
}

// 组件属性类型
interface LogoSelectorProps {
  buttons: Button[];
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  tipText?: string;
  wrapperClassName?: string;
  show?: boolean;
}

/**
 * Logo 选择组件
 */
const LogoSelector = ({
  buttons = [],
  defaultValue = 0,
  onChange,
  tipText = "是否显示Logo",
  wrapperClassName = "",
  show = true,
}: LogoSelectorProps) => {
  // 组件内部维护选中状态（也可改为完全受控，由父组件传 selectedValue）
  const [selectedValue, setSelectedValue] = useState<string | number>(
    defaultValue
  );

  // 处理按钮点击
  const handleButtonClick = (value: string | number) => {
    setSelectedValue(value);
    onChange && onChange(value); // 通知父组件选中变化
  };

  // 组件隐藏时直接返回 null
  if (!show) return null;

  return (
    <div className={`mt-4 px-4 pt-2 ${wrapperClassName}`}>
      <div className="">
        {/* 渲染自定义按钮列表 */}
        {buttons.map((btn) => {
          // 解构按钮配置，设置默认值
          const {
            value,
            text,
            unSelectedBorderColor = "#3B82F6",
            unSelectedBgColor = "white",
            unSelectedTextColor = "black",
          } = btn;
          // 判断是否选中
          const isSelected = selectedValue === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => handleButtonClick(value)}
              style={{
                // 选中时样式（固定）
                ...(isSelected
                  ? {
                      backgroundColor: "#FFF9E3",
                      borderColor: "#F5C400",
                    }
                  : {
                      // 未选中时样式（父组件自定义）
                      backgroundColor: unSelectedBgColor,
                      borderColor: unSelectedBorderColor,
                      color: unSelectedTextColor,
                    }),
              }}
              className={`px-2 py-1 text-xs rounded-[5px] transition-colors border-2 ${
                isSelected ? "text-black" : "" // 选中时文字色默认黑色
              }`}
            >
              {text}
            </button>
          );
        })}

        {/* 提示文本 */}
        <div className="w-[160px] text-xs text-[#6B7280]">{tipText}</div>
      </div>
    </div>
  );
};

export default LogoSelector;
