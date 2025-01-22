/* const express = require("express") */

import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json());
app.use(cors())



app.get('/usuarios', async (req, res) => {     /* listar usuarios */
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {  /* criar usuarios */

    await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({ message: "Usuário criado!" })
})


app.put('/usuarios/:id', async (req, res) => {    /* editar usuários */

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => { /* deletar usuários */

    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})



app.listen(3000)







/* kennedy
qIo3vagVGz2UQU8K */

/* Neste projeto aprendemos o  => CRUD - create, read, update, delete (criar, ler, atualizar e deletar) */