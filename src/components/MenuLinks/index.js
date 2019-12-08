import React from "react"

import links from "./content"
import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksLink>
      {links.map((link, i) => (
        <S.MenuLinksItems key={i}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItems>
      ))}
    </S.MenuLinksLink>
  </S.MenuLinksWrapper>
)

export default MenuLinks
