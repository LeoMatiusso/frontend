import styled from 'styled-components';

const PageArea = styled.div`

form{
    background-color: #fff;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0px 0px 6px #ccc;

    .area{
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;

        .area--title{
            max-width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }
        
        .area--input{
            flex: 1;

            input {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #ddd;
                border-radius: 8px;
                outline: 0;
                transition: all ease .2s;

                &:focus {
                    border: 1px solid #333;
                }


            }

            button{
                background-color: #0089ff;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: white;
                font-size: 15px;
                cursor: pointer;

                &:hover{
                    background-color: #006fce;
                }
            }
        }
    }
}

`;

export default PageArea;