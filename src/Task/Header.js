import { FiMapPin, FiAlignJustify, FiArrowLeft } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import Inventory from "./inventory";

const Header = ({ p, ih, iu, n }) => {
  return (
    <>
      <div className="header">
        <div className="row j-c-c pl-30px">
          <div>
            {p ? (
              <div className="location">
                <FiMapPin />
              </div>
            ) : ih ? (
              <div>
                <FiArrowLeft />
              </div>
            ) : iu ? (
              <div>
                <FiArrowLeft />
              </div>
            ) : (
              n
            )}
          </div>
          <div className="row">
            <div>
              <IoMdNotifications />
            </div>
            <div className="ml-3">
              <FiAlignJustify />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
