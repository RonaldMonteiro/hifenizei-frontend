import React, { useState } from 'react';
import {IconButton, Divider, Box, Paper, Stack, TextField, Snackbar} from '@mui/material';
import {Search} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';

import { Hint } from "react-autocomplete-hint";
import {useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom";

import logo1 from './components/assets/hifeniz.svg'
import text from './components/assets/text.svg'
import ei from './components/assets/ei.svg'


import Footer from './components/Footer.js' ;
import axios from "axios";
import './routes.css';
  
function Home(props) {

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;}
	);

	const [open, setOpen] = useState(false);  
	const [input,  setInput]  = useState('');
	const [texte, setText] = useState("");
	const [inputCss,  setinputCss]  = useState('Input');

	const navigate = useNavigate();
	

	const handleInputChange = (event) => {
		setInput(event.target.value)
	};
	
	async function getAnswer() {

		const response = await axios.get(`http://localhost:5000/data?word=${input}`);
		const answer = response.data
		

		if (answer.word === 'error') {
			navigate("/")
			setinputCss('InputError')
			setOpen(true)
		} else {
			navigate("/answer", {state: answer})
		}



		
		
	};
	var hintArray = ["micro-ondas", "antirracismo", 'má-fé'];

  	const handClick = () => {
		if (texte === 'error') {
			setOpen(true);

		}
  	};

  	const handleClose = (event, reason) => {
    	if (reason === 'clickaway') {
     	 return;
    	} setOpen(false);
 	};

	return (
		<div>
    		<header className='Header'>

			<Box className='Head2'>
			</Box>

			<Box className='Body'>
				<div className='Image'>
					<Stack direction={'row'}>
						<img className='Image1' src={logo1} alt='logo'></img>
						<div className='circulo'></div>
						<img className='Image3' src={ei} alt='logo'></img>
					</Stack>
						<img className='ImageText' src={text} alt='logo'></img>
				</div>

				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        			<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          				Tente uma palavra válida!
        			</Alert>
				</Snackbar>

				<Paper 
					className={inputCss}
					elevation={0} 
					component="form"
					sx={{ 
	  					p: '2px 8px',
	  					paddingLeft:'15px', 
	  					marginBottom:'75px', 
	  					borderRadius: '30px', 
	  					display: 'flex', 
	  					alignItems: 'center',
						backgroundColor: '#f4f0f0', 
	  					width: 270}}>
					<Hint options={hintArray} allowTabFill>
        				<input
							
          					className="input-with-hint"
          					value={input}
		  					placeholder='digite uma palavra...'
          					onChange= {handleInputChange}//{(e) => setText(e.target.value)}
        				/>
      				</Hint>
					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
					<IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={getAnswer} >
	  					<Search />
					</IconButton>
				 </Paper>

			</Box>

			<Footer></Footer>

			</header>		
		</div>
	)
}

export default Home;
