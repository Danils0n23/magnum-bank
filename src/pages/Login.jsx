import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import "../styles/LoginForm.css";
import Logo from "../../public/magnum.png";

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleLoginLocal = () => {
    const userLocal = {
      email,
      password,
    };

    localStorage.setItem("userLocal", JSON.stringify(userLocal));
    console.log("Usuário logado sem Google:", userLocal);
    navigate("/dashboard");
  };

  const handleRegisterLocal = () => {
    const userLocal = {
      email,
      password,
      name,
    };

    localStorage.setItem("userLocal", JSON.stringify(userLocal));
    console.log("Usuário registrado sem Google:", userLocal);
    navigate("/dashboard");
  };

  return (
    <div className="text-left p-3">
      <button className="btn-white" onClick={handleBack}>
        ← Voltar
      </button>

      <div className="container px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10 my-5">
                  <div className="row justify-content-center px-3 mb-3">
                    <img id="logo" src={Logo} alt="Logo Magnum" />
                  </div>

                  <h3 className="mb-5 text-center heading">
                    Somos o Magnum Bank
                  </h3>

                  <h6 className="msg-info">
                    {isRegistering
                      ? "Crie sua conta agora mesmo"
                      : "Faça login na sua conta"}
                  </h6>

                  {isRegistering ? (
                    <>
                      <div className="form-group">
                        <label className="form-control-label text-muted">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          placeholder="Digite seu nome"
                          className="form-control input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label text-muted">
                          E-mail
                        </label>
                        <input
                          type="email"
                          placeholder="Digite seu e-mail"
                          className="form-control input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label text-muted">
                          Senha
                        </label>
                        <input
                          type="password"
                          placeholder="Crie uma senha"
                          className="form-control input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="row justify-content-center my-3 px-3">
                        <button
                          className="btn-color"
                          onClick={handleRegisterLocal}
                        >
                          Criar conta
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-group">
                        <label className="form-control-label text-muted">
                          Usuário
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Telefone ou e-mail"
                          className="form-control input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-control-label text-muted">
                          Senha
                        </label>
                        <input
                          type="password"
                          id="psw"
                          name="psw"
                          placeholder="Digite sua senha"
                          className="form-control input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="row justify-content-center my-3 px-3">
                        <button
                          className="btn-color"
                          onClick={handleLoginLocal}
                        >
                          Entrar no Magnum
                        </button>
                      </div>

                      <div className="row justify-content-center my-2">
                        <a href="#">
                          <small className="text-muted">
                            Esqueceu a senha?
                          </small>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="google-login-wrapper">
                <div className="google-login-inner">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const decoded = jwtDecode(credentialResponse.credential);
                      console.log("Usuário logado com Google:", decoded);
                      localStorage.setItem(
                        "userGoogle",
                        JSON.stringify(decoded)
                      );
                      navigate("/dashboard");
                    }}
                    onError={() => {
                      console.error("Erro ao logar com Google");
                    }}
                    theme="outline"
                    size="large"
                    text="continue_with"
                    shape="circle"
                    logo_alignment="center"
                  />
                </div>
              </div>

              <div className="bottom text-center mb-5">
                {isRegistering ? (
                  <>
                    <p className="sm-text mx-auto mb-3">Já tem uma conta?</p>
                    <button
                      className="btn-white ml-2"
                      onClick={() => setIsRegistering(false)}
                    >
                      Fazer login
                    </button>
                  </>
                ) : (
                  <>
                    <p className="sm-text mx-auto mb-3">
                      Ainda não tem uma conta?
                    </p>
                    <button
                      className="btn-white ml-2"
                      onClick={() => setIsRegistering(true)}
                    >
                      Criar conta
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                <h3 className="text-white">
                  Somos mais do que apenas uma empresa
                </h3>
                <small className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
