import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";

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
        Teste React
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm() {
  /*const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }*/ //Criando com react hook forms
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
          <img className="img-fluid" src="data:image/png;base64,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"/>
          <Typography component="h1" variant="h5">
            Acesse sua conta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Endereço de email"
                  autoComplete="email"
                  autoFocus
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem uma conta? Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
