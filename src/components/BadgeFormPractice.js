import React from 'react';

class BadgeFormPractice extends React.Component {

    state = {
        jobTitle: 'Developers'
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = (e) => console.log('Button was clicked');

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="fistName"
                            value={this.state.fistName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>
                    <button 
                    // type="button"
                    onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeFormPractice;