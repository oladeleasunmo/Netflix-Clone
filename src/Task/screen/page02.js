import { FiUser } from "react-icons/fi";
import User from "../User";

const Page02 = () => {
  return (
    <>
      <div className="user_details pl-30px mt-4">
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
          <h5>{User.inventory[0].added}</h5>
        </div>
      </div>
      <div classname="table-responsive">
        <table className="table table-striped table-borderless">
          <thead>
            <tr>
              <th>item</th>
              <th>colour</th>
              <th>Quality</th>
            </tr>
          </thead>
          <tbody>
            {User.inventory.map((item, i) => (
              <tr>
                <td>
                  {item.content.map(i => (
                    <div>{i}</div>
                  ))}
                </td>
                <td>{item.color}</td>
                <td>
                  <form method="post">
                    <input className="btn btn-item" value={item.items} />
                  </form>
                </td>
                <td>
                  <button className="btn btn-remove">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row text-center">
        <hr className="line mt-4 mb-4"></hr>
        <div className="col-6">
          <a herf="" className="btn">
            Cancel
          </a>
        </div>
        <div className="col-6">
          <a herf="" className="btn btn-purple text-white">
            Update Inventory
          </a>
        </div>
      </div>
    </>
  );
};

export default Page02;
