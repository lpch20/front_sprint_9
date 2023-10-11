import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUsuario } from "./../API/Rule_Login";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email: email, password: password };
    if (!errorEmail && !errorPassword) {
      try {
        const resultado = await loginUsuario(user);
        alert(resultado.mensaje);
        const token = resultado.token;
        localStorage.setItem("token", token)
        navigate("/home", { replace: true }); // Redirige solo cuando las credenciales son válidas
        
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Las credenciales no son correctas");
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
            Iniciar Sesión
          </button>
        </form>
        <Link to="/register">
          <button className={"button"}>Registrarme</button>
        </Link>
      </main>
    </div>
  );
}

export default Login;
