/* Logo component */

import * as React from "react" 
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => { 

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/atmasevalogo.png"
        width={120}
        height={120}
        quality={95}
        alt="Profile picture"
      />
      
    </div>
  )
}

export default Logo
