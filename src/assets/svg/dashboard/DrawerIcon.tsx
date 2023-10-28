import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  width: number;
  height: number;
  color: string;
}
function DrawerIcon({ width = 28, height = 28, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M4.375 14H17.5M4.375 7h19.25M4.375 21h8.75"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DrawerIcon;
