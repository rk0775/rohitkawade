import React from 'react'
import "./GitStatus.css"
export default function GitStatus() {
  return (
    <div className='git-container'>
      <div className='git-parrent'>
        <div class="git-header">
          <img className='git-contribution' src="https://camo.githubusercontent.com/8af683bc73cf30581e4612da3cfdce93fca4d1f32285852597a88f8d17cba5a0/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d726b3037373526" alt='rk0775,s contribution'></img>
          <div className='git-chart'>
            <img className='mt-5' src="https://ghchart.rshah.org/rk0775" alt="rk0775's Github chart" />
          </div>
        </div>
      </div>
    </div>
  )
}
