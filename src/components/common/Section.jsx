import { hex2rgba, media, theme } from "../../styles";

import { ArrowRight } from "styled-icons/feather";
import Fade from "react-reveal";
import { HashLink } from "react-router-hash-link";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Title = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
`;

const StyledLink = styled(HashLink)`
  color: ${colors.accent} !important;
  font-size: ${fontSizes.xs};
  ${media.md`font-size: ${fontSizes.sm}`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;

  &:before {
    background-color: ${colors.accent};
    bottom: -0.45rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

const IconContainer = styled.span`
  color: inherit !important;
  margin-left: 0.6rem;

  svg {
    stroke-width: 2px;
  }
`;

const ImageWrapper = styled.div.attrs({
  className:
    "col-12 col-md-6 flex-column justify-content-center align-items-start",
})`
  display: ${(props) => (!props.top ? "none" : "flex")} !important;
  ${media.md`display: ${(props) =>
    props.ltr ^ props.top ? "flex" : "none"} !important;`};
`;

const StyledSection = styled.div.attrs({
  className: "container",
})`
  margin-bottom: 6rem;

  .img-fluid {
    margin-bottom: 3rem;
  }
`;

const StyledImage = styled.img.attrs({
  className: "img-fluid",
})`
  border-radius: ${theme.borderRadius};
  box-shadow: 1rem 0 3rem ${hex2rgba(colors.bg_alt, 0.2)};
`;

const Image = (props) => (
  <ImageWrapper ltr={props.ltr} top={props.top}>
    <Fade bottom>
      <StyledImage
        src={props.data.src}
        alt={props.data.alt}
        className="img-fluid"
      />
    </Fade>
  </ImageWrapper>
);

const Text = (props) => (
  <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items start">
    <Fade bottom>
      <Title>{props.data.title}</Title>
      <Content>{props.data.content}</Content>
      {props.data.link && (
        <StyledLink to={props.data.link.href}>
          {props.data.link.caption}
          <IconContainer>
            <ArrowRight size="20" />
          </IconContainer>
        </StyledLink>
      )}
    </Fade>
  </div>
);

export const Section = (props) => (
  <StyledSection>
    <div className="row">
      <Image data={props.data.image} ltr={props.ltr} top={true} />
      <Text data={props.data.text} ltr={props.ltr} />
      {props.ltr && <Image data={props.data.image} ltr={props.ltr} />}
    </div>
  </StyledSection>
);
