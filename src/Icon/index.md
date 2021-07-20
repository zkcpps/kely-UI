## Icon 

```tsx
import React, { Fragment, useState } from 'react';
import { Icon } from 'my-ui';

export default () => {
  return (
    <Fragment>
      <Icon type="AiOutlinePlus" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="AiOutlineDelete" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="AiFillEdit" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="AiOutlineFileSearch" size="24px" style={{ marginLeft: '15px' }} />
    </Fragment>
  );
};
```
## API文档
| 参数     | 说明                 | 类型   | 默认值 |
|:-------- |:-------------------- |:------ |:------ |
| type     | icon类型             | string |        |
| size     | icon大小(px，lg，xs) | string |        |
| rotation | 旋转角度             | number |        |
| style    | 图标样式             | object |        |

#### 更多图标可以在如下界面获得
   <iframe  
      height=1000 
      width=100% 
      src="https://react-icons.github.io/react-icons/icons?name=ai"  
      frameborder=0  
      allowfullscreen>
    </iframe>

