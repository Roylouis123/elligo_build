import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./routes/layout";
import Drawer from "./components/appdrawer/drawer";
import Dashboard from "./components/Dashboard/dashboard";
import Chat from "./routes/chat";

Amplify.configure({
  Auth: {
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    region: import.meta.env.VITE_API_REGION,
  },
  API: {
    endpoints: [
      {
        name: "serverless-pdf-chat",
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        region: import.meta.env.VITE_API_REGION,
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

// let router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <Drawer />,
//     children: [
//       {
//         index: true,
//         Component: Documents,
//       },
//       {
//         path: "/doc/:documentid/:conversationid",
//         Component: Chat,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <Drawer />
      </div>
      <div style={{ flex: 1, marginLeft: '350px' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default withAuthenticator(App, { hideSignUp: true });
