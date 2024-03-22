import { TextField } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState } from "react";
import './Form.css';

  function Form() {
    const [encode, setEncode] = useState("");
    const [decode, setDecode] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<null | string>(null);

    const httpMain = `http://localhost:8000`;

    const onHandleDecode = async () => {
      if (password === '' || encode === '') {
        setError('Вы не ввели пароль');
        return;
      };

      const jsonPost = {
        message: decode,
        password,
      };

      const data = await fetch(`${httpMain}/decode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPost),
      });

      const result = await data.json();
      setEncode(result.decode);
    };

    const onHandleEncode = async () => {
      if (password === '' || encode === '') {
        setError('Вы не ввели пароль');
        return;
      }

      const jsonPost = {
        message: encode,
        password,
      };

      const data = await fetch(`${httpMain}/encode`, {
        method: "POST",
        body: JSON.stringify(jsonPost),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dataJson = await data.json();
      setDecode(dataJson.encode);
    };
    return (
      <div>
        <div>
          <TextField
            className="form-main"
            label="Multiline"
            multiline
            rows={4}
            value={encode}
            onChange={(e) => setEncode(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="form-main"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button variant="contained" onClick={onHandleDecode}>
              Up
            </Button>
            <Button variant="contained" onClick={onHandleEncode}>
              Down
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <TextField
            className="form-main"
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
            value={decode}
            onChange={(e) => setDecode(e.target.value)}
          />
        </div>
        
        {<h1>{error && error}</h1>}
      </div>
    );
};
  
export default Form;
