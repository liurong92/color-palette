import '../style/index.scss'

import React from 'react'
import { render } from 'react-dom'
import ColorPalette from './colorPalette'

import data from '../data'

render(<ColorPalette data={data}/>,
  document.getElementById('colorPalette')
)
