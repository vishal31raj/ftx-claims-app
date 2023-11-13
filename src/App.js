import { Container } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import VerifyIdentityComponent from "./pages/verify-identity/VerifyIdentityComponent";
import KycComponent from "./pages/kyc/KycComponent";
import ReviewBalanceComponent from "./pages/review-balance/ReviewBalanceComponent";
import SubmissionComponent from "./pages/submission/SubmissionComponent";
import RootComponent from "./pages/Root";
import OwnerAuthenticationComponent from "./pages/owner-authentication/OwnerAuthenticationComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/owner-authentication",
        element: <OwnerAuthenticationComponent />,
      },
      {
        path: "/confirm-email",
        element: <VerifyIdentityComponent />,
      },
      {
        path: "/redo-kyc",
        element: <KycComponent />,
      },
      {
        path: "/wallet",
        element: <ReviewBalanceComponent />,
      },
      {
        path: "/kroll-portal",
        element: <SubmissionComponent />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <Container maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
