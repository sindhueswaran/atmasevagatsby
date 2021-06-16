// custom typefaces
import "@fontsource/amatic-sc"
import "@fontsource/andika"

// custom CSS styles
import './src/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Highlighting for code blocks
//import "prismjs/themes/prism.css"

import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox' 

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)
