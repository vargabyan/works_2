import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

function Vacancies() {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h3>Вакансии</h3>
        <p>Наши вакансии:</p>
        <ul>
          <li>
            <a href="#loader" style={{ color: "#e20606" }}>Грузчик</a>
          </li>
          <li>
            <a href="#operatorOnThePhone" style={{ color: "#e20606" }}>Оператор на телефоне</a>
          </li>
          <li>
            <a href="#tireChanger" style={{ color: "#e20606" }}>Шиномонтажник</a>
          </li>
          <li>
            <a href="#welder" style={{ color: "#e20606" }}>Сварщик</a>
          </li>
        </ul>
      </Col>
      <Col span={24}>
        <h4 id="loader">Грузчик-кладовщик</h4>
        <p>Зп от <strong>40 000</strong> р</p>
        <p>Условия работы:</p>
        <p>- выплата зарплаты </p>
        <p>
          Наличные 2 раза в месяц (2 и 16 числа) или ежедневно по
          договоренности;
        </p>
        <p>- график работы: </p>
        <p>{"1)"} понедельник - суббота с 09:00 до 20:00;</p>
        <p>{"2)"} Вахта</p>
        <p>{"3)"} 2/2</p>
        <p>- Оплата 1600 р смена.</p>
        <p>- Возможно предоставление жилья</p>
        <p>
          - Возможность дополнительного заработка, премии по итогам работы,
          карьерный рост
        </p>
      </Col>
      <Col span={24}>
        <strong>Обязанности:</strong>
        <ul>
          <li>Приемка товара</li>
          <li>Подержание порядка на складе</li>
          <li>Выполнение погрузочно-разгрузочных работ</li>
          <li>Поддержание бесперебойной работы склада</li>
          <li>Звоните, все подробно расскажем.</li>
          <li>Гражданство значения не имеет</li>
        </ul>
      </Col>
      <Col span={24}>
        <h4 id="operatorOnThePhone">Оператор на телефоне</h4>
        <p>Требуемый опыт работы: 1–3 года</p>
        <p>Полная занятость, полный день</p>
        <strong>Обязанности:</strong>
        <p>В задачи оператора входит:</p>
        <ul>
          <li>приём входящих звонков,</li>
          <li>первичное общение с клиентами,</li>
          <li>консультация,</li>
          <li>оформление заказов,</li>
          <li>первичная обработка заказов.</li>
          <li>Работа с тёплыми входящими клиентами. Холодных нет.</li>
        </ul>
      </Col>
      <Col span={24}>
        <strong>Требования:</strong>
        <ul>
          <li>опыт работы,</li>
          <li>позитивный настрой и быстрая обучаемость,</li>
          <li>грамотный русский язык как письменно, так и устно.</li>
        </ul>
      </Col>
      <Col span={24}>
        <strong>Условия:</strong>
        <ul>
          <li>
          График работы 5/2 или 6/1 по договорённости, средняя з/п в месяц от 35000.
          Офис находится в 10 минутах от станции метро Ховрино г. Долгопрудный.
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Vacancies;
