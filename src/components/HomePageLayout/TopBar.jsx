import styled from "styled-components";
import { useUser } from "contexts/UserContext";
import logo from "assets/logotype.png";

export function TopBar() {
    const [user] = useUser();

    return (
        <Wrapper>
            <img src={logo} alt="TrackIt" />
            <Avatar src={user.image} alt="Profile" />
        </Wrapper>
    );
}

const Wrapper = styled.header`
    padding: 0.7em 1em;
    background: #126ba5;
    box-shadow: 0px 4px 4px 0px #00000026;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    left: 0;
`;

const Avatar = styled.img`
    width: 51px;
    height: 51px;
    clip-path: circle(50%);
`;
