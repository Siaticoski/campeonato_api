import express from 'express';
import { validaUsuario } from "./validacao/valida.js";

app.post('/usuarios', async (req, res) => {
    const {nome, email} = req.body;

    const usuarioValido = validaUsuario(nome, email);

    if (usuarioValido.status) {
        await cadastraUsuario(nome, email);
        res.status(202).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }
})