import { Typography } from "antd";
import CustomTabs from "../../../components/Tabs/CustomTabs";
import PageTemplate from "../../../components/Template/PageTemplate";
import GroupMemberContent from "./GroupMemberContent";

const { Title } = Typography;

const GroupMember = () => {
  return (
    <PageTemplate>
      <Title level={2}>그룹 인원 편집</Title>
      <CustomTabs
        contents={[
          {
            label: "소방",
            component: <GroupMemberContent />,
          },
          {
            label: "가스감지기",
            component: <GroupMemberContent />,
          },
        ]}
      />
    </PageTemplate>
  );
};

export default GroupMember;
