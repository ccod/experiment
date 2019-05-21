import { basicAction } from './util'

const [selectPlayer, clearPlayer] = [basicAction('select-player'), basicAction('clear-player')]
const toggleMenu = basicAction('toggle-menu')

const pickMenuKey = pathname => {
    let base = pathname.split('/').slice(0,3).join('/')
    switch(base) {
        case '/dashboard': return ['1']
        case '/dashboard/challenge': return ['2']
        case '/dashboard/ranking': return ['3']
        case '/dashboard/history': return ['4']
        default: 
    }

    switch(pathname) {
        case '/dashboard/admin/ranking/edit': return ['5']
        case '/dashboard/admin/challenges': return ['6']
        case '/dashboard/admin/edit': return ['7']
        default: 
    }

    return ['1']
}

const withinDashboard = pathname => pathname.split('/').splice(0,2).join('/') === '/dashboard'

const defaultState = {
    sideMenu: false,
    sideMenuKey: pickMenuKey(window.location.pathname), 
    currentPath: window.location.pathname,
    selectPlayer: null,
    windowWidth: document.body.clientWidth,
}

const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case toggleMenu.type:
            return Object.assign({}, state, { sideMenu: !state.sideMenu })
        case selectPlayer.type:
            return Object.assign({}, state, { selectPlayer: payload })
        case clearPlayer.type:
            return Object.assign({}, state, { selectPlayer: null })
        default: 
            return state
    }
}

export { reducer, selectPlayer, clearPlayer, toggleMenu, withinDashboard, pickMenuKey } 