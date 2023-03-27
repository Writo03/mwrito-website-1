import { StyledContactDetails } from '../styles/ContactUs/ContactDetails.styled';
import { FaHashtag, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
export const ContactDetails = () => {
  return (
    <StyledContactDetails>
      <h3>
        <FaEnvelope />
        founder@writo.live
      </h3>
      {/* <h3>
        <FaPhoneAlt />
        +91 86079 69369
      </h3> */}
      <h3>
        <FaHashtag />
        Rewa, Madhyapradesh, India, 486005
      </h3>
    </StyledContactDetails>
  );
};
