import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <div>
            <AuthLayout title='Register'>
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label='Nombre completo' type='text' placeholder='Nombre' fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth></TextField>
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6} >
                            <Button variant='contained' fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Button variant='contained' fullWidth><Google />Google</Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to='/auth/login'>Ingresar</Link>
                    </Grid>
                </form>
            </AuthLayout>
        </div>
    );
}