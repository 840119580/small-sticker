import { message, Progress } from 'antd'
// import { Button } from '@chakra-ui/react'
// import { green } from 'antd/lib/c';
// import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import list from '../utils/router'
// import FollowMe from '../components/FollowMe';
import isVip from '../utils/isVip';
import AccountButton from "../components/AccountButton";

export default function index() {
  // const navigate = useNavigate();

  // const jumpBefore = (url: string) => {
  //   jump(url)
  // }

  // const jump = (url: string) => {
  //   navigate(url)
  // }

  // const h = 0
  const h = new Date().getHours()


  const time_list = [
    '夜已深，注意休息哦！', // 0,1,2
    '快去睡觉吧！', // 3,4,5
    '早安呀！',  // 6,7,8
    '早生蚝！', // 9,10,11
    '记得按时吃饭哦！', // 12,13,14
    '下午好！', // 15,16,17
    '吃了嘛！！', // 18,19,20
    '累了一天，该休息啦~', // 21,22,23
  ]

  const getMsg = () => {
    switch (h) {
      case 15:
        return '三点几嘞！'
      default:
        return time_list[Math.floor(h / 3)]
    }
  }

  return (
    <div className='max-w-xl mx-auto relative z-10'>
      {/* <div className='w-40 h-40 rounded-full bg-blue-100 absolute -top-10 -left-10 z-0 blur-circle'></div>
      <div className='w-40 h-40 rounded-full bg-green-100 absolute top-10 -right-10 z-0 blur-circle'></div>
      <div className='w-40 h-40 rounded-full bg-purple-100 absolute top-30 left-10 z-0 blur-circle'></div> */}

      <div absolute className='-left-5 -top-5 -right-5 z-0'>
        <img src="/images/focus-bg.png" alt="" />
      </div>

      <div className='my-4 relative p-4'>
        <img src='/images/big-sticker_logo_2.webp' alt='logo' className='w-12 h-12' />
        <div className='text-3xl op90 mt-5'>{getMsg()}</div>
        {/* <div className='text-lg op90 mt-2'>没想到快死的站点突然流量暴涨！恢复更新预告！</div> */}
        <div className='flex gap-4 items-center relative mt-4'>
          <CopyToClipboard text=''
            onCopy={() => message.success({ content: 'QQ群号 已复制' })}>
            <div className="bg-white h-8 w-8 flex items-center justify-center rounded-md">
              <div className="i-ri-qq-fill text-xl text-[#0099FF]" />
            </div>
          </CopyToClipboard>
          {/* <div
            onClick={() => message.warning({ content: '要不 考虑一下加QQ群？' })}>
            <div className='bg-white h-8 w-8 flex items-center justify-center rounded-md' >
              <div className="i-ri-wechat-fill text-xl text-[#07C160]" />
            </div>
          </div> */}
          {/* <a href='https://github.com/YuzeTT/small-sticker' className='bg-white h-8 w-8 flex items-center justify-center rounded-md'>
            <div className="i-ri-github-fill text-xl text-[#1F2328]" />
          </a>
          <a href='https://www.xiaohongshu.com/user/profile/5dbc28ee00000000010047ef' className='bg-white h-8 w-8 flex items-center justify-center rounded-md'>
            <img src="/images/red.svg" alt="red" className='w-4 h-4' />
          </a>
          <a href='https://afdian.net/a/sticker' className='bg-white h-8 w-8 flex items-center justify-center rounded-md overflow-hidden'>
            <img src="/images/aifadian-2.png" alt="red" className='w-5 h-5 rounded-sm' />
          </a> */}
        </div>
        

        {/* <div className='card p-2 rounded-2xl mt-4'>
          <div text-xs op50 mb-1>公告</div>
          <div>新版站点正在进行早期测试，可能会随机刷新出各种BUG！！新增自由拖拽布局，编辑更自由，100毫秒内急速出图。PS：仅上线瑞幸咖啡标签。<a href="https://beta.sticker.hsott.cn/" text-blue-600 underline>戳我传送</a></div>
        </div> */}


        {/* <a href='/user' className='absolute top-0 right-0 m-4 bg-green-100 p-1 rounded-full flex items-center text-green-700'>
          <div className="i-ri-account-circle-fill text-xl" />
          <div className='text-sm mx-1'>我的账户</div>
        </a> */}
        <div className='absolute top-0 right-0 m-4'>
          <AccountButton />
        </div>
      </div>
      {/* <div className='p-4 flex flex-col items-center justify-center bg-white border-1 rounded-lg relative'>
        <div className="i-ri-feedback-line text-2xl text-red-500" />
        <div className='mt-2 font-bold text-lg'>站点通知</div>
        <div className='mt-1 text-sm op50'>小红书和网站遭到恶意举报。</div>
        <div className='mt-3'>
          <a href='/notice' className='px-2.5 py-1.5 bg-zinc-900 rounded text-white text-xs'>了解更多</a>
        </div>
      </div> */}
      {/* <div className='px-2 py-4 flex items-center  bg-red-200 text-red-600 border-1 rounded-lg relative border-3 border-white ring-3 ring-red-600'>
        <div className="text-4xl text-white mr-4 ml-2" >🤬</div>
        <div>
          <div className='font-bold text-lg'>救！站点被抄袭！！！</div>
          <div className='mt-1 text-sm op50'>本工具仅有网页端！！！</div>
          <div className='mt-3'>
            <a href='/notice2' className='px-2.5 py-1.5 bg-red-600 rounded text-white text-xs'>了解更多</a>
          </div>
        </div>
      </div> */}
      <div className='mb-6 mt-6 text-[24px] font-bold relative px-4 flex items-center gap-2'>
        <div>所有工具</div>
        {/* <div className='text-[1rem] bg-gray-100 text-gray-600 px-1 py-0.5 rounded'>Beta</div> */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
        {list.done.map((item, key) => (
          <a href={item.url} className='flex' key={key}>
            <div className={`flex items-center justify-center h-13.5 w-13.5 rounded-md p-3`} style={{ background: `linear-gradient(to top right, ${item.color[0]}, ${item.color[1]})` }}>
              <img src={item.logo} alt="logo" className='w-auto max-h-8 h-auto' />
            </div>
            <div className='ml-4 flex-1'>
              <div className='text-[16px] font-bold flex items-center gap-2'>
                <div>{item.name[0]}</div>
                <div className='text-xs px-1 py-0.5' style={{ backgroundColor: item.tag_color[0], color: item.tag_color[1] }}>{item.tag}</div>
              </div>
              <div className='text-[14px] op50 mt-1'>{item.name[1]}</div>
            </div>
          </a>
        ))}
      </div>
      {/* <div text='sm' op50 mb-2>已完成</div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
        {list.done.map((item, key)=>(
          <div p-4  cursor-pointer rounded-xl decoration-none relative overflow-hidden className='bg-white z-0 card hover:bg-zinc-50 transition' key={key} onClick={()=>{jumpBefore(item.url)}}>
            <div className='z-20'>
              <div flex='~ items-start justify-between'>
                <div className='w-25 h-10 bg-contain bg-contain bg-left bg-no-repeat' text='center' style={{backgroundImage: `url(${item.logo})`}} />
                {item.tag?
                  <div className='px-1 py-0.5 text-xs rounded absolute right-2 top-2' style={{backgroundColor: item.tag_color[0], color: item.tag_color[1]}}>{item.tag}</div>
                  :''
                }
              </div>
              <div mt-4 text='xl zinc-700'>{item.name[0]}</div>
              <div text='xs zinc-500'>{item.name[1]}</div>
            </div>
            {item.tag==='热门'?
              <div className='absolute top-0 right-0 z-0 w-full h-full bg-no-repeat bg-right-top' style={{backgroundImage: 'url(/images/card_bg_red.svg)'}}></div>
              :''
            }
          </div>
        ))}
      </div> */}
      {/* <div text='sm' op50 mb-2 mt-4>待制作（或许赞助可以加速呢！）</div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 op50'>
        {list.todo.map((item, key)=>(
          <div p-4 className='card hover:bg-zinc-50 transition' rounded-xl decoration-none key={key} >
            <div flex='~ items-start justify-between'>
              <div className='w-25 h-10 bg-contain bg-contain bg-left bg-no-repeat' text='center' style={{backgroundImage: `url(${item.logo})`}} />
            </div>
            <div className='mt-6' text='xl zinc-700'>{item.name[0]}</div>
            <div text='sm zinc-500'>{item.name[1]}</div>
          </div>
        ))}
      </div> */}


    </div >
  )
}
