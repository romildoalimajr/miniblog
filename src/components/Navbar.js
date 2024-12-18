import { NavLink } from "react-router-dom"
import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

import styles from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Register" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
