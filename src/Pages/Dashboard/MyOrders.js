import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orderParts, setOrderParts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrderParts(data));
  }, [user]);
  console.log(orderParts);
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cancel order</th>
          </tr>
        </thead>
        <tbody>
          {orderParts.map((orderPart, index) => (
            <tr key={orderPart._id} carPart={orderPart}>
              <td>{index + 1}</td>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded-xl">
                    <img src={orderPart.img} alt="pic" />
                  </div>
                </div>
              </td>
              <td>{orderPart.name}</td>
              <td>{orderPart.price}</td>
              <td>{orderPart.quantity}</td>
              <td>
                <button class="btn btn-outline btn-sm btn-neutral">
                  <FontAwesomeIcon className="delete-icon" icon={faCancel} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
