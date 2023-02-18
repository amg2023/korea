import * as S from "./style";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal() {
  return (
    <S.PayPalButtons>
      <PayPalButtons
        style={{ layout: "horizontal", color: "black" }}
        className="paypal-button-disploay-none"
      />
    </S.PayPalButtons>
  );
}
