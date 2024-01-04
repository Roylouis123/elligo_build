import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./routes/layout";
import Drawer from "./components/appdrawer/drawer";
import Documents from "./routes/documents";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUser, setDocuments } from "./redux/counterSlice";
import GetDocs from "./redux/api";

Amplify.configure({
  Auth: {
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    region: import.meta.env.VITE_REGION,
  },
  API: {
    endpoints: [
      {
        name: "serverless-pdf-chat",
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        region: import.meta.env.VITE_REGION,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});

const App = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser(user));
    async function fetchData() {
      const res = await GetDocs(user);
      dispatch(setDocuments(res));
    }
    fetchData();
  }, [dispatch]);

  return (
    <Router >
      <div
        style={{
          display: "flex",
          height: "10vh",
          width: "100%",
          position: "fixed",
          backgroundColor: "white",
          
        }}
      >
        <Layout />
      </div>

      <div style={{ display: "flex", height: "100vh", marginTop: "10vh" }}>
        <div style={{ width: "25%", overflow: "hidden", padding: 2 }}>
          <Drawer />
        </div>

        <div style={{ width: "74%", overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<Documents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default withAuthenticator(App, { hideSignUp: true });
