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
                        My items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span> 
                        Events 
                        <img src="images/plus-icon.svg" alt=""/>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
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
    border-radius: 10px;
    background-color: #fff;
    border: none;
    transition: box-shadow 83ms;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
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
    background-image: url('/images/sameer.jpeg');
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
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
    cursor: pointer;
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

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    padding: 12px;
    font-size: 12px;
    display: block;
    text-align: left;
    span {
        display: flex;
        align-items: center;
        gap: 3px;
        cursor: pointer;
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    a {
        padding: 4px 12px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            color: #0a66c2;
        }
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* border: 1px solid black; */
        }
        &:last-child {
            color: rgba(0, 0, 0, 0.6);
            border-top: 1px solid #d6cec2;
            padding: 12px;
            /* border: 1px solid black; */

            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
    

`;




export default Leftside;