import React from 'react'
import './foundation.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'

const Foundation = () => {
  return (
    <div className='foundation'>
        <div className='foundation1'>
            <img src={img1} />
            <h1>2023 Founded</h1>
            <p>In 2023, MetaLogic, a beacon of innovation. Youthful, unwavering committment to exceptional software. Fresh perspective, building a legacy of quality and excellence.</p>
        </div>
        <div className='foundation2'>
            <img src={img2} />
            <h1>Visionary Leadership</h1>
            <p>MetaLogic: Founded by forward thinking visionaries, we harness technology to shape the future, driven by innovation and groundbreaking solutions.</p>
        </div>
        <div className='foundation3'>
            <img src={img3} />
            <h1>Commitment to Excellence</h1>
            <p>Founded on an unwavering committment to excellence. Our culture, instilled by founders, centers on continuous improvement, delivering high-quality software with dedication.</p>
        </div>
    </div>
  )
}

export default Foundation