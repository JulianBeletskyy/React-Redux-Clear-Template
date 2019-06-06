import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sendReject } from 'actions/users'
import { closeModal } from 'actions/ui'

const RejectForm = ({dispatch, userId}) => {
	const [form, setForm] = useState({reason: '', message: false})
	const handleChange = (value, field) => {
		setForm({...form, [field]: value})
	}
	const send = e => {
		e.preventDefault()
		dispatch(sendReject({...form, userId})).then(success => {
			if (success) {
				dispatch(closeModal())
			}
		})
	}
	return	<form className="p-3" onSubmit={send}>
				<div className="form-group">
					<textarea
						className="form-control"
						style={{resize: 'none'}}
						onChange={({target: {value}}) => handleChange(value, 'reason')}
						value={form.reason} rows="3">
					</textarea>
				</div>
				<div className="form-check text-right">
				  	<input
				  		className="form-check-input"
				  		type="checkbox"
				  		id="check1"
				  		onChange={({target: {checked}}) => handleChange(checked, 'message')}
				  		value={form.message} />
				  	<label className="form-check-label" htmlFor="check1">
					    Send email to the form owner
				  	</label>
				</div>
				<div>
					<button className="btn btn-danger" type="submit">Reject profile</button>
				</div>
			</form>
}

export default connect()(RejectForm)