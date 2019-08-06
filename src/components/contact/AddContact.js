import React, { Component } from 'react';
import { Consumer} from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '', 
        email: '',
        phone: ''
    };


    onSubmit = (dispatch, e) => { 
        e.preventDefault();
        
        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({ type: 'ADD_CONTACT', payload: newContact });
    };

    // static defaultProps = {
    //     name: 'Jitendra Sah',
    //     email: 'sahjk715@gmail.com',
    //     phone: '+977-9814841715'
    // }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" className="form-control form-control-lg" 
                                            placeholder="Enter Name..." defaultValue={name}
                                            ref={this.nameInput}
                                        />    
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email..." defaultValue={email}
                                        ref={this.emailInput}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter Phone..." defaultValue={phone} 
                                        ref={this.nameInput}
                                        />
                                    </div>
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                )
            }}
            </Consumer>
        )
    }
}

export default AddContact;