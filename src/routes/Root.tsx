import styled from 'styled-components';
import { IStyle } from '../components/interfaces';

const NavStyled = styled.nav<IStyle>`
    background: rgb(218, 231, 247);

    ul {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row;
        margin: 0;
        li {
            margin: 8px;
            list-style: none;
            a {
                text-decoration: none;
            }
            :hover {
                box-shadow: 1px 1px 4px 0px red;
                border-radius: 5px;
            }
        }
    }
`;
export default function Root() {
    return (
        <NavStyled>
            <ul>
                <li>
                    <a href='/timer'>Timer</a>
                </li>
                <li>
                    <a href='/countdown'>Countdown</a>
                </li>
                <li>
                    <a href='/todo'>ToDo-list</a>
                </li>
                <li>
                    <a href='/productList'>Product-list</a>
                </li>
            </ul>
        </NavStyled>
    );
}
