import React, { useContext } from "react";
import { 
  BoxContainer,
  Text,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function ProfileView(props) {
  const { switchToPosts } = useContext(AccountContext);

  return (
    <BoxContainer>
      
        <Text>Contact Number: 9998887776</Text>
        <Text>Email id: johndoe@email.com</Text>
        <Text>City: Bangalore</Text>
        <Text>State: Karnataka</Text>
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" href="#" onClick={switchToPosts}>View Posts</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
