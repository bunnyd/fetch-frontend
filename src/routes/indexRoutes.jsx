//pages
import Home from "../views/HomePage/Home";
import Entertainment from "../views/Components/pages/Entertainment";
import SignupUser from "../views/Components/pages/SignupUser";
import SignupDog from "../views/Components/pages/SignupDog";

var indexRoutes = [
  { path: "/", name: "HomePage", component: Home },
  {
    path: "/dogs-are-awesome",
    name: "DogsAreAwesome",
    component: Entertainment
  },
  { path: "/signup", name: "SignupPage", component: SignupUser },
  { path: "/signup-dog", name: "SignupDogPage", component: SignupDog }
];

export default indexRoutes;
