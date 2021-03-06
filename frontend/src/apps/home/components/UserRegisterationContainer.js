import {connect} from 'react-redux';
import UserRegistration from './UserRegistration';
import {registerUser, getProfileDetail} from '../logic';

const mapStateToProps = ({profileReducer}) => ({profileReducer});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData)),
    getProfileDetail: () => dispatch(getProfileDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);