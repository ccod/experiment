import React from 'react'
import playerStore from 'modules/player/playerStore'
import authStore from 'modules/auth/authStore'

const Context = React.createContext()
const { Provider, Consumer } = Context
const createStore = () => ({
    player: new playerStore(),
    auth: new authStore(),
    tap: () => console.log('hello from store')
})

export { Context, Provider, Consumer, createStore } 