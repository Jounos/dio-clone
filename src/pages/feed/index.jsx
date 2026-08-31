import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container, TextContent, Title, TitleHighlight } from "./style";
import banner from "../../assets/banner.png";
import { UserInfo } from "../../components/UserInfo"


const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Card />
            <UserInfo percentual={ 50 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
        </Container>
    </>)
}

export { Feed };