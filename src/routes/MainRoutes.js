import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - sample page
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));

// render - utilities
const Typography = Loadable(
  lazy(() => import("pages/components-overview/Typography"))
);
const Color = Loadable(lazy(() => import("pages/components-overview/Color")));
const Shadow = Loadable(lazy(() => import("pages/components-overview/Shadow")));
const AntIcons = Loadable(
  lazy(() => import("pages/components-overview/AntIcons"))
);
const NewMembersRegistration = Loadable(
  lazy(() => import("pages/components-overview/NewMembersRegistration"))
);
import StudentProfiles from "../pages/profiles/StudentProfiles";
import TeacherProfiles from "../pages/profiles/TeacherProfiles";
import SecretaryProfiles from "../pages/profiles/SecretaryProfiles";
import SessionsProfile from "pages/profiles/SessionsProfiles";
import Student from "pages/personal-profile/Student";
import Teacher from "pages/personal-profile/Teacher";
import Session from "pages/personal-profile/Session";
import Secretary from "./../pages/personal-profile/Secretary";

import CalenderEvents from "pages/CalendarEvents/CalenderEvents";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "Events",
      element: <CalenderEvents />,
    },
    {
      path: "/secProfile",
      element: <Secretary />,
    },
    {
      path: "/stuProfile",
      element: <Student />,
    },
    {
      path: "/teaProfile",
      element: <Teacher />,
    },
    {
      path: "/sessProfile",
      element: <Session />,
    },
    {
      path: "NewMembersRegistration",
      element: <NewMembersRegistration />,
    },
    {
      path: "StudentProfiles",
      element: <StudentProfiles />,
    },
    {
      path: "TeacherProfiles",
      element: <TeacherProfiles />,
    },
    {
      path: "SecretaryProfiles",
      element: <SecretaryProfiles />,
    },
    {
      path: "SessionsProfiles",
      element: <SessionsProfile />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },

  ],
};

export default MainRoutes;
