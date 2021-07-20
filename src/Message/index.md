## Message

```tsx
import React, { Fragment, useState } from 'react';
import { Button, Message } from 'my-ui';

const wrapStyle = {
  width: '500px',
  height: '55px',
  boxShadow: '0 0 4px 0 rgba(0,0,0,.3)',
  padding: '15px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-evenly',
};

export default () => {
  const open = (type, message) => {
    console.log(typeof Message[type]);
    Message[type]({ content: message });
  };

  return (
    <div style={wrapStyle}>
      <Button type="success" onClick={() => open('success', '成功信息')}>
        成功信息
      </Button>
      <Button type="info" onClick={() => open('info', '提示信息')}>
        提示信息
      </Button>
      <Button type="warning" onClick={() => open('warning', '警告信息')}>
        警告信息
      </Button>
      <Button type="danger" onClick={() => open('error', '错误信息')}>
        错误信息
      </Button>
    </div>
  );
};
```

## Pros

| 属性    | 说明     | 类型   |
| :------ | :------- | :----- |
| content | 提示内容 | string |
