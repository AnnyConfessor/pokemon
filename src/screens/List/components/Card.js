import React from "react";
import styled from "styled-components";

import Image from "./Image";
import SymbolType from "./SymbolType";
import SpecialAbilities from "./SpecialAbilities";
import Status from "./Status";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  ${(props) => props.active && "background: #EEE;"}
`;

const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  border-radius: 20px 20px 20px 20px;
  background: linear-gradient(
    109.26deg,
    rgba(133, 168, 251, 0.7) 2.03%,
    rgba(76, 124, 238, 0.7) 50.26%,
    rgba(21, 82, 225, 0.7) 96.52%
  );
  box-shadow: 0px 30px 40px -15px #1552e1;
`;

const ContainerImage = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0 20px 20px 0;
  margin: 4rem 0;
  padding: 1rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

const Text = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  padding-bottom: 0.5rem;
`;

const Detail = styled(Text)`
  font-size: 1rem;
  color: #eee;
`;

const ContainerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDetails = styled.div``

const Card = ({ index, data }) => {

  return (
    <Wrapper active={index % 2 === 0} alt="container-generalcard">
      <ContainerInfo>
        <ContainerImage>
          <Image image={data.sprites.front_default} />
          <SymbolType />
        </ContainerImage>
        <ContainerInfos>
          <Text>{data.name}</Text>
          <Detail>Weight: {data.weight} lb</Detail>
          <Detail>Height: {data.height} m</Detail>
          <SpecialAbilities data={data.abilities} />
        </ContainerInfos>
      </ContainerInfo>
      <ContainerStatus>
        {data.stats.map(item => (
          <Status name={item.stat.name} value={item.base_stat} />
        ))}
      </ContainerStatus>
      <ContainerDetails>
        <Button/>
      </ContainerDetails>
    </Wrapper>
  );
};

export default Card;
