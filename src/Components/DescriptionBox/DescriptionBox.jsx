import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review 122</div>
      </div>
      <div className="descriptionbox-description">
        <p>MẬT ONG HOA VẢI BEHONEX EXPORT 600ML
          <br />
          Chỉ tiêu chất lượng chính:
          <br />
          Độ ẩm: ≤20% <br />
          Hàm lượng đường khử: 60-80%
          <br />
          Thành phần:
          <br />
        </p>
        <ul>
          <ol>

            Mật ong nguyên chất 100%
          </ol>
          <ol>

            Thể tích thực: 600ml
          </ol>
          <ol>

            Bảo quản: để nơi khô ráo, thoáng mát, hợp vệ sinh và tránh xa ánh sáng mặt trời
          </ol>
        </ul>
      </div>
    </div>
  )
}
