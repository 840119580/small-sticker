// import { HTMLAttributes, useEffect, useState } from "react";

// export default function HighText({
//   text,
//   show,
//   eg,
//   large,
//   inputed,
//   value,
//   ...attrs
// }: {
//   text?: string,
//   show: boolean,
//   eg?: string,
//   large?: boolean,
//   inputed?: boolean,
//   value?: string
// } & HTMLAttributes<HTMLDivElement>) {
//   const [quickInput, setQuickInput] = useState('')
//   useEffect(() => {
//     if (inputed) {
//       setQuickInput(eg || '')
//     }
//   }, [inputed, eg])
//   return (
//     <div
//       {...attrs}
//       inline-block
//       align-top
//       className={`rounded-1 ${attrs.className}`}
//     >
//       <div contentEditable={true} suppressContentEditableWarning={true} style={show ? { padding: large ? '0.5rem 0.5rem' : '0.1rem 0.25rem', color: '#000000', background: '#DBEAFE', border: '1.5px solid #3B82F6', borderRadius: '0.25rem' } : {}} outline-none relative>
//         {quickInput}{value}
//         {/* {show?
//           <div absolute w-full h-full bg-blue-100 rounded-md className="-z-10  -top-1 -left-2 py-1 px-2"></div>:''
//         } */}
//       </div>
//       {show ?
//         <div className={`${large ? 'text-4xl font-500 mt-1' : 'text-xs'}`}>
//           {text ?
//             <div text='blue-500' flex='~ items-center' className={`${large ? 'py-2' : 'py-0.5'}`}>
//               <div className="i-ri-corner-left-up-line" />
//               {/* <div className="i-ri-arrow-up-line" /> */}
//               <div>{text}</div>
//             </div> : ''
//           }
//           {eg ?
//             <div text='gray-500' flex='~ items-center' className='pb-0.5 -mt-0.5' onClick={() => { setQuickInput(eg) }}>
//               {/* <div className="i-ri-corner-left-up-line" /> */}
//               {/* <div className="i-ri-arrow-up-line" /> */}
//               <div className="i-ri-skip-right-line" />
//               <div className='cursor-pointer' >{eg}</div>
//             </div>
//             : ''
//           }
//         </div>
//         : ''
//       }
//       {show ? <div mb-1 /> : ''}
//     </div>
//   )
// }

// HighText.tsx 调整
import { HTMLAttributes, useEffect, useState, forwardRef } from "react"; // 新增 forwardRef

// 用 forwardRef 包裹组件，透传ref到内部可编辑div
const HighText = forwardRef<HTMLDivElement, {
  text?: string,
  show: boolean,
  eg?: string,
  large?: boolean,
  inputed?: boolean,
  value?: string
} & HTMLAttributes<HTMLDivElement>>(({
  text,
  show,
  eg,
  large,
  inputed,
  value,
  ...attrs
}, ref) => { // 接收透传的ref
  const [quickInput, setQuickInput] = useState('')
  useEffect(() => {
    if (inputed) {
      setQuickInput(eg || '')
    }
  }, [inputed, eg])

  return (
    <div
      {...attrs}
      style={{ display: 'inline-block', verticalAlign: 'top' }} // 替换自定义原子类为标准样式
      className={`rounded-1 ${attrs.className}`}
    >
      {/* 将ref绑定到contentEditable的div，透传onBlur等事件 */}
      <div 
        ref={ref} // 绑定外部传入的ref
        contentEditable={true} 
        suppressContentEditableWarning={true} 
        style={{
          outline: 'none',
          position: 'relative',
          ...(show ? { 
            padding: large ? '0.5rem 0.5rem' : '0.1rem 0.25rem', 
            color: '#000000', 
            background: '#DBEAFE', 
            border: '1.5px solid #3B82F6', 
            borderRadius: '0.25rem' 
          } : {})
        }}
        // 透传所有事件（包括onBlur）
        {...attrs}
      >
        {quickInput}{value}
      </div>
      {/* 原有提示文本逻辑不变 */}
      {show ?
        <div className={`${large ? 'text-4xl font-500 mt-1' : 'text-xs'}`}>
          {text ?
            <div style={{ color: '#3B82F6', display: 'flex', alignItems: 'center', padding: large ? '0.5rem 0' : '0.125rem 0' }}>
              <div className="i-ri-corner-left-up-line" />
              <div>{text}</div>
            </div> : ''
          }
          {eg ?
            <div style={{ color: '#6B7280', display: 'flex', alignItems: 'center', paddingBottom: '0.125rem', marginTop: '-0.125rem' }} onClick={() => { setQuickInput(eg) }}>
              <div className="i-ri-skip-right-line" />
              <div className='cursor-pointer' >{eg}</div>
            </div>
            : ''
          }
        </div>
        : ''
      }
      {show ? <div style={{ marginBottom: '0.25rem' }} /> : ''}
    </div>
  )
})

export default HighText;