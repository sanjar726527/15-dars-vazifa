import React from "react";
import { Table } from "react-bootstrap";
import DeliveredPageWrapper from "./DeliveredPageWrapper";

export const DeliveredPage = () => {
  return (
    <DeliveredPageWrapper>
      <div className="container">
        <div className="applications-title">
          <h2>Arizlar</h2>
          <span>Yetib kelgan arizalarni kuzatishingiz mumkin</span>
        </div>
        <div className="applications-table pt-3">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>To’liq ismi</th>
                <th>Taom nomi</th>
                <th>Narxi</th>
                <th>Soni</th>
                <th>Umumiy narx</th>
                <th>Telefon raqami</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abdulaziz Ochilov</td>
                <td>Osh</td>
                <td>20 000</td>
                <td>2</td>
                <td>40 000</td>
                <td>+998 97 888 10 27</td>
                <td>yetkazilgan</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ergashev Islom</td>
                <td>Osh</td>
                <td>20 000</td>
                <td>1</td>
                <td>20 000</td>
                <td>+998 97 888 12 35</td>
                <td>yetkazilgan</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Samidullayev Bahodir</td>
                <td>Manti</td>
                <td>5 000</td>
                <td>10</td>
                <td>50 000</td>
                <td>+998 93 234 10 23</td>
                <td>yetkazilgan</td>
              </tr>
              <tr>
                <td>4</td>
                <td>To’ramurodov Shoislom</td>
                <td>Big Lavash</td>
                <td>24 000</td>
                <td>3</td>
                <td>72 000</td>
                <td>+998 90 375 67 15</td>
                <td>yetkazilgan</td>
              </tr>
            </tbody>
          </Table>
          <div className="all-price">
            <h5>Jami</h5>
            <h5>182 000 so’m</h5>
          </div>
        </div>
      </div>
    </DeliveredPageWrapper>
  );
};
