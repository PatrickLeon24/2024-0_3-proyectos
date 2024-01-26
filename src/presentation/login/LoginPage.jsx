import { Box, Button, Container, TextField } from "@mui/material"
import {useState} from "react"
import dataUsuarios from "../../data/usuarios"
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loginIncorrecto,setLoginIncorrecto]=useState(false)
    //navegacion programatica 
    const navigate =useNavigate()


    const usernameOnChangeHandler=(event)=>{
        setUsername(event.target.value)
    }
    const passwordOnChangeHandler=(event)=>{
        setPassword(event.target.value)
    }

    const loginOnClick=()=>{
        const listaFiltrada=dataUsuarios.filter((usuario)=>{
            return usuario.username== username && usuario.password ==password

        })
        if (listaFiltrada.length>0) {
            console.log("correcto")
            navigate("/main")
        }
        else{
            console.log("incorrecto")
            setLoginIncorrecto(true)
            console.log(loginIncorrecto)
        }
        
        
    }
    return <Container maxWidth="sm">
        <Box component="form"
            noValidate
            autoComplete="off"
            style={ { textAlign : "center" }}>
            
            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal"
                    value={username}
                    onChange={usernameOnChangeHandler}/>
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal"
                    value={password}
                    onChange={passwordOnChangeHandler}/>
            </div>
            <div>
                <Button variant="contained" 
                style={ { marginRight : "8px" }}
                onClick={loginOnClick}>
                Login
                </Button>
                <Button variant="contained">Registro</Button>
                
            </div>
            {
                

                
                loginIncorrecto?
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="error"
                    sx={{mt:2}}
                    >
                        Here is a gentle confirmation that your action was successful.
                    </Alert>
                :""
                
                
            }
            
            

        </Box>
    </Container>
}

export default LoginPage