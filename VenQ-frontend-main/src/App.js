import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Verification from "./components/signup/Verification";
import Dashboard from "./components/dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import Properties from "./components/dashboard/property/Properties";
import Portfolio from "./components/dashboard/contents/Portfolio";
import Rewards from "./components/dashboard/rewards/Rewards";
import Cart from "./components/dashboard/cart/Cart";
import Profile from "./components/dashboard/account/Profile";
import Referrals from "./components/dashboard/rewards/Referrals";
import Tier from "./components/dashboard/rewards/Tier";
import Wallet from "./components/dashboard/contents/Wallet";
import Bookmarks from "./components/dashboard/account/Bookmarks";
import PropertyItem from "./components/dashboard/property/PropertyItem";
import Photos from "./components/dashboard/property/Photos";
import Form from "./components/AdminForm/Form";
import FormEdit from "./components/AdminForm/FormEdit";
import Terms from "./footerpages/Terms";
import Risks from "./footerpages/Risks";
import Privacy from "./footerpages/Privacy";
import Refund from "./footerpages/Refund";
import Learn from "./components/home/Learn";
import LearnView from "./components/home/LearnView";
import UserInterests from "./components/dashboard/UserInterests/UserInterests";
import PropertyInterests from "./components/dashboard/UserInterests/PropertyInterests";
import Allinterests from "./components/dashboard/UserInterests/Allinterests";
import ExitWindows from "./components/home/ExitWindows";
import CCD from "./components/home/CCD";
import Returns from "./components/home/Returns";
import Regulations from "./components/home/Regulations";
import Investing from "./components/home/Investing";
import AdminPanel from "./components/dashboard/rewards/AdminPanel";
import AdminDashboard from "./components/dashboard/rewards/AdminDashboard";
import FormUserDetails from "./components/dashboard/listings/FormUserDetails";
import FormPersonalDetails from "./components/dashboard/listings/FormPersonalDetails";
import ThirdPage from "./components/dashboard/listings/ThirdPage";
import FourthPage from "./components/dashboard/listings/FourthPage";
import SecondLastPage from "./components/dashboard/listings/secondLastPage";
import FinalPage from "./components/dashboard/listings/LocationPage";
import Addlisting from "./components/dashboard/listings/Addlistings";
import AllPropertyInterests from "./components/dashboard/UserInterests/AllPropertyInterests";
import PropertyPage from "./components/PropertyPage/PropertyPage";
import NewLogin from "./components/login/NewLogin";
import NewSignup from "./components/signup/NewSignup";
import BlogPage from "./components/blog/BlogPage";
import Blogpost from "./components/blog/Blogpost";
import PendingKyc from "./components/dashboard/investors/PendingKyc";
import Amenities from "./components/dashboard/listings/Amenities";
import Allinvestorslist from "./components/dashboard/listings/Allinvestorslist";
import InvestorsDetails from "./components/dashboard/UserInterests/InvestorsDetails";
import ContactUs from "./footerpages/ContactUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<NewLogin />} />
        <Route path="blog" element={<BlogPage />} />
        <Route exact path="/blog/:blogTitle" element={<Blogpost />} />
        <Route path="/signup" element={<NewSignup />} />
        <Route path="form" element={<Form />} />
        <Route path=":id/edit" element={<FormEdit />} />
        <Route path="terms" element={<Terms />} />
        <Route path="risks" element={<Risks />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="learn" element={<Learn />} />
        <Route path="learn-view" element={<LearnView />} />
        <Route path="ccd" element={<CCD />} />
        <Route path="exitwindow" element={<ExitWindows />} />
        <Route path="returns" element={<Returns />} />
        <Route path="regulations" element={<Regulations />} />
        <Route path="investing" element={<Investing />} />

        {/* <Route path="signup/*" element={<Signup />}>
          <Route path="verify" element={<Verification />} />
        </Route> */}

        <Route path="propertyinterests">
          <Route path=":propertyid" element={<PropertyInterests />} />
        </Route>
        <Route
          path="investorDetails/:investorId"
          element={<InvestorsDetails />}
        />

        <Route path="abc/def/ghi" element={<FormUserDetails />} />
        {/* </Route> */}
        <Route path="/allinterests/view" element={<Allinterests />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="properties" element={<Properties />} />
          <Route path="properties/view/:id" element={<PropertyItem />} />
          <Route path="properties/view/photos/:id" element={<Photos />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="rewards/tier" element={<Tier />} />
          <Route path="rewards/referrals" element={<Referrals />} />
          <Route path="allinvestors" element={<PendingKyc />} />
          <Route path="allinvestorslist" element={<Allinvestorslist />} />
          <Route
            path="allpropertyinterests/userinterests/:propertyid"
            element={<UserInterests />}
          />
          <Route
            path="allpropertyinterests"
            element={<PropertyInterests />}
          ></Route>
          <Route path="addlisting/*" element={<AdminDashboard />}>
            <Route path="details" element={<Addlisting />} />
            <Route path="highlights" element={<FormPersonalDetails />} />
            <Route path="photos" element={<ThirdPage />} />
            <Route path="info" element={<FourthPage />} />
            <Route path="timeline" element={<SecondLastPage />} />
            <Route path="location" element={<FinalPage />} />
            <Route path="amenities" element={<Amenities />} />
          </Route>
        </Route>

        <Route path="/" element={<Home />} />
      <Route path="contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
