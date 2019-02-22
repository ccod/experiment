import { connect } from 'react-redux'
import { fetchProfile } from 'stores/profile'
import Profile from 'components/Profile'

const mapState = state => ({
    profile: state.profile.value
})

const mapDispatch = dispatch => ({
    fetchProfile: fetchProfile(dispatch)
})

export default connect(mapState, mapDispatch)(Profile)