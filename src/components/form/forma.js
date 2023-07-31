import { Checkbox, TextField } from "@mui/material";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const time = "2023-07-30T21:00:00Z";

const Forma = ({ close }) => {
  const [spiner, setSpiner] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, dirtyFields },
  } = useForm();

  const onSubmit = (data) => {
    close();
    setSpiner(true);
    setTimeout(() => {
      reset();
      setSpiner(false);
    }, 3000);
  };

  return (
    <>
      <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-p" onClick={close}>
          Close
        </p>
        <Controller
          defaultValue={"Sasha"}
          control={control}
          name="first_name"
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
        {dayjs().format("DD MMMM  YYYY")}
        <Controller
          defaultValue={""}
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
          defaultValue={""}
          control={control}
          name="age"
          rules={{ required: true }}
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
          defaultValue={""}
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
        <p>Married?:</p>
        <Controller
          defaultValue={""}
          control={control}
          name="is_married"
          render={({ field: { onChange, value }, fieldState }) => (
            <Checkbox onChange={onChange} value={value} />
          )}
        />
        <DatePicker
          defaultValue={dayjs(time)}
          format="D, MMM YYYY"
          className="antd-picker"
        />
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
