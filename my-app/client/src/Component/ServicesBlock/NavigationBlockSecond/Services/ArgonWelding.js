import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Table } from "antd";

const columns = [
  {
    title: "Сварка авто-мото деталей от",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "500",
    dataIndex: "values",
    key: "values",
  },
];

const data = [
  {
    key: "2",
    name: "Ремонт топливных баков от",
    values: "2000",
  },
  {
    key: "3",
    name: "Сварка трубок кондиционера от",
    values: "500",
  },
  {
    key: "4",
    name: "Сварка чугуна от",
    values: "1000",
  },
  {
    key: "5",
    name: "Сварка алюминия и силумина от",
    values: "150",
  },
  {
    key: "6",
    name: "Сварка меди от",
    values: "500",
  },
  {
    key: "7",
    name: "Сварка латуни от",
    values: "300",
  },
  {
    key: "8",
    name: "Сварка нержавейки от",
    values: "100",
  },
  {
    key: "9",
    name: "Сварка титана от",
    values: "300",
  },
  {
    key: "10",
    name: "Сварка метала от",
    values: "50",
  },
];

function ArgonWelding() {
  return (
    <Row>
      <Col span={24}>
        <h3>Аргоновая сварка</h3>
      </Col>
      <Col xs={{span: 24}} md={{span: 12}}>
        <p>
          Сварка аргоном набирает популярность с каждым днем. С ее помощью можно
          восстановить даже сильно поврежденный диск. Благодаря сварочным
          работам, которые проводят мастера нашей компании Shintekh,
          ликвидируются не только трещины и сколы. Аргонная сварка воссоздает
          даже отсутствующие фрагменты, как на стальном, так и на литом диске.
          Это очень эффективный процесс. Накладывающиеся швы впоследствии
          полностью сливаются с поверхностью автодиска.
        </p>
        <p>
          После аргонной сварки автодиск не изменяется в весе. А значит, на
          динамику разгона тоже ничего не влияет. Ремонт аргонной сваркой дает
          такие преимущества:
        </p>

        <ul>
          <li>Полностью убираются сколы и порезы;</li>
          <li>
            Восстанавливается металлическая поверхность диска после трещин;
          </li>
          <li>Привариваются недостающие фрагменты.</li>
        </ul>

        <p style={{color: "#e20606", fontWeight: 500}}>Стоимость за сантиметр от 180р</p>
      </Col>
      <Col xs={{span: 24}} md={{span: 12}}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="small"
        />
      </Col>
      <Row>
        <Col span={24}>
          <h2>Дополнительные работы:</h2>
        </Col>
        <Col span={12}>
          <ul>
            <li>Сварка перил от 3500</li>
            <li>Сварка лодок, яхт от 2000.</li>
            <li>Изготовление конструкций</li>
            <li>Изготовление глушителей.</li>
            <li>Тюнинг деталей</li>
            <li>Изготовления емкостей</li>
            <li>Сварка блоков поддонов крышки ДВС коробки КПП</li>
          </ul>
          </Col>
          <Col span={12}>
          <ul>
            <li>Сварка радиаторов интеркулеров от 500</li>
            <li>Ремонт топливных баков от 2000</li>
            <li>Детских колясок</li>
            <li>Сварка дисков и ремонт</li>
            <li>Изготовления мангалов, коптилок</li>
            <li>Сварка грузовых глушителей и изготовление</li>
            <li>Рам велосипедов</li>
          </ul>
        </Col>
      </Row>
    </Row>
  );
}

export default ArgonWelding;
