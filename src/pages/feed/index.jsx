import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container, Column, Title, TitleHighlight } from "./style";
import banner from "../../assets/banner.png";
import { UserInfo } from "../../components/UserInfo"


const Feed = () => {
    return (<>
        <Header autenticado={ true }/>
        <Container>
            <Column flex={ 3 }>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={ 1 }>
                <TitleHighlight># RAKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={ 80 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
                <UserInfo percentual={ 27 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
                <UserInfo percentual={ 89 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
                <UserInfo percentual={ 57 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
                <UserInfo percentual={ 12 } nome="Geovanny N. Liberato" image="https://avatars.githubusercontent.com/u/43286063?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed };