import { Modal, Typography } from "antd";

const { Title } = Typography;

const CustomModal = ({
  open,
  onOK,
  onCancel,
  children,
  cancelText = "취소",
  okText = "확인",
  title,
  width = 520,
}) => {
  return (
    <Modal
      open={open}
      onOk={onOK}
      onCancel={onCancel}
      cancelText={cancelText}
      okText={okText}
      width={width}
    >
      <Title level={3}>{title}</Title>
      {children}
    </Modal>
  );
};

export default CustomModal;
