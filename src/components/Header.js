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
    padding: 0 24px;
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
`;



export default Header