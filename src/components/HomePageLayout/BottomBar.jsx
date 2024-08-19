import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

export function BottomBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Wrapper>
            <Button $current={pathname === "/habitos"} onClick={() => navigate("/habitos")}>
                <CalendarMonthIcon />
                Hábitos
            </Button>
            <Button $current={pathname === "/hoje"} onClick={() => navigate("/hoje")}>
                <CalendarCheckmarkIcon />
                Hoje
            </Button>
        </Wrapper>
    )
}

function CalendarMonthIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z" />
        </svg>
    );
}

function CalendarCheckmarkIcon() {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_35303_137)">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 9.53C12.71 9.24 12.23 9.24 11.94 9.53L7.59 13.88L6 12.29C5.71 12 5.23 12 4.94 12.29C4.65 12.58 4.65 13.06 4.94 13.35L6.88 15.29C7.27 15.68 7.9 15.68 8.29 15.29L12.99 10.59C13.29 10.3 13.29 9.82 13 9.53ZM16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18Z" />
            </g>
            <defs>
                <clipPath id="clip0_35303_137">
                    <rect width="18" height="20" />
                </clipPath>
            </defs>
        </svg>
    );
}

const Wrapper = styled.div`
    display: flex;
    position: sticky;
    bottom: 0;
    left: 0;
`;

const Button = styled.button`
    padding: 1em;
    border: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 0.25em;

    font-family: 18px;

    background: ${({ $current }) => $current ? "#52b6ff" : "white"};
    color: ${({ $current }) => $current ? "white" : "#d4d4d4"};

    svg {
        fill: ${({ $current }) => $current ? "white" : "#d4d4d4"};
    }
`;
