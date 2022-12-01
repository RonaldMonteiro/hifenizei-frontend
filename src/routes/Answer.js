import React, {useState} from 'react';

import {
	CardContent, Card, Box, 
	Typography, Paper, InputBase, 
	Divider, IconButton, Button, 
	Link, Dialog, DialogTitle, DialogContent,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import {Search} from '@mui/icons-material';
import {useNavigate } from "react-router-dom";
import axios from "axios";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import {useLocation} from "react-router-dom";

import Footer from './components/Footer.js' ;
import Header from './components/Header.js' ;
import correct from './components/assets/iconCorrect.svg';

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
	borderColor: 'gray',
	border: '1px solid',
	color: 'white',
	marginTop: 40,


	'&:hover': {
	  backgroundColor: 'gray',
	  borderColor: 'gray',
	  color: 'white',
	  border: '0px solid',
	  boxShadow: '1px 1px 9px 1px rgb(198, 196, 196)',
	},
	'&:active': {
	  boxShadow: 'none',
	  backgroundColor: 'gray',
	  color: 'white',
	  border: '0px solid',
	  borderColor: 'gray',
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

	const location = useLocation();
	const answer = location?.state?.word

	const [open, setOpen] = useState(false);
	const [text, setText] = useState(" ");

	async function getAnswer() {

		const response = await axios.get(`http://localhost:5000/datas?word2=${answer}`);
		const answer2 = response.data
		setText(answer2.word2)
		setOpen(true)		
	}
	
	

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<div>
    		<header className='Header'>

			<Header></Header>

			<Box className='Body'>
				<div className='Contente '>
				<Card elevation={0} sx={{ minWidth: 300, minHeight: 50, borderRadius:15 }}>
				<CardContent className='Card '>

					<Paper 
						className='Inpute'
						elevation={0} 
						component="form"
						sx={{ 
	  						p: '2px 8px',
	  						backgroundColor:'#ffffff' , 
	  						borderRadius: '30px', 
	  						display: 'flex',
	  						width: 240}}>
						<InputBase
	  				 		sx={{ ml: 2, flex: 1 }}
					 		type='text'
	  				 		placeholder="digite outra palavra..."
	  						inputProps={{ 'aria-label': 'search google maps' }}
						/>
						<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
						<IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
	  						<Search />
						</IconButton>
					</Paper>
      			</CardContent>
	  			</Card>
				</div>
				<div className='space'></div>
				<div className='Content'>
				<Card elevation={0} sx={{ minWidth: 300, minHeight: 300, borderRadius:15 }}>
				<CardContent className='Card'>
       				<Typography sx={{ fontSize: 14, paddingTop:4 }} color="text.secondary" gutterBottom>
          				<i>a palavra correta é</i> 
        			</Typography>
        			<Typography  sx={{paddingTop:3, fontSize: 28}} variant="h5" component="div">
          				{answer}
        			</Typography>
					<img className='IconCorrect' src={correct} alt='correct'></img>
        			<Typography    sx={{fontSize: 14}} variant="body2" color="text.secondary">
						<p className='Center'>Se você precisa de uma resposta mais<br/>
						detalhada, clique aqui e <button className='ddd'><Link sx={{color:'gray'}} className='ddd' 
						onClick={getAnswer} underline='none'><strong>saiba mais!</strong></Link></button></p>
        			</Typography>
					<ButtonCustom className='bob'>voltar</ButtonCustom>
      			</CardContent>
	  			</Card>
				</div>
				
				<DialogCustom
        			onClose={handleClose}
        			aria-labelledby="customized-dialog-title"
        			open={open}
      			>
        		<DialogTitleCustom id="customized-dialog-title" onClose={handleClose}>
          			{answer || 'failed'}
        		</DialogTitleCustom>
        		<DialogContent dividers>
				<img className='IconCorrect' src={correct} alt='correct'></img>
          		<Typography gutterBottom>
					{text}

          		</Typography>
        		</DialogContent>
      			</DialogCustom>
	  
	
			</Box>

			<Footer></Footer>

			</header>		
		</div>
	)
}

export default Answer;
