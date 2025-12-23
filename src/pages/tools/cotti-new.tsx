// import dayjs from 'dayjs'
// import HighText from "../../components/HighText";
// import { useOutletContext } from "react-router-dom";
// import { RefObject } from "react";
// import BaseCard from "../../components/BaseCard";
// import { QRCodeSVG } from "qrcode.react"; // 导入二维码组件（SVG 格式，高清无锯齿）


// export default function Cotti() {
//   const [highLight, ref]:[highLight: boolean, ref: RefObject<HTMLDivElement>] = useOutletContext();
  
//   return (
//     <div>
//       <BaseCard ref={ref} className="rounded-lg overflow-hidden">
//         {/* 容器：调整内边距+背景色+圆角 */}
//         <div className='w-90 z-0 relative px-4 py-3 bg-[#FAF4D2] rounded-lg overflow-hidden block'>
          
//           {/* 顶部：日期时间 + 二维码 */}
//           <div className='flex justify-between items-center mb-0'>
//             <div className='text-xs'>
//               <HighText show={highLight} text='日期 时间' eg={dayjs().format('MM-DD HH:mm:ss')}  inputed/>
//             </div>
//             {/* <img src="/images/qrcode.png" alt="取餐二维码" className='' /> */}
//           </div>

//           {/* 取餐号 + 自提标识 */}
//           <div className='flex items-baseline mb-0'>
//             <div className='text-4xl font-bold'>
//               <HighText show={highLight} text='取餐号' eg='*A001' />
//             </div>
//             <div className='text-xs ml-1 text-base text-center'>
//               <HighText show={highLight} text='取餐方式' eg='自提' />
//             </div>
//             <div className='text-xs ml-1 text-base text-center'>
//               <HighText show={highLight} text='杯数' eg='1/1' />
//             </div>
//           </div>

//           {/* 餐品名称 */}
//           <div className='text-xl font-bold mb-0'>
//             <HighText show={highLight} text='餐品' eg='[热]太妃榛果拿铁' />
//           </div>

//           {/* 餐品属性 */}
//           {/* <div className=''>
//             <HighText show={highLight} text='属性' eg='大杯16oz/深烘/半糖(1)' />
//           </div> */}
//           <div className='flex items-baseline mb-[10px]'>
//             <div className='ml-0 text-base text-center'>
//               <HighText show={highLight} text='规格' eg='大杯16oz' />
//             </div>

//             <div className='ml-0 text-base'>
//               <HighText show={highLight} text='种类' eg='/深烘' />
//             </div>

//             <div className='ml-0 text-base'>
//               <HighText show={highLight} text='糖度' eg='/半糖' />
//             </div>
//             <div className='ml-0 text-base'>
//               <HighText show={highLight} text='其他' eg='/加奶/加单份浓缩' />
//             </div>
//           </div>

//           {/* 提示文字 */}
//           <div className='text-base mb-0 '>
//             <HighText show={highLight} text='提示文字' eg='尽快享用，风味更佳，冰饮请搅匀！'  />
//           </div>
//           <div className='text-base mb--1 flex justify-end items-center'>
//                   <img
//             src="/images/CottiNew.png" // 本地图片路径（public 目录）或网络图片 URL
//             alt="Cotti Coffee 标识"
//             className="w-20 h-auto rounded-md object-contain" // 样式：宽20rem，高度自适应，防止变形
//           />
//           </div>

//           {/* 底部标识（加边框分隔） */}
//           {/* <div className='text-xs border-t-[1px] border-dashed border-black pt-1.5'> */}
//           <div 
//   className='text-xs pt-3'
//   style={{
//     // 模拟1px黑色虚线（可调整 dashArray 控制间隔/长度）
//     backgroundImage: 'linear-gradient(to right, black 0%, black 4px, transparent 4px, transparent 10px)',
//     backgroundSize: '12px 1px', // 10px=虚线+间隔总长度，1px=虚线高度（粗细）
//     backgroundRepeat: 'repeat-x',
//     paddingTop: '12px', // 替代原来的pt-3（12px），避免和背景重叠
//     marginTop: '4px' // 可选：和提示文字保留微小间距
//   }}>
//             <HighText show={highLight} text='底部标识' eg='G2 | 【N300 F0350】' inputed />
//           </div>
          
//         </div>
//       </BaseCard>
//     </div>
//   )
// }

import dayjs from 'dayjs'
import { useState, useRef, useEffect } from 'react'
import HighText from "../../components/HighText";
import { useOutletContext } from "react-router-dom";
import { RefObject } from "react";
import BaseCard from "../../components/BaseCard";
import { QRCodeSVG } from "qrcode.react";

