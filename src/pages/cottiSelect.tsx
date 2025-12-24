import { Space, message } from "antd";
import { useCallback } from "react";
import Line from "../components/Line";

export default function CottiSelect() {
  const [messageApi, contextHolder] = message.useMessage();

  const templateList = [
    {
      title: "订单标签（旧）",
      imgSrc: "/images/cotti-old.png",
      url: "/tools/cotti",
    },
    {
      title: "订单标签（新）",
      imgSrc: "/images/cotti-new.png",
      url: "/tools/cotti-new",
    },
    {
      title: "解冻标签",
      imgSrc: "/images/cotti-thaw.png",
      url: "/tools/cotti-thaw",
    },
    {
      title: "开封标签",
      imgSrc: "/images/cotti-open.png",
      url: "#",
    },
  ];

  const handleTemplateClick = useCallback(
    (url: string) => {
      if (url && url !== "#") {
        window.open(url, "_self");
      } else {
        messageApi.warning("该模板暂未开放，敬请期待！");
      }
    },
    [messageApi]
  );

  return (
    <div className="-mt-4">
      {contextHolder}

      <Line
        zh="选择模板"
        en="Select Template"
        logo={<div className="i-ri-layout-grid-line mr-4 text-xl" />}
      />

      <Space direction="vertical" className="w-full mt-4">
        {/* Grid容器：保留align-items-start，确保内容顶部对齐 */}
        <div className="grid grid-cols-2 gap-4 px-2 items-start">
          {templateList.map((item, index) => (
            <div
              key={index}
              // 核心修复：h-fit 让卡片高度完全贴合内容，不再被Grid拉伸
              className="cursor-pointer rounded-md overflow-hidden shadow-lg transition-all hover:scale-105 h-fit"
              onClick={() => handleTemplateClick(item.url)}
            >
              {/* 图片：block 消除inline默认间距，object-contain 保持比例 */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full object-contain block"
                loading="lazy"
              />
              {/* 黑条：高度固定20px，无额外间距 */}
              <div className="bg-black h-[20px] flex items-center justify-center">
                <span className="text-white text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Space>
    </div>
  );
}