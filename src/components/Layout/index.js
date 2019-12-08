import PropTypes from "prop-types"
import React from "react"

import Profile from "../Profile/"

import GlobalStyle from "../../styles/global"
import * as S from "./styled.js"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <Profile />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
