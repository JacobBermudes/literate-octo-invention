import React from "react";

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            passWord: "",
        }
        this.logIn = this.logIn.bind(this)
    }

    render() {
        return (
            <div className="authMain">
                <div className="form-group">
                    <form>
                        <input className="item" type="text"
                            plaseholder="login"
                            onChange={(e) => this.setState({ userName: e.target.value })}
                        />
                    </form>
                </div>
                <div className="form-group">
                    <form>
                        <input className="item" type="password"
                            plaseholder="password"
                            onChange={(e) => this.setState({ passWord: e.target.value })}
                        />
                        <button className="btnItem" id="logIn" type="button"
                            onClick={() => this.props.logIn({ userName: this.state.userName, passWord: this.state.passWord, })}>
                            Log In</button>
                        <button className="btnItem" id="singUp" type="button">Sing Up</button>
                    </form>
                </div>

            </div>


        )
    }


}

export default AuthForm