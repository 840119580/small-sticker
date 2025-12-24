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
        <div className='w-90 z-0 relative px-4 py-3 bg-[#FAF4D2] rounded-lg overflow-hidden block'>
          
          {/* 顶部：日期时间 + 二维码区域 */}
          <div className='flex justify-between items-center mb-0 relative'>
            <div className='text-xs'>
              <HighText show={highLight} text='日期 时间' eg={dayjs().format('MM-DD HH:mm:ss')} />
            </div>

            {/* 修改 cotti-new.tsx 中的 HighText 用法 */}
            {highLight && (
              <div className='text-xs ml-2'>
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
                  position: 'absolute',
                  right: '25px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  width: '40px',
                  height: '40px'
                }}
              >
                <QRCodeSVG
                  value={qrcodeText}
                  size={80}
                  bgColor="transparent"
                  fgColor="#000000"
                  level="H"
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
