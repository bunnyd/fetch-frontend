//meetups
import Meetup from "../views/Components/meetups/Meetup";
import Meetups from "../views/Components/meetups/Meetups";

//users
import EditUser from "../views/Components/users/EditUser";
import User from "../views/Components/users/User";

//pages
import Login from "../views/Components/pages/Login";
import Logout from "../views/Components/pages/Logout";

var loggedInRoutes = [
  { path: "/login", name: "LoginPage", component: Login },
  { path: "/logout", name: "LogoutPage", component: Logout },
  { path: "/profile", name: "ProfilePage", component: User },
  { path: "/edit-account", name: "EditAccountPage", component: EditUser },
  { path: "/meetups", name: "MeetupsPage", component: Meetups },
  { path: "/meetup", name: "MeetupPage", component: Meetup }
];

export default loggedInRoutes;
