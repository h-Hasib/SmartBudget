import * as React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

function CardCircle() {
  return (
    <Svg width={176} height={172} viewBox="0 0 176 172" fill="none">
      <Circle
        cx={83.4405}
        cy={42.4405}
        r={83.4405}
        fill="url(#paint0_linear_496_24666)"
        fillOpacity={0.13}
      />
      <Circle cx={138.864} cy={89.3379} r={77.959} fill="#fff" fillOpacity={0.04} />
      <Circle
        cx={119.984}
        cy={121.617}
        r={85.8768}
        fill="url(#paint1_linear_496_24666)"
        fillOpacity={0.06}
      />
      <Circle
        cx={96.8401}
        cy={97.2557}
        r={85.8768}
        fill="url(#paint2_linear_496_24666)"
        fillOpacity={0.08}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_496_24666"
          x1={0.000003504}
          y1={25.387}
          x2={82.8315}
          y2={79.5929}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_496_24666"
          x1={119.984}
          y1={35.7407}
          x2={119.984}
          y2={207.494}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_496_24666"
          x1={96.8401}
          y1={11.3789}
          x2={-6.09016}
          y2={145.98}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.962948} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CardCircle;
