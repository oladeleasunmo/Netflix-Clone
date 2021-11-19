import User from "../User";
import { FiUser } from "react-icons/fi";

const Page01 = () => {
  return (
    <>
      <div className="user_details pl-30px">
        <div className="image_block">
          {User.image ? (
            <img></img>
          ) : (
            <div>
              <FiUser />
            </div>
          )}
        </div>
        <div>
          <h3>{User.name}</h3>
          <h5>{User.id}</h5>
        </div>
      </div>
      <div classname="table-responsive">
        <table className="table table-striped table-borderless">
          <thead>
            <tr>
              <th>Added</th>
              <th>Items</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {User.inventory.map((item, i) => (
              <tr>
                <td>{item.added}</td>
                <td>{item.items}</td>
                <td>{item.status ? "Approved" : "Declined"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <hr className="line mt-4 mb-4"></hr>
        <a herf="" className="btn btn-purple text-white">
          Update Inventory
        </a>
      </div>
    </>
  );
};

export default Page01;
