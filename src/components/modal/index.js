import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'actions/ui'
import Modal from 'react-responsive-modal'

const CustomModal = ({dispatch, open, title, component}) => {
    const onCloseModal = () => {
        dispatch(closeModal())
	}

    return  <Modal 
                open={open}
                center
                onClose={onCloseModal}
                showCloseIcon={true}
                classNames={{modal: 'modal-body'}}>
                <h3 className="text-center">{ title }</h3>
                <div>{component}</div>
            </Modal>
}

const mapStateToProps = ({ui}) =>
    ({
        open: ui.modal.open,
        title: ui.modal.title,
        component: ui.modal.component,
    })

export default connect(mapStateToProps)(CustomModal)
