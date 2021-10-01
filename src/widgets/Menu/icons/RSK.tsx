import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" fill="none" viewBox="0 0 80 80"  {...props}>
      <image width={80} height={80} href="/images/home/rsk-icon.png"/>
    </Svg>
  );
};

export default Icon;
