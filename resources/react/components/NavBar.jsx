import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdAccountBox } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

function NavBar({ cartNum, token, token2, addToken, addToken2 }) {
    const handleLogout = async () => {
        if (!token) return; // Check if token is available

        try {
            const config = {
                method: "post",
                url: "api/logout",
                headers: {
                    Authorization: "Bearer " + token,
                },
            };

            const response = await axios.request(config);
            console.log("Logout successful:", response.data);
            window.sessionStorage.removeItem("auth_token");
            addToken(null);
            window.location.href = "/";
        } catch (error) {
            console.error(
                "Logout error:",
                error.response ? error.response.data : error.message
            );
        }
    };

    const handleLogout2 = async () => {
        if (!token2) return; // Check if token2 is available

        try {
            const config = {
                method: "post",
                url: "api/logout2",
                headers: {
                    Authorization: "Bearer " + token2,
                },
            };

            const response = await axios.request(config);
            console.log("Logout2 successful:", response.data);
            window.sessionStorage.removeItem("auth_token2");
            addToken2(null);
        } catch (error) {
            console.error(
                "Logout2 error:",
                error.response ? error.response.data : error.message
            );
        }
    };

    console.log("Current token:", token);
    console.log("Current token2:", token2);

    return (
        <div className="navBar">
            <img
                src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1809/sergeypykhonin180900041/108230283-registration-register-logo-or-label-diary-note-icon-vector-illustration.jpg"
                alt="Logo"
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "20px",
                }}
            />

            <Link to="/">Homepage</Link>
            <Link to="/cart" className="cart-item">
                <BsCart style={{ marginLeft: 10 }} />
                <span className="cart-num">{cartNum}</span>
            </Link>
            <div
                className="linkContainer"
                style={{ marginLeft: "auto", marginRight: "20px" }}
            >
                {!token && !token2 ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have account?{" "}
                            <Link to="/register" className="link-danger">
                                Register
                            </Link>
                        </p>
                        <MdAccountBox
                            style={{
                                fontSize: "30px",
                                marginRight: "5px",
                                height: "50px",
                            }}
                        />
                        <Dropdown>
                            <DropdownToggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                LOGIN
                            </DropdownToggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/login">
                                    Prijava za kupce
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/login2">
                                    Prijava za administratora
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <MdAccountBox
                            style={{ fontSize: "30px", marginRight: "5px" }}
                        />
                        <label
                            style={{ fontWeight: "bold", marginRight: "15px" }}
                        >
                            {window.sessionStorage.getItem("name_login")}
                        </label>
                        <Link
                            to="/"
                            onClick={!token2 ? handleLogout : handleLogout2}
                        >
                            ODJAVI SE
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
