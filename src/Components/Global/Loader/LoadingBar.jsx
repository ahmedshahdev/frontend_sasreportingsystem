import React from 'react'

const LoadingBar = () => {
  return (
    <div className="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  );
}

export const MiniLoadingBar = () => {
  return (
    <div className="">
        <div class="spinner spinner-mini"></div>
      </div>
  )
}

export default LoadingBar