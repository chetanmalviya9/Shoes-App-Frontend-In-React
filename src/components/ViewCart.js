import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateQuantity } from '../reductconfig/CartSlice';

export default function ViewCart() {
    let { cartList, totalBill } = useSelector(state => state.cart.value);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incrementQuantity = (index) => {
        let cartListClone = JSON.parse(JSON.stringify(cartList))
        let product = cartListClone[index];
        product.quantity++;
        product.total = product.quantity * product.productPrice;
        // console.log(product);
        dispatch(updateQuantity({ index, product }));

    }
    const decrementQuantity = (index) => {
        let cartListClone = JSON.parse(JSON.stringify(cartList))
        let product = cartListClone[index];
        console.log(product.quantity)
        if (product.quantity > 1) {
            product.quantity--;
            product.total = product.quantity * product.productPrice;
            // console.log(product);
            dispatch(updateQuantity({ index, product }));

        }
    }
    const checkOut=()=>{
        navigate("/placeorder");
    }

    // console.log(cartList)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <table className='table'>
                        <thead className='bg-secondary text-white'>
                            <th>S no.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>quantity</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            {cartList.map((product, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td><img width="100px" height="100px" src={"/images/" + product.productImage} alt="" /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.productDescription}</td>
                                    <td>
                                        <button onClick={() => decrementQuantity(index)} className='btn btn-sm btn-outline-danger'>-</button>{product.quantity}
                                        <button onClick={() => incrementQuantity(index)} className='btn btn-sm btn-outline-success'>+</button>
                                    </td>
                                    <td >{product.total}</td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-4 border pt-5 '>
                    <h2 className='text-center'> Total Bill Amount</h2>
                    <div className='text-center text-success'>
                        Total-Bill Amount: ₹{totalBill}
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-danger' onClick={checkOut} >Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
