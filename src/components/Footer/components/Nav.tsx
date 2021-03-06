import React from 'react'
import {
  Row,
  Col
} from 'antd';
import styled from 'styled-components'
import {contractAddresses} from '../../../sushi/lib/constants';
import {getEthChainInfo} from "../../../utils/getEthChainInfo";

const {
    ethscanType,
    chainId
} = getEthChainInfo();

const contractAddressesTemp = contractAddresses as {[index: string]:any};

const Nav: React.FC = () => {
    return (
    <StyledRow gutter={16} justify="space-around">
      <Col sm={4} xs={8}>
        <StyledLink
          target="_blank"
          href={`https://${ethscanType}etherscan.io/address/${contractAddressesTemp.sushi[chainId]}#code`}
        >
          Sashimi Contract
        </StyledLink>
      </Col>
      <Col sm={4} xs={8}>
        <StyledLink
          target="_blank"
          href={`https://${ethscanType}etherscan.io/address/${contractAddressesTemp.masterChef[chainId]}#code`}
        >
          MasterChef Contract
        </StyledLink>
      </Col>
      <Col sm={4} xs={8}>
        <StyledLink target="_blank" href="https://discord.gg/zTdmUkb">
          Discord
        </StyledLink>
      </Col>
      <Col sm={4} xs={8}>
        <StyledLink target="_blank" href="https://t.me/joinchat/KABj-Bz6CVzyi23HK2rjzA">
          Telegram
        </StyledLink>
      </Col>
      <Col sm={4} xs={8}>
        <StyledLink target="_blank" href="https://twitter.com/SASHIMISASHIMI5">
          Twitter
        </StyledLink>
      </Col>
      <Col sm={4} xs={8}>
        <StyledLink target="_blank" href="https://github.com/SashimiProject/sashimiswap">
          Github
        </StyledLink>
      </Col>
    </StyledRow>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
`

const StyledRow = styled(Row)`
  text-align: center;
  @media (min-width: 576px) {
    min-width: 80%;
  }
`

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[200]};
  }
`

export default Nav
