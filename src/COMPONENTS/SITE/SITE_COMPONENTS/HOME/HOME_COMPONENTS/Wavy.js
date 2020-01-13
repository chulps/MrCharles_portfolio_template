import React from "react"

function Wavy(props) {
  return (
    <svg
      shapeRendering="geometricPrecision"
      width={'100%'}
      height={'100vh'}
      preserveAspectRatio={'none'}
      {...props}
    >
      <defs>
        <filter id="prefix__waterTexture">
          <feTurbulence result="undulation" numOctaves={2}>
            <animate
              attributeName="baseFrequency"
              dur="15s"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              values="0.005,0.009; 0.009,0.005; 0.005,0.009"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix in="undulation" type="hueRotate" values={180}>
            <animate
              attributeName="values"
              dur="1s"
              from={0}
              to={360}
              repeatCount="indefinite"
            />
          </feColorMatrix>
          <feColorMatrix
            in="dist"
            result="circulation"
            values="4 0 0 0 1 4 0 0 0 1 4 0 0 0 1 1 0 0 0 0"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="circulation"
            scale={10}
            result="dist"
          />
          <feDisplacementMap
            in="dist"
            in2="undulation"
            scale={20}
            result="woah"
          />
        </filter>
      </defs>
      <g
        filter="url(#prefix__waterTexture)"
        fontSize={140}
      >
        <rect width="100%" height="100%" fill="var(--white)" />
        <text x="40%" y="50%" fill="var(--secondary0)" fontFamily="var(--font0)" fontWeight="bold">
          {"Hi!"}
        </text>
      </g>
    </svg>
  )
}

export default Wavy
