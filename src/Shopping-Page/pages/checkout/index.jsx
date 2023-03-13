import React, {useEffect, useState} from "react";
import "./style.scss"
import CostumersInput from "../../../Admin-page/components/costumers-Input";
import CostumersCheckbox from "../components/categories/costumers-checkbox";
import {useSelector} from "react-redux";

const Checkout = () => {
    const [checkbox, setCheckbox] = useState(false)
    const [shipping, setShipping] = useState(0)
    const basketList = useSelector(state => state.BasketList.basketList)
    const [total, setTotal] = useState(0)
    const [userInfo, setUserInfo] = useState({
        FirstName: '',
        Email: '',
        AddressLine1: '',
        Country: '',
        State: '',
        LastName: '',
        MobileNo: '',
        AddressLine2: '',
        City: '',
        ZIPCode: ''


    })
    const [errorText, setErrorText] = useState({
        FirstName: '',
        Email: '',
        AddressLine1: '',
        Country: '',
        State: '',
        LastName: '',
        MobileNo: '',
        AddressLine2: '',
        City: '',
        ZIPCode: ''
    })

    const validation = () => {
        let validate = true
        let errorString = {
            FirstName: '',
            Email: '',
            AddressLine1: '',
            Country: '',
            State: '',
            LastName: '',
            MobileNo: '',
            AddressLine2: '',
            City: '',
            ZIPCode: ''
        }
        let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!userInfo.FirstName.trim().length) {
            errorString.FirstName = "Fill in the required FirstName"
            validate = false
        }

        if (!userInfo.Email.trim().length) {
            errorString.Email = "Fill in the required Email"
            validate = false
        } else if (!validateEmail.test(userInfo.Email)) {
            errorString.Email = "Fill in the Email"
            validate = false
        }

        if (!userInfo.AddressLine1.trim().length) {
            errorString.AddressLine1 = "Fill in the required AddressLine1"
            validate = false
        }
        if (!userInfo.Country.trim().length) {
            errorString.Country = "Fill in the required Country"
            validate = false
        }
        if (!userInfo.State.trim().length) {
            errorString.State = "Fill in the required State"
            validate = false
        }
        if (!userInfo.LastName.trim().length) {
            errorString.LastName = "Fill in the required LastName"
            validate = false
        }
        if (!userInfo.MobileNo.trim().length) {
            errorString.MobileNo = "Fill in the required MobileNo"
            validate = false
        }
        if (!userInfo.AddressLine2.trim().length) {
            errorString.AddressLine2 = "Fill in the required AddressLine2"
            validate = false
        }
        if (!userInfo.City.trim().length) {
            errorString.City = "Fill in the required City"
            validate = false
        }
        if (!userInfo.ZIPCode.trim().length) {
            errorString.ZIPCode = "Fill in the required ZIPCode"
            validate = false
        }
        setErrorText(errorString)
        return validate

    }


    const changeCheckbox = (e) => {
        if (e.target.checked) {
            setCheckbox(true)

        } else {
            setCheckbox(false)
        }
    }

    useEffect(() => {
        let total = 0
        let shipping = 0
        if (basketList.length) {
            basketList.forEach((item, index) => {
                total += +item.Prise
                shipping += (+item.Prise * 20) / 100

            })
        }
        setTotal(+total)
        setShipping(+shipping)
    }, [])

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
        setErrorText({...errorText, [e.target.name]: ''})

    }


    const handleClick = () => {
        if (validation()) {
            alert("lava")
        }
    }

    return <div className="checkout-container">
        <div className="G-container">
            <div className="checkout-name">
                <p>Home /Shop /Checkout</p>
            </div>
            <div className="checkout-block">
                {/*====================================BILLING Start======================*/}
                <div className="billing-block ">
                    <div className="billing-name">
                        <h2>BILLING ADDRESS</h2>
                    </div>

                    {/*================================================FORM START========================*/}
                    <div className="billing-form">
                        <div className="form-container">
                            <div className="form-tools">
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.FirstName}
                                    name="FirstName"
                                    errorText={errorText.FirstName}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.Email}
                                    name="Email"
                                    errorText={errorText.Email}

                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.AddressLine1}
                                    name="AddressLine1"
                                    errorText={errorText.AddressLine1}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.Country}
                                    name="Country"
                                    errorText={errorText.Country}

                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.State}
                                    name="State"
                                    errorText={errorText.State}
                                />
                            </div>

                            <div className="form-tools">
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.LastName}
                                    name="LastName"
                                    errorText={errorText.LastName}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.MobileNo}
                                    name="MobileNo"
                                    type="number"
                                    errorText={errorText.MobileNo}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.AddressLine2}
                                    name="AddressLine2"
                                    errorText={errorText.AddressLine2}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.City}
                                    name="City"
                                    errorText={errorText.City}
                                />
                                <CostumersInput
                                    onChange={handleChange}
                                    value={userInfo.ZIPCode}
                                    name="ZIPCode"
                                    errorText={errorText.ZIPCode}
                                />
                            </div>
                        </div>
                        {/*================================================FORM END========================*/}
                        {/*==========================================CHECKBOX START================*/}
                        <div className="form-checkbox">
                            <label>
                                <input type="checkbox"/> <span>Create an account</span>

                            </label>
                            <label>
                                <input onChange={changeCheckbox} type="checkbox"/>
                                <span>Ship to different address</span>
                            </label>
                        </div>
                    </div>
                    {/*==========================================CHECKBOX END================*/}

                    {/*=================================================SHIPPING ADDRESS====== START====================*/}
                    <div className={!checkbox ? "shipping-block-none" : "shipping-block"}>
                        <div className="shipping-name">
                            <h2>SHIPPING ADDRESS</h2>
                        </div>
                        <div className="shipping-form-block">
                            <div className="shipping-form-start">
                                <div className="sipping-form-tools">
                                    <CostumersInput
                                        name="FirstName"
                                    />
                                    <CostumersInput
                                        name="E-mail"
                                    />
                                    <CostumersInput
                                        name="AddressLine1"
                                    />
                                    <CostumersInput
                                        name="Country"
                                    />
                                    <CostumersInput
                                        name="State"
                                    />
                                </div>
                                <div className="sipping-form-tools">
                                    <CostumersInput
                                        name="LastName"
                                    />
                                    <CostumersInput
                                        name="MobileNo"
                                        type="number"
                                    />
                                    <CostumersInput
                                        name="AddressLine2"
                                    />
                                    <CostumersInput
                                        name="City"
                                    />
                                    <CostumersInput
                                        name="ZipCode"
                                    />
                                </div>
                            </div>
                            <div className="set-address">
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>
                    {/*=================================================SHIPPING ADDRESS====== END====================*/}

                </div>
                {/*====================================BILLING END======================*/}

                {/*================================ORDER Start==================================*/}
                <div className="order-block">
                    <div className="order-name">
                        <h2>ORDER TOTAL</h2>
                    </div>
                    <div className="order-total-info">
                        <h3>Products</h3>
                        <div className="order-products">
                            {basketList.length ? basketList.map((element, index) => {
                                return <div className="order-products-prise">
                                    <p>{element.Name}</p>
                                    <span>${element.Prise}</span>
                                </div>
                            }) : null}
                        </div>
                        <div className="total-block">
                            <div className="total">
                                <p>Shipping</p><span>{shipping}$</span>

                            </div>
                            <div className="total">
                                <p>Total</p> <span>{total}$</span>
                            </div>

                        </div>
                    </div>
                    {/*================================ORDER END====================================               */}
                    {/* ================================PAYMENT START===============================*/}
                    <div className="payment-total-block">
                        <div className="payment-name">
                            <h2>Payment</h2>
                        </div>
                        <div className="payment-tools">
                            <CostumersCheckbox
                                name="radio"
                                type="radio"
                                info="Paypal"
                            />
                            <CostumersCheckbox
                                name="radio"
                                type="radio"
                                info="Direct Check"
                            />
                            <CostumersCheckbox
                                name="radio"
                                type="radio"
                                info='Direct Check'
                            />
                            <div className="place-order">
                                <button onClick={handleClick}>Place Order</button>
                            </div>
                        </div>

                    </div>

                    {/* ================================PAYMENT END===============================*/}

                </div>
            </div>
        </div>
    </div>
}
export default Checkout