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
  // Logo选择状态：0-不显示，1-显示Cotti New，2-显示其他Logo
  const [logoSelection, setLogoSelection] = useState<number>(1);

  {/* 计算动态class */}
  const getLogoSelectionClass = () => {
  if (logoSelection === 0) {
    return 'opacity-0 mb--2.5';
  }
  if (logoSelection === 2) {
    return 'opacity-80 mb--2.5'; // 自定义logoSelection=2的样式
  }
  // 其他值（如1、3等）的默认样式
  return 'opacity-100';
};

  useEffect(() => {
    if (highLight && qrcodeInputRef.current) {
      qrcodeInputRef.current.textContent = qrcodeText;
    }
  }, [highLight, qrcodeText]);

  const handleQrcodeBlur = () => {
    if (qrcodeInputRef.current) {
      const inputValue = qrcodeInputRef.current.textContent || '';
      setQrcodeText(inputValue); // 仅失焦后更新二维码内容
    }
  };


  return (
    <div>
      <BaseCard ref={ref} className="rounded-lg overflow-hidden">
        <div className='w-80 z-0 relative px-4 py-3 bg-[#FAF4D2] rounded-lg overflow-hidden block'>
          
          {/* 顶部：日期时间 + 二维码区域 */}
          <div className='flex justify-between items-center mb-0 relative'>
            <div className='font-size-[20px] mb-0'>
            <HighText 
              show={highLight} 
              text='解冻商品' 
              eg='冷冻芒果果浆1kg*12瓶/箱 （bg）（冷藏解冻）' 
              style={{ 
                transform: 'scaleX(0.9)', 
                transformOrigin: 'left', 
                fontWeight: '500',
                display: 'inline-block' ,
                width: '110%'
              }}
            />
          </div>
          

            
          </div>

        

          

          {/* 左右布局：左侧二维码相关内容，右侧纵向文本 */}
          <div className='flex items-start justify-between mt-2'>
            {/* 左侧：二维码区域 */}
            <div className='flex items-center'>
              {/* 修改 cotti-new.tsx 中的 HighText 用法 */}
              {highLight && (
                <div className='text-xs ml-2 pr-2 pt-20'>
                  <HighText 
                    ref={qrcodeInputRef}
                    show={highLight} 
                    text='二维码内容' 
                    eg='F05-3452623:G01' 
                    inputed={false} 
                    onBlur={handleQrcodeBlur}
                    onChange={(value) => setQrcodeText(value)} 
                  />
                </div>
              )}

              {/* 预览模式：透明二维码（仅失焦后更新） */}
              {!highLight && qrcodeText && (
                <div
                  style={{
                    width: '40px',
                    height: '40px'
                  }}
                >
                  <QRCodeSVG
                    value={qrcodeText}
                    size={100}
                    bgColor="transparent"
                    fgColor="#000000"
                    level="H"
                    includeMargin={true}
                    marginSize={3}
                  />
                </div>
              )}
            </div>

            {/* 右侧：纵向排列的文本，左对齐 */}
            <div className={`${!highLight ? 'absolute right-25 top-22 flex-col items-start space-y--0.6' : ''}`}>
              <div className={`text-xs text-left pl-1 `}>
                <HighText show={highLight} text='解冻完成' eg='解冻完成' />
              </div>
              <div className={`text-xs text-left pl-1`}>
                <HighText show={highLight} text='完成时间' eg={dayjs().format('YYYY-MM-DD HH:mm')} />
              </div>
              <div className={`text-xs text-left pl-1 pt-2`}>
                <HighText show={highLight} text='保质期至' eg='保质期至' />
              </div>
              <div className={`text-xs text-left pl-1`}>
                <HighText show={highLight} text='保质期' eg={dayjs().format('YYYY-MM-DD HH:mm')} />
              </div>
              <div className={`text-xs text-left pl-1 mb--2 ${!highLight ? 'hidden' : ''}`}>
                ↓是否显示logo
              </div>
            </div>
          </div>
          
          <div className={`${!highLight ? 'h-10' : 'h-5'}`}>
            
          </div>
          
          {/* Logo选择滑块 */}
          
        <div className={`mt-4 px-4 pt-2 ${!highLight ? 'hidden' : ''}`}>
          <div className={`flex space-x-2 absolute right-5 bottom-8`}>
            
            <button
              type="button"
              onClick={() => setLogoSelection(0)}
              className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${logoSelection === 0 ? 'border-2 border-[#3B82F6] bg-[#3B82F6] text-white' : 'border-2 border-[#3B82F6] bg-white text-black'}`}
            >
              无
            </button>
            <button
              type="button"
              onClick={() => setLogoSelection(2)}
              className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${logoSelection === 2 ? 'border-2 border-[#3B82F6] bg-[#3B82F6] text-white' : 'border-2 border-[#3B82F6] bg-white text-black'}`}
            >
              旧
            </button>
            <button
              type="button"
              onClick={() => setLogoSelection(1)}
              className={`px-2 py-1 text-xs rounded-[5px] transition-colors ${logoSelection === 1 ? 'border-2 border-[#3B82F6] bg-[#3B82F6] text-white' : 'border-2 border-[#3B82F6] bg-white text-black'}`}
            >
              新
            </button>
          </div>
        </div>


          <div 
            className={`text-base mb--1 flex justify-end items-center ${getLogoSelectionClass()}`}
          >
          <img
            src={logoSelection === 1 ? "/images/CottiNew.png" : "/images/cotti.png"}
            alt="Cotti Coffee 标识"
            className="w-20 h-auto rounded-md object-contain"
          />
        </div>

          
        </div>
      </BaseCard>
    </div>
  )
}