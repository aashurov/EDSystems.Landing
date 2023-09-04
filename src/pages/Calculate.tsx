import { Fragment, useCallback, useState } from "react";
import { toast } from 'react-toastify';

import { countries } from "../static/Countries";
import { couriers } from "../static/Couriers";
import { deliveres } from "../static/Delivery";
import { trafices } from "../static/Trafic";
import { update } from "immupdate";
import { costInfoList } from "../static/CostInfoList";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

enum FormTypes  {
    Calcul = "1",
    UserInfo = "2",
}

function Calculate(){

    const [firstCountriesList, setFirstCountriesList] = useState(countries);
    const [secondCountriesList, setSecondCountriesList] = useState(countries);
    const [formType, setFormType] = useState(FormTypes.Calcul);
    const [question, setQuestion] = useState(false);
    const [resultSum, setResultSum] = useState({
        totalSumm: 0,
        message: ""
    });
    const [userInfo, setUserInfo] = useState({
        phoneNumber: "",
        fullName: "",
    });
    const [initialValues, setInitialValues] = useState({
        firstCountry: "",
        secondCountry: "",
        courier: "",
        delivery: "",
        plan: "",
        weight: "",
    });

    const navigate = useNavigate();

    const onChangeFirstCountry = useCallback((event: any)=>{
        const oldArray = [...countries];
        const _oldArray = oldArray.filter((d)=>d.value !== event);
        setSecondCountriesList(_oldArray);

        const country = firstCountriesList.filter((d)=>d.value === event)[0]?.label;

        setInitialValues((prev: any)=>update(prev, {
            firstCountry: country
        }))

    },[ setSecondCountriesList, firstCountriesList, setInitialValues])

    const onChangeSecondCountry = useCallback((event: any)=>{

        const country = secondCountriesList.filter((d)=>d.value === event)[0]?.label;

        setInitialValues((prev: any)=>update(prev, {
            secondCountry: country
        }))

    },[ secondCountriesList, setInitialValues]);

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

    const onChangeWeight = useCallback((event: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            weight: event
        }))
    },[setInitialValues]);

    const onChangeFullName = useCallback((event: any)=>{
        setUserInfo((prev: any)=>update(prev, {
            fullName: event
        }))
    },[setUserInfo])

    const onChangePhoneNumber = useCallback((event: any)=>{
        setUserInfo((prev: any)=>update(prev, {
            phoneNumber: event
        }))
    },[setUserInfo])


    const calc = useCallback(()=>{

        const _d = costInfoList.filter((d)=>d.fromBranch === initialValues.firstCountry && d.toBranch === initialValues.secondCountry && d.planName === initialValues.plan)[0];
        setQuestion(true);
        if(_d?.commonCost === 0){
            setResultSum((prev: any)=>update(prev, {
                totalSumm: 0,
                message: _d?.message
            }))
        }else if(!_d){
            setResultSum((prev: any)=>update(prev, {
                totalSumm: 0,
                message: "Данное направление не существует, выберите пожалуйста другое направление",
            }))
        }else{
            if(_d?.firstCost === 0){
                setResultSum((prev: any)=>update(prev, {
                    totalSumm: _d?.commonCost * Number(initialValues.weight) + Number(_d?.pickup) + Number(_d?.delivery),
                    message: _d?.message
                }))
            } else {
                const a =  ( Number(initialValues.weight) - 1 ) * _d?.commonCost + _d?.firstCost + Number(_d?.pickup) + Number(_d?.delivery);
                setResultSum((prev: any)=>update(prev, {
                    totalSumm: a,
                    message: _d?.message
                }))
            }
        }
    },[initialValues, setQuestion]);

    const yes = useCallback(()=>{
        setFormType(FormTypes.UserInfo);
    },[setFormType]);

    const submit = useCallback(()=>{
        const telegram_bot_id ="5572708644:AAHWqfz1kisKDr2gXGaw1mOXdlK3xO7xxsI";
        const chat_id  = -991939853;
        const userInfoText = "Ф.И.О.: " + userInfo.fullName + "\nКонтакт: " + userInfo.phoneNumber;

        const messageBody =  "Откуда: " + initialValues.firstCountry +
            "\nКуда: " + initialValues.secondCountry +
            "\nВес посылки (кг): " + initialValues.weight +
            "\nТариф: " + initialValues.plan +
            "\nЗабор: " + initialValues.courier +
            "\nДоставка: " + initialValues.delivery;

        const cost = "Стоимость перевозки ($): " + resultSum?.totalSumm;
        const message = userInfoText + "\n" + messageBody + "\n" + cost;
        return axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {
            chat_id: chat_id,
            parse_mode: "html",
            text: message,
        })
            .then((repsonse: any)=>{
                toast.success("Ваша заявка принята. Наши сотрудники с вами свяжутся в ближайшее время!");
                navigate('/');
            })
            .catch((error: any)=>toast.error("Ошибка! Что то пошло не так. Попробуйте пожалуйста попозже!"))
    },[userInfo, initialValues, navigate, resultSum.totalSumm]);

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
                                        Стоимость перевозки ($): {resultSum.totalSumm === 0? resultSum.message : resultSum.totalSumm}
                                    </p>
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-end">
                                    <p className="text-light p-0 m-0">Вы хотите оставить заявку?</p>
                                    <button className="btn bg-light ms-3" onClick={()=>yes()}>Да</button>
                                </div>
                            </div>
                        )}

                        <div className="row g-0">
                            <div className="col-12">
                                <form className="php-email-form">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Пункт отправления</label>
                                            <select className="form-select p-2" aria-label="Default select example" onChange={(event: any)=>onChangeFirstCountry(event.target.value)} required>
                                                {firstCountriesList.map((d:any)=>{
                                                    return (
                                                        <option value={d.value}>{d.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="">Пункт назначение</label>
                                            <select className="form-select p-2" aria-label=".form-select-lg example" onChange={(event: any)=>onChangeSecondCountry(event.target.value)} required>
                                                {secondCountriesList.map((d:any)=>{
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
                                            <input type="text" className="form-control rounded" value={initialValues.weight} onChange={(event)=>onChangeWeight(event.target.value)} name="phone" required/>
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
                                    <input type="text" value={userInfo.phoneNumber} onChange={(event)=>onChangePhoneNumber(event.target.value)} className="form-control rounded" name="phone" required/>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="">Ф.И.О</label>
                                    <input type="text" className="form-control rounded" value={userInfo.fullName} onChange={(event)=>onChangeFullName(event.target.value)} name="phone" required/>
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