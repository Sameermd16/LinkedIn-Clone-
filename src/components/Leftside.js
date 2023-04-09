import styled from "styled-components";

const Leftside = (props) => {
    return (
        <Container>
            <ArtCard>card</ArtCard>
        </Container>
    )
}


const Container = styled.div`
    grid-area: Leftside;
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

export default Leftside;