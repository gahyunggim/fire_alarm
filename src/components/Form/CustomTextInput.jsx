import { Form } from "antd";

const CustomFormItem = ({ label, name, ...rest }) => {
  return (
    <Form.Item label={label} name={name} {...rest}>
      {rest.children}
    </Form.Item>
  );
};

export default CustomFormItem;
