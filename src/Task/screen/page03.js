import User from "../User";
import Accordion from "react-bootstrap/Accordion";
import Inventory from "../inventory";
import { FiArchive, FiSearch } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Header from "../Header";

const Page03 = ({ p }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Header /> */}
      <div className="title">
        <h2 className="pl-30px">Inventory</h2>
        <div></div>
      </div>
      <div className="search_block">
        <form>
          <fieldset className="row">
            <input
              type="search"
              placeholder="search items"
              className="pl-30px"
            />
            <FiSearch />
          </fieldset>
        </form>
      </div>
      <div className="pl-30px mt-3">
        <Accordion flush>
          {Inventory.map((item, i) => (
            <Accordion.Item eventKey={i}>
              <Accordion.Header>
                <div className="row j-c-c">
                  <div className="row">
                    <FiArchive />
                    <h2>{item.type}</h2>
                  </div>
                  {/* <div>{item.cart.map((p) => }</div> */}
                  <div>47,000</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.cart.map((purchase, i) => (
                  <div className="Accordion-content">
                    <div className="row j-c-c">
                      <div className="row">
                        <FiArchive />
                        <div>
                          <div>{purchase.content}</div>
                          <small>{item.type}</small>
                        </div>
                      </div>
                      <div>
                        <div>{purchase.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div>
          <button
            className="btn btn-purple w-100 text-white"
            onClick={handleShow}
          >
            Update Inventory
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="post">
            <input placeholder="Chair" className="w-100" />
            <select className="w-100">
              <option selected disabled>
                --select options--
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>
            <div className="row">
              <div className="col-sm-6 p-0">
                <input
                  className=""
                  placeholder="Quantity"
                  type="number"
                  name="quantity"
                  min="1"
                />
              </div>
              <div className="col-sm-6 p-0">
                <select className="w-100">
                  <option selected disabled>
                    --select options--
                  </option>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} className="btn">
            Cancel
          </button>
          <button variant="primary" className="btn btn-purple text-white">
            Add item
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Page03;
