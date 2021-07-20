import React, { useEffect, useState } from 'react';
import { default as Button } from '../Button';
import './index.less';

interface ModalProps {
  visable: boolean;
  width: string;
  title: string;
  footer: object;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onOk: () => void;
  centered: boolean;
  children: any;
}

export default (props: ModalProps) => {
  const {
    visable,
    width,
    title,
    footer,
    cancelText = '取消',
    okText = '确定',
    onCancel,
    onOk,
    centered,
    children
  } = props;

  return (
    <div className="mModalWrapper" style={{display: visable ? 'block' : 'none' }}>
      <div style={{width}} className={`mModalContent ${centered ? ' mCentered' : ''}`}>
        <div className="mModalHeader">
          <div className="mModalTitle">
            {title}
          </div>
        </div>
        <div className="mModalBody">
         { children }
          </div> 
        <div className="mModelFooter">
          {
            footer === null ? null :
              <div className="mModalFooter">
                {
                  footer ? footer :
                    <div className="mFooterBtn">
                      <Button
                        className="mFooterBtnCancel"
                        onClick={onCancel}
                      >
                        {cancelText}
                      </Button>
                      <Button
                        className="mFooterBtnOk"
                        onClick={onOk}
                        type="primary"
                      >
                        {okText}
                      </Button>
                    </div>
                }
              </div>
          }

        </div>
      </div>
      <div className="mModalMask"></div>
    </div>
  );
};