export default function Cotti() {
  const [highLight, ref]:[highLight: boolean, ref: RefObject<HTMLDivElement>] = useOutletContext();
  // 二维码内容状态（仅失焦后更新）
  const [qrcodeText, setQrcodeText] = useState<string>('');
  // 用于绑定contentEditable的ref，避免重复渲染问题
  const qrcodeInputRef = useRef<HTMLDivElement>(null);

  // 初始化：仅组件挂载时设置一次默认值（避免重复赋值）
  useEffect(() => {
    if (qrcodeInputRef.current) {
      qrcodeInputRef.current.textContent = '';
    }
  }, []);

  // 失焦时同步输入值（核心：替代实时onInput）
  const handleQrcodeBlur = () => {
    if (qrcodeInputRef.current) {
      const inputValue = qrcodeInputRef.current.textContent || '';
      setQrcodeText(inputValue); // 仅失焦后更新二维码内容
    }
  };

  return (
    <div>
      <BaseCard ref={ref} className="rounded-lg overflow-hidden">
        <div className='w-90 z-0 relative px-4 py-3 bg-[#FAF4D2] rounded-lg overflow-hidden block'>
          
          {/* 顶部：日期时间 + 二维码区域 */}
          <div className='flex justify-between items-center mb-0 relative'>
            <div className='text-xs'>
              <HighText show={highLight} text='日期 时间' eg={dayjs().format('MM-DD HH:mm:ss')} />
            </div>

            {/* 编辑模式：二维码输入框（取消inputed，失焦同步） */}
            {highLight && (
              <div className='text-xs ml-2'>
                <HighText 
                  ref={qrcodeInputRef} // 绑定ref控制内容
                  show={highLight} 
                  text='二维码内容' 
                  eg='F05-3452623:G01' 
                  // 取消inputed，避免自动填充重复赋值
                  inputed={false} 
                  // 移除value绑定，改用ref控制初始值，避免quickInput+value拼接重复
                  onBlur={handleQrcodeBlur} // 失焦后同步值
                  style={{ minWidth: '120px' }}
                />
              </div>
            )}

            {/* 预览模式：透明二维码（仅失焦后更新） */}
            {!highLight && qrcodeText && (
              <div 
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  width: '40px',
                  height: '40px'
                }}
              >
                <QRCodeSVG
                  value={qrcodeText}
                  size={60}
                  bgColor="transparent"
                  fgColor="#000000"
                  level="M"
                  includeMargin={true}
                  marginSize={3}
                />
              </div>
            )}
          </div>

          {/* 以下原有代码完全不变 */}
          <div className='flex items-baseline mb-0'>
            <div className='text-4xl font-bold'>
              <HighText show={highLight} text='取餐号' eg='*A001' />
            </div>
            <div className='text-xs ml-1 text-base text-center'>
              <HighText show={highLight} text='取餐方式' eg='自提' />
            </div>
            <div className='text-xs ml-1 text-base text-center'>
              <HighText show={highLight} text='杯数' eg='1/1' />
            </div>
          </div>

          <div className='text-xl font-bold mb-0'>
            <HighText show={highLight} text='餐品' eg='[热]太妃榛果拿铁' />
          </div>

          <div className='flex items-baseline mb-[10px]'>
            <div className='ml-0 text-base text-center'>
              <HighText show={highLight} text='规格' eg='大杯16oz' />
            </div>
            <div className='ml-0 text-base'>
              <HighText show={highLight} text='种类' eg='/深烘' />
            </div>
            <div className='ml-0 text-base'>
              <HighText show={highLight} text='糖度' eg='/半糖' />
            </div>
            <div className='ml-0 text-base'>
              <HighText show={highLight} text='其他' eg='/加奶/加单份浓缩' />
            </div>
          </div>

          <div className='text-base mb--4 mt-6 text-xs'>
            <HighText show={highLight} text='提示文字' eg='尽快享用，风味更佳，冰饮请搅匀！'  />
          </div>
          <div className='text-base mb--1 flex justify-end items-center'>
            <img
              src="/images/CottiNew.png" 
              alt="Cotti Coffee 标识"
              className="w-20 h-auto rounded-md object-contain"
            />
          </div>

          <div 
            className='text-xs pt-3'
            style={{
              backgroundImage: 'linear-gradient(to right, black 0%, black 4px, transparent 4px, transparent 10px)',
              backgroundSize: '12px 1px',
              backgroundRepeat: 'repeat-x',
              paddingTop: '12px',
              marginTop: '4px'
            }}>
            <HighText show={highLight} text='底部标识' eg='G2 | 【N300 F0350】' inputed />
          </div>
          
        </div>
      </BaseCard>
    </div>
  )
}