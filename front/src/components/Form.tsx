import { TextField } from "@mui/material";

function Form() {
  const onHandleSubmint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onHandleSubmint}>
        <div>
          {" "}
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <button>Up</button>
          <button>Down</button>
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
