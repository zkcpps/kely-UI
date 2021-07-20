import React, {} from 'react';
import * as Ai from 'react-icons/ai';
import './index.less';

interface IconProps {
  type: string;
  size: string;
  style: object;
  rotation: number;
}

export default (props: IconProps) => {
  const {
    type,
    size,
    rotation,
    style
  } = props;
  const IconComponent = Ai[type];
  return <IconComponent size={size} rotation={rotation} style={style} />;
};
