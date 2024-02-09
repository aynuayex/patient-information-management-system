import axios from "axios";
import { Toaster } from "react-hot-toast";
import { SignIn, SignUp } from "@clerk/clerk-react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import HomePage from "./routes/home";
import PatientForm from "./routes/patient-form";
import DashboardPage, { patientsDataLoader } from "./routes/dashboard";
import ThemeContextProvider from "@/contexts/theme-context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={<DashboardPage />}
            loader={patientsDataLoader}
          />
          <Route
            path="patient"
            element={<PatientForm />}
            loader={async ({}) => null}
          />
          <Route
            path="patient/:id"
            element={<PatientForm />}
            loader={async ({ params }) => {
              const response = await axios.get(
                `http://localhost:3000/api/patients/${params.id}`
              );
              return response.data;
            }}
          />
        </Route>
      </Route>
    )
  );

  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeContextProvider>
  );
}

export default App;

