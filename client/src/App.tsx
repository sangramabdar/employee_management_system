import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./common/components/Home";
import NotFound from "./common/components/NotFound";
import SignUp from "./modules/signup/components/SignUp";
import Login from "./modules/login/components/Login";
import DashBoard from "./modules/dashboard/component/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

// import {
//   Button,
//   Grid,
//   GridItem,
//   IconButton,
//   Input,
//   Modal,
//   ModalCloseButton,
//   ModalHeader,
//   Radio,
//   RadioGroup,
//   Stack,
//   ToastId,
//   useDisclosure,
//   useMediaQuery,
//   useToast,
// } from "@chakra-ui/react";
// import { useRef, useState } from "react";
// import { Box } from "@chakra-ui/react";

// function StackLayout() {
//   const [isLargerThan720] = useMediaQuery("(min-width: 768px)");

//   return (import {
//   Button,
//   Grid,
//   GridItem,
//   IconButton,
//   Input,
//   Modal,
//   ModalCloseButton,
//   ModalHeader,
//   Radio,
//   RadioGroup,
//   Stack,
//   ToastId,
//   useDisclosure,
//   useMediaQuery,
//   useToast,
// } from "@chakra-ui/react";
// import { useRef, useState } from "react";
// import { Box } from "@chakra-ui/react";

// function StackLayout() {
//   const [isLargerThan720] = useMediaQuery("(min-width: 768px)");

//   return (
//     <Stack
//       direction={isLargerThan720 ? "row" : "column"}
//       spacing="20px"
//       backgroundColor="red"
//       justify="center"
//       alignItems="center"
//     >
//       <Box>1</Box>
//       <Box>2</Box>
//       <Box>3</Box>
//       <Box>4</Box>
//     </Stack>
//   );
// }

// function Toast() {
//   const toast = useToast();
//   const toastRef = useRef<ToastId | null>();

//   const closeToast = () => {
//     if (!toastRef.current) return;
//     // console.log(toastRef.current);
//     // toast.close(toastRef.current);
//     toast.closeAll();
//   };

//   const createToast = () => {
//     if (toastRef.current) return;
//     console.log(toastRef.current);

//     toastRef.current = toast({
//       duration: 5000,
//       status: "loading",
//       description: "toast",
//       position: "bottom",
//       isClosable: true,
//       onCloseComplete: () => {
//         toastRef.current = null;
//       },
//     });
//   };

//   return (
//     <>
//       <Button onClick={createToast}>toast</Button>
//       <Button onClick={closeToast}>close</Button>
//     </>
//   );
// }

// function useDisclosure2() {
//   const [isOpen, setToggle] = useState(false);

//   const onOpen = () => {
//     setToggle(true);
//   };

//   const onClose = () => {
//     setToggle(false);
//   };

//   return {
//     isOpen,
//     onClose,
//     onOpen,
//   };
// }

// function ModalLayout() {
//   const { isOpen, onClose, onOpen } = useDisclosure2();
//   console.log(isOpen);

//   return (
//     <>
//       <Button onClick={onOpen}>open modal</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalHeader>22</ModalHeader>
//         <ModalCloseButton />
//       </Modal>
//     </>
//   );
// }

// function GridLayout() {
//   return (
//     <Grid
//       templateAreas={`"header header"
//                   "nav main"
//                   "nav main"
//                   "nav footer"
//                   `}
//       gridTemplateRows={"50px 100px 200px"}
//       gridTemplateColumns={"1fr"}
//       h="200px"
//       gap="1"
//       color="blackAlpha.700"
//       fontWeight="bold"
//     >
//       <GridItem pl="2" bg="orange.300" area={"header"}>
//         Header
//       </GridItem>
//       <GridItem pl="2" bg="pink.300" area={"nav"}>
//         Nav
//       </GridItem>
//       <GridItem pl="2" bg="green.300" area={"main"}>
//         Main
//       </GridItem>
//       <GridItem pl="2" bg="blue.300" area={"footer"}>
//         Footer
//       </GridItem>
//     </Grid>
//   );
// }

// const answers: any = {};

// function RadioExample({ no }: any) {
//   const [value, setValue] = useState("1");

//   const onChangeValue = e => {
//     console.log(e);
//     setValue(e);
//   };

//   const submitAnswer = () => {
//     answers[no] = {
//       question: "as",
//       answer: value,
//     };
//     console.log(answers);
//   };

