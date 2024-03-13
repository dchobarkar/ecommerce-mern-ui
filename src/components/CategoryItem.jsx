import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: gray;
  background-color: white;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;