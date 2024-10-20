import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { useEffect } from "react";
import useAuth from "../../hooks/use-auth";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const { data } = useAuth();

  useEffect(() => {
    if (!data) {
      navigate("/sign-in");
    }
  });

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
