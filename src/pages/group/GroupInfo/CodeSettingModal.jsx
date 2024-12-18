import { Flex, Tag, Typography } from "antd";

import CustomModal from "../../../components/Modal/CustomModal";
import CustomTransfer from "../../../components/Transfer/CustomTransfer";
import { useState } from "react";

const { Title } = Typography;

const mockTags = ["cat", "dog", "bird"];
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `코드${i + 1}`,
  location: `구역${i + 1}`,
  place: `장소${i + 1}`,
  tag: mockTags[i % 3],
}));

const columns = [
  {
    dataIndex: "title",
    title: "발생코드",
  },
  {
    dataIndex: "location",
    title: "구역",
  },
  {
    dataIndex: "place",
    title: "장소",
  },
];

const filterOption = (input, item) =>
  item.title?.includes(input) || item.tag?.includes(input);

const CodeSettingModal = ({ open, onOK, onCancel }) => {
  const [targetKeys, setTargetKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const toggleDisabled = (checked) => {
    setDisabled(checked);
  };

  return (
    <CustomModal
      title={"발생코드 상세 설정"}
      open={open}
      onOk={onOK}
      onCancel={onCancel}
      okText="수정"
      width={1200}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: "10px 210px" }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: 24 }}>
          비활성화 코드
        </Typography>
        <Typography style={{ fontWeight: "bold", fontSize: 24 }}>
          활성화 코드
        </Typography>
      </Flex>
      <CustomTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={filterOption}
        leftColumns={columns}
        rightColumns={columns}
      />
    </CustomModal>
  );
};

export default CodeSettingModal;
