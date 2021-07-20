## Button

```tsx
import React, { Fragment } from 'react';
import { Button } from 'my-ui';

const wrapStyle = {
  width: '680px',
  height: '110px',
  boxShadow: '0 0 4px 0 rgba(0,0,0,.3)',
  padding: '15px',
  borderRadius: '4px'
};

export default () => {
  return (
    <div style={wrapStyle}>
          <Button>默认按钮</Button>
          <Button type='primary'>主要按钮</Button>
          <Button type='info'>信息按钮</Button>
          <Button type='warning'>警告按钮</Button>
          <Button type='danger'>危险按钮</Button>
          <Button disabled>禁用按钮</Button>
        <br/>
        <br/>
          <Button round>圆角按钮</Button>
          <Button round type='primary'>主要按钮</Button>
          <Button round type='info'>信息按钮</Button>
          <Button round type='warning'>警告按钮</Button>
          <Button round type='danger'>危险按钮</Button>
          <Button round disabled>禁用按钮</Button>
    </div>
  );
};
```

## Pros

| 属性    | 说明             | 类型                         |
| :------ | :--------------- | :--------------------------- |
| type    | 设置按钮类型     | danger \| primary \| default |
| size    | 设置按钮大小     | large \| middle \| small     |
| onClick | 点击按钮时的回调 | (event) => void              |
| disabled |  禁用按钮 |     boolean    |  
| round | 圆角按钮 |  boolean           |
