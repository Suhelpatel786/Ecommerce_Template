import { Box, Slide, useMediaQuery, useTheme } from "@mui/material";
import { MessageText, PramotionContainer } from "../../styles/pramotions";
import { useEffect, useState } from "react";

const messages = [
  "Shop Stylish Bags at Unbeatable Prices! Don't Miss Out!",
  "Carry Style Everywhere! Explore Bags with Exclusive Discounts!",
  "Bag Bliss Awaits! Fashionable Carriers, Limited-Time Offers!",
  "Chic Bags, Hot Deals! Elevate Your Style - Irresistible Prices.",
  "Unwrap Style: Exclusive Bags, Limited-Time Discounts!",
  "Bag it Up! Trendy Carriers, Unbeatable Prices - Shop Now!",
  "Style that Speaks: Grab Bags at Special Discounts!",
  "Carry On in Style! Exclusive Bag Deals - Limited Stock!",
  "Bag the Savings! Fashionable Picks, Irresistible Prices!",
  "Slay with Your Satchel! Exclusive Discounts - Act Fast!",
];

const messagesForMobile = [
  "Today only: Enjoy 20% off!",
  "20% off today's buys!",
  "Exclusive: 20% off everything!",
  "Limited time: 20% discount!",
  "Get 20% off today's shopping!",
  "Today's treat: 20% off!",
  "Flash sale: 20% off!",
  "20% off - today's special!",
  "Unlock 20% off today!",
  "Grab 20% off today's purchase!",
];

export default function Promotions() {
  const [messagesIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PramotionContainer>
      <Slide
        direction={show ? "left" : "right"}
        timeout={{
          enter: 500,
          exit: 150,
        }}
        in={show}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>
            {matches
              ? messagesForMobile[messagesIndex]
              : messages[messagesIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PramotionContainer>
  );
}
