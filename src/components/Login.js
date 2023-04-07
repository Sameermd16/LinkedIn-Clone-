import styled from 'styled-components'


const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg'/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg'/>
                </Hero>
                <Form>
                    <Google>
                    <img src='/images/google.svg' alt=''/>
                    Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}


export default Login;


const Container = styled.div`
    /* border: 1px solid black; */
    padding: 0;
`;

const Nav =styled.div`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px){
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 10px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    padding: 10px 20px;
    border-radius: 24px;
    cursor: pointer;
    transition-duration: 167ms;
    font-weight: 600;
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
    }
`;

const Section = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-content: start;
    align-items: center;
    min-height: 700px;
    padding-bottom: 140px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    margin: auto;
    align-items: center;

    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }

`;

const Hero = styled.div`
    /* border: 1px solid orange; */
    width: 100%;
    h1 {
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        /* z-index: -1; */
        width: 700px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 400px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    height: 56px;
    border-radius: 28px;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 170px;
    font-size: 20px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) 
        inset 0 0 0 1px rgb(0 0 0 / 0);
    cursor: pointer;
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, .75);
    }
`;