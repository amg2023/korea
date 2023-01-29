import { IForm } from "./type";
import { postMailApi } from "./../../api/Post";
import { IOption } from "./../../components/page/RegisterPage/type";
import { useAtom } from "jotai";
import { payAtom } from "./atom";
import { useMutation, useQuery } from "react-query";

export const useMailMutation = () => {
  const { mutate, data, isError, error, isLoading, isSuccess } = useMutation(
    (body: IForm) => postMailApi(body)
  );
  return { sendMail: mutate, data, isError, error, isLoading, isSuccess };
};

export default function usePayActions() {
  const [pay, setPay] = useAtom(payAtom);

  const onCalcTotal = () => {
    let calc = 0;
    calc += pay.course.reduce((acc: number, cur: IOption) => {
      if (cur.checked) {
        return acc + cur.price;
      } else {
        return acc;
      }
    }, 0);

    calc += pay.option.reduce((acc: number, cur: IOption) => {
      if (cur.checked) {
        return acc + cur.price;
      } else {
        return acc;
      }
    }, 0);
    setPay({
      ...pay,
      total: calc,
    });
  };

  const onSetForm = (name: string, value: string) => {
    setPay({
      ...pay,
      form: {
        ...pay.form,
        [name]: value,
      },
    });
  };
  const onSetValidate = (name: string) => {
    setPay({
      ...pay,
      validate: {
        ...pay.validate,
        [name]: true,
      },
    });
  };
  return {
    pay,
    setPay,
    onCalcTotal,
    onSetForm,
    onSetValidate,
  };
}
