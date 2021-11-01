import { AiOutlineArrowUp } from "react-icons/ai";
import { Fragment, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeProvider";
import "./BackToTopButton.css";

export const BackToTopButton = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const theme = useContext(ThemeContext);
  const textColor = theme.themeStyle.textSecondaryColor;
  const bgColor = theme.themeStyle.bgColor;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      {showButton && (
        <AiOutlineArrowUp onClick={scrollToTop} size="50px" style={{ color: bgColor, backgroundColor: textColor }} className="back-to-top" />
      )}
    </Fragment>
  );
};
