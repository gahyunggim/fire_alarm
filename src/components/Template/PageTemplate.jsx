import { Flex } from "antd";

const PageTemplate = ({ children }) => {
  return (
    <Flex vertical style={{ padding: 60 }}>
      {children}
    </Flex>
  );
};

export default PageTemplate;
