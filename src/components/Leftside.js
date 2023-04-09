import styled from "styled-components";

const Leftside = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo></Photo>
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a  photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt=""/>
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt=""/>
                    </span>
                </Item>
            </ArtCard>
        </Container>
    )
}


const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: #fff;
    border: none;
    transition: box-shadow 83ms;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%) rgba(0 0 0 / 20%);
    overflow: hidden;
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    border: 2px solid white;
    border-radius: 50%;
    margin: -38px auto 12px;
    padding: 1px;
`;

const Link = styled.div`
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 0;
    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        cursor: pointer;
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
    div {
        display: flex;
        flex-direction: column;
        text-align: left;
        span {
            font-size: 12px;
            line-height: 1.33;
            &:first-child {
                color: rgba(0, 0, 0, 0.6);
            }
        }
    }
`;

const Item = styled.a``;






export default Leftside;