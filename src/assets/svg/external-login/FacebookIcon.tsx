// import * as React from 'react';
// const FacebookSvg = () => (
//   <svg width="21" height="20">
//     <path
//       d="M20.5 10C20.5 4.47658 16.0234 0 10.5 0C4.97658 0 0.5 4.47658 0.5 10C0.5 14.9922 4.15625 19.1289 8.9375 19.8789V12.8906H6.39842V10H8.9375V7.79688C8.9375 5.291 10.4297 3.90625 12.7148 3.90625C13.8086 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6914C12.4492 6.5625 12.0625 7.334 12.0625 8.125V10H14.8359L14.3926 12.8906H12.0625V19.8789C16.8438 19.1289 20.5 14.9922 20.5 10Z"
//       fill="#1877F2"
//     />
//   </svg>
// );
// export default FacebookSvg;

import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width: number;
  height: number;
  color: string;
}

const FacebookIcon = ({ width, height, color }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 21 20" fill="none">
    <Path
      d="M20.5 10C20.5 4.47658 16.0234 0 10.5 0C4.97658 0 0.5 4.47658 0.5 10C0.5 14.9922 4.15625 19.1289 8.9375 19.8789V12.8906H6.39842V10H8.9375V7.79688C8.9375 5.291 10.4297 3.90625 12.7148 3.90625C13.8086 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6914C12.4492 6.5625 12.0625 7.334 12.0625 8.125V10H14.8359L14.3926 12.8906H12.0625V19.8789C16.8438 19.1289 20.5 14.9922 20.5 10Z"
      fill={color}
    />
  </Svg>
);

export default FacebookIcon;
