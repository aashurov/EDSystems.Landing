import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import {Link} from "react-router-dom";

function Pricing(){
    return(
    <Fragment>
       <Menu/>
       <div id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/page-header.jpg'})` }}>
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Тарифы</h2>
              {/* <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to='/' className="active">Главная</Link></li>
            <li>Тарифы</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Breadcrumbs --> */}


           <section id="pricing" className="pricing">
               <div className="container" data-aos="fade-up">

                   <div className="table-responsive-smrow gy-4 ">

                       <table className="table text-center">
                           <thead>
                           <tr>
                               <th colSpan={6} className="align-middle">Отправки из Российской Федерации</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td rowSpan={2} className="align-middle">Откуда</td>
                               <td rowSpan={2} className="align-middle">Куда</td>
                               <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                           </tr>
                           <tr>
                               <td className="align-middle, center">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                               <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней</td>
                               <td className="align-middle">УЛЬТРА<br/>36 часов<br/>(мин вес 1кг)</td>
                               <td className="align-middle">АВТО<br/>от 10 рабочих дней<br/>мин вес от 10кг</td>
                           </tr>
                           <tr>
                               <td rowSpan={5} className="align-middle">Москва</td>
                               <td className="align-middle bold">Ташкент</td>
                               <td className="align-middle">$7/кг <br/>рейс в среду и субботу</td>
                               <td className="align-middle">$12/кг <br/>рейс 3-4 раза в неделю</td>
                               <td className="align-middle">$30/кг <br/>рейс 3-4 раза в неделю </td>
                               <td className="align-middle">от $5/кг<br/>рейс 2-3 раза в неделю</td>
                           </tr>
                           <tr>
                               <td className="align-middle">Душанбе</td>
                               <td className="align-middle">-</td>
                               <td className="align-middle">$8/кг</td>
                               <td className="align-middle">$30/кг </td>
                               <td className="align-middle">$2/кг</td>
                           </tr>
                           <tr>
                               <td className="align-middle">Бишкек</td>
                               <td className="align-middle">-</td>
                               <td className="align-middle">$6/кг <br/>(первый кг $12)</td>
                               <td className="align-middle">$30/кг</td>
                               <td className="align-middle">$3/кг</td>
                           </tr>
                           <tr>
                               <td className="align-middle">Алматы</td>
                               <td className="align-middle">-</td>
                               <td className="align-middle">$12/кг <br/>(мин вес к отправке 2кг)</td>
                               <td className="align-middle">$30/кг</td>
                               <td className="align-middle">$4/кг</td>
                           </tr>
                           <tr>
                               <td className="align-middle">Стамбул</td>
                               <td className="align-middle">-</td>
                               <td className="align-middle">$14/кг <br/>(мин вес к отправке 2кг)</td>
                               <td className="align-middle">-</td>
                               <td className="align-middle">-</td>
                           </tr>
                           </tbody>
                       </table>
                       <br/>
                           <ul>
                               <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                               <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                               <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                           </ul>
                           <br/>


                               <table className="table text-center">
                                   <thead>
                                   <tr>
                                       <th colSpan={6} className="align-middle">Отправки из Республики Узбекистан</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   <tr>
                                       <td rowSpan={2} className="align-middle">Откуда</td>
                                       <td rowSpan={2} className="align-middle">Куда</td>
                                       <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                                   </tr>
                                   <tr>
                                       <td className="align-middle">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                                       <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней</td>
                                       <td className="align-middle">УЛЬТРА<br/>36 часов</td>
                                       <td className="align-middle">АВТО<br/>от 10 рабочих дней<br/>мин вес от 10кг</td>
                                   </tr>
                                   <tr>
                                       <td rowSpan={5} className="align-middle">Ташкент</td>
                                       <td className="align-middle">Москва</td>
                                       <td className="align-middle">-</td>
                                       <td className="align-middle">$12/кг</td>
                                       <td className="align-middle">$30/кг</td>
                                       <td className="align-middle">от $5/кг</td>
                                   </tr>
                                   <tr>
                                       <td className="align-middle">Душанбе</td>
                                       <td className="align-middle">-</td>
                                       <td className="align-middle">$8/кг<br/>(первый кг $15)</td>
                                       <td className="align-middle">$30/кг</td>
                                       <td className="align-middle">от $5/кг</td>
                                   </tr>
                                   <tr>
                                       <td className="align-middle">Бишкек</td>
                                       <td className="align-middle">-</td>
                                       <td className="align-middle">$8/кг<br/>(первый кг $15)</td>
                                       <td className="align-middle">$30/кг</td>
                                       <td className="align-middle">$5/кг</td>
                                   </tr>
                                   <tr>
                                       <td className="align-middle">Алматы</td>
                                       <td className="align-middle"></td>
                                       <td className="align-middle">$8/кг <br/>(первый кг $15)</td>
                                       <td className="align-middle">$30/кг</td>
                                       <td className="align-middle">$5/кг</td>
                                   </tr>
                                   <tr>
                                       <td className="align-middle">Стамбул</td>
                                       <td className="align-middle">-</td>
                                       <td className="align-middle">от $6/кг<br/>(мин вес к отправке 2кг)</td>
                                       <td className="align-middle">$30/кг</td>
                                       <td className="align-middle">-</td>
                                   </tr>
                                   </tbody>
                               </table>

                               <br/>
                                   <ul>
                                       <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                       <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                                       <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                                   </ul>
                                   <br/>

                                       <table className="table text-center">
                                           <thead>
                                           <tr>
                                               <th colSpan={6} className="align-middle">Отправки из Респубики Кыргызстан</th>
                                           </tr>
                                           </thead>
                                           <tbody>
                                           <tr>
                                               <td rowSpan={2} className="align-middle">Откуда</td>
                                               <td rowSpan={2} className="align-middle">Куда</td>
                                               <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                                           </tr>
                                           <tr>
                                               <td className="align-middle">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                                               <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней<br/></td>
                                               <td className="align-middle">УЛЬТРА<br/>36 часов</td>
                                               <td className="align-middle">АВТО<br/>от 10 рабочих дней<br/>мин вес от 10кг</td>
                                           </tr>
                                           <tr>
                                               <td rowSpan={5} className="align-middle">Бишкек</td>
                                               <td className="align-middle">Москва</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">$6/кг <br/>(первый кг $12)</td>
                                               <td className="align-middle">$30/кг</td>
                                               <td className="align-middle">$3/кг</td>
                                           </tr>
                                           <tr>
                                               <td className="align-middle">Ташкент</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">$8/кг<br/>(первый кг $15)</td>
                                               <td className="align-middle">$30/кг</td>
                                               <td className="align-middle">$5/кг</td>
                                           </tr>
                                           <tr>
                                               <td className="align-middle">Алматы</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">$5/кг <br/>(первый кг $10)</td>
                                               <td className="align-middle">$30/кг</td>
                                               <td className="align-middle">$3/кг</td>
                                           </tr>
                                           <tr>
                                               <td className="align-middle">Стамбул</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">$8/кг<br/>(первый кг $15)</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">-</td>
                                           </tr>
                                           <tr>
                                               <td className="align-middle">Душанбе</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">-</td>
                                               <td className="align-middle">-</td>
                                           </tr>
                                           </tbody>
                                       </table>

                                       <br/>
                                           <ul>
                                               <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                               <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                                               <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                                           </ul>
                                           <br/>

                                               <table className="table text-center">
                                                   <thead>
                                                   <tr>
                                                       <th colSpan={6} className="align-middle">Отправки из Респубики Казахстан</th>
                                                   </tr>
                                                   </thead>
                                                   <tbody>
                                                   <tr>
                                                       <td rowSpan={2} className="align-middle">Откуда</td>
                                                       <td rowSpan={2} className="align-middle">Куда</td>
                                                       <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                                                   </tr>
                                                   <tr>
                                                       <td className="align-middle">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                                                       <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней<br/></td>
                                                       <td className="align-middle">УЛЬТРА<br/>36 часов</td>
                                                       <td className="align-middle">АВТО<br/>от 10 рабочих дней<br/>мин вес от 10кг</td>
                                                   </tr>
                                                   <tr>
                                                       <td rowSpan={5} className="align-middle">Алматы</td>
                                                       <td className="align-middle">Ташкент</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$8/кг<br/>(первый кг $15)</td>
                                                       <td className="align-middle">$30/кг</td>
                                                       <td className="align-middle">от $6/кг</td>
                                                   </tr>
                                                   <tr>
                                                       <td className="align-middle">Бишкек</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$5/кг <br/>(первый кг $10)</td>
                                                       <td className="align-middle">$30/кг</td>
                                                       <td className="align-middle">$3/кг</td>
                                                   </tr>
                                                   <tr>
                                                       <td className="align-middle">Москва</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$12/кг<br/>(мин вес к отправке 2кг)</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$3/кг</td>
                                                   </tr>
                                                   <tr>
                                                       <td className="align-middle">Стамбул</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$12/кг<br/>(мин вес к отправке 2кг)</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">-</td>
                                                   </tr>
                                                   <tr>
                                                       <td className="align-middle">Душанбе</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">$12/кг<br/>(мин вес к отправке 2кг)</td>
                                                       <td className="align-middle">-</td>
                                                       <td className="align-middle">от $6/кг</td>
                                                   </tr>
                                                   </tbody>
                                               </table>

                                               <br/>
                                                   <ul>
                                                       <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                       <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                                                       <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                                                   </ul>
                                                   <br/>

                                                       <table className="table text-center">
                                                           <thead>
                                                           <tr>
                                                               <th colSpan={6} className="align-middle">Отправки из Респубики Таджикистан</th>
                                                           </tr>
                                                           </thead>
                                                           <tbody>
                                                           <tr>
                                                               <td rowSpan={2} className="align-middle">Откуда</td>
                                                               <td rowSpan={2} className="align-middle">Куда</td>
                                                               <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="align-middle">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                                                               <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней<br/></td>
                                                               <td className="align-middle">УЛЬТРА<br/>36 часов</td>
                                                               <td className="align-middle">АВТО<br/>от 10 рабочих дней<br/>мин вес от 10кг</td>
                                                           </tr>
                                                           <tr>
                                                               <td rowSpan={5} className="align-middle">Душанбе</td>
                                                               <td className="align-middle">Москва</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">$10/кг <br/>(мин вес к отправке 2кг)</td>
                                                               <td className="align-middle">$30/кг<br/>(мин вес к отправке 1кг)</td>
                                                               <td className="align-middle">от $5/кг</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="align-middle">Ташкент</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">$8/кг <br/>(первый кг $15)</td>
                                                               <td className="align-middle">$30/кг</td>
                                                               <td className="align-middle">от $5/кг</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="align-middle">Бишкек</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">-</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="align-middle">Стамбул</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">$8/кг <br/>(первый кг $15)</td>
                                                               <td className="align-middle">-</td>
                                                               <td className="align-middle">от $5/кг</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="align-middle">Алматы</td>
                                                               <td className="align-middle"></td>
                                                               <td className="align-middle">$8/кг <br/>(первый кг $15)</td>
                                                               <td className="align-middle">$30/кг</td>
                                                               <td className="align-middle">от $5/кг</td>
                                                           </tr>
                                                           </tbody>
                                                       </table>

                                                       <br/>
                                                           <ul>
                                                               <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                                                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                               <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                               <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                               <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                               <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                                                               <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                                                           </ul>
                                                           <br/>
                                                               <table className="table text-center">
                                                                   <thead>
                                                                   <tr>
                                                                       <th colSpan={6} className="align-middle">Отправки из Турции</th>
                                                                   </tr>
                                                                   </thead>
                                                                   <tbody>
                                                                   <tr>
                                                                       <td rowSpan={2} className="align-middle">Откуда</td>
                                                                       <td rowSpan={2} className="align-middle">Куда</td>
                                                                       <td colSpan={4} className="align-middle">Тарифы и сроки</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td className="align-middle">СТАНДАРТ<br/>5-7 рабочих дней<br/>(по паспорту получателя)</td>
                                                                       <td className="align-middle">ЭКСПРЕСС<br/>3-5 рабочих дней<br/></td>
                                                                       <td className="align-middle">УЛЬТРА<br/>36 часов</td>
                                                                       <td className="align-middle">АВТО<br/>от 25 рабочих дней<br/>мин вес от 10кг</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td rowSpan={5} className="align-middle">Стамбул</td>
                                                                       <td className="align-middle">Ташкент</td>
                                                                       <td className="align-middle">от $5,5/кг<br/>(мин вес к отправке 2кг)</td>
                                                                       <td className="align-middle">от $10/кг<br/></td>
                                                                       <td className="align-middle">$30/кг<br/>(мин вес к отправке 1кг)</td>
                                                                       <td className="align-middle">от $5/кг</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td className="align-middle">Москва</td>
                                                                       <td className="align-middle">$9/кг<br/>(мин вес к отправке 5кг)</td>
                                                                       <td className="align-middle">$12/кг<br/>(мин вес к отправке 2кг)</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">от $5/кг</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td className="align-middle">Бишкек</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">$6/кг<br/>(мин вес к отправке 2кг)</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">от $4/кг</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td className="align-middle">Алматы</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">$7/кг<br/>(мин вес к отправке 2кг)</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">от $4/кг</td>
                                                                   </tr>
                                                                   <tr>
                                                                       <td className="align-middle">Душанбе</td>
                                                                       <td className="align-middle"></td>
                                                                       <td className="align-middle">$5/кг<br/>(мин вес к отправке 2кг)</td>
                                                                       <td className="align-middle">-</td>
                                                                       <td className="align-middle">от $4/кг</td>
                                                                   </tr>
                                                                   </tbody>
                                                               </table>

                                                               <br/>
                                                                   <ul>
                                                                       <li>- Стоимость перевозки коммерческих посылок и оригиналов документов обговариваются в индивидуальном порядке.</li>
                                                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                                       <li>- Посылки, объявленная стоимость которых не превышает 100$ (сто долларов США) страхуются бесплатно. Если объявленная стоимость посылки превышает 100$, то условия гарантии и стоимость перевозки обговариваются с менеджером в индивидуальном порядке.</li>
                                                                       <li>- Стоимость перевозки указана за 1 (один) килограмм, условия доставки СКЛАД-СКЛАД.</li>
                                                                       <li>- Габаритные вес рассчитывается по следующей формуле: Габаритный вес = Длина * Ширина * Высота / 6000 - фактический вес.</li>
                                                                       <li>- Имеется список предметов, запрещенных к перевозке. Актуальный список уточняется у менеджера.</li>
                                                                       <li>- Цены указаны предварительные, конечная стоимость перевозки рассчитывается по факту приема груза. Сроки указаны не считая дня приема.</li>
                                                                   </ul>

                   </div>
               </div>
           </section>


  </div>
  {/* <!-- End #main --> */}
       <Footer/>
    </Fragment>
    )
}

export default Pricing;