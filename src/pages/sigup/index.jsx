import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Column, Container, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "../login/style";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    nome: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
}).required();

const SignUp = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async formData => {
        try {

            const user_exist = await api.get(`users?email=${ formData.email }`)
            if (user_exist?.data.length > 0) {
                alert('usuário já existe em nossa base de dados.')
                return
            }

            const user_cadastrado = await api.post('users', { name: formData.nome, email: formData.email, senha: formData.password });
            console.log(user_cadastrado.data);
            if (user_cadastrado) {
                navigate('/login')
            } else {
                alert('houve um erro, tente novamente.')
            }
        } catch {
            alert('houve um erro, tente novamente.')
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais trecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <Input placeholder="Nome completo" errorMessage={ errors?.nome?.message } type="text" name="nome" control={ control } leftIcon={ <FaUser/> }></Input>
                            <Input placeholder="E-mail" name="email" errorMessage={ errors?.email?.message } type="email" control={ control } leftIcon={ <MdEmail/> }></Input>
                            <Input placeholder="Password" name="password" errorMessage={ errors?.password?.message } type="password" control={ control } leftIcon={ <MdLock/> }></Input>
                            <Button title="Criar minha conta" variant="secondary" type="submit"></Button>
                        </form>
                        <Row>
                            <SubtitleLogin>
                                Ao clicar em "criar minha conta grátis",
                                declaro que aceito as Políticas de 
                                Privacidade e os Termos de Uso da DIO.
                            </SubtitleLogin>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Já tenho conta.</strong>
                            <a href="/login">
                                <strong style={{ color: '#23DD7A', marginLeft: '15px', textDecoration: 'none' }}>Fazer login</strong>
                            </a>
                        </div>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { SignUp };