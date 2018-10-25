//pages
import Home from "../views/Components/pages/Home";
import Entertainment from "../views/Components/pages/Entertainment";
import SignupUser from "../views/Components/pages/SignupUser";
import SignupDog from "../views/Components/pages/SignupDog";
import AdoptADog from "../views/Components/pages/AdoptADog";

var indexRoutes = [
  { path: "/", name: "HomePage", component: Home },
  {
    path: "/dogs-are-awesome",
    name: "DogsAreAwesome",
    component: Entertainment
  },
  {
    path: "/adopt-a-dog",
    name: "AdoptADog",
    component: AdoptADog
  },
  { path: "/signup", name: "SignupPage", component: SignupUser },
  { path: "/signup-dog", name: "SignupDogPage", component: SignupDog }
];

export default indexRoutes;
