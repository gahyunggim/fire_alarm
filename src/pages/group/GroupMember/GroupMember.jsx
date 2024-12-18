import CustomTabs from "../../../components/Tabs/CustomTabs";
import PageTemplate from "../../../components/Template/PageTemplate";
import GroupMemberContent from "./GroupMemberContent";

const GroupMember = () => {
  return (
    <PageTemplate>
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
