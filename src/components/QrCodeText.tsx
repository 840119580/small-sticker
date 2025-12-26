import { useState, useRef, useEffect } from "react";
import HighText from "./HighText";

interface QrCodeTextProps {
  text: string;
  eg: string;
  inputed?: boolean;
  highLight: boolean;
  onTextChange: (text: string) => void;
  initialValue?: string;
}

export default function QrCodeText({
  text,
  eg,
  inputed = false,
  highLight,
  onTextChange,
  initialValue = "",
}: QrCodeTextProps) {
  const qrcodeInputRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState<string>(initialValue);
  const prevHighLightRef = useRef<boolean>(highLight);

  // 当highLight状态变为true时，确保输入框显示当前值
  useEffect(() => {
    if (highLight && qrcodeInputRef.current) {
      qrcodeInputRef.current.textContent = currentValue;
    }
  }, [highLight, currentValue]);

  // 监听highLight状态变化
  useEffect(() => {
    // 当从highLight变为!highLight时，立即获取输入框内容并调用onTextChange
    if (prevHighLightRef.current && !highLight && qrcodeInputRef.current) {
      const value = qrcodeInputRef.current.textContent || "";
      setCurrentValue(value);
      onTextChange(value);
    }
    prevHighLightRef.current = highLight;
  }, [highLight, onTextChange]);

  // 失焦时也更新
  const handleBlur = () => {
    if (qrcodeInputRef.current) {
      const value = qrcodeInputRef.current.textContent || "";
      setCurrentValue(value);
      onTextChange(value);
    }
  };

  return (
    <HighText
      ref={qrcodeInputRef}
      show={highLight}
      text={text}
      eg={eg}
      inputed={inputed}
      onBlur={handleBlur}
    />
  );
}
