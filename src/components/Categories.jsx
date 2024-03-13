import styled from "styled-components";

import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import { categories } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
