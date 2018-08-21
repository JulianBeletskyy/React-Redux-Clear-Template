import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { toggleModal, closeModal } from 'actions/ui'
import Modal from 'react-responsive-modal'
import { getLang } from 'utils/lang'

class CustomModal extends Component {

    onCloseModal = () => {
    	store.dispatch(closeModal()).then(() => {
    		/* Wait for animation */
    		setTimeout(() => {store.dispatch(toggleModal())}, 400)
    	})
	}

    render() {
    	const { open, title, component } = this.props.modal
        return (
            <Modal 
            	open={open}
            	onClose={this.onCloseModal}
            	center
            	showCloseIcon={true}
            	classNames={{modal: 'modal-body'}}>
                <h3 className="text-center">{ getLang(title) }</h3>
	          	<div>{component}</div>
	        </Modal>
        );
    }
}

const mapStateToProps = state =>
    ({
        modal: state.ui.modal
    })

export default connect(
    mapStateToProps
)(CustomModal)
