import React from "react"

import * as S from "./styled"

//Icons
import { Home } from "styled-icons/boxicons-solid/Home"
import { Search } from "styled-icons/boxicons-regular/Search"
import { Lightbulb as Light } from "styled-icons/remix-fill/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { UpArrowCircle as Arrow } from "styled-icons/boxicons-solid/UpArrowCircle"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para a home">
        <S.MenuBarItems>
          <Home />
        </S.MenuBarItems>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItems>
          <Search />
        </S.MenuBarItems>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItems title="Mudar tema">
        <Light />
      </S.MenuBarItems>
      <S.MenuBarItems title="Mudar visualização">
        <Grid />
      </S.MenuBarItems>
      <S.MenuBarItems title="Voltar ao topo">
        <Arrow />
      </S.MenuBarItems>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
