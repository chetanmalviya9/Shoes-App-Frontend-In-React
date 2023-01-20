import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { emptyCart } from "../reductconfig/CartSlice";
import { setMessage } from "../reductconfig/UserSlice";
import WebApi from "../reductconfig/WebApi";
import WebService from "../reductconfig/WebService";

export function Placeorder() {
    const { user } = useSelector(state => state.user.value);
    let { cartList, totalBill } = useSelector(state => state.cart.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [contact, setContact] = useState();
    const [address, setAddress] = useState();
    const [payment, setPayment] = useState();
    const placeOrder = async (event) => {
        let date = new Date();
        let orderDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        event.preventDefault();
        let response = await WebService.postApi(WebApi.PLACE_ORDER, {
            userId: user._id,
            email: user.email,
            deliveryAddress: address,
            paymentMode: payment,
            contact: contact,
            billAmount: totalBill,
            date: orderDate,
            itemList: cartList
        });
        if (response.data.status) {
            dispatch(emptyCart());
            dispatch(setMessage("Order Place SuccessFully"));
            navigate("/product");
        }
        else {
            toast.error("Oops! something went wrong..");
            event.target.reset();
        }
    }
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row">
                <div className="col-5 m-auto">
                    <form onSubmit={placeOrder}>
                        <div className="form-group">
                            <label>Email :-</label>
                            <h4>{user.email}</h4>
                        </div>
                        <div className="form-group">
                            <label>Contact number :-</label>
                            <input onChange={(event) => setContact(event.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Delivery Address :-</label>
                            <textarea onChange={(event) => setAddress(event.target.value)} rows="3" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Payment mode :-</label>
                            <select className="form-control" onChange={(event) => setPayment(event.target.value)}>
                                <option>Select payment</option>
                                <option value="Cash-On-Delivery">Cash on delivery</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Place order</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </>
}
