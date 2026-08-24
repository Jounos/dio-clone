import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from "./style";
import banner from "../../assets/banner.png";

const Home = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={ () => null } />
            </Column>
            <Column>
                <Input p0laceholder="email" />
            </Column>
        </Container>
    </>)
}

export { Home };