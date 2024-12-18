import { Button, Divider, Flex, Typography } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import CustomTable from "../../../components/Table/CustomTable";

const { Title } = Typography;

const mockingDataSource = [
  {
    groupCode: "그룹1",
    groupName: "김철수",
    description: "그룹 특이사항",
    groupTime: "10:00 ~ 12:00",
  },
];

const mockingMemberDataSource = [
  {
    name: "홍길동",
    contact: "010-1234-5678",
  },
  {
    name: "김철수",
    contact: "010-4321-8765",
  },
];

const columns = [
  {
    title: "구분",
    dataIndex: "groupCode",
    key: "groupCode",
  },
  {
    title: "그룹명",
    dataIndex: "groupName",
    key: "groupName",
  },
  {
    title: "내용",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "시간대",
    dataIndex: "groupTime",
    key: "groupTime",
  },
];

const memberColumns = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "연락처",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "삭제",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Button
        type="text"
        icon={<DeleteFilled style={{ color: "red" }} />}
      ></Button>
    ),
  },
];

const GroupMemberContent = () => {
  return (
    <Flex gap={60}>
      <Flex flex={1}>
        <CustomTable dataSource={mockingDataSource} columns={columns} />
      </Flex>
      <Divider type="vertical" style={{ height: "100%" }} />
      <Flex flex={1}>
        <Flex
          vertical
          style={{
            width: "100%",
            border: "1px solid #d2d2d2",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Title level={4}>그룹 인원 편집</Title>
          <Flex justify="flex-end">
            <Button type="primary">추가</Button>
          </Flex>
          <CustomTable
            dataSource={mockingMemberDataSource}
            columns={memberColumns}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GroupMemberContent;
