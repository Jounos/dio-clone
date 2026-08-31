import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input"
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from "./style";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

    const navigate = useNavigate();
    const { contol, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = data => console.log(data);

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input type="text" placeholder="E-mail" leftIcon={ <MdEmail/> } />
                        <Input type="passworld" placeholder="Senha" leftIcon={ <MdLock/> }/>
                        <Button title="Entrar" variant="secondary" onClick={ handleClickSignIn } type="button" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci Minha Senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };