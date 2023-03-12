import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/images/logo.svg'
import { FormattedMessage } from 'react-intl';
// import { LANGUAGES } from '../../utils'
// import { changeLanguageApp } from '../../store/actions/appActions';
import { withRouter } from 'react-router';
class HomeHeader extends Component {

    // changeLanguage = (language) => {
    //     // this.props.changeLanguageAppRedux(language)
    //     //fire redux event: actions
    // }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        // let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <img className='header-logo' src={logo}
                                onClick={() => this.returnToHome()}
                            />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                {/* <div><b><FormattedMessage id="homeheader.speciality" /></b></div> */}
                                <div className='subs-title'>Blog</div>
                                {/* <div className='subs-title'><FormattedMessage id="homeheader.search-doctor" /></div> */}
                            </div>
                            <div className='child-content'>
                                {/* <div><b><FormattedMessage id="homeheader.health-facility" /></b></div> */}
                                {/* <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div> */}
                                <div className='subs-title'>Projects</div>
                            </div>
                            <div className='child-content'>
                                {/* <div><b><FormattedMessage id="homeheader.health-facility" /></b></div> */}
                                {/* <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div> */}
                                <div className='subs-title'>About</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='left'>
                                <div className='language'>Language</div>
                                <div className='light'>
                                    <i class="fa fa-sun"></i>
                                    <i class="fa fa-moon"></i>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='user-infor'>
                                    <div className='user-name'> Manh Hung</div>
                                </div>
                                {/* <div className='user-login-signup'></div> */}
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.user.isLoggedIn,
        // language: state.app.language,
        // userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

