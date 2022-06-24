import * as React from "react";
import { useState } from "react";
//import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
///import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import * as validations from "./validations/register-validation";
import * as services from "../../services/register-services";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const reloadPage = () => {
    window.location.reload();
  };

  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  //Criando com react hook forms
  const {
    control, //ojeto para capturar os campos do formulário
    handleSubmit, //objeto para capturar
    //o evento SUBMIT do formulário
    formState: {
      errors, //capturar as mensagens de erro de validação
    },
    reset, //objeto utilizado para limpar os campos do formulário
  } = useForm(); //Criar um formulario

  //função para capturar o evento SUBMIT do formulário
  const onSubmit = (data) => {
    console.log("SUBMIT DISPARADO!");
    console.log(data);

    //realizando a chamada para a API
    services.postRegister(data);

    //realizando a chamada para a API
    services
      .postRegister(data)
      .then(
        //capturando o retorno de sucesso
        (result) => {
          //exibir mensagem de sucesso
          setMensagemSucesso(
            `Parabéns ${data.nome}, sua conta foi criada com sucesso!`
          );
        }
      )
      .catch(
        //capturando o retorno de erro
        (e) => {
          if (e.response.status == 422) {
            setMensagemErro(e.response.data.message);
          } else {
            setMensagemErro("Ocorreu um erro, por favor tente novamente.");
          }
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>*/}
          <Typography component="h1" variant="h5">
            Faça seu cadastro.
          </Typography>

          {/* mensagem de sucesso */}
          {mensagemSucesso && (
            <div className="alert alert-success mb-3">
              <strong>Sucesso!</strong> {mensagemSucesso}
            </div>
          )}

          {/* mensagem de erro */}
          {mensagemErro && (
            <div className="alert alert-danger mb-3">
              <strong>Erro!</strong> {mensagemErro}
            </div>
          )}

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="nome"
                  defaultValue=""
                  rules={{
                    validate: validations.nomeValidation,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      label="Nome"
                      autoFocus
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {/* mensagem de erro de validação do campo 'nome' */}
                {errors.nome && (
                  <span className="text-danger">{errors.nome.message}</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  rules={{
                    validate: validations.emailValidation,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Endereço de email"
                      autoComplete="email"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {/* mensagem de erro de validação do campo 'nome' */}
                {errors.nome && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="senha"
                  defaultValue=""
                  rules={{
                    validate: validations.senhaValidation,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      required
                      fullWidth
                      label="Senha"
                      type="password"
                      id="senha"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {/* mensagem de erro de validação do campo 'nome' */}
                {errors.nome && (
                  <span className="text-danger">{errors.senha.message}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="senhaConfirmacao"
                  defaultValue=""
                  rules={{
                    validate: validations.senhaConfirmacaoValidation,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      required
                      fullWidth
                      label="Repita a mesma senha"
                      type="password"
                      id="password"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastre
            </Button>

            <Button
              color="secondary"
              onClick={reloadPage}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Limpar
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Já é cadastrado? Faça o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
