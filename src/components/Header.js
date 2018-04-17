import React from 'react';
import Modal from 'boron/DropModal'
import {browserHistory, Link} from "react-router";

class Header extends React.Component  {
    constructor(props){
        super(props)

        this.state = {term: ''};
    }

    componentDidUpdate() {
        this.props.onSearchTermChange(this.state.term)
    }

    showModal() {
        this.refs.modal.show();
    }

    hideModal(e) {
        e.preventDefault()
        this.refs.modal.hide();
    }


    render() {
        let topright;


        if (this.props.back) {
            topright = <li onClick={browserHistory.goBack} className="back">
                <i className="icon-play"></i><p className="backtext">back</p>
            </li>
        } else if(this.props.search){

            topright = <input className="searchinput" type="text"
                              placeholder="Search for Anything..." onFocus={(e) => e.target.placeholder = ""}
                              value={this.state.term}
                              onChange={e => {
                                  this.setState({term: e.target.value})
                              }} />

        } else {
            topright = <li className="icon-logo"></li>
        }

        return (
            <div className="div">
            <ul className="header">
                {topright}
                <li><Link activeClassName="active" className="icon icon-fire" to="/"></Link></li>
                <li><Link activeClassName="active" className="icon icon-combined-shape" to="/movie"></Link> </li>
                <li><Link activeClassName="active" className="icon icon-search" to="/search"></Link></li>
                <li className="signup" onClick={this.showModal.bind(this)}>How to Watch</li>
            </ul>
                <Modal ref="modal" backdropStyle={{backgroundColor: '#193240'}} modalStyle={{width: "550px", height: "550px"}}>
                    <form>
                            <h2>How to play movie</h2>
                            <p><iframe style={{height: "90vh", border: "none", zIndex: 3000}} src={`https://www.youtube.com/embed/8mSWZ09rn1E`} width="100%"></iframe</p>

                        <div class="button">
                            <button className="button" onClick={this.hideModal.bind(this)}>Close</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Header;