//   return (
//     <>
//       <Box>{no} question</Box>
//       <RadioGroup onChange={onChangeValue} value={value}>
//         <Stack direction="row">
//           <Radio value="1">First</Radio>
//           <Radio value="2">Second</Radio>
//           <Radio value="3">Third</Radio>
//           <Radio value="4">Fourth</Radio>
//         </Stack>
//       </RadioGroup>
//       <Button onClick={submitAnswer}>submit answer</Button>
//     </>
//   );
// }

// function App() {

//   return (
//     <>
//       <RadioExample no={1} />
//       <RadioExample no={2} />
//       <RadioExample no={3} />
//       <RadioExample no={4} />
//       <RadioExample no={5} />
//       <RadioExample no={6} />
//       <RadioExample no={7} />
//       <RadioExample no={8} />
//     </>
//   );
// }

//     <Stack
//       direction={isLargerThan720 ? "row" : "column"}
//       spacing="20px"
//       backgroundColor="red"
//       justify="center"
//       alignItems="center"
//     >
//       <Box>1</Box>
//       <Box>2</Box>
//       <Box>3</Box>
//       <Box>4</Box>
//     </Stack>
//   );
// }

// function Toast() {
//   const toast = useToast();
//   const toastRef = useRef<ToastId | null>();

//   const closeToast = () => {
//     if (!toastRef.current) return;
//     // console.log(toastRef.current);
//     // toast.close(toastRef.current);
//     toast.closeAll();
//   };

//   const createToast = () => {
//     if (toastRef.current) return;
//     console.log(toastRef.current);

//     toastRef.current = toast({
//       duration: 5000,
//       status: "loading",
//       description: "toast",
//       position: "bottom",
//       isClosable: true,
//       onCloseComplete: () => {
//         toastRef.current = null;
//       },
//     });
//   };

//   return (
//     <>
//       <Button onClick={createToast}>toast</Button>
//       <Button onClick={closeToast}>close</Button>
//     </>
//   );
// }

// function useDisclosure2() {
//   const [isOpen, setToggle] = useState(false);

//   const onOpen = () => {
//     setToggle(true);
//   };

//   const onClose = () => {
//     setToggle(false);
//   };

//   return {
//     isOpen,
//     onClose,
//     onOpen,
//   };
// }

// function ModalLayout() {
//   const { isOpen, onClose, onOpen } = useDisclosure2();
//   console.log(isOpen);

//   return (
//     <>
//       <Button onClick={onOpen}>open modal</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalHeader>22</ModalHeader>
//         <ModalCloseButton />
//       </Modal>
//     </>
//   );
// }

// function GridLayout() {
//   return (
//     <Grid
//       templateAreas={`"header header"
//                   "nav main"
//                   "nav main"
//                   "nav footer"
//                   `}
//       gridTemplateRows={"50px 100px 200px"}
//       gridTemplateColumns={"1fr"}
//       h="200px"
//       gap="1"
//       color="blackAlpha.700"
//       fontWeight="bold"
//     >
//       <GridItem pl="2" bg="orange.300" area={"header"}>
//         Header
//       </GridItem>
//       <GridItem pl="2" bg="pink.300" area={"nav"}>
//         Nav
//       </GridItem>
//       <GridItem pl="2" bg="green.300" area={"main"}>
//         Main
//       </GridItem>
//       <GridItem pl="2" bg="blue.300" area={"footer"}>
//         Footer
//       </GridItem>
//     </Grid>
//   );
// }

// const answers: any = {};

// function RadioExample({ no }: any) {
//   const [value, setValue] = useState("1");

//   const onChangeValue = e => {
//     console.log(e);
//     setValue(e);
//   };

//   const submitAnswer = () => {
//     answers[no] = {
//       question: "as",
//       answer: value,
//     };
//     console.log(answers);
//   };

//   return (
//     <>
//       <Box>{no} question</Box>
//       <RadioGroup onChange={onChangeValue} value={value}>
//         <Stack direction="row">
//           <Radio value="1">First</Radio>
//           <Radio value="2">Second</Radio>
//           <Radio value="3">Third</Radio>
//           <Radio value="4">Fourth</Radio>
//         </Stack>
//       </RadioGroup>
//       <Button onClick={submitAnswer}>submit answer</Button>
//     </>
//   );
// }

// function App() {

//   return (
//     <>
//       <RadioExample no={1} />
//       <RadioExample no={2} />
//       <RadioExample no={3} />
//       <RadioExample no={4} />
//       <RadioExample no={5} />
//       <RadioExample no={6} />
//       <RadioExample no={7} />
//       <RadioExample no={8} />
//     </>
//   );
// }

// export default App;
