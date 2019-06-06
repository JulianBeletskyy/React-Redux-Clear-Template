import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from 'components/modal'
import './App.css'
import { toggleModal } from 'actions/ui'
import { getUsers } from 'actions/users'
import RejectForm from 'components/forms/reject'


const App = ({dispatch, users}) => {
    useEffect(() => {
        dispatch(getUsers())
    }, [true])
    const openModal = user => () => {
        dispatch(toggleModal(true, `Reject ${user.name}`, <RejectForm userId={user.id} />))
    }
    const renderUserRow = (user, i) => {
        return  <tr key={i}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="text-center" >
                        <div className="text-danger" onClick={openModal(user)} style={{cursor: 'pointer'}}>&#xd7;</div>
                    </td>
                </tr>
    }
    return  <div className="App">
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Email</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => renderUserRow(user, i))
                            }
                        </tbody>
                    </table>
                </div>
                <Modal />
            </div>
}

const mapStateToProps = ({users}) =>
    ({
        users: users.list,
    })

export default connect(mapStateToProps)(App)
