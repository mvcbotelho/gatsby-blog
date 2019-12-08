import React from "react"

import * as S from "./styled"

import Icons from "./Icons"
import links from "./content"

const SocialLinks = () => (
  <S.SocialLinkWrapper>
    <S.SocialLinkList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        console.log("Link", link)
        console.log("Icon", Icon)

        return (
          <S.SocialLinkItem key={i}>
            <S.SocialLinkLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinkLink>
          </S.SocialLinkItem>
        )
      })}
    </S.SocialLinkList>
  </S.SocialLinkWrapper>
)

export default SocialLinks
