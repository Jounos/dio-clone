import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';

import {
    BuscarInputContainer,
    Container,
    Input,  
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './style';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';

const Header = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClickEntrar = () => {
        navigate("/login")
    }
    const handleClickCadastrar = () => {
        navigate("/signup")
    }


    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="Logo da dio" />
                    </Link>
                    { user.id ? 
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."></Input>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    : null }
                </Row>
                <Row>
                    { user.id ? 
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/43286063?v=4" />{" "}
                            <a href="#" onClick={handleSignOut}>Sair</a>
                        </>
                    : ( 
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" onClick={ handleClickEntrar }></Button>
                            <Button title="Cadastrar" onClick={ handleClickCadastrar }></Button>
                        </>
                    ) }
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }