import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUsuario } from "./../API/Rule_Register"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length === 0) {
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email: email, password: password, username: username };
    if (!errorEmail && !errorPassword && !errorUsername) {
      await registerUsuario(user)
        .then((resultado) => {
          alert(resultado.mensaje);
          navigate("/", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Las credenciales no son correctas"); //esto se manda a un servidor para corroborar las credenciales
    }
  };

  return (
    <div className="app">
      <main className="mainLogin">
        <form className="form" onSubmit={handleSubmit}>
          <p className="labelTitleML">E-mail:</p>
          <input
            className={`input-login ${errorEmail && "error"}`}
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          {errorEmail && (
            <p style={{ color: "red" }}>Este campo es obligatorio</p>
          )}

          <p className="labelTitleML">Username:</p>
          <input
            className={`input-login ${errorUsername && "error"}`}
            type="text"
            value={username}
            onChange={handleUsername}
          />
          {errorUsername && (
            <p style={{ color: "red" }}>Este campo es obligatorio</p>
          )}

          <p className="labelPassML">Contraseña:</p>
          <input
            className={`input-login ${errorPassword && "error"}`}
            required
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          {errorPassword && (
            <p style={{ color: "red" }}>
              La contraseña debe tener 8 caracteres mínimo
            </p>
          )}

          <button type="submit" className={"button"}>
            Registrarme
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
