import React from 'react'
import { PropTypes} from 'prop-types'

class ColorPalette extends React.Component{
  render() {
    const { data } = this.props

    const elements = data.map( (item, index) => {
      return (
        <div key={index} className='color-palette-item' style={{background: item.color}}>
          <div className='color-palette-item-color'>{ item.color }</div>
          <div className='color-palette-item-name'>{ item.name }</div>
        </div>
      )
    })

    return (
      <div className='color-palette'>
        {elements}
      </div>
    )
  }
}

ColorPalette.propTypes = {
  data: PropTypes.array.isRequired
}

export default ColorPalette
