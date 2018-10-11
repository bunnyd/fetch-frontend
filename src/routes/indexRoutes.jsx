//pages
import Home from "../views/HomePage/Home";
import Entertainment from "../views/Components/pages/Entertainment";
import Signup from "../views/Components/pages/Signup";

var indexRoutes = [
  { path: "/", name: "HomePage", component: Home },
  {
    path: "/dogs-are-awesome",
    name: "DogsAreAwesome",
    component: Entertainment
  },
  { path: "/signup", name: "SignupPage", component: Signup }
];

export default indexRoutes;
