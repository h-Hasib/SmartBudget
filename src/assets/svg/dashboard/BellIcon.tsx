import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  width: number;
  height: number;
  color: string;
}
function BellIcon({ width = 20, height = 20, color }: IconProps) {
  return (
    <Svg width={width} height={height} color={color} viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.39 8.125A5.617 5.617 0 0110.04 2.5c3.093.024 5.57 2.594 5.57 5.695v.555c0 2.797.586 4.422 1.101 5.313a.625.625 0 01-.539.937H3.828a.625.625 0 01-.539-.937c.516-.891 1.102-2.516 1.102-5.313v-.625zM7.5 15v.625a2.5 2.5 0 005 0V15"
        stroke="#9AA4C0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BellIcon;
