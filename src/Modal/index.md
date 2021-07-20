## Modal

例子:

```tsx
import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'my-ui';

export default () => {
  const [show, setShow] = useState(false);
  const changeShow = () => {
    setShow(true);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };
  return (
    <Fragment>
      <Button type="primary" onClick={() => changeShow()}>
        模态框
      </Button>
      <Modal 
        title="标题" 
        visable={show} 
        width={600}
        centered={true}
        onCancel={handleOk}
        onOk={handleCancel}
      >
      <p>我是弹框内容</p>
      <p>我是弹框内容</p>
      <p>我是弹框内容</p>
      </Modal>
    </Fragment>
  );
};
```

## Pros

| 属性    | 说明             | 类型                         |
| :------ | :--------------- | :--------------------------- |
| title    | 标题     | string
| visable    | 是否可见     | boolean    |
| width | 宽度 |  number         |
| centered |  是否中间展示 |     boolean    |  
| onCancel | 取消回调方法 |  (event) => void             |
| onOk | 确定按钮回调方法 |  (event) => void             |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} |  ReactNode             |

