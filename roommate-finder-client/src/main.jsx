import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayOut from "./Layout/MainLayOut.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AddRoomMate from "./pages/AddRoomMate.jsx";
import UpdateRoomMate from "./pages/UpdateRoomMate.jsx";
import Home from "./Components/Home.jsx";
import ListingDetails from "./Components/ListingDetails.jsx";
import UpdateListing from "./Components/UpdateListing.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import BrowseListings from "./pages/BrowseListings.jsx";
import MyListings from "./pages/MyListings.jsx";
import Loading from "./Components/Loading.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import TermAndConditions from "./pages/TermAndConditions.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("https://room-mate-finder-server.vercel.app/addlisting"),

        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/browselistings",
        loader: () => fetch("https://room-mate-finder-server.vercel.app/addlisting"),
        Component: BrowseListings,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/addroommate",
        // Component: AddRoomMate,
        element: (
          <PrivateRoute>
            <AddRoomMate></AddRoomMate>
          </PrivateRoute>
        ),
      },
      {
        path: "/roomdetails/:id",
        loader: ({ params }) =>
          fetch(`https://room-mate-finder-server.vercel.app/addlisting/${params.id}`),
        element: (
          <PrivateRoute>
            <ListingDetails></ListingDetails>
          </PrivateRoute>
        ),
        // Component: ListingDetails,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/updatelisting/:id",
        loader: ({ params }) =>
          fetch(`https://room-mate-finder-server.vercel.app/addlisting/${params.id}`),
        Component: UpdateListing,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },

      {
        path: "/mylistings",
        Component: MyListings,
        hydrateFallbackElement: <Loading></Loading>,
      },
       {
        path: "/contact",
        Component: ContactDetails,
      },
       {
        path: "/termandconditions",
        Component: TermAndConditions,
      },
      {
        path: "/users",
        loader: () => fetch("https://room-mate-finder-server.vercel.app/users"),
        Component: Users,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
