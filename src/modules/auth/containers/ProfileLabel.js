import React, { Component, useContext } from 'react'
import ProfileLabelView from 'modules/auth/components/ProfileLabelView'
import { Context, Consumer } from 'utils/store'

export default class ProfileLabel extends Component {
    // constructor (props) {
    //     super(props)
    //     let context = useContext(Context)

    //     if (!context.player.profile) {
    //         context.player.getProfile()
    //     }
    // }

    render() {
        return (
            <Consumer>
                {context => <ProfileLabelView profile={context.player.profile} />}
            </Consumer>
        )
    }
}