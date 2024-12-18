import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import GroupInfo from "./pages/group/GroupInfo/GroupInfo";
import GroupMember from "./pages/group/GroupMember/GroupMember";
import { Button, Flex } from "antd";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Flex gap={20}>
        <Flex
          gap={40}
          justify="center"
          style={{ width: "100%", paddingTop: 80 }}
        >
          <Button
            size="large"
            type={"primary"}
            onClick={() => navigate("/group/groupInfo")}
          >
            그룹 설정 페이지로 이동
          </Button>
          <Button
            size="large"
            type={"primary"}
            onClick={() => navigate("/group/groupMember")}
          >
            그룹 인원 편집 페이지로 이동
          </Button>
        </Flex>
      </Flex>
      <Routes>
        <Route path="/group/groupInfo" element={<GroupInfo />} />
        <Route path="/group/groupMember" element={<GroupMember />} />
      </Routes>
    </>
  );
}

export default App;
