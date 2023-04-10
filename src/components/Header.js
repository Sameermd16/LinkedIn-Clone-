import styled from "styled-components"

const Header=  (props) =>  {
  return (
    <Container>
        <Content>
            <Logo>
                <a href="/home">
                    <img src="/images/home-logo.svg"/>
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder="Search"/>
                </div>
                <SearchIcon>
                    <img src="/images/search-icon.svg"/>
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className="active">
                        <a>
                            <img src="/images/nav-home.svg"/>
                            <span>Home</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src="/images/nav-network.svg"/>
                            <span>My Network</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src="/images/nav-jobs.svg"/>
                            <span>Jobs</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src="/images/nav-messaging.svg"/>
                            <span>Messaging</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src="/images/nav-notifications.svg"/>
                            <span>Notifications</span>
                        </a>
                    </NavList>
                    <User>
                        <a>
                            <img src="/images/user.svg"/>
                            <span>
                                me 
                                <img src="/images/down-icon.svg"/>
                            </span>
                        </a>
                        <SignOut>
                            <a>Sign Out</a>
                        </SignOut>
                    </User>
                    <Work>
                        <a>
                            <img src="/images/nav-work.svg"/>
                            <span>
                                Work 
                                <img src="/images/down-icon.svg"/>
                            </span>
                        </a>
                    </Work>
                    <Premium>
                        <a>Try premium for free</a>
                    </Premium>
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
    
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 100;
    /* padding: 0 24px; */
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    /* border: 1px solid black; */
    position: relative;
    opacity: 1;
    flex-grow: 1;
    margin-left: 5px;
    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            width: 218px;
            height: 34px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 10px;
    left: 3px;
    width: 40px;
    z-index: 1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s;
    margin: 0;
`;

const Nav = styled.nav`
    /* border: 1px solid red; */
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    padding-top: 10px;

    .active {
        span::after {
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform .2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
  
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span {
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        cursor: pointer;
        }
        @media (max-width: 768px) {
            min-width: 70px;
        }
    }
    &:hover, &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`;

const SignOut = styled.div`
    cursor: pointer;
    position: absolute;
    top: 45px;
    background-color: white;
    /* width: 100px;  */
    border-radius: 0 0 5px 5px;
    transition-duration: 167ms;
    text-align: center;
    display: none;

`;

const User = styled(NavList)`
    cursor: pointer;
    a > img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    &:hover {
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const Premium = styled(User)`
    a {
        text-decoration: underline;
        color: #D4AF37;
        width: 100px;
        text-align: center;
        cursor: pointer;
        transition: transform .2s ease-in-out;
    }
    a:hover{ 
        color: black;
    }
`;



















export default Header