import { Typography } from "antd";
import CustomTabs from "../../../components/Tabs/CustomTabs";
import PageTemplate from "../../../components/Template/PageTemplate";
import GroupInfoContent from "./GroupInfoContent";

const { Title } = Typography;

const GroupInfo = () => {
  return (
    <PageTemplate>
      <Title level={2}>그룹 설정</Title>
      <CustomTabs
        contents={[
          {
            label: "소방",
            component: <GroupInfoContent />,
          },
          {
            label: "가스감지기",
            component: <GroupInfoContent />,
          },
        ]}
      />
    </PageTemplate>
  );
};

export default GroupInfo;
