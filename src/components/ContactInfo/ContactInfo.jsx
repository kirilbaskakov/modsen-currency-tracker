import React from 'react';
import { Description, Text, Bold } from './styled';

const ContactInfo = () => {
  return (
    <>
      <Description>
        This project is my first test assignment as an intern at Modsen.
      </Description>
      <Text>
        <Bold>Email: </Bold>modsen_currency_tracker@gmail.com
      </Text>
      <Text>
        <Bold>Phone: </Bold>+375 44 000-00-00
      </Text>
      <Text>
        <Bold>Address: </Bold> Minsk, Kosmonavtov st. 1
      </Text>
    </>
  );
};

export default ContactInfo;
