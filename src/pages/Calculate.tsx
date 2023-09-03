import { Fragment, useCallback, useState } from "react";

import { countres } from "../static/Countres";
import { couriers } from "../static/Couriers";
import { deliveres } from "../static/Delivery";
import { trafices } from "../static/Trafic";
import { update } from "immupdate";
import { costInfoList } from "../static/CostInfoList";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

enum FormTypes  {
    Calcul = "1",
    UserInfo = "2",
}

function Calculate(){

    const [firstCountresList, setFirstCountresList] = useState(countres);
    const [secondCountresList, setSecondCountresList] = useState(countres);
    const [formType, setFormType] = useState(FormTypes.Calcul);
    const [question, setQuestion] = useState(false);
    const [resultSum, setResultSum] = useState({
        totalSumm: 0,
        message: ""
    });
    const [userInfo, setUserInfo] = useState({
        phoneNumber: "99 690 69 01",
        fullName: "Asadbek Rejabboyev Boqijon o'g'li",
        product: "logistika",
    });
    const [initialValues, setInitialValues] = useState({
        firstCountry: "",
        secondCountry: "",
        courier: "",
        delivery: "",
        plan: "",
        widht: "",
    })

    const onChangeFirstCountry = useCallback((event: any)=>{
        const oldArray = [...countres];
        const _oldArray = oldArray.filter((d)=>d.value !== event);
        setSecondCountresList(_oldArray);

        const country = firstCountresList.filter((d)=>d.value === event)[0]?.label;

        setInitialValues((prev: any)=>update(prev, {
            firstCountry: country
        }))

    },[countres, setSecondCountresList, firstCountresList, setInitialValues])

    const onChangeSecondCountry = useCallback((event: any)=>{
        // const oldArray = [...countres];
        // const _oldArray = oldArray.filter((d)=>d.value !== event);
        // setFirstCountresList(_oldArray);

        const country = secondCountresList.filter((d)=>d.value === event)[0]?.label;

        setInitialValues((prev: any)=>update(prev, {
            secondCountry: country
        }))

    },[countres, setFirstCountresList, secondCountresList, setInitialValues]);

    const onChangeCourier = useCallback((event: any)=>{
        const couirer = couriers.filter((d)=>d.value === event)[0].label;
        setInitialValues((prev: any)=>update(prev, {
            courier: couirer
        }))
    },[setInitialValues])

    const onChangeDelivery = useCallback((event: any)=>{
        const delivery = deliveres.filter((d)=>d.value === event)[0].label;
        setInitialValues((prev: any)=>update(prev, {
            delivery: delivery
        }))
    },[setInitialValues])

    const onchangeTrafic = useCallback((event: any)=>{
        const plan = trafices.filter((d)=>d.value === event)[0].label;
        setInitialValues((prev: any)=>update(prev, {
            plan: plan
        }))
    },[setInitialValues])

    const onChangeWidht = useCallback((event: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            widht: event
        }))
    },[setInitialValues])

    const calc = useCallback(()=>{
        const _d = costInfoList.filter((d)=>d.fromBranch === initialValues.firstCountry && d.toBranch === initialValues.secondCountry && d.planName === initialValues.plan)[0];
        console.log(_d);
        setQuestion(true);
        console.log(initialValues.widht);
        if(_d?.commonCost === 0){
            setResultSum((prev: any)=>update(prev, {
                totalSumm: 0,
                message: _d?.message
            }))
        }else if(!_d){
            setResultSum((prev: any)=>update(prev, {
                totalSumm: 0,
                message: "Данной направление не существует",
            }))
        }else{
            setResultSum((prev: any)=>update(prev, {
                totalSumm: _d?.commonCost * Number(initialValues.widht),
                message: _d?.message
            }))
        }
    },[initialValues, costInfoList, setQuestion]);

    const yes = useCallback(()=>{
        setFormType(FormTypes.UserInfo);
    },[FormTypes, setFormType]);

    const submit = useCallback(()=>{
        const telegram_bot_id ="5560502216:AAF8tLmTATmQ21pFliTwUQeqFv8dp5GFV5k";
        const chat_id  = -755509405;
        const userInfoText = "F.I.Sh : " + userInfo.fullName + "\nNumber: " + userInfo.phoneNumber;
        const productInfo =  "From : " + initialValues.firstCountry + "\nTo : " + initialValues.secondCountry + "\nPlan : " + initialValues.plan + "\nCourier : " + initialValues.courier + "\nDelivery : " + initialValues.delivery;
        const message = userInfoText + "\n" + productInfo;
        return axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {
            chat_id: chat_id,
            parse_mode: "html",
            text: message,
        })
            .then((repsonse: any)=>console.log(repsonse.data))
            .catch((error: any)=>console.log(error))
    },[axios, userInfo, initialValues]);



    return (
        <Fragment>
            <Menu/>
            { formType === FormTypes.Calcul && (
                <section id="get-a-quote" className="get-a-quote">
                    <div className="container" data-aos="fade-up">


                        {question && (
                            <div className="row bg-success mb-2 py-2 m-0">
                                <div className="col-8">
                                    <p className="result-info p-0 m-0 text-light fs-4 fw-bold">
                                        Total: {resultSum.totalSumm === 0? resultSum.message : resultSum.totalSumm}
                                    </p>
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-end">
                                    <p className="text-light p-0 m-0">Вы хотите заказать?</p>
                                    <button className="btn bg-light ms-3" onClick={()=>yes()}>Да</button>
                                </div>
                            </div>
                        )}

                        <div className="row g-0">
                            <div className="col-12">
                                <form className="php-email-form">

                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <label htmlFor="">Область</label>
                                            <select className="form-select p-2" aria-label="Default select example" onChange={(event: any)=>onChangeFirstCountry(event.target.value)} required>
                                                {firstCountresList.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Область</label>
                                            <select className="form-select p-2" aria-label=".form-select-lg example" onChange={(event: any)=>onChangeSecondCountry(event.target.value)} required>
                                                {secondCountresList.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Вызов курьера</label>
                                            <select className="form-select p-2" aria-label=".form-select-lg example" onChange={(event)=>onChangeCourier(event.target.value)} required>
                                                {couriers.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Доставка</label>
                                            <select className="form-select p-2" aria-label=".form-select-lg example" onChange={(event)=>onChangeDelivery(event.target.value)}  required>
                                                {deliveres.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">

                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Тарифы</label>
                                            <select className="form-select p-2" aria-label=".form-select-lg example" onChange={(event)=>onchangeTrafic(event.target.value)} required>
                                                {trafices.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="">Ширина (см)</label>
                                                    <input type="text" className="form-control rounded" name="phone" required/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="">Длина (см)</label>
                                                    <input type="text" className="form-control rounded" name="phone" required/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="">Высота (см)</label>
                                                    <input type="text" className="form-control rounded" name="phone" required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Вес (кг)</label>
                                            <input type="text" className="form-control rounded" value={initialValues.widht} onChange={(event)=>onChangeWidht(event.target.value)} name="phone" required/>
                                        </div>


                                        <div className="col-md-12 text-center">
                                            <button type="button" className="btn bg-warning" onClick={()=>calc()} >Посчитать</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>)}

            {formType === FormTypes.UserInfo && (
                <section className="get-a-quote">
                    <div className="container" data-aos="fade-up">
                        <form className="php-email-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Номер телефона</label>
                                    <input type="text" value={userInfo.phoneNumber} className="form-control rounded" name="phone" required/>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="">Ф.И.О</label>
                                    <input type="text" className="form-control rounded" name="phone" required/>
                                </div>

                                <div className="col-md-12 text-center mt-3">
                                    <button type="button" className="btn bg-warning" onClick={()=>submit()} >Отправить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            )}
            <Footer/>
        </Fragment>
    )
}

export default Calculate;