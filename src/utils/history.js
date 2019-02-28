import createHistory from 'history/createBrowserHistory'
import { pushLocation } from 'stores/ui'

export default store => {
    const history = createHistory()
    history.listen((location, action) => {
        console.log('Action is: ', action, '\nLocation is: ', location.pathname)
        store.dispatch(pushLocation.act(location.pathname))
    })
    return history
}