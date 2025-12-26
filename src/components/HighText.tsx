import {
  HTMLAttributes,
  useEffect,
  useState,
  forwardRef,
  FormEvent,
  useRef,
} from "react";

const HighText = forwardRef<
  HTMLDivElement,
  {
    text?: string;
    show: boolean;
    eg?: string;
    large?: boolean;
    inputed?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onInput?: (e: FormEvent<HTMLDivElement>) => void;
  } & Omit<HTMLAttributes<HTMLDivElement>, "onChange">
>(
  (
    { text, show, eg, large, inputed, value, onChange, onInput, ...attrs },
    ref
  ) => {
    const [isComposing, setIsComposing] = useState(false); // 跟踪输入法组合状态
    const divRef = useRef<HTMLDivElement>(null);
    const combinedRef = useRef<HTMLDivElement>(null);

    // 使用useImperativeHandle组合ref
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(combinedRef.current);
        } else {
          (ref as any).current = combinedRef.current;
        }
      }
    }, [ref]);

    // 仅在 inputed 从 false 变为 true 时设置示例值
    useEffect(() => {
      if (inputed && divRef.current && !divRef.current.textContent) {
        divRef.current.textContent = eg || "";
      }
    }, [inputed, eg]);

    // 处理外部value变化
    useEffect(() => {
      if (value !== undefined && divRef.current) {
        const currentValue = divRef.current.textContent || "";
        if (currentValue !== value) {
          divRef.current.textContent = value;
        }
      }
    }, [value]);

    // 处理输入法组合开始
    const handleCompositionStart = () => {
      setIsComposing(true);
    };

    // 处理输入法组合结束
    const handleCompositionEnd = (e: FormEvent<HTMLDivElement>) => {
      setIsComposing(false);
      const currentValue = e.currentTarget.textContent || "";
      onChange?.(currentValue);
    };

    // 处理普通输入
    const handleInput = (e: FormEvent<HTMLDivElement>) => {
      if (isComposing) return; // 组合输入过程中不处理

      const currentValue = e.currentTarget.textContent || "";
      onChange?.(currentValue);
      onInput?.(e);
    };

    const handleEgClick = () => {
      const egValue = eg || "";
      if (divRef.current) {
        divRef.current.textContent = egValue;
        onChange?.(egValue);
      }
    };

    // 分离外部样式和类名
    const {
      style: externalStyle,
      className: externalClassName,
      ...otherAttrs
    } = attrs;

    return (
      <div
        {...otherAttrs}
        style={{ display: "inline-block", verticalAlign: "top" }}
        className={`rounded-1 ${externalClassName}`}
      >
        <div
          ref={(el) => {
            (divRef as React.MutableRefObject<HTMLDivElement | null>).current =
              el;
            (
              combinedRef as React.MutableRefObject<HTMLDivElement | null>
            ).current = el;
          }}
          contentEditable={true}
          suppressContentEditableWarning={true}
          style={{
            outline: "none",
            position: "relative",
            ...externalStyle,
            ...(show
              ? {
                  padding: large ? "0.5rem 0.5rem" : "0.1rem 0.25rem",
                  color: "#000000",
                  background: "#DBEAFE",
                  border: "1.5px solid #3B82F6",
                  borderRadius: "0.25rem",
                }
              : {}),
          }}
          onInput={handleInput}
          onCompositionStart={handleCompositionStart} // 监听输入法组合开始
          onCompositionEnd={handleCompositionEnd} // 监听输入法组合结束
        />

        {show ? (
          <div className={`${large ? "text-4xl font-500 mt-1" : "text-xs"}`}>
            {text ? (
              <div
                style={{
                  color: "#3B82F6",
                  display: "flex",
                  alignItems: "center",
                  padding: large ? "0.5rem 0" : "0.125rem 0",
                }}
              >
                <div className="i-ri-corner-left-up-line" />
                <div>{text}</div>
              </div>
            ) : (
              ""
            )}
            {eg ? (
              <div
                style={{
                  color: "#6B7280",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "0.125rem",
                  marginTop: "-0.125rem",
                }}
                onClick={handleEgClick}
              >
                <div className="i-ri-skip-right-line" />
                <div className="cursor-pointer">{eg}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        {show ? <div style={{ marginBottom: "0.25rem" }} /> : ""}
      </div>
    );
  }
);

export default HighText;
