import * as S from "./style";
import { useEffect, useState } from "react";
import { ITap } from "components/page/RegisterPage/type";
import usePayActions from "store/pay/query";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export default function PaypalTap({ setStep }: ITap) {
  const { pay } = usePayActions();
  const onClickNext = () => {
    setStep!(3);
  };
  const [amount, setAmount] = useState("1");
  const currency = "USD";
  const style = { layout: "vertical" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD",
      },
    });
  }, [currency]);
  return (
    <S.PaypalContent>
      <div className="title">
        <h1>(step 3) REGISTER</h1>
      </div>

      <div className="confirm">
        <h2>please confirm values</h2>
        <h3>name : {pay.form.name}</h3>
        <h3>birthday : {pay.form.birth}</h3>
        <h3>country : {pay.form.country}</h3>
        <h3>mensa member id : {pay.form.memberId}</h3>
        <h3>price : {pay.total}</h3>
      </div>
      {pay.form.country !== "Korea, Republic of" ? (
        <div className="paypal">
          <PayPalButtons
            disabled={false}
            fundingSource={undefined}
            createOrder={(data, actions) => {
              return actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: currency,
                        value: amount,
                      },
                    },
                  ],
                })
                .then((orderId) => {
                  return orderId;
                });
            }}
            onCancel={function (data, actions: any) {
              return actions.order.capture().then(function (e: any) {
                console.log("에러");
                console.log(e);
              });
            }}
            onApprove={function (data, actions: any) {
              return actions.order.capture().then(function (e: any) {
                // Your code here after capture the order
                console.log("성공");
                console.log(e);
              });
            }}
          />
        </div>
      ) : (
        <div className="paypal">
          <h2>korea</h2>
        </div>
      )}
    </S.PaypalContent>
  );
}
