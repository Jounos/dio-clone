import React from 'react';
import { FiThumbsUp } from 'react-icons/md';
import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from './style';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground/>
            <Content>
                <UserInfo>
                    <UserPicture/>
                    <div>
                        <h4>Geovanny Neves Liberato</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript
                        <p>
                            <FiThumbsUp/>
                        </p>
                    </h4>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };