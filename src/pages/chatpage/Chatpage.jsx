import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { ContainerDiv } from '../../Components/Container/Container.styled'
import { ChatBoxContainer, ChatBoxDiv, ChatFormContainer, ChatFormInput, ChatFormUploadBtn, ChatMessageContainer, InputContainer, SendBtn, StyledInput } from './Chatpage.styled'
import Message from './Message/Message'
import { GoPaperclip } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material'
import { ThemeContext } from 'styled-components'



const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

const Chatpage = () => {

	const [loading, setLoading] = useState(false);
	const scrollContainer = useRef(null);
	const [messages, setMessages] = useState([]);
	const [llmmsg, setllmmsg] = useState(null);
	const baseURL = "http://127.0.0.1:5000";
	const inputRef = useRef(null);
	const [imgFile, setImgFile] = useState(null);
	const [open, setOpen] = useState(false);
	const themeContext = useContext(ThemeContext);

	useEffect(() => {
		scrollContainer?.current.scrollTo({ 'top': scrollContainer?.current.scrollHeight })
		console.log('msg change', messages)
	}, [messages])

	const handleSubmit = (ev) => {
		ev.preventDefault();

		let msg = ev.target.message.value;
		let data = {
			role: "user",
			content: msg
		}

		setMessages((prev) => [...prev, data]);
		restPost("testuser", msg)

		console.log(inputRef.current.value)
		inputRef.current.value = ""

		// inputRef?.current.value = "";
	}

	const handleDialog = (val) => {

		setOpen(val)

	}

	// Function to handle file uploads and generate a URL for audio preview
	const handleFileUpload = (e) => {
		const file = e.target.files ? e.target.files[0] : null;
		const url = file ? URL.createObjectURL(file) : null;

		setImgFile({
			file, url
		})

		e.target.value = null;

	};


	const restPost = async (userId, msg) => {
		const formdata = new FormData();
		formdata.append('content', msg);
		formdata.append('userId', userId);

		console.log(imgFile)
		if (imgFile && imgFile.url) {
			console.log('has image')
			formdata.append('attachment', imgFile.file)
		}
		const data = await fetch(`${baseURL}/getchat`, {
			method: 'post',
			body: formdata
		})

		const jsonData = await data.json();

		setMessages((prev) => {
			const newMessages = [...prev];  // Create a copy of the existing messages

			if (imgFile) {
				// Add the image file message
				newMessages.push({ role: "user", content: null, imgFile });
				setImgFile(null);  // Reset the image after appending
			}

			// Append the received message
			newMessages.push(jsonData);

			return newMessages;  // Update the state with the new messages
		});

	}

	const formatBytes = (bytes, decimals = 2) => {
		if (!+bytes) return '0 Bytes'

		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

		const i = Math.floor(Math.log(bytes) / Math.log(k))

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
	}

	useEffect(() => {
		// console.log('file change', imgFile)
		if (imgFile != null)
			handleDialog(true)
		else
			handleDialog(false)
	}, [imgFile])

	return (
		<>
			<ContainerDiv>
				<Navbar />
				<ChatBoxContainer>
					<ChatBoxDiv>
						<ChatMessageContainer
							ref={scrollContainer}
						>
							{messages.map((message, index) => (<Message key={index} msgData={message} />))}


						</ChatMessageContainer>

					</ChatBoxDiv>
					<InputContainer>
						<ChatFormContainer
							onSubmit={handleSubmit}
						>
							<ChatFormUploadBtn>

								<Button
									component="label"
									role={undefined}
									variant="contained"
									tabIndex={-1}
									startIcon={<GoPaperclip />}
									sx={{
										backgroundColor: 'transparent',
										outline: 'none',
										boxShadow: 'none',
										'&::hover': 'none'
									}}
								>
									<VisuallyHiddenInput
										type="file"
										accept="image/*"

										onChange={(e) => handleFileUpload(e)}

									/>
								</Button>

							</ChatFormUploadBtn>
							<ChatFormInput>
								<StyledInput
									ref={inputRef}
									name="message"
									autoComplete="off"
									placeholder='Enter prompt or upload images'
								/>
							</ChatFormInput>
							<SendBtn type="submit">
								<BsSend />
							</SendBtn>
						</ChatFormContainer>
					</InputContainer>

				</ChatBoxContainer>
			</ContainerDiv>


			<React.Fragment>


				<Dialog
					maxWidth={"md"}
					fullWidth={true}
					open={open}
					onClose={() => handleDialog(false)}
					PaperProps={{
						style: {
							backgroundColor: themeContext.tertiary,
							color: themeContext.text,
						}
					}}
				>
					<>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifContet: 'center',
								// alignItems: 'center'
							}}
						>
							{imgFile && (
								<>
									<DialogTitle>Selected Image File</DialogTitle>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											justifContet: 'center',
											alignItems: 'center'
										}}
									>
										<img

											src={imgFile.url}
											style={{
												objectFit: 'cover',
												maxWidth: '50%',
												width: '100%',
												height: 'auto'
											}}
										/>
									</Box>
									<Box

									>
										<DialogContent>
											<DialogContentText color={themeContext?.text}>{`File name: ${imgFile.file.name}`}</DialogContentText>
											<DialogContentText color={themeContext?.text}>{`File Size: ${imgFile.file.size}`}</DialogContentText>
											<DialogContentText color={themeContext?.text}>{`File Last Updated On: ${new Date(imgFile.file.lastModified).toDateString()}`}</DialogContentText>

										</DialogContent>
									</Box>
									<DialogActions>
										<Button onClick={() => handleDialog(false)}>Close</Button>
										<Button
											onClick={() => restPost("testuser", null)}
											variant="contained"
										>
											Upload Image
										</Button>
									</DialogActions>
								</>
							)}
						</Box>

					</>

				</Dialog>
			</React.Fragment>
		</>

	)


}

export default Chatpage


