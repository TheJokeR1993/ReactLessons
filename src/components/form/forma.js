import { Checkbox, TextField } from "@mui/material";
import { DatePicker } from "antd";
// import dayjs from "dayjs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeForm, clearForm } from "../../features/form/form";
import dayjs from "dayjs";
// const time = "2023-07-30T21:00:00Z";

const Forma = ({ close }) => {
  // const [spiner, setSpiner] = useState(false);
  const dispatch = useDispatch();
  const { first_name, last_name, age, zip, is_married, date } = useSelector(
    (state) => state.form.form
  );
  console.log(date);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = (data) => {
    const obj = { ...data, date: dayjs(data.date).format("D, MMM YYYY") };
    dispatch(changeForm(obj));
    reset();
    close();
    /* 
    console.log("1");
    dispatch(clearForm());
    close();
   */
  };

  return (
    <>
      <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-p" onClick={close}>
          Close
        </p>
        <Controller
          control={control}
          name="first_name"
          defaultValue={first_name}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState }) => (
            <TextField
              error={!!fieldState?.error}
              size="small"
              onChange={onChange}
              value={value}
              label={"First Name"}
            />
          )}
        />
        {errors?.first_name && (
          <p style={{ color: "red" }}>Invalid First name</p>
        )}

        <Controller
          defaultValue={last_name}
          control={control}
          name="last_name"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState }) => (
            <TextField
              error={!!fieldState?.error}
              size="small"
              onChange={onChange}
              value={value}
              label={"Last Name"}
            />
          )}
        />

        {errors?.last_name && <p style={{ color: "red" }}>Invalid Last name</p>}
        <Controller
          defaultValue={age}
          control={control}
          name="age"
          rules={{ required: true, pattern: /^(\d){1,3}$/ }}
          render={({ field: { onChange, value }, fieldState }) => (
            <TextField
              error={!!fieldState?.error}
              size="small"
              onChange={onChange}
              value={value}
              label={"Age"}
            />
          )}
        />

        {errors?.age && <p style={{ color: "red" }}>Invalid Age</p>}
        <Controller
          defaultValue={zip}
          control={control}
          name="zip"
          rules={{ required: true, pattern: /[A-Za-z]{2}[0-9]{5}/ }}
          render={({ field: { onChange, value }, fieldState }) => (
            <TextField
              error={!!fieldState?.error}
              size="small"
              onChange={onChange}
              value={value}
              label={"Zip"}
            />
          )}
        />

        {errors?.zip && <p style={{ color: "red" }}>Invalid Zip Code</p>}
        <p style={{ margin: 0 }}>Married?</p>
        <Controller
          control={control}
          name="is_married"
          render={({ field: { onChange, value }, fieldState }) => (
            <Checkbox
              onChange={onChange}
              value={value}
              defaultChecked={is_married}
            />
          )}
        />
        <Controller
          defaultValue={date ? dayjs(date) : dayjs()}
          control={control}
          name="date"
          render={({ field: { onChange, value }, fieldState }) => (
            <DatePicker
              /*      defaultValue={dayjs()} */
              onChange={onChange}
              value={value}
              format="D, MMM YYYY"
              className="antd-picker"
            />
          )}
        />
        {/* <DatePicker
          defaultValue={dayjs(time)}
          format="D, MMM YYYY"
          className="antd-picker"
        /> */}
        <input
          disabled={!isDirty}
          className={!isDirty ? "button-submit-disable" : "button-submit"}
          type="submit"
        />
      </form>
    </>
  );
};
export default Forma;
