import { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";


const statusNames = {
    0:   "Создан",  
    1:   "В пути",   
    2:   "Прибыл",   
    3:   "У курьера",    
    4:   "Доставлен",     
    5:   "Выдан"
}


export default function SearchingTable(){

    const [tableType, setTableType] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>({});

    const searching = useCallback(()=>{
        setTableType("")
        setLoading(true);
        axios.get(`https://my-dev.ethno.uz/search/${searchValue}`)
        .then((response)=>{
            setResponse(response.data)
            setTableType("Opened")
            setSearchValue("")
            setLoading(false)
        })
        .catch((error)=>console.log(error))
    },[searchValue, setLoading, setResponse]);

    return (
        <Fragment>
            <Menu/>
            <div id="main">
                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center"
                         style={{backgroundImage: `url(${'assets/img/page-header.jpg'})`}}>
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Поиск</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li>
                                    <li><Link to='/' className="active">Главная</Link></li>
                                </li>
                                <li>Поиск</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="container py-2" data-aos="fade-up">
                    <div className="input-group mb-3" style={{
                            width: '400px',
                            margin: '80px auto'
                            }}>
                                <input type="text" className="form-control" placeholder="Штрих-код..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchValue} onChange={(event)=>setSearchValue(event.target.value)}/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={searching}>Поиск</button>
                                </div>
                                </div>
                                {tableType === "Opened" && (
                                    <div className="table-section border rounded p-3 my-3 mt-4">
                                           <table className="table">
                                            <thead className="thead-light">
                                                <tr>
                                                <th scope="col">Дата</th>
                                                <th scope="col">Штрих-код</th>
                                                <th scope="col">Направление</th>
                                                <th scope="col">Отправитель</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>{response.dateCreated}</td>
                                                <td className="fw-bold">{response.code}</td>
                                                <td>{response.senderBranchName} {response.recipientBranchName}</td>
                                                <td>{response.senderId}</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        {response.parcelStatuses.map((status: any)=>{
                                                            console.log(status)
                                                            return <div>
                                                                {status.dateCreated}, {Object.values(statusNames)[status.statusId-1]}
                                                            </div>
                                                        })}
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                            </table>
                                    </div>
                                )}
                                {tableType !== "Opened" && loading && (
                                    <div className="loading text-center">
                                        <h1>Loading...</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
            <Footer/>
        </Fragment>
    )
}