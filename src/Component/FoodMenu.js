import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FoodMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  margin-top: 4rem;
`;
const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  border: 1px solid #222;

  &:hover {
    border-color: red;
  }

  &:nth-child(2n):hover {
    border-color: blue;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:nth-child(1) {
    ${MenuItem}:nth-child(1) {
      width: 30%;
      height: 55rem;
    }
    ${MenuItem}:nth-child(2) {
      width: 65%;
      height: 55rem;
    }
  }

  &:nth-child(2) {
    ${MenuItem}:nth-child(1) {
      width: 65%;
      height: 55rem;
    }
    ${MenuItem}:nth-child(2) {
      width: 30%;
      height: 55rem;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto;
  transition: border-color 0.3s ease;

  ${MenuItem}:hover & {
    border-color: red;
  }

  ${MenuItem}:nth-child(2n):hover & {
    border-color: blue;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MenuItem}:hover & {
    opacity: 1;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
  }
`;

export default function FoodMenu() {
  return (
    <FoodMenuContainer>
      <Row>
        <MenuItem>
          <ImageWrapper>
            <Image src="/FoodMenu/img1.png" alt="Food 1" />
            <HoverOverlay>
              <Link href="#">
                바로가기
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </HoverOverlay>
          </ImageWrapper>
        </MenuItem>
        <MenuItem>
          <ImageWrapper>
            <Image src="/FoodMenu/img2.png" alt="Food 2" />
            <HoverOverlay>
              <Link href="#">
                바로가기
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </HoverOverlay>
          </ImageWrapper>
        </MenuItem>
      </Row>
      <Row>
        <MenuItem>
          <ImageWrapper>
            <Image src="/FoodMenu/img3.png" alt="Food 3" />
            <HoverOverlay>
              <Link href="#">
                바로가기
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </HoverOverlay>
          </ImageWrapper>
        </MenuItem>
        <MenuItem>
          <ImageWrapper>
            <Image src="/FoodMenu/img4.png" alt="Food 4" />
            <HoverOverlay>
              <Link href="#">
                바로가기
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </HoverOverlay>
          </ImageWrapper>
        </MenuItem>
      </Row>
    </FoodMenuContainer>
  );
}
