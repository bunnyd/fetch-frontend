//meetups
import AddMeetup from "../views/Components/meetups/AddMeetup";
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
  { path: "/add-meetup", name: "AddMeetupPage", component: AddMeetup }
];

export default loggedInRoutes;
