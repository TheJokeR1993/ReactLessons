
import { useGetAllDogQuery } from "../../services/dogs";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Pagination,
  Paper,
  Radio,
  RadioGroup
} from "@mui/material";
import "./queries.css";
import { useDispatch, useSelector } from "react-redux";
import {  changeLimit, changePage } from "../../features/dog/dog";

const RtkQueriesList = () => {
  const { data, isLoading } = useGetAllDogQuery();
  const dispatch = useDispatch();
  const {  limit, page } = useSelector((state) =>  state.dog);


if(isLoading) return  <h1>Loading....
</h1> 

  return (
    <div className="list">
      <FormControl  className="radio">
        <FormLabel id="demo-radio-buttons-group-label">How img?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          row={true}
          
          defaultValue={limit}
            value={limit}
          name="radio-buttons-group"
            onChange={(e) =>dispatch(changeLimit(e.target.value))}
        >
          <FormControlLabel  value={10} control={<Radio size="small" />} label="10" />
          <FormControlLabel value={20} control={<Radio size="small" />} label="20" />
          <FormControlLabel value={40} control={<Radio size="small" />} label="40" />
        </RadioGroup>
      </FormControl>
      <div className="all_dog">
        {data.message.map(
          (url, index) =>
           (limit*(page-1)<= index&&index < limit*page) && (
              <Paper
                key={index}
                className="dog"
                elevation={9}
                children={
                  <img className="image" key={index} src={url} alt="sdsd" />
                }
              />
            )
        )}
      </div>

      <Pagination
        className="pagination"
        onChange={(e) =>dispatch(changePage(+e.target.innerText))}
        page={page}
        count={Math.ceil(808 / limit)}
        color="primary"
      />
    </div>
  );
};
export default RtkQueriesList;
