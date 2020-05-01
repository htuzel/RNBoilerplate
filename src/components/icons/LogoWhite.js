import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgLogoWhite(props) {
  return (
    <Svg
      id="logo-white_svg__katman_1"
      x={0}
      y={0}
      viewBox="0 0 508.9 166.9"
      xmlSpace="preserve"
      width="240"
      height="140"
      {...props}>
      <Circle
        className="logo-white_svg__st0"
        cx={106.9}
        cy={81.4}
        r={76.5}
        fill="#fff"
      />
      <Path
        d="M124.3 57.7h-19.7V118H89V57.7H69.3V44.1h55v13.6zm48 60.3h-15.2v-8h-.2c-3.8 6.2-8.8 9.3-15.1 9.3-11.5 0-17.2-7.4-17.2-22.2V65.2h15.2v30.4c0 7.5 2.8 11.2 8.3 11.2 2.7 0 4.9-1 6.6-3.1 1.6-2 2.5-4.8 2.5-8.3V65.2h15.2V118h-.1z"
        fill="#24afe0"
      />
      <Path
        className="logo-white_svg__st0"
        d="M221.3 80.5c-1.8-1.1-4-1.6-6.4-1.6-3.3 0-5.9 1.3-7.8 3.9-1.9 2.6-2.8 6.1-2.8 10.6v25.2H189V65.8h15.3v9.8h.2c2.4-7.1 6.8-10.7 13-10.7 1.6 0 2.9.2 3.8.6v15zm48.3 38.1h-14.4V111h-.2c-3.3 5.9-8.2 8.9-14.7 8.9-4.8 0-8.6-1.5-11.3-4.4-2.8-2.9-4.1-6.8-4.1-11.6 0-10.2 5.7-16.2 17-17.7l13.4-1.9c0-5.8-2.9-8.7-8.8-8.7s-11.5 1.9-16.8 5.6V68.9c2.1-1.2 5-2.2 8.7-3.1s7-1.3 10.1-1.3c14.1 0 21.1 7.5 21.1 22.5v31.6zm-14.4-21.5v-3.6l-9 1.2c-5 .7-7.4 3.1-7.4 7.2 0 1.9.6 3.4 1.8 4.6s2.8 1.8 4.9 1.8c2.9 0 5.2-1.1 7-3.2s2.7-4.7 2.7-8zm63.9 19.6c-3.4 2.1-8.4 3.2-14.9 3.2-7.6 0-13.7-2.5-18.4-7.4-4.7-4.9-7-11.3-7-19 0-9 2.5-16 7.6-21.2 5-5.2 11.8-7.8 20.2-7.8 5.8 0 10 .8 12.6 2.5v13.8c-3.2-2.5-6.7-3.8-10.7-3.8-4.4 0-7.8 1.4-10.4 4.1s-3.8 6.5-3.8 11.3c0 4.7 1.2 8.3 3.7 11 2.4 2.7 5.8 4 10.1 4 3.8 0 7.5-1.3 11.2-3.8v13.1h-.2zm33.5 3.2c-8.2 0-14.7-2.5-19.4-7.4-4.7-4.9-7.1-11.6-7.1-20.1 0-8.7 2.4-15.6 7.3-20.5s11.5-7.4 19.8-7.4c8.2 0 14.6 2.5 19.3 7.4 4.7 4.9 7 11.5 7 19.6 0 8.8-2.4 15.7-7.2 20.8-4.7 5-11.3 7.6-19.7 7.6zM353 77c-3.6 0-6.4 1.3-8.4 4-2 2.6-3 6.4-3 11.2 0 10.1 3.8 15.2 11.5 15.2 7.3 0 11-5.2 11-15.6 0-9.9-3.7-14.8-11.1-14.8zm60.1 42.9c-8.2 0-14.7-2.5-19.4-7.4-4.7-4.9-7.1-11.6-7.1-20.1 0-8.7 2.4-15.6 7.3-20.5s11.5-7.4 19.8-7.4c8.2 0 14.6 2.5 19.3 7.4 4.7 4.9 7 11.5 7 19.6 0 8.8-2.4 15.7-7.2 20.8-4.8 5-11.3 7.6-19.7 7.6zm.4-42.9c-3.6 0-6.4 1.3-8.4 4-2 2.6-3 6.4-3 11.2 0 10.1 3.8 15.2 11.5 15.2 7.3 0 11-5.2 11-15.6-.1-9.9-3.8-14.8-11.1-14.8zm84.2 41.6h-15.2V89.3c0-8.2-2.7-12.3-8.2-12.3-2.6 0-4.8 1.1-6.5 3.2-1.7 2.2-2.6 4.9-2.6 8.2v30.1H450V65.8h15.3v8.4h.2c3.6-6.4 8.9-9.6 15.9-9.6 10.9 0 16.4 7.3 16.4 21.8l-.1 32.2zM178.6 148.9H169v-19.6h2.2v17.5h7.4v2.1zm13-6.4h-9.3c0 1.6.4 2.8 1.2 3.6s1.8 1.3 3.1 1.3c1.5 0 2.8-.5 4.1-1.6v2.1c-1.2.9-2.7 1.3-4.6 1.3-1.9 0-3.3-.6-4.4-1.9s-1.6-3.1-1.6-5.4c0-2.2.6-4 1.7-5.3 1.2-1.4 2.6-2.1 4.3-2.1s3 .6 4 1.8c.9 1.2 1.4 2.8 1.4 4.9v1.3h.1zm-2.1-1.9c0-1.3-.3-2.3-.9-3-.6-.7-1.4-1.1-2.4-1.1s-1.8.4-2.5 1.1c-.7.8-1.1 1.7-1.3 3h7.1zm14.7 8.3h-2.1v-2.2h-.1c-.9 1.7-2.3 2.5-4 2.5-1.3 0-2.3-.4-3.1-1.1-.7-.7-1.1-1.7-1.1-2.9 0-2.6 1.4-4.1 4.3-4.6l3.9-.6c0-2.4-.9-3.6-2.7-3.6-1.6 0-3 .6-4.3 1.7v-2.3c1.3-.9 2.8-1.3 4.5-1.3 3.1 0 4.6 1.7 4.6 5.2v9.2h.1zm-2.1-7l-3.2.5c-1 .1-1.7.4-2.2.8s-.7 1-.7 2c0 .7.2 1.2.7 1.7.5.4 1.1.6 1.8.6 1 0 1.9-.4 2.6-1.2.7-.8 1-1.8 1-3v-1.4zm12.9-4.7c-.4-.3-.9-.5-1.6-.5-.9 0-1.6.5-2.2 1.4-.6.9-.9 2.1-.9 3.7v7.1h-2.1v-14h2.1v2.9h.1c.3-1 .8-1.8 1.4-2.3.6-.6 1.3-.8 2.1-.8.5 0 1 .1 1.3.2v2.3h-.2zm13.1 11.7H226v-8c0-3-1-4.5-3-4.5-1 0-1.9.4-2.6 1.3-.7.8-1 1.9-1 3.2v8h-2.1v-14h2.1v2.3h.1c1-1.8 2.4-2.7 4.3-2.7 1.4 0 2.5.5 3.3 1.5s1.1 2.4 1.1 4.3v8.6h-.1zm22.3 0h-2.1v-2.4h-.1c-1 1.8-2.5 2.7-4.5 2.7-1.6 0-3-.6-3.9-1.9-1-1.3-1.5-3-1.5-5.1 0-2.3.5-4.2 1.6-5.6 1.1-1.4 2.5-2.1 4.4-2.1 1.8 0 3.1.8 3.9 2.3h.1v-8.7h2.1v20.8zm-2.1-6.3v-2.1c0-1.1-.4-2.1-1-2.9-.7-.8-1.6-1.2-2.7-1.2-1.3 0-2.3.5-3 1.5s-1.1 2.4-1.1 4.2c0 1.6.4 2.9 1.1 3.8.7.9 1.6 1.4 2.8 1.4s2.1-.5 2.8-1.4c.8-.8 1.1-1.9 1.1-3.3zm7.4-11.2c-.4 0-.7-.1-1-.4s-.4-.6-.4-1 .1-.8.4-1c.3-.3.6-.4 1-.4s.7.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1c-.2.2-.6.4-1 .4zm1.1 17.5h-2.1v-14h2.1v14zm10.7-18.7c-.4-.2-.9-.4-1.4-.4-1.5 0-2.2 1-2.2 3v2.2h3.1v1.9h-3.1V149h-2.1v-12.1h-2.2V135h2.2v-2.3c0-1.5.4-2.6 1.2-3.5.8-.9 1.8-1.3 3-1.3.6 0 1.1.1 1.5.2v2.1zm8.2 0c-.4-.2-.9-.4-1.4-.4-1.5 0-2.2 1-2.2 3v2.2h3.1v1.9h-3.1V149H270v-12.1h-2.2V135h2.2v-2.3c0-1.5.4-2.6 1.2-3.5.8-.9 1.8-1.3 3-1.3.6 0 1.1.1 1.5.2v2.1zm12.3 12.3h-9.3c0 1.6.4 2.8 1.2 3.6s1.8 1.3 3.1 1.3c1.5 0 2.8-.5 4.1-1.6v2.1c-1.2.9-2.7 1.3-4.6 1.3s-3.3-.6-4.4-1.9c-1.1-1.3-1.6-3.1-1.6-5.4 0-2.2.6-4 1.7-5.3 1.2-1.4 2.6-2.1 4.3-2.1s3 .6 4 1.8c.9 1.2 1.4 2.8 1.4 4.9l.1 1.3zm-2.2-1.9c0-1.3-.3-2.3-.9-3s-1.4-1.1-2.4-1.1-1.8.4-2.5 1.1c-.7.8-1.1 1.7-1.3 3h7.1zm12.2-3.4c-.4-.3-.9-.5-1.6-.5-.9 0-1.6.5-2.2 1.4s-.9 2.1-.9 3.7v7.1h-2.1v-14h2.1v2.9h.1c.3-1 .8-1.8 1.4-2.3.6-.6 1.3-.8 2.1-.8.5 0 1 .1 1.3.2v2.3h-.2zm12.4 5.3h-9.3c0 1.6.4 2.8 1.2 3.6s1.8 1.3 3.1 1.3c1.5 0 2.8-.5 4.1-1.6v2.1c-1.2.9-2.7 1.3-4.6 1.3s-3.3-.6-4.4-1.9c-1.1-1.3-1.6-3.1-1.6-5.4 0-2.2.6-4 1.7-5.3 1.2-1.4 2.6-2.1 4.3-2.1 1.7 0 3 .6 4 1.8.9 1.2 1.4 2.8 1.4 4.9l.1 1.3zm-2.1-1.9c0-1.3-.3-2.3-.9-3s-1.4-1.1-2.4-1.1-1.8.4-2.5 1.1c-.7.8-1.1 1.7-1.3 3h7.1zm16.2 8.3h-2.1v-8c0-3-1-4.5-3-4.5-1.1 0-1.9.4-2.6 1.3-.7.8-1 1.9-1 3.2v8h-2.1v-14h2.1v2.3h.1c1-1.8 2.4-2.7 4.3-2.7 1.4 0 2.5.5 3.3 1.5s1.1 2.4 1.1 4.3l-.1 8.6zm10-.1c-.5.3-1.1.4-2 .4-2.3 0-3.4-1.4-3.4-4.1v-8.3h-2.3v-1.9h2.3v-3.4l2.1-.7v4.1h3.3v1.9h-3.3v7.9c0 .9.1 1.6.4 2s.8.6 1.5.6c.5 0 1-.2 1.4-.5v2zm4.8-3l-2 6.7h-1.5l1.5-6.7h2zm10.1 2.6V146c1.1.9 2.4 1.4 3.8 1.4 1.8 0 2.8-.7 2.8-2 0-.4-.1-.7-.2-1-.2-.3-.4-.5-.6-.7-.3-.2-.6-.4-.9-.5-.4-.2-.8-.3-1.2-.5-.6-.2-1.1-.5-1.5-.7-.4-.3-.8-.5-1.1-.8-.3-.3-.5-.7-.7-1.1-.1-.4-.2-.9-.2-1.4 0-.7.1-1.2.4-1.7s.7-.9 1.1-1.3c.5-.3 1-.6 1.6-.8s1.2-.3 1.9-.3c1.1 0 2.2.2 3 .6v2.3c-1-.7-2.1-1-3.3-1-.4 0-.7 0-1.1.1s-.6.2-.8.4c-.2.2-.4.4-.5.6-.1.2-.2.5-.2.8 0 .4.1.7.2.9s.3.5.5.7.5.4.9.5c.3.2.7.3 1.2.5.6.2 1.1.5 1.6.7.5.3.9.5 1.2.8s.6.7.7 1.1.3.9.3 1.5c0 .7-.1 1.3-.4 1.8s-.7.9-1.1 1.3c-.5.3-1 .6-1.7.8s-1.3.2-2 .2c-1.5.1-2.7-.2-3.7-.8zm14.1-1.5l-.1 8.5h-2.1V135h2.1v2.5h.1c1-1.9 2.5-2.8 4.5-2.8 1.7 0 3 .6 4 1.9.9 1.3 1.4 2.9 1.4 5 0 2.3-.5 4.2-1.6 5.6-1.1 1.4-2.5 2.1-4.4 2.1-1.7 0-3-.8-3.9-2.4zm-.1-5.6v2c0 1.2.4 2.1 1.1 2.9s1.6 1.2 2.7 1.2c1.3 0 2.3-.5 3-1.6.7-1 1.1-2.5 1.1-4.3 0-1.6-.3-2.8-1-3.7s-1.6-1.3-2.7-1.3c-1.2 0-2.2.5-2.9 1.4-.9.9-1.3 2-1.3 3.4zm23.9 1.2H378c0 1.6.4 2.8 1.2 3.6s1.8 1.3 3.1 1.3c1.5 0 2.8-.5 4.1-1.6v2.1c-1.2.9-2.7 1.3-4.6 1.3s-3.3-.6-4.4-1.9-1.6-3.1-1.6-5.4c0-2.2.6-4 1.7-5.3 1.2-1.4 2.6-2.1 4.3-2.1 1.7 0 3 .6 4 1.8.9 1.2 1.4 2.8 1.4 4.9l.1 1.3zm-2.2-1.9c0-1.3-.3-2.3-.9-3s-1.4-1.1-2.4-1.1-1.8.4-2.5 1.1c-.7.8-1.1 1.7-1.3 3h7.1zm14.7 8.3h-2.1v-2.2h-.1c-.9 1.7-2.3 2.5-4 2.5-1.3 0-2.3-.4-3.1-1.1s-1.1-1.7-1.1-2.9c0-2.6 1.4-4.1 4.3-4.6l3.9-.6c0-2.4-.9-3.6-2.7-3.6-1.6 0-3 .6-4.3 1.7v-2.3c1.3-.9 2.8-1.3 4.5-1.3 3.1 0 4.6 1.7 4.6 5.2v9.2h.1zm-2.1-7l-3.2.5c-1 .1-1.7.4-2.2.8-.5.4-.7 1-.7 2 0 .7.2 1.2.7 1.7.5.4 1.1.6 1.8.6 1 0 1.9-.4 2.6-1.2s1-1.8 1-3v-1.4zm17 7h-2.9l-5.8-6.7h-.1v6.7h-2.1v-20.7h2.1v13.1h.1l5.5-6.4h2.8l-6.1 6.8 6.5 7.2zm8.5-.5V146c1.1.9 2.4 1.4 3.8 1.4 1.8 0 2.8-.7 2.8-2 0-.4-.1-.7-.2-1-.2-.3-.4-.5-.6-.7-.3-.2-.6-.4-.9-.5-.4-.2-.8-.3-1.2-.5-.6-.2-1.1-.5-1.5-.7-.4-.3-.8-.5-1.1-.8-.3-.3-.5-.7-.7-1.1-.1-.4-.2-.9-.2-1.4 0-.7.1-1.2.4-1.7s.7-.9 1.1-1.3c.5-.3 1-.6 1.6-.8s1.2-.3 1.9-.3c1.1 0 2.2.2 3 .6v2.3c-1-.7-2.1-1-3.3-1-.4 0-.7 0-1.1.1s-.6.2-.8.4c-.2.2-.4.4-.5.6-.1.2-.2.5-.2.8 0 .4.1.7.2.9s.3.5.5.7.5.4.9.5c.3.2.7.3 1.2.5.6.2 1.1.5 1.6.7.5.3.9.5 1.2.8s.6.7.7 1.1.3.9.3 1.5c0 .7-.1 1.3-.4 1.8s-.7.9-1.1 1.3c-.5.3-1 .6-1.7.8s-1.3.2-2 .2c-1.5.1-2.7-.2-3.7-.8zm21.3.5h-2.1v-2.2h-.1c-.9 1.7-2.3 2.5-4 2.5-1.3 0-2.3-.4-3.1-1.1s-1.1-1.7-1.1-2.9c0-2.6 1.4-4.1 4.3-4.6l3.9-.6c0-2.4-.9-3.6-2.7-3.6-1.6 0-3 .6-4.3 1.7v-2.3c1.3-.9 2.8-1.3 4.5-1.3 3.1 0 4.6 1.7 4.6 5.2v9.2h.1zm-2.1-7l-3.2.5c-1 .1-1.7.4-2.2.8-.5.4-.7 1-.7 2 0 .7.2 1.2.7 1.7.5.4 1.1.6 1.8.6 1 0 1.9-.4 2.6-1.2s1-1.8 1-3v-1.4zm24.7 7H465v-8c0-1.5-.2-2.7-.7-3.4-.4-.7-1.2-1-2.3-1-.9 0-1.7.4-2.3 1.3-.6.9-.9 1.9-.9 3.1v8h-2.1v-8.3c0-2.8-1-4.1-3-4.1-.9 0-1.7.4-2.3 1.2-.6.8-.9 1.9-.9 3.2v8h-2.1v-14h2.1v2.2h.1c.9-1.7 2.3-2.5 4.1-2.5.9 0 1.7.3 2.3.8.7.5 1.1 1.2 1.4 2.1 1-1.9 2.4-2.9 4.4-2.9 2.9 0 4.3 1.9 4.3 5.7v8.6zm14.5-6.4h-9.3c0 1.6.4 2.8 1.2 3.6s1.8 1.3 3.1 1.3c1.5 0 2.8-.5 4.1-1.6v2.1c-1.2.9-2.7 1.3-4.6 1.3s-3.3-.6-4.4-1.9-1.6-3.1-1.6-5.4c0-2.2.6-4 1.7-5.3 1.2-1.4 2.6-2.1 4.3-2.1 1.7 0 3 .6 4 1.8.9 1.2 1.4 2.8 1.4 4.9l.1 1.3zm-2.2-1.9c0-1.3-.3-2.3-.9-3s-1.4-1.1-2.4-1.1-1.8.4-2.5 1.1c-.7.8-1.1 1.7-1.3 3h7.1zm6.1 8.6c-.4 0-.7-.2-1-.5s-.4-.7-.4-1.1c0-.4.1-.8.4-1.1s.6-.5 1-.5.7.2 1 .5.4.7.4 1.1c0 .4-.1.8-.4 1.1-.3.4-.6.5-1 .5zm5.7 0c-.4 0-.7-.2-1-.5s-.4-.7-.4-1.1c0-.4.1-.8.4-1.1s.6-.5 1-.5.7.2 1 .5.4.7.4 1.1c0 .4-.1.8-.4 1.1-.3.4-.6.5-1 .5zm5.7 0c-.4 0-.7-.2-1-.5s-.4-.7-.4-1.1c0-.4.1-.8.4-1.1s.6-.5 1-.5.7.2 1 .5.4.7.4 1.1c0 .4-.1.8-.4 1.1-.3.4-.6.5-1 .5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgLogoWhite;
