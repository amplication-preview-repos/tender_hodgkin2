import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LeaderboardList } from "./leaderboard/LeaderboardList";
import { LeaderboardCreate } from "./leaderboard/LeaderboardCreate";
import { LeaderboardEdit } from "./leaderboard/LeaderboardEdit";
import { LeaderboardShow } from "./leaderboard/LeaderboardShow";
import { StageList } from "./stage/StageList";
import { StageCreate } from "./stage/StageCreate";
import { StageEdit } from "./stage/StageEdit";
import { StageShow } from "./stage/StageShow";
import { BonusList } from "./bonus/BonusList";
import { BonusCreate } from "./bonus/BonusCreate";
import { BonusEdit } from "./bonus/BonusEdit";
import { BonusShow } from "./bonus/BonusShow";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LanguageLearningGameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Leaderboard"
          list={LeaderboardList}
          edit={LeaderboardEdit}
          create={LeaderboardCreate}
          show={LeaderboardShow}
        />
        <Resource
          name="Stage"
          list={StageList}
          edit={StageEdit}
          create={StageCreate}
          show={StageShow}
        />
        <Resource
          name="Bonus"
          list={BonusList}
          edit={BonusEdit}
          create={BonusCreate}
          show={BonusShow}
        />
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
