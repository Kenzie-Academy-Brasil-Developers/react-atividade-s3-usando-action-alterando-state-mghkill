import { Button, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/student/action";
import styles from "./styles";

const Form = () => {
  const { stylesBox, styleInput } = styles;
  const [inputStudent, setInputStudent] = useState("");
  const dispatch = useDispatch();

  const handleReducer = () => {
    dispatch(addStudent(inputStudent));
  };
  return (
    <Box sx={stylesBox}>
      <Box sx={styleInput}>
        <TextField
          value={inputStudent}
          fullWidth
          label="Estudante"
          onChange={(e) => setInputStudent(e.target.value)}
        />
      </Box>
      <Box sx={styleInput}>
        <Button onClick={handleReducer} variant="contained" size="medium">
          Enviar
        </Button>
      </Box>
    </Box>
  );
};
export default Form;
