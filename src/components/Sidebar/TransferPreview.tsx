import * as React from 'react';
import Modal from 'antd/lib/modal';
import Icon from 'antd/lib/icon';
import Spin from 'antd/lib/spin';
import { ITransferPreview } from './interface';

const TransferPreview: React.SFC<ITransferPreview> = ({
  isShowTransferView,
  onCancel,
  onOk,
  fromAccount,
  toAccount,
  amount,
}) => {
  const [isTransfer, setIsTransfer] = React.useState(false);
  const fromMoney = Number(fromAccount.amount) - amount;
  const toMoney = Number(toAccount.amount) + amount;

  const handleOk = () => {
    setIsTransfer(true);

    setTimeout(() => {
      setIsTransfer(false);
      onOk();
    }, 2000);
  };
  return (
    <Modal
      title="Transfer Preview"
      visible={isShowTransferView}
      onOk={handleOk}
      onCancel={onCancel}
      className="transfer-preview-modal"
    >
      <div className="transfer-preview-container">
        <h2>Transfer details:</h2>
        <p>
          Are you sure, you want to transfer money amount of <b>${amount}</b>{' '}
          from <b>{fromAccount.merchant}</b> to <b>{toAccount.merchant}</b>?
        </p>

        <div className="transfer-details">
          <div>
            <h3>From: {fromAccount.merchant}</h3>
            <h4>Current money: ${fromAccount.amount}</h4>
            <h4>Money: ${fromMoney}</h4>
          </div>
          <Icon type="arrows-alt" />
          <div>
            <h3>To: {toAccount.merchant}</h3>
            <h4>Current money: ${toAccount.amount}</h4>
            <h4>Money: ${toMoney}</h4>
          </div>
        </div>
      </div>

      {isTransfer && (
        <div className="transfer-spinner">
          <Spin tip="Transferring money..." />
        </div>
      )}
    </Modal>
  );
};

export default TransferPreview;
