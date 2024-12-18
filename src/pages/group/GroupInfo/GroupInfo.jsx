import CustomTabs from "../../../components/Tabs/CustomTabs";
import PageTemplate from "../../../components/Template/PageTemplate";
import GroupInfoContent from "./GroupInfoContent";

const GroupInfo = () => {
  return (
    <PageTemplate>
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
