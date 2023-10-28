import * as React from 'react';
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';
const LogoIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={203}
    height={164}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M138.159 23.35c.242 8.548-3.478 14.076-11.063 18.35a3959.02 3959.02 0 0 1-28.212 15.794c-10.338 5.713-12.947 12.728-5.508 21.972-2.415 5.11-10.82 4.134-15.459 3.437-5.217-3.066-6.715-9.708-6.425-15.143.435-7.758 4.686-15.098 10.532-20.347A15368.612 15368.612 0 0 1 138.11 6.906c0 5.482 0 10.963.048 16.445Z"
      />
      <Path
        fill="url(#c)"
        d="M93.425 79.466s-1.111-.883-2.995-2.462c-8.84-7.572-20.338-19.278-8.406-29.59-3.961 2.88-7.246 6.317-10.048 9.987-8.454 10.87-6.812 28.382-6.425 41.436.193 6.271 7.922 7.664 12.802 5.156 5.41-2.787 11.159-5.853 16.425-8.594 8.019-4.088 4.106-11.752-1.353-15.933Z"
      />
      <Path
        fill="url(#d)"
        d="M65.84 136.649c-.241-8.547 3.478-14.075 11.063-18.349a3981.622 3981.622 0 0 1 28.213-15.794c10.338-5.713 12.946-12.728 5.507-21.972 2.415-5.11 10.821-4.134 15.459-3.437 5.217 3.066 6.715 9.708 6.425 15.143-.435 7.712-4.686 15.098-10.531 20.347a17214.259 17214.259 0 0 1-56.088 40.507c0-5.482 0-10.963-.048-16.445Z"
      />
      <Path
        fill="url(#e)"
        d="M110.575 80.58s1.111.883 2.995 2.463c8.841 7.571 20.338 19.231 8.406 29.59 3.961-2.88 7.246-6.318 10.048-9.987 8.454-10.87 6.812-28.383 6.425-41.483-.193-6.27-7.922-7.664-12.802-5.156-5.41 2.787-11.159 5.853-16.377 8.594-8.067 4.134-4.154 11.752 1.305 15.98Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={146.664}
        x2={72.504}
        y1={47.506}
        y2={42.315}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#A6ACC1" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={58.869}
        x2={99.348}
        y1={74.47}
        y2={77.306}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#8592C0" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={141.035}
        x2={66.875}
        y1={117.13}
        y2={111.939}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#A6ACC1" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={98.375}
        x2={138.843}
        y1={81.907}
        y2={84.739}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#8592C0" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h203v164H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LogoIcon;
