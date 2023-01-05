

//problemas com a img de tem não tem hífen 
import React, {useState} from 'react';

import {
	CardContent, Card, Box, 
	Typography, Paper, InputBase, 
	Divider, IconButton, Button, 
	Link, Dialog, DialogTitle, DialogContent,
	Alert, Snackbar, Stack
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import {Search} from '@mui/icons-material';
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import {useLocation} from "react-router-dom";

import Fixed from './components/Fixed.js' ;
import Header from './components/Header.js' ;
import correct from './components/assets/iconCorrect.svg';
import incorrect from './components/assets/iconIncorrect.svg';
import correctLine from './components/assets/iconCorrectLine.svg';
import incorrectLine from './components/assets/iconIncorrectLine.svg';

import './routes.css';

const ButtonCustom = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 14,
	height: 35,
	width:75,
	padding: '6px 12px',
	borderRadius: 15,
	lineHeight: 1.5,
	backgroundColor: 'gray',
	border: '1px solid transparent',
	color: 'white',
	marginTop: 40,


	'&:hover': {
	  backgroundColor: 'gray',
	  color: 'white',
	  border: '0px solid transparent',
	  boxShadow: '1px 1px 9px 1px rgb(198, 196, 196)',
	},
	'&:active': {
	  boxShadow: 'none',
	  backgroundColor: 'gray',
	  color: 'white',
	  border: '0px solid transparent',
	},
	'&:focus': {
		boxShadow: '1px 1px 9px 1px rgb(198, 196, 196)',
	},
});

const DialogCustom = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
	  padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
	  padding: theme.spacing(1),
	},
}));
  
function DialogTitleCustom(props) {
	const { children, onClose, ...other } = props;
  
	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
			  			position: 'absolute',
			  			right: 8,
			  			top: 8,
			  			color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
		  		</IconButton>
			) : null}
	  	</DialogTitle>
	);
}
  
DialogTitleCustom.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};
 
function Answer() {
	const navigate = useNavigate();

	const location = useLocation();
	const answer = location?.state?.word
	const answerTwo = location?.state?.wordes


	const [text, setText] = useState(" ");
	const [inputCss,  setinputCss]  = useState('Inpute');
	const [open, setOpen] = useState(false);  
	const [answerHome, setAnswer] = useState(answer);
	const [openTwo, setOpenTwo] = useState(false);

 
  
	function backNavigate() {
		navigate('/')
	}


	async function getAnswer() {
		// const response = await axios.get(`http://localhost:5000/datas?word2=${answerHome}`);

		const response = await axios.get(`https://hifenizei-backend.onrender.com/datas?word2=${answerHome}`);
		const answer2 = response.data
		setText(answer2.word2)
		setOpenTwo(true)		
	}
	
	// async function getHifenizei() {

	// 	const response = await axios.get(`http://localhost:5000/data?word=${input}`);
	// 	const answer = response.data

	// 	if (answer.word === 'error') {
	// 		setOpen(true)
	// 	} else {
	// 		setAnswer(answer.word)

	// 	}



		
		
	// };
	

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpenTwo(false);
	};

	const handleCloset = () => {
		setOpen(false);
	};
	const [input,  setInput]  = useState('');

	var hintArray = ["micro-ondas", "antirracismo", 'má-fé'];
	const handleInputChange = (event) => {
		setInput(event.target.value)
	};
	const [image, setImage] = useState(correct);
	const [imageLine, setImageLine] = useState(correctLine); 
 

	function onReload() {
		let x = answerHome.includes('-')
		console.log(answerHome)

		if (x === false) {
			console.log(false)
			setImage(incorrect)
			setImageLine(incorrectLine)

			
		} else {
			setImage(correct)
			setImageLine(correctLine)

			console.log(true)


		}

	}

	function myFunction(example) {
		let x = example.includes('-')
		console.log(example)

		if (x === false) {
			console.log(false)
			setImage(incorrect)
			setImageLine(incorrectLine)

			
			
		} else {
			setImage(correct)
			setImageLine(correctLine)

			console.log(true)


		}

	}

	async function getHifenizei() {
		// const response = await axios.get(`http://localhost:5000/data?word=${input}`);

		const response = await axios.get(`https://hifenizei-backend.onrender.com/data?word=${input}`);
		const answer = response.data

		if (answer.word === 'error') {
			setOpen(true)
		} else {
			setAnswer(answer.word)
			myFunction(answer.word)

		}
		// let w = answerHome.includes('-')

		// if (w === false) {
		// 	setImage(incorrect)
			
		// } else {
		// 	setImage(correct)


		// }


		
		
	};
	return (
		<div>
    		<header onLoad={onReload} className='Header'>

			<Header></Header>

			<Box className='Body'>
				<div className='Contente '>
				<Card elevation={0}>
				<CardContent className='Card '>

					<Paper 
						className={inputCss}
						elevation={0} 
						component="form"
						sx={{ 
	  						p: '0px 2px',
	  						backgroundColor:'#ffffff' , 
	  						borderRadius: '30px', 
	  						display: 'flex',
	  						width: 240}}>
						<Hint options={hintArray} allowTabFill>
        					<input
          					className="input-with-hint-two"
          					value={input}
		  					placeholder='digite outra palavra...'
          					onChange= {handleInputChange}//{(e) => setText(e.target.value)}
        					/>
      					</Hint>

						<Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
						<IconButton type="button" sx={{ p: '10px' }} onClick={getHifenizei} aria-label="search" >
	  						<Search />
						</IconButton>
					</Paper>

      			</CardContent>
	  			</Card>
				</div>
				<div className='space'></div>
				<div className='Content'>
				<Card elevation={0}>
				<CardContent className='Card'>
       				<Typography sx={{ fontSize: 14, paddingTop:2 }} color="text.secondary" gutterBottom>
          				<i>a palavra correta é</i> 
        			</Typography>
        			<Typography  sx={{paddingTop:3, fontSize: 28}} variant="h5" component="div">
          				{answerHome}
        			</Typography>
					<Stack direction={'row'}>
					<img className='IconCorrect' src={imageLine} alt='correct'></img>
					


					</Stack>
        			<Typography  sx={{fontSize: 14}} variant="body2" color="text.secondary">
						<p className='Center'>Se você precisa de uma resposta mais<br/>
						detalhada, clique aqui e <button className='ddd'><Link sx={{color:'gray'}} className='ddd' 
						onClick={getAnswer} underline='none'><strong>saiba mais!</strong></Link></button></p>
        			</Typography>
					<ButtonCustom className='bob' onClick={backNavigate} >voltar</ButtonCustom>
      			</CardContent>
	  			</Card>
				</div>
				
				<DialogCustom
        			onClose={handleClose}
        			aria-labelledby="customized-dialog-title"
        			open={openTwo}
      			>
        		<DialogTitleCustom id="customized-dialog-title" onClose={handleClose}>
          			{answerHome}
        		</DialogTitleCustom>
        		<DialogContent dividers>
          		<Typography gutterBottom>
				<Stack direction={'row'}>

				  <img className='IconCorrectTwo' src={image} alt='correct'></img>
				  </Stack>
				  <Stack direction={'row'}>

					{text}
				</Stack>
          		</Typography>
        		</DialogContent>
      			</DialogCustom>
	  
	
			</Box>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleCloset}>
        			<Alert onClose={handleCloset} severity="error" sx={{ width: '100%' }}>
          				Tente uma palavra válida!
        			</Alert>
			</Snackbar>
			<Fixed></Fixed>

			</header>		
		</div>
	)
}

export default Answer;
