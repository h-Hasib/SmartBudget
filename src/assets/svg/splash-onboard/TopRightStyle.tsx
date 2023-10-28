import * as React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';
const TopRightStyle = (props: SvgProps) => (
  <Svg width={144} height={168} fill="none" {...props}>
    <Circle cx={231.5} cy={-63.5} r={231.5} fill="#fff" fillOpacity={0.04} />
  </Svg>
);
export default TopRightStyle;
