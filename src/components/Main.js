import styled from "styled-components";


const Main = (props) => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="/images/sameer.jpeg" alt=""/>
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src="/images/photo.png" alt="" />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video.png" alt="" />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src="/images/event.png" alt="" />
                        <span>Event</span>
                    </button>
                    <button>
                        <img src="/images/article.png" alt="" />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/sameer.jpeg" alt=""/>
                            <div>
                                <span>City</span>
                                <span>Medieval city in Rome</span>
                                <span>12/9/2023</span>
                            </div>
                        </a>
                        
                        <button>
                            <img src="/images/ellipsis_small.png" alt=""/>
                        </button>
                    </SharedActor>
                    <Description>Description</Description>
                    <SharedImg>
                        <a>
                            <img src="/images/city.jpg" alt=""/>
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="/images/thumbs_up.png" alt=""/>
                                <img src="/images/heart.png" alt=""/>
                                <img src="/images/clap.png" alt=""/>
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCounts>
                    <CommentSection>
                        <button>
                            <img src="/images/like.png"/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="/images/comments.png"/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="/images/repost.png"/>
                            <span>Repost</span>
                        </button>
                        <button>
                            <img src="/images/send.png"/>
                            <span>Send</span>
                        </button>
                    </CommentSection>
                </Article>
            </div>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;

const Commoncard = styled.div`
    div {
            &:last-child {
                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(Commoncard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: left;
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button {
                img {
                    margin: 0 4px 0 -2px;
                }
                span {
                    color: #70b5f9;
                }
            }
        }
    }
`;

const Article = styled(Commoncard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
            width: 48px;
            height: 48px;
        }
        & div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                }
                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
    button {
        position: absolute;
        top: 0;
        right: 12px;
        background-color: transparent;
        border: none;
        outline: none;
        img {
            width: 20px;
        }
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
    margin-bottom: 8px;
`;

const SharedImg = styled.div`
    a {
        img {
            object-fit: contain;
            width: 100%;
        }
    }
`;

const SocialCounts = styled.ul`
    text-decoration: none;
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    margin: 0 16px;
    padding: 8px 10px;
    li {
        list-style-type: none;
        margin-right: 5px;
        font-size: 12px;
        button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            img {
                width: 20px;
            }
        }
    }
`;

const CommentSection = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    button {
        padding: 10px;
       background: none;
       border: none;
       outline: none;
       display: flex;
       align-items: center;
       gap: 2px;
       cursor: pointer;
       &:hover {
        background-color: rgba(0, 0, 0, 0.15);
       }
    }
`;


export default Main;