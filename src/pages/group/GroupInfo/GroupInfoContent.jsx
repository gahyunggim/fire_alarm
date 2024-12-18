import { Button, Card, Flex, Form, Input, TimePicker } from "antd";

import CustomTable from "../../../components/Table/CustomTable";
import { useState } from "react";
import CustomModal from "../../../components/Modal/CustomModal";
import CodeSettingModal from "./CodeSettingModal";
import CustomFormItem from "../../../components/Form/CustomTextInput";
import TextArea from "antd/es/input/TextArea";

const mockingDataSource = [
  {
    groupCode: "그룹1",
    groupName: "김철수",
    description: "그룹 특이사항",
    groupTime: "10:00 ~ 12:00",
  },
];

const GroupInfoContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
    {
      title: "발생 코드 연계",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Button type="primary" onClick={handleModalOpen}>
          상세 설정
        </Button>
      ),
    },
  ];

  return (
    <>
      <CodeSettingModal
        open={isModalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      />
      <Flex gap={60}>
        <Flex flex={1}>
          <CustomTable dataSource={mockingDataSource} columns={columns} />
        </Flex>
        <Flex flex={1}>
          <Flex
            vertical
            gap={10}
            style={{
              width: "100%",
              border: "1px solid #d2d2d2",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Flex justify="flex-end" gap={10}>
              <Button type="primary">삭제</Button>
              <Button type="primary">저장</Button>
            </Flex>
            <Form>
              <CustomFormItem label="구분" name="groupCode">
                <Input />
              </CustomFormItem>
              <CustomFormItem label="그룹명" name="groupName">
                <Input />
              </CustomFormItem>
              <CustomFormItem label="내용" name="description">
                <TextArea />
              </CustomFormItem>
              <CustomFormItem label="시간대" name="groupTime">
                <TimePicker.RangePicker
                  placeholder={["시작 시간", "종료 시간"]}
                />
              </CustomFormItem>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default GroupInfoContent;
