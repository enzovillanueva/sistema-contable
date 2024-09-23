import "../styles/ArticleHomePage.css";
import { useFetchGET } from "../hooks/useFetchGET";
import { DashboardMenu } from "../components/Dashboard/DashboardMenu";
import "../styles/Dashboard.css"

const urlUsers = "http://localhost:8080/api/users";

export const Dashboard = () => {
  const { state } = useFetchGET(urlUsers);
  const { data, isLoading, errors } = state;

  return (
    // Otro componente...
    <>
      <div className="dash-container">
        <DashboardMenu/>
      </div>
    </>
  )
};
