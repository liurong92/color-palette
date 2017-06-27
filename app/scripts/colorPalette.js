import React from 'react'

class ColorPalette extends React.Component{
  render() {
    return (
      <div className='color-palette'>
        <div className='color-palette-item' style={{background: 'red'}}>
          <div className='color-palette-item-color'>#ddddd</div>
          <div className='color-palette-item-name'>等等</div>
        </div>
      </div>
    )
  }
}

export default ColorPalette
