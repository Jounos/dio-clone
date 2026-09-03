import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

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

const Header = ({autenticado}) => {

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
                    <a href="/">
                        <img src={logo} alt="Logo da dio" />
                    </a>
                    { autenticado ? 
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
                    { autenticado ? 
                        <UserPicture src="https://avatars.githubusercontent.com/u/43286063?v=4" />
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